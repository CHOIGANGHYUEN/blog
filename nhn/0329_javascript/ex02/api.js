window.addEventListener("DOMContentLoaded", async () => {
  "use strict";
  const departureId = document.getElementById("departureId");
  const arrivalId = document.getElementById("arrivalId");
  const findForm = document.getElementById("find-form");
  try {
    const airportData = await getAirport();
    const airlinesData = await getAirlineList();
    for (const item of airportData) {
      setSelectOption(departureId, item);
      setSelectOption(arrivalId, item);
    }
  } catch (e) {
    console.log(e);
  }

  findForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const departureId = event.target["departureId"].value;
    const arrivalId = event.target["arrivalId"].value;
    const plandDate = event.target["plandDate"].value;
    const schedule = await getAirlineInfoBySelectOption(
      departureId,
      arrivalId,
      plandDate
    );
    console.log(schedule);
    if (schedule != null) {
      const tbody = document.getElementById("tbody");

      for (const data of schedule) {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerText = data.vihicleId;
        const td2 = document.createElement("td");
        td2.innerText = data.airlineNm;

        const td3 = document.createElement("td");
        td3.innerText = data.depPlandTime;

        const td4 = document.createElement("td");
        td4.innerText = data.arrPlandTime;

        const td5 = document.createElement("td");
        td5.innerText = "null";

        const td6 = document.createElement("td");
        td6.innerText = "null";

        const td7 = document.createElement("td");
        td7.innerText = data.depAirportNm;

        const td8 = document.createElement("td");
        td8.innerText = data.arrAirportNm;
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);
      }

      //   for (const data of schedule) {

      //   }
      //   tbody.append();
    } else {
      alert("해당 경로엔 여행일자가 존재하지 않습니다.");
    }
  });
});
async function getAirlineList() {
  const url =
    "https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getAirmanList?serviceKey=vK%2FuB4s%2BdYsiQzn8D91SkHDsgJnPLZSxI8gjuVkTXlUWrDYGK1JVYeASeG6JkG0oRpfRpBSit2B5rHUn7xS9XQ%3D%3D&_type=json";
  const options = {
    method: "get",
  };

  try {
    const airlines = await fetch(url, options);
    return (await airlines.json()).response.body.items.item;
  } catch (e) {
    alert("airlines API ERROR", e);
  }
}
async function getAirport() {
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
}

async function getAirlineInfoBySelectOption(departureId, arrivalId, plandDate) {
  let temp;
  if (typeof plandDate == "string") {
    temp = plandDate.replaceAll("-", "");
  }

  console.log(departureId, arrivalId, temp);
  const serviceKey =
    "vK%2FuB4s%2BdYsiQzn8D91SkHDsgJnPLZSxI8gjuVkTXlUWrDYGK1JVYeASeG6JkG0oRpfRpBSit2B5rHUn7xS9XQ%3D%3D";

  const url = `https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&_type=json&depAirportId=${departureId}&arrAirportId=${arrivalId}&depPlandTime=${temp}`;
  const options = {
    method: "get",
  };
  console.log(url);
  try {
    const getAirlineInfo = await fetch(url, options);
    //console.log(await getAirlineInfo.json());
    return (await getAirlineInfo.json()).response.body.items.item;
  } catch (e) {
    alert("airports API ERROR", e);
    console.log(e);
  }
}
