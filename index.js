var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", switchImage);
  function switchImage() {
    const img = this.querySelector("img");
    if (img.src.includes("icon-plus.svg")) {
      img.src = "./assets/images/icon-minus.svg";
    } else {
      img.src = "./assets/images/icon-plus.svg";
    }
  }
}
// for (let index = 0; index < minusButton.length; index += 1) {
//   minusButton[index].addEventListener("click", switchImage);
//   function switchImage() {
//     const img = this.querySelector("img");
//     if (img.src.includes("icon-plus.svg")) {
//       img.src = "./assets/images/icon-minus.svg";
//     } else {
//       img.src = "./assets/images/icon-plus.svg";
//     }
//   }
// }

// for (let ii = 0; ii < keystrokes.length; ii += 1) {
//   keystrokes[ii].addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//       // Inversăm imaginea în funcție de imaginea curentă
//       if (minusButton.src.includes("icon-plus.svg")) {
//         minusButton.src = "./assets/images/icon-minus.svg";
//       } else {
//         minusButton.src = "./assets/images/icon-plus.svg";
//       }
//     }
//   });
// }
// for (let index = 0; index < minusButton.length; index += 1) {
//   minusButton[index].addEventListener("click", switchImage);
//   class switchImage {
//     constructor() {
//       this.src = "/assets/images/icon-minus.svg";
//     }
//   }
// }
//  let minusButton = document.querySelectorAll(".question-button-extent");

// function changeToMinus() {

//   for(let index=0; index < minusButton.length; index+=1){
//     minusButton.src = "/assets/images/icon-minus.svg";
//     console.log("ok")
//   }

// }

// // questionSelector1.addEventListener("click", changeToMinus);
// // questionSelector2.addEventListener("click", changeToMinus);
// // questionSelector3.addEventListener("click", changeToMinus);
// questionSelector4.addEventListener("click", changeToMinus);
