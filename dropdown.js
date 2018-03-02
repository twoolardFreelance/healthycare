$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

function newPage(num) {
var url=new Array();
url[0]="https://alexisbdr.github.io/healthycats/content.html";
window.location=url[num];``
}