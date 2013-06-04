// This file uses the reveal JS library for the modal
// instead of my custom built modal

initialize()

// initialize functions
function initialize(){
  addJquery()
  addRevealCSS()
  addCustomCSS()
}

// Add JQuery if it doesn't already exist
function addJquery(){
  if (typeof JQuery === "undefined") {
    var done = false
    var jqueryScript = document.createElement('script')
    // jqueryScript.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'
    jqueryScript.src = '/Users/ryan/Desktop/bookmarklet/js/jquery.js'
    jqueryScript.onload = jqueryScript.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
        done = true
        addRevealJS()
      }
    }
    document.getElementsByTagName('head')[0].appendChild(jqueryScript)
  }
  else {
    addRevealJS()
  }
}

// Add reveal CSS
function addRevealCSS(){
  var revealCss=document.createElement('link')
  revealCss.rel="stylesheet"
  revealCss.href='/Users/ryan/Desktop/bookmarklet/css/reveal.css'
  document.getElementsByTagName('head')[0].appendChild(revealCss)
}

// Add reveal JS
function addRevealJS(){
  var done = false
  var revealJS = document.createElement('script')
  revealJS.src = '/Users/ryan/Desktop/bookmarklet/js/jquery.reveal.js'
  revealJS.onload = revealJS.onreadystatechange = function(){
    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
      done = true
      runModal()
    }
  }
  document.getElementsByTagName('head')[0].appendChild(revealJS)
}

// Add custom CSS
function addCustomCSS() {
  var myCss=document.createElement('link')
  myCss.rel='stylesheet'
  myCss.href='/Users/ryan/Desktop/bookmarklet/css/custom.css'
  document.getElementsByTagName('head')[0].appendChild(myCss)
}

function runModal(){
  var div = document.createElement("div")
  var html = ''
  html += '<h1>Yay! A Modal!!</h1>'
  html += '<a class="close-reveal-modal">&#215;</a>'
  div.id = 'theModal'
  div.className = 'reveal-modal'
  div.innerHTML = html
  // div.attr('data-reveal-id', 'm')
  document.body.insertBefore(div, document.body.firstChild)
  $('#theModal').reveal()
}

//// The google way to insert script tags and link tags
//// used because some webpages do not have a <head> element
// var s = document.getElementsByTagName('script')[0];
// s.parentNode.insertBefore(yourNewElement, s);
