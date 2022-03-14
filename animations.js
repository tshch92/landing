document.addEventListener("DOMContentLoaded", function (event) {

  var top = [];
  window.onscroll = function () {
    "use strict";
    var scrolltop = document.documentElement.scrollTop + window.outerHeight;
    var hideme = document.getElementsByClassName("hideme");


    for (var i = 0; i < hideme.length; i++) {
      top[i] = hideme[i].offsetTop + 0.3*window.innerHeight;

      if (scrolltop > top[i]) {
        console.log(top[i]);
        hideme[i].style.opacity = "1";
      } /* else {
        hideme[i].style.opacity = "0";
      } */

    }
  };
});
