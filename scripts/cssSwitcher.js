function tryInitalizeCssFromCookie() {
  
  var allCookies = Cookies.get();
    
  var cssStyle = Cookies.get('cssStyle');
  if (cssStyle !== undefined) {
    $("link[rel=stylesheet]").attr({href : cssStyle});
  }
}

function switchCss(cssFileNumber) {
  var cssFileName = "";
  
  switch (cssFileNumber) {
    case 0:
      cssFileName='fancy.css';
      break;
    case 1:
      cssFileName='boring.css';
      break;
  }
  
  $("link[rel=stylesheet]").attr({href : cssFileName});
  
  Cookies.set('cssStyle', cssFileName, { expires: 14 });
}
