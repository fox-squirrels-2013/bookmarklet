// Add JQuery if it doesn't already exist
// If Jquery doesn't exist, function waits for it to load before executing runModal()
if (typeof JQuery === "undefined") {
  var done = false
  var jqueryScript = document.createElement('script')
  // jqueryScript.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'
  jqueryScript.src = '/Users/ryan/Desktop/bookmarklet/jquery.js' // Local copy for train rides
  jqueryScript.onload = jqueryScript.onreadystatechange = function(){
    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
      done = true
      runModal()
    }
  }
  pageScript = document.getElementsByTagName('head')[0]
  pageScript.appendChild(jqueryScript)
}
else {
  runModal()
}

function runModal(){
  console.log(location.href)
  console.log(this)
  var iframe_url = "http://instacalc.com/gadget/bookmarklet.html"
  var div = document.createElement("div");
  var str = "";
    str += "<div id='tracker' valign='top' width='570' cellspacing='0' cellpadding='0'><tr><td width ='550' height='80'>";

    str += "<iframe frameborder='0' scrolling='no' name='instacalc_bookmarklet_iframe' id='instacalc_bookmarklet_iframe' src='" + iframe_url + "' width='550px' height='75px' style='textalign:right; backgroundColor: white;'></iframe>";
    str += "</td><td onClick='toggleItem(\"instacalc_bookmarklet\");' style='background: #FFDDDD;' title='click to close window' valign='top' align='center' width='20px'>";
    str += "<a href='javascript:void(0);' style='width:100%; text-align: middle; color: #FF0000; font-family: Arial;'>x</a>";
    str += "</td></tr></div>";
  div.innerHTML = str;
  div.id = "instacalc_bookmarklet";
  document.body.insertBefore(div, document.body.firstChild);
}
