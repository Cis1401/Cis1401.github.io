// console.log("Exercise #2")

// Write a JavaScript program to count and display the items of a dropdown list, in an alert window.

// showDropDownLenght = () => {
//   const selectDropwDown = document.getElementById('dropdown-list');
  
//   alert(`The lenght of the list inside the dropdown is: ${selectDropwDown.options.length}`);
// }

/*
  Write a Javascript function where you take 3 parameters. 
  These parameters would represent the element you want to create. 
  You have the parameters id, element, and, text. 
  Parameter id would represent the id of the element created, element would represent the element you are creating (p, button, h1, etc.), 
  and text being the text displayed in the element created. 
  The said element would then be added to the body. 
*/

// createNewElement = (id, element, text) => {
//   const elementCreated = document.createElement(element);

//   elementCreated.id = id;

//   elementCreated.innerHTML = text;

//   document.body.appendChild(elementCreated);
// }

// createNewElement('btn-id', 'button', 'click me!');


/*
IF NUMBER IN BUTTON 1 IS DIVISIBLE BY 3 SHOW 'FIZZ' IN BUTTON2
IF NUMBER IN BUTTON 1 IS DIVISIBLE BY 5 SHOW 'BUZZ' IN BUTTON2
IF NUMBER IN BUTTON 1 IS DIVISIBLE BY 3 AND 5 SHOW 'FIZZBUZZ' IN BUTTON2
*/


// const btn1 = document.getElementById('button-1');
// const btn2 = document.getElementById('button-2');

// btn1.onclick = () => {
//   let num = +btn1.textContent;
//   num++;


//   if (num % 5 === 0 && num % 3 === 0) {
//     btn2.textContent = 'FizzBuzz';
//     btn2.style.color = 'purple';
//   } else if (num % 5 === 0) {
//     btn2.textContent = 'Buzz';
//     btn2.style.color = 'blue';
//   } else if (num % 3 === 0) {
//     btn2.textContent = 'Fizz';
//     btn2.style.color = 'red';
//   } else {
//     btn2.textContent = 'Neutral';
//     btn2.style.color = 'black';
//   }


//   btn1.textContent = num.toString();
// }


// btn1.addEventListener('click', () => {
//   let num = +btn1.textContent;
//   num++;


//   if (num % 5 === 0 && num % 3 === 0) {
//     btn2.textContent = 'FizzBuzz';
//     btn2.style.color = 'purple';
//   } else if (num % 5 === 0) {
//     btn2.textContent = 'Buzz';
//     btn2.style.color = 'blue';
//   } else if (num % 3 === 0) {
//     btn2.textContent = 'Fizz';
//     btn2.style.color = 'red';
//   } else {
//     btn2.textContent = 'Neutral';
//     btn2.style.color = 'black';
//   }


//   btn1.textContent = num.toString();

// });


// increment = () => {
//   let num = +btn1.textContent;
//   num++;


//   if (num % 5 === 0 && num % 3 === 0) {
//     btn2.textContent = 'FizzBuzz';
//     btn2.style.color = 'purple';
//   } else if (num % 5 === 0) {
//     btn2.textContent = 'Buzz';
//     btn2.style.color = 'blue';
//   } else if (num % 3 === 0) {
//     btn2.textContent = 'Fizz';
//     btn2.style.color = 'red';
//   } else {
//     btn2.textContent = 'Neutral';
//     btn2.style.color = 'black';
//   }


//   btn1.textContent = num.toString();
// }

// const btn1 = document.getElementById('button-1');
// const btn2 = document.getElementById('button-2');
// const radiobtn0 = document.getElementById('radiobutton-0');
// const radiobtn1 = document.getElementById('radiobutton-1');
// const radiobtn2 = document.getElementById('radiobutton-2');
//   btn1.onclick = () => radiobtn0.checked = true; radiobtn1.checked = true; radiobtn2.checked = true;
//   btn2.onclick = () => radiobtn0.checked = false; radiobtn1.checked = false; radiobtn2.checked = false;
// checkAll = () => {
//   const radio = document.getElementsByName('button-1');
//   for (i = 0; i < radio.length; i++)
//     radio[i].checked = true;
// }

const passwordField = document.getElementById('password-field');
const confirmPasswordfield = document.getElementById('confirm-password-field');

passwordValidate = () => {
  if (passwordField.value !== confirmPasswordfield.value) {
    confirmPasswordfield.setCustomValidity('Password Does not Match');
  } else if (!passwordField.value || !confirmPasswordfield.value) {
    alert('Fields cannot be empty');
  } 
  else {
    alert('You have entered the correct password match');
  }
}