javascript:(function(){
	myScript=document.createElement('script');
	myScript.setAttribute('src', '/Users/ryan/Desktop/bookmarklet/test_script.js');
	myCss=document.createElement('link');
	myCss.rel="stylesheet";
	myCss.href='/Users/ryan/Desktop/bookmarklet/test_css.css';
	myCss.type='text/css';
	document.getElementsByTagName('head')[0].appendChild(myScript);
	document.getElementsByTagName('head')[0].appendChild(myCss); 
})();
