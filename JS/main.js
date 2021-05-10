   var knowMore = document.querySelector(".knowMore");
   var line1 = document.querySelector("#line1");
   var line2 = document.querySelector("#line2");
   var line3 = document.querySelector("#line3")
   var line4 = document.querySelector("#line4")
   var line5 = document.querySelector("#line5")
   var line6 = document.querySelector("#line6")
   var line7 = document.querySelector("#line7")
   var imgaeSection = document.querySelector(".imgaeSection");



   line1.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(0)";


   });


   line2.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-100%)";
    

   });


   line3.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-200%)";


   });


   line4.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-300%)";
      

   });


   line5.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-400%)";
     

   });


   line6.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-500%)";
     

   });


   line7.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-600%)";


   });



   line8.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-700%)";


   });


   line9.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-800%)";


   });

   line10.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-900%)";


   });


   line11.addEventListener("click", function () {

       imgaeSection.style.transform = "translateX(-1000%)";


   });




   // navigator //////////////////

   var navList = document.querySelector("#nav__list")
   var hamburger = document.querySelector(".hamburger")

   hamburger.addEventListener("click", function () {

       navList.classList.toggle("showMenu");

   });