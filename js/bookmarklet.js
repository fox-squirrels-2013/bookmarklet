// Add this as a bookmark in your browser
// It calls to local main.js which adds and runs all scripts/css

javascript:(function(){
	myScript=document.createElement('script');
	myScript.setAttribute('src', '/Users/ryan/Desktop/bookmarklet/js/main.js');
	document.getElementsByTagName('head')[0].appendChild(myScript);
})();
