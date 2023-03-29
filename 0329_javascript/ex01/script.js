window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const loginForm = document.getElementById("loginForm");
  const validateForm = function (form) {
    if (form["userID"].value == "") {
      alert("userID Empty");
      return false;
    }
    if (form["userPassword"].value == "") {
      alert("userPassword Empty");
      return false;
    }
  };
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (validateForm(event.target) == false) {
      return;
    }

    const userID = event.target["userID"].value;
    const userPassword = event.target["userPassword"].value;
    let user = null;
    try {
      user = await doLogin(userID, userPassword);
      console.log(user);
      loginSuccess(user);
    } catch (e) {
      alert(e);
      return;
    }
    try {
      const items = await getCartItems(user.userId, user.cartId);
      displayItems(items);
    } catch (e) {
      alert(e);
    }
  });
});
function loginSuccess(user) {
  const loginWrapper = document.getElementById("login-wrapper");
  loginWrapper.setAttribute("style", "display:none;");
  const loginSuccess = document.getElementById("login-success");
  loginSuccess.setAttribute("style", "display:block");

  const loginUserId = document.getElementById("login-userId");
  const loginUserName = document.getElementById("login-userName");
  const loginCartId = document.getElementById("login-cartId");

  loginUserId.innerText = user.userId;
  loginUserName.innerText = user.userName;
  loginCartId.innerText = user.cartId;
}

function displayItems(items) {
  const cartTable = document.getElementById("table");
  const body = cartTable.getElementsByTagName("tbody")[0];
  const intl = new Intl.NumberFormat();

  for (const item of items) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    td1.innerText = item.productId;
    td2.innerText = item.name;
    td3.innerText = intl.format(item.price);
    td4.innerText = intl.format(item.amount);
    td5.innerText = intl.format(item.totalPrice);
    tr.append(td1, td2, td3, td4, td5);
    body.append(tr);
  }
}
async function doLogin(userId, userPassword) {
  const url = "http://133.186.144.236:8100/api/users/login";
  const data = {
    userId: userId,
    userPassword: userPassword,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const user = await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("login Error");
    }
    return response.json();
  });
  return user;
}
async function getCartItems(userId, cartId) {
  const url = "http://133.186.144.236:8100/api/nhnmart/shopping-cart/" + cartId;
  const options = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "X-USER-ID": userId,
    },
  };
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  } else throw new Error("ERROR");
}
