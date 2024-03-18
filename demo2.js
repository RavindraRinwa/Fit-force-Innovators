// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”



// let ask = (question, yes, no) =>{
//     confirm(question) ? yes() : no();
//   }
  
//   ask(
//     "Do you agree ?",
//     () => alert("Your agreed."),
//     () => alert("Your canceled the exection.")
//   );
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });