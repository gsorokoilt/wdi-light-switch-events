

document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM fully loaded and parsed");
  var status =   document.querySelector(".status");
  status.innerHTML = 'this worked'
  });


document.addEventListener("click", function(event){

    var status = document.querySelector(".switch");
    status.innerHTML = 'clicked'
  });
