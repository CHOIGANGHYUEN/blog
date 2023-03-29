window.addEventListener("DOMContentLoaded", function () {
  const userID = document.getElementById("userID");
  const userPassword = this.document.getElementById("userPassword");
  const cartID = this.document.getElementById("cartID");
  const loginForm = this.document.getElementById("loginForm");
  const tbody = document.querySelectorAll("tbody")[0];
  const list = getProductsList();

  function loginSuccess(user) {
    const p = document.createElement("p");
    p.innerHTML = user.userId;

    tbody.append(p);
    console.log(user);
  }
  // this.alert("잘 로드됩니다.")

  tbody.hidden = "true";
  console.log(loginForm);
  function doLogin(userID, userPassword) {
    console.log(userID, userPassword);
    const xhr = new XMLHttpRequest();
    const url = "http://133.186.144.236:8100/api/users/login";
    const user = {
      userId: userID,
      userPassword: userPassword,
    };
    const userJson = JSON.stringify(user);
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.responseType = "json";
    console.log(xhr);
    xhr.send(userJson);
    console.log(userJson);
    xhr.addEventListener("load", function () {
      if (this.status == 200) {
        console.log("ok :" + this.response);
        const user = this.response;
        loginSuccess(user);
      } else console.log("no" + this.responseText);
    });
  }

  const loginFormValidate = function (event) {
    if (loginForm["userID"].value == "") {
      alert("유저 아이디 공백");
      loginForm.focus();
      return false;
    }
    if (loginForm["userPassword"].value == "") {
      alert("유저 비밀번호 공백");
      loginForm.focus();
      return false;
    }
    if (loginForm["userID"].value != userCheckAPI()[0].userID) {
      console.log(userCheckAPI()[0].userID);
      alert("유저 아이디 오류");
      return false;
    }
    if (loginForm["userPassword"].value != userCheckAPI()[0].userPassword) {
      alert("유저 비밀번호 오류");
      return false;
    }
    return true;
  };
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
    if (loginFormValidate(event.target) == false) {
      tbody.hidden = true;
      loginForm.hidden = false;
      return;
    } else {
      console.log("check");
      tbody.hidden = false;
      loginForm.hidden = true;

      doLogin(userID.value, userPassword.value);
      return;
    }
  });
  function userCheckAPI() {
    return (response = [
      {
        userID: "nhnacademy",
        userPassword: "1234",
      },
    ]);
  }

  for (i = 0; i < list.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = list[i].productID;
    console.log(td1.innerHTML);
    const td2 = document.createElement("td");
    td2.innerText = list[i].productName;
    const td3 = document.createElement("td");
    td3.innerText = list[i].price;
    const td4 = document.createElement("td");
    td4.innerText = list[i].count;
    const td5 = document.createElement("td");
    td5.innerText = list[i].total;
    tr.append(td1, td2, td3, td4, td5);
    tbody.append(tr);
  }
  function getProductsList() {
    return (response = [
      {
        productID: 1,
        productName: "양파",
        price: 1200,
        count: 3,
        total: 3600,
      },
      {
        productID: 2,
        productName: "사과",
        price: 1300,
        count: 3,
        total: 3900,
      },
      {
        productID: 3,
        productName: "마늘",
        price: 1000,
        count: 2,
        total: 2000,
      },
    ]);
  }
});
