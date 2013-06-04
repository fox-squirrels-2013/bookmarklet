initialize()

// initialize functions
function initialize(){
  addJquery()
  addModalCss()
  addCustomCss()
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
        addJqueryUi()
      }
    }
    document.getElementsByTagName('head')[0].appendChild(jqueryScript)
  }
  else {
    addJqueryUi()
  }
}

function addJqueryUi(){
  var done = false
  var jqueryUi = document.createElement('script')
  jqueryUi.src= '/Users/ryan/Desktop/bookmarklet/js/jquery_draggable.js'
  jqueryUi.onload = jqueryUi.onreadystatechange = function(){
    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
      done = true
      addModalJs()
    }
  }
  document.getElementsByTagName('head')[0].appendChild(jqueryUi)
}

// Add modal CSS
function addModalCss(){
  var modalCss=document.createElement('link')
  modalCss.rel="stylesheet"
  modalCss.href='/Users/ryan/Desktop/bookmarklet/css/modal.css'
  document.getElementsByTagName('head')[0].appendChild(modalCss)
}

// Add modal JS
function addModalJs(){
  var done = false
  var modalJs = document.createElement('script')
  modalJs.src = '/Users/ryan/Desktop/bookmarklet/js/modal.js'
  modalJs.onload = modalJs.onreadystatechange = function(){
    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")){
      done = true
      runModal()
    }
  }
  document.getElementsByTagName('head')[0].appendChild(modalJs)
}

// calls to modal.js file
function runModal(){
  Modal.init({content: 'Content goes here'})
}

//// The google way to insert script tags and link tags
//// used because some webpages do not have a <head> element
// var s = document.getElementsByTagName('script')[0];
// s.parentNode.insertBefore(yourNewElement, s);
