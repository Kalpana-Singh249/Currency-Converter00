const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies") // for fetching the all different country currency ;
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) { // displaying all the fetched  country currency
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][1]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][1]}</option>`;
  }
}

btn.addEventListener("click", () => { // event listener on button, this will get triggered when user will click on CONVERT button
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) { // check if base currency is not equals to target currency then only we can convert
    convert(currency1, currency2, value);
  } else {
    alert("Choose Diffrent Currency"); // otherwise show error message
  }
});

function convert(currency1, currency2, value) { // this is actual method to convert currency11 to currency2... The value is provided for currency1 by the user
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}` // fetch the result by making this api call
  )
    .then((val) => val.json()) // value that api will return, will be in JSON format
    .then((val) => { // extract this value
      console.log(Object.values(val.rates)[0]); 
      ans.value = Object.values(val.rates)[0];
    });
}
