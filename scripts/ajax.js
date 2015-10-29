function loadPage(){
  $.ajax({
    url: 'main.html',
    datatype:"html",
    method: "POST"
  })
  .done(function(data) {
    $('div.content').html(data);
    tryInitalizeCssFromCookie();
  });
}

function navigateTo(content_nmr){
  switch(content_nmr){
    case 0:
        linkname='main.html';
        break;
    case 1:
        linkname='canvas.html';
        break;
    case 2:
        linkname='misc.html';
        break;
    case 3:
        linkname='someOtherPage.html';
        break;
  }
         
  $.ajax({
    url: linkname,
    datatype:"html",
    method: "POST"
  })
  .done(function(data) {
    $('div.content').html(data);
  });

}