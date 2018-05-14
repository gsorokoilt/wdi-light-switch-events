


document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM fully loaded and parsed");
  var status = document.querySelector(".status");
  status.innerHTML = 'this worked';
});

var lightSwitch = document.querySelector(".switch")
lightSwitch.addEventListener("click", function(event){
  lightSwitch.classList.toggle('on');
  var status = document.querySelector(".status");
  var body = document.querySelector("body");
  if (lightSwitch.classList.contains('on')) {
      body.classList.remove("dark")
      body.classList.add("light")
      status.innerHTML = "Hey,it's bright in here!"
  } else {
      body.classList.remove('light');
      body.classList.add("dark")
      status.innerHTML = "Hey,lights are off!"
  }
});
