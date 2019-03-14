const input = document.getElementById('input');

let inputVal = '';

input.addEventListener('change', function(event) {
  inputVal = input.value;
});

input.addEventListener('blur', function() {
  if (inputVal === 'cursor') {
    input.style.border = '2px solid green';
  } else {
    input.style.border = '2px solid red';
  }
})


// keydown keyup keypress
document.addEventListener('keydown', function(event) {
});
document.addEventListener('keyup', function(event) {
});
document.addEventListener('keypress', function(event) {
});


document.getElementById('button')
  .addEventListener('click', function(event) {
  });
