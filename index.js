class Bank {
  constructor(balance = 600) {
    this.balance = balance;
  }

  deposit(value) {
    this.balance = this.balance + parseInt(value);
  }

  withdraw(value) {
    this.balance = this.balance - parseInt(value);
  }

  showBalance() {
    return this.balance;
  }
}

const bank = new Bank();

document.getElementById("button").addEventListener("click", function () {
  let error = true;
  let err = document.getElementById("err");
  let input = document.getElementById("input").value;
  let operator = document.getElementById("choice").value;

  switch (operator) {
    case "deposit":
      try {
        if (input <= 0) {
          throw new Error("Value cannot be a zero or negative");
        } else if (input === "") {
          throw new Error("Value cannot be empty");
        } else if (isNaN(input)) {
          throw new Error("Value must be a number");
        } else {
          document.getElementById("balance").innerHTML = "";
          bank.deposit(input);
          error = false;
        }
      } catch (error) {
        err.innerHTML = error;
      } finally {
        if (!error) {
          alert("Deposit Successful");
        } else {
          alert("Deposit Failed");
        }
      }
      break;

    case "withdraw":
      try {
        if (input <= 0) {
          throw new Error("Value cannot be a zero or negative");
        } else if (input === "") {
          throw new Error("Value cannot be empty");
        } else if (isNaN(input)) {
          throw new Error("Value must be a number");
        } else if (input > bank.showBalance()) {
          throw new Error("Value must be a lower than your balance");
        } else {
          document.getElementById("balance").innerHTML = "";
          bank.withdraw(input);
          error = false;
        }
      } catch (error) {
        err.innerHTML = error;
      } finally {
        if (!error) {
          alert("Withdraw Successful");
        } else {
          alert("Withdraw Failed");
        }
      }
      break;

    case "check":
      document.getElementById("balance").innerHTML = `$${bank.showBalance()}`;
      break;

    default:
      err.innerHTML = "Invalid Choice";
      break;
  }
});
