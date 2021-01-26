// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transationArea = document.getElementById("transation-area");
  transationArea.style.display = "block";
});

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmmount = document.getElementById("depositAmmount").value;
  const depositNumber = parseFloat(depositAmmount);

  updateSpanText("curretDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);
  document.getElementById("depositAmmount").value = "";

  /*
  deposit
  const curretDeposit = document.getElementById("curretDeposit").innerText;
  const curretDepositNumber = parseFloat(curretDeposit);
  const totalDeposit = depositNumber + curretDepositNumber;
  document.getElementById("curretDeposit").innerText = totalDeposit;
  */

  /*
  deposit + balance
  document.getElementById("curretDeposit").innerText = totalDeposit;
  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById("currentBalance").innerText = totalBalance;
*/
});

// Withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const addWithdrawAmmount = document.getElementById("addWithdrawAmmount")
    .value;
  const withdrawNumber = parseFloat(addWithdrawAmmount);

  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);
  document.getElementById("addWithdrawAmmount").value = "";
});

function updateSpanText(id, depositNumber) {
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById(id).innerText = totalBalance;
}
