const flightScheduleApi = (function () {
  "use strict";

  //운행스케줄 api
  const api = new Object();

  async function getAirlineList() {
    const url =
      "https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getAirmanList?serviceKey=vK%2FuB4s%2BdYsiQzn8D91SkHDsgJnPLZSxI8gjuVkTXlUWrDYGK1JVYeASeG6JkG0oRpfRpBSit2B5rHUn7xS9XQ%3D%3D&_type=json";
    const options = {
      method: "get",
    };

    try {
      const airlines = await fetch(url, options);
      const json = await airlines.json();
      // console.log("getAirLineList()=>", json);
      return json;
    } catch (e) {
      alert("airlines API ERROR", e);
    }
  }

  api.getAirportList = async function () {
    const url =
      "https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getArprtList?serviceKey=vK%2FuB4s%2BdYsiQzn8D91SkHDsgJnPLZSxI8gjuVkTXlUWrDYGK1JVYeASeG6JkG0oRpfRpBSit2B5rHUn7xS9XQ%3D%3D&_type=json";

    const options = {
      method: "get",
    };
    try {
      const airports = await fetch(url, options);
      return (await airports.json()).response.body.items.item;
    } catch (e) {
      alert("airports API ERROR", e);
    }
  };

  /*
   * @param {*} depAirportId  출발공항 아이디
   * @param {*} arrAirportId  도착공항 아이디
   * @param {*} depPlandTime  출발시간 : 20230321
   * @param {*} airlineId     항공사 아이디
   */
  //getFlightSchedule("NAARKJJ","NAARKPC","20201202","AAR");

  async function getFlightSchedule(
    depAirportId,
    arrAirportId,
    depPlandTime,
    airlineId
  ) {
    const serviceKey =
      "vK%2FuB4s%2BdYsiQzn8D91SkHDsgJnPLZSxI8gjuVkTXlUWrDYGK1JVYeASeG6JkG0oRpfRpBSit2B5rHUn7xS9XQ%3D%3D";
    depPlandTime = depPlandTime.replaceAll("-", "");
    const url = `https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&_type=json&depAirportId=${depAirportId}&arrAirportId=${arrAirportId}&depPlandTime=${depPlandTime}&airlineId=${airlineId}`;
    const options = {
      method: "get",
    };
    try {
      const flightScheduleInfo = await fetch(url, options);
      const json = await flightScheduleInfo.json();
      // console.log("flightScheduleInfo()=>", json);
      if (json.response.body.totalCount == 0) return null;
      return json;
    } catch (e) {
      alert("airports API ERROR", e);
      console.log(e);
    }
  }

  api.search = async function (depAirportId, arrAirportId, depPlandTime) {
    const airlineList = await getAirlineList();
    const airlineListData = airlineList.response.body.items.item;
    //조회로직 실행
    depPlandTime = depPlandTime.replaceAll("-", "");
    const promiseList = [];

    for (const airline of airlineListData) {
      const schedule = await getFlightSchedule(
        depAirportId,
        arrAirportId,
        depPlandTime,
        airline.airlineId
      );
      if (schedule != null) promiseList.push(schedule);
      // //TODO#4 항공사별 운항정보를 얻어서 하나의 리스트로 리턴
    }
    return Promise.all(promiseList);
  };

  return api;
})();

window.addEventListener("DOMContentLoaded", async function () {
  "use strict";

  const departureId = document.getElementById("departureId");
  const arrivalId = document.getElementById("arrivalId");

  //비행날짜
  const plandDate = document.getElementById("plandDate");
  //TODO#5 기본 날짜를 오늘로 설정
  plandDate.value = new Date().toISOString().substring(0, 10);

  //FIXME #6 공항리스트 호출.
  const airportList = await flightScheduleApi.getAirportList();

  for (const item of airportList) {
    setSelectOption(departureId, item);
    setSelectOption(arrivalId, item);
    //TODO#7  selectBox (departureId,arrivalId)에 공항리스트 할당
  }

  const validateForm = function (form) {
    const departureId = form["departureId"];
    const arrivalId = form["arrivalId"];
    const departureIdValue =
      departureId.options[departureId.selectedIndex].value;
    const arrivalIdValue = arrivalId.options[arrivalId.selectedIndex].value;
    if (departureIdValue == arrivalIdValue) {
      alert("출발공항과 도착공항은 같을수 없습니다.");
      return false;
    } //TODO#8 form validation
    // departureId, arrivalId 선택여부 체크
    // 출발(공항) == 도착(공항) retun false

    return true;
  };

  const findForm = document.getElementById("find-form");

  findForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (validateForm(event.target) == false) {
      return;
    }

    //schedule 조회
    try {
      const depPlandTime = document.getElementById("plandDate").value;
      const items = await flightScheduleApi.search(
        departureId.value,
        arrivalId.value,
        depPlandTime
      );
      console.log(items);

      searchResult(items);
    } catch (e) {
      alert(e);
    }
  });
});

function searchResult(items) {
  const scheduleTbl = document.getElementById("schedule-tbl");
  const tbody = scheduleTbl.getElementsByTagName("tbody")[0];
  while (tbody.firstChild) {
    try {
      document.querySelector("tbody>tr").remove();
    } catch (e) {
      break;
    }
  }
  for (let i = 0; i < items.length; i++) {
    const datas = items[i].response.body.items.item;
    for (const data of datas) {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.innerText = data.vihicleId;
      const td2 = document.createElement("td");
      td2.innerText = data.airlineNm;
      const td3 = document.createElement("td");
      td3.innerText = convertDate(data.depPlandTime);

      const td4 = document.createElement("td");
      td4.innerText = convertDate(data.arrPlandTime);
      const td5 = document.createElement("td");
      if (data.economyCharge == undefined) {
        td5.innerText = "0";
      } else {
        td5.innerText = data.economyCharge;
      }
      const td6 = document.createElement("td");
      if (data.prestigeCharge == undefined) {
        td6.innerText = "0";
      } else {
        td6.innerText = data.prestigeCharge;
      }

      const td7 = document.createElement("td");
      td7.innerText = data.depAirportNm;

      const td8 = document.createElement("td");
      td8.innerText = data.arrAirportNm;
      tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
      tbody.append(tr);
    }
  }
}

function convertDate(str) {
  str = str.toString();
  return (
    str.substring(0, 4) +
    "-" +
    str.substring(4, 6) +
    "-" +
    str.substring(6, 8) +
    " " +
    str.substring(8, 10) +
    ":" +
    str.substring(10, 12)
  );
}
function setSelectOption(binder, item) {
  const op = document.createElement("option");
  op.setAttribute("value", item.airportId);
  op.innerText = item.airportNm;
  binder.append(op);
}
