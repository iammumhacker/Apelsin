 const backCash = document.getElementById('back__money');
 const backDate = document.getElementById('back__date');
 const backCashLine = document.getElementById('back__money__line');
 const timeLoan = document.getElementById('time_loan');

 const slideValue = document.querySelector("#span");
      const inputSlider = document.querySelector("#input");
      inputSlider.oninput = (()=>{
        let value = inputSlider.value;
        slideValue.textContent = value;
        slideValue.style.left = (value/2) + "%";
        slideValue.classList.add("right");
        backCash.innerHTML = Number(inputSlider.value) + (Number(inputSlider.value/100)*Number(inputSlider1.value));
        backCashLine.innerHTML = Number(inputSlider.value);
      });
      inputSlider.onblur = (()=>{
        slideValue.classList.remove("right");
      });


slideValue.innerHTML = inputSlider.value;

 const slideValue1 = document.querySelector("#span1");
      const inputSlider1 = document.querySelector("#input1");
      inputSlider1.oninput = (()=>{
        let value1 = inputSlider1.value;
        slideValue1.textContent = value1;
        slideValue1.style.left = (value1/2) + "%";
        slideValue1.classList.add("right1");
        let dateNow = new Date();
        dateNow.setDate(dateNow.getDate() + Number(inputSlider1.value));
        backDate.innerHTML = formatDate(dateNow);
        backCash.innerHTML = Number(inputSlider.value) + (Number(inputSlider.value/100)*Number(inputSlider1.value));
      });
      inputSlider1.onblur = (()=>{
        slideValue1.classList.remove("right1");
      });

slideValue1.innerHTML = inputSlider1.value;

backCash.innerHTML = Number(inputSlider.value) + (Number(inputSlider.value/100)*Number(inputSlider1.value));
backCashLine.innerHTML = Number(inputSlider.value);

let dateNow = new Date();

dateNow.setDate(dateNow.getDate() + Number(inputSlider1.value));
backDate.innerHTML = formatDate(dateNow);


let a = [dateNow.toTimeString().slice(0,2)];
let b = [dateNow.toTimeString().slice(3,5)];
b = Number(b) + 10;
if (b > 60) {
  b = b - 60;
  a++;

  if (b < 10) { 
    b = '0' + b ;
  }
  else { 
    b = b - 60;
  }

}

timeLoan.innerHTML = (String(a) + ':' + b);

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}


function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
