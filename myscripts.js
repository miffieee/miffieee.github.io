//Created by Alisha Zhang Feb 3, 2018

// Dropdown menu function
function dropDownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropimg')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Top & bottom gradient bars only appear when scrolling is detected
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

window.onscroll = function() {
  $('#upblackbar, #downblackbar').fadeIn('slow');
};

$(window).scrollEnd(function(){
  $('#upblackbar, #downblackbar').fadeOut('slow');
}, 1000);

