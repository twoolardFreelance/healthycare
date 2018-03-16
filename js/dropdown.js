$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

function newPage(num) {
var url=new Array();
url[0]="restrictions.html";
url[1]="content.html";
url[2]="contactus.html";
url[3]="tycontactus.html";
window.location=url[num];``
};

$(".chosen-select").chosen()
