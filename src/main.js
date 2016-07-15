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
