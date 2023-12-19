// // search-box open close js code
// let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
// // let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
// ------slider-----

// -----top modal----
// const slider = document.querySelector('.slider1');

// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   e.target.matches('.next') && slider.append(items[0])
//   e.target.matches('.prev') && slider.prepend(items[items.length-1]);
// }

// document.addEventListener('click',activate,false);
// popup
// window.addEventListener("load", function(){
//   this.setTimeout(
//     function open(event){
//       document.querySelector(".popup").style.display = "block";
//     },
//     1000
//   )
// });




// document.querySelector("#close").addEventListener("click" , function(){
//   document.querySelector(".popup").style.display = "none";

// });
// // Function to get geolocation
// function getLocation() {
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else {
//       document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// // Function to display geolocation
// function showPosition(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   document.getElementById("location").innerHTML = "Your location: " + latitude + ", " + longitude;
// }

// // Function to handle geolocation errors
// function showError(error) {
//   switch (error.code) {
//       case error.PERMISSION_DENIED:
//           document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
//           break;
//       case error.POSITION_UNAVAILABLE:
//           document.getElementById("location").innerHTML = "Location information is unavailable.";
//           break;
//       case error.TIMEOUT:
//           document.getElementById("location").innerHTML = "The request to get user location timed out.";
//           break;
//       case error.UNKNOWN_ERROR:
//           document.getElementById("location").innerHTML = "An unknown error occurred.";
//           break;
//   }
// }

// // Function to display current date and time
// function showDate() {
//   const currentDate = new Date();
//   const formattedDate = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
//   document.getElementById("date").innerHTML = "Current date and time: " + formattedDate;
// }

// // Get geolocation when the page loads
// getLocation();

// // Display current date and time
// showDate();

//    // Function to get geolocation
//    function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// // Function to display geolocation
// function showPosition(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     document.getElementById("location").innerHTML = "Your location: " + latitude + ", " + longitude;
// }

// // Function to handle geolocation errors
// function showError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
//             break;
//         case error.POSITION_UNAVAILABLE:
//             document.getElementById("location").innerHTML = "Location information is unavailable.";
//             break;
//         case error.TIMEOUT:
//             document.getElementById("location").innerHTML = "The request to get user location timed out.";
//             break;
//         case error.UNKNOWN_ERROR:
//             document.getElementById("location").innerHTML = "An unknown error occurred.";
//             break;
//     }
// }

// // Function to display current date and time
// function showDate() {
//     const currentDate = new Date();
//     const formattedDate = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
//     document.getElementById("date").innerHTML = "Current date and time: " + formattedDate;
// }

// // Get geolocation when the page loads
// getLocation();

// // Display current date and time
// showDate();