window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const loginForm = document.getElementById("loginForm");

  function loginValidate(form) {
    if (form["userID"].value.trim() == "") {
      alert("아이디가 공백입니다.");
      form["userID"].focus();
      return false;
    }
    if (form["userPassword"].value.trim() == "") {
      alert("비밀번호가 공백입니다.");
      form["userPassword"].focus();

      return false;
    }

    console.log("SUCCESS");
    return true;
  }
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (loginValidate(event.target) == false) {
      return;
    }
    console.log(event.target);
    const userId = event.target["userID"].value;
    const userPassword = event.target["userPassword"].value;
    console.log(userId);
    console.log(userPassword);

    doLogin(userId, userPassword)
      .then((res) => {
        const loginWrapper = document.getElementById("login-wrapper");
        loginWrapper.setAttribute("style", "display:none;");
        const loginSuccess = document.getElementById("login-success");
        loginSuccess.setAttribute("style", "display:block;");

        const login_userId = document.getElementById("login-userId");
        login_userId.innerText = res.userId;

        const login_userName = document.getElementById("login-userName");
        login_userName.innerText = res.userName;

        const login_cartId = document.getElementById("login-cartId");
        login_cartId.innerText = res.cartId;
        return res;
      })
      .catch((err) => {
        alert(err);
      })
      .then((user) => {
        return showTable(user.userId, user.cartId);
      })
      .catch((err) => {
        alert(err);
        throw new Error("err");
      })
      .then((res) => {
        const table = document.getElementById("table");
        const body = document.getElementsByTagName("tbody")[0];
        console.log(body);
        for (const item of res) {
          const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          const td2 = document.createElement("td");
          const td3 = document.createElement("td");
          const td4 = document.createElement("td");
          const td5 = document.createElement("td");

          td1.innerText = item.productId;
          td2.innerText = item.name;
          td3.innerText = item.price;
          td4.innerText = item.amount;
          td5.innerText = item.totalPrice;
          tr.append(td1, td2, td3, td4, td5);
          body.append(tr);
          console.log(body);
        }
      });
  });
});
function doLogin(userId, userPassword) {
  const promise = new Promise((resolve, reject) => {
    const url = "http://133.186.144.236:8100/api/users/login";
    const method = "POST";
    const xml = new XMLHttpRequest();
    const user = {
      userId: userId,
      userPassword: userPassword,
    };

    xml.addEventListener("load", function () {
      if (this.status == 200) {
        resolve(this.response);
        console.log(this.response);
      } else {
        reject(new Error("login api error"));
      }
    });
    xml.addEventListener("error", function () {
      alert("NETWORK ERROR");
    });
    const userJson = JSON.stringify(user);
    console.log(userJson);
    xml.open(method, url);
    xml.setRequestHeader("Content-type", "application/json");
    xml.responseType = "json";
    xml.send(userJson);
  });
  console.log(promise);
  return promise;
}
function showTable(userId, cartId) {
  console.log(userId, cartId);
  const promise = new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();
    const url =
      "http://133.186.144.236:8100/api/nhnmart/shopping-cart/" + cartId;
    xml.addEventListener("load", function () {
      if (this.status == 200) {
        resolve(this.response);
      } else reject(this.response);
    });
    xml.open("GET", url);
    xml.setRequestHeader("content-type", "application/json");
    xml.setRequestHeader("X-USER-ID", userId);
    xml.responseType = "json";
    xml.send("");
  });
  console.log(promise);
  return promise;
}
