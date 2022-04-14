function myFunction() {
  
    document.getElementById("myDropdown").classList.toggle("hidden");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target.matches('.dropbtn')) {
      document.getElementById("myDropdown").classList.toggle("show");
    if(event.target.matches('.dropbtn')){
       document.getElementById("myDropdown").classList.toggle("hidden");
     }
    }
  }