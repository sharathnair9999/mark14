var initialValue = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentValue = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

const submitValues = () => {
  var ip = Number(initialValue.value);
  var qty = Number(quantity.value);
  var curr = Number(currentValue.value);
  //   validateFields(ip,qty,curr)
  calculateProfitAndLoss(ip, qty, curr);
};

const outputMessage = (message, color) => {
  outputBox.innerHTML = message;
  outputBox.style.backgroundColor = color;
  outputBox.style.color = "white";
  outputBox.style.width = "300px";
  outputBox.style.marginRight = "auto";
  outputBox.style.marginTop = "1rem";
  outputBox.style.marginLeft = "auto";
  outputBox.style.padding = "1rem 2rem";
  outputBox.style.borderRadius = "1rem";
};

const calculateProfitAndLoss = (initial, quantity, current)=> {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercent = (loss / (initial * quantity)) * 100;
    message = `The loss is ${loss} and loss percentage is ${lossPercent}%`;
    outputMessage(message, "#EF4444");
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercent = (profit / (initial * quantity)) * 100;
    message = `The profit is ${profit} and profit percentage is ${profitPercent}%`;
    outputMessage(message, "green");
  } else {
    message = "No pain no Gain!";
    outputMessage(message, "#60A5FA");
  }
}

submitBtn.addEventListener("click", submitValues);