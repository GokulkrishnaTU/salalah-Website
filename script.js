let hamMenuIcon = document.getElementById("ham-menu");
let closeMenuIcon = document.getElementById("close-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
  closeMenuIcon.style.display = "inline-block"; // Show close-menu icon
});

closeMenuIcon.addEventListener("click", () => {
  navBar.classList.remove("active");
  hamMenuIcon.classList.remove("fa-times");
  closeMenuIcon.style.display = "none"; // Hide close-menu icon
});





var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,3000);
  
}

changeSlide();



const sectionTitleZoom = document.querySelectorAll(".section-title");
const zoomContainer = document.querySelectorAll(".swiper-zoom-container");
const swiperSlide = document.querySelectorAll(".swiper-zooms");  
   
   for (let i = 0; i < zoomContainer.length; i++) {
       zoomContainer[i].addEventListener("click", () => {
           for (let i = 0; i < swiperSlide.length; i++) {
               if (swiperSlide[i].classList.contains("swiper-slide-zoomed")) {
                   sectionTitleZoom[i].classList.add("active");
               } else {
                   sectionTitleZoom[i].classList.remove("active");
               }
           }

       })
   }





  //  document.getElementById("sendButton").addEventListener("click", function() {
  //   var email = document.getElementById("email").value;
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       alert("Email sent!");
  //     }
  //   };
  //   xhttp.open("POST", "mail.php", true);
  //   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   xhttp.send("email=" + email);
  //   xhttp.onerror = function() {
  //     alert("Error sending email.");
  //   };
  // });
  
var btn = document.getElementById('btn')
btn.addEventListener('click',function(e){
  e.preventDefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  var message = document.getElementById('message').value;
   var body ="name :"+ name + '<br/> email:'+ email +"<br/> number"+ number+"<br/> message"+ message ;

   Email.send({
    Host : "smtp.elasticemail.com",
    Username : "gokulkrishnatu11@gmail.com",
    Password : "gqgpgcdezemwyzcx",
  
    To : 'gokulkrishnatu11@gmail.com',
    From : email,
    Subject : "This is the subject",
    Body : body
  }).then(
  message => alert(message)
  );
  


})