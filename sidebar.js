
$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});

function newPage(num) {
var url=new Array();
url[0]="restrictions.html";
url[1]="content.html";
url[2]="contactus.html";
window.location=url[num];``
};


