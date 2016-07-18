console.log('JS 102')

// document object
document
console.dir(document)
console.dir(document.body)

// innerHTML property

// getter
document.body.innerHTML // get string of HTML
// setter
// document.body.innerHTML = "<h1>Hello</h1>" // replaces existing nodes
document.body.innerHTML += '<h1>Appended</h1>' // appends HTML

// Specific elements

document.querySelector('h1') // returns first node via CSS selector

// returns array like thing of nodes
document.querySelectorAll('h1')
document.getElementsByTagName('h1')

// grab first element
document.querySelectorAll('h1')[0]
document.getElementsByTagName('h1')[0]

// ids
document.getElementById('js') // only returns the first
document.querySelectorAll('#js') // returns all even with ids

// ids are globals
console.dir(js1)
console.dir(js2)
console.dir(js3)

// innerText
document.body.innerText // returns only text insdie the element
document.querySelector('h1').innerText = 'First H1' // replaces text

// window global object
window
window.console.log('Everything global is on the window')
window.document
window.js1

// EVENTS

document.body.addEventListener('click', function () {
  console.log('You clicked the body')
})

document.getElementsByTagName('h1')[0].addEventListener('click', function () {
  console.log('You clicked the h1')
})

var loneInput = document.getElementById('loneInput')
var loneVal = loneInput.value

console.log('loneInput value:', loneVal) // Currently empty becuase this line execuites as soon as the page loads

document.getElementById('loneButton').addEventListener('click', function () {
  console.log('You clicked the button not inside the form')
  loneVal = loneInput.value // Now not empty if input is filled in because this executes later (when the button is clicked)
  console.log('loneInput value async:', loneVal)
})

// FORM EVENTS

var formButton = document.getElementById('formButton')

formButton.addEventListener('click', function (evt) {
  console.log('You clicked the generic input button inside the form')
  // arguments[0] is an event object automatically available on all event callbacks

  evt.preventDefault() // <= prevents a form from automatically redirecting the page
})

var formSubmit = document.getElementById('formSubmit')

formSubmit.addEventListener('click', function (evt) {
  console.log('You clicked the submit input button inside the form')
  // arguments[0] is an event object automatically available on all event callbacks

  evt.preventDefault() // <= prevents a form from automatically redirecting the page
})

document.body.addEventListener('keyup', function (evt) {
  var ENTER_KEY_CODE = 13
  console.log('You pressed a key on the keyboard')

  if (evt.keyCode === ENTER_KEY_CODE) {
    console.log('You pressed the enter key on the keyboard')
    // can trigger other events from within event callbacks
    formButton.click()
  }
})

var form = document.getElementsByTagName('form')[0]

// comment out the form events above and you can simply listen to submit events,
// otherwise the preventDefault will not fire the submit event
form.addEventListener('submit', function (evt) {
  console.log('You submitted the form either via clicking any submit input, button, pressing enter')
  evt.preventDefault() // <= prevents a form from automatically redirecting the page
})
