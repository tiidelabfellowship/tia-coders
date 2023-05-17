const hallBtn = document.getElementById("hallBtn");
const decoBtn = document.getElementById("decoBtn");
const tcBtn = document.getElementById("tcBtn");
const tentsBtn = document.getElementById("tentsBtn");

// Get Image Elements
const halls = document.getElementById("halls");
const deco = document.getElementById("deco");
const tc = document.getElementById("tc");
const tents = document.getElementById("tents");

const hallHeader = document.getElementById("hall-header");
const decoHeader = document.getElementById("deco-header");
const tcHeader = document.getElementById("tc-header");
const tentsHeader = document.getElementById("tents-header");

// const hallstatusH3 = document.getElementById("hall-status-h3");
// const hallStatusP = document.getElementById("hall-status-p");
// const hallpaymenth3 = document.getElementById("hall-payment-h3")
// const hallpaymentp = document.getElementById("hall-payment-p")
// const hallcapacityh3 = document.getElementById("hall-capacity-h3")
// const hallcapacityp = document.getElementById("hall-capacity-p")

// Menu Bar
const navToggle = document.querySelector(".menu-bar");
const links = document.querySelector(".nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// Get the image element

// Set the desired width and height
var windowWidth = window.innerWidth || document.documentElement.clientWidth;

if (windowWidth >= 1000) {
  halls.style.width = "400px";
  halls.style.height = "400px";

  deco.style.width = "400px";
  deco.style.height = "400px";

  tc.style.width = "400px";
  tc.style.height = "400px";

  tents.style.width = "400px";
  tents.style.height = "400px";
} else {
  halls.style.width = "100%";
  deco.style.width = "100%";
  tc.style.width = "100%";
  tents.style.width = "100%";
}

// HALLS

// Change Text Content For all Headers
function hallsHeader() {
  if (hallHeader.textContent === "Gold Star hall") {
    return (hallHeader.textContent = "Heavenly Deco");
  } else if (hallHeader.textContent === "Heavenly Deco") {
    return (hallHeader.textContent = "Black Diamond");
  } else if (hallHeader.textContent === "Black Diamond") {
    return (hallHeader.textContent = "Elegance");
  } else {
    return (hallHeader.textContent = "Gold Star hall");
  }
}

// // For the Status h3

// function hallStatush3(){
//   if ((hallstatusH3.textContent === "STATUS")) {
//     return (hallstatusH3.textContent = "Tia Coders");
//   } else {
//     return (hallstatusH3.textContent = "STATUS");
//   }
// }
// // For the status P
// function hallStatusp(){
//   if ((hallStatusP.textContent === "Available")) {
//     return (hallStatusP.textContent = "Tia Coders");
//   } else {
//     return (hallStatusP.textContent = "Available");
//   }
// }

// // Payment
// function hallPaymentH3(){
//   if ((hallpaymenth3.textContent === "PAYMENT")) {
//     return (hallpaymenth3.textContent = "Tia Coders");
//   } else {
//     return (hallpaymenth3.textContent = "PAYMENT");
//   }
// }
// function hallPaymentP(){
//   if ((hallpaymentp.textContent === "30% Advance")) {
//     return (hallpaymentp.textContent = "Tia Coders");
//   } else {
//     return (hallpaymentp.textContent = "30% Advance");
//   }
// }

// // Capacity
// function hallCapcityH3(){
//   if ((hallcapacityh3.textContent === "CAPACITY")) {
//     return (hallcapacityh3.textContent = "Tia Coders");
//   } else {
//     return (hallcapacityh3.textContent = "300 seats");
//   }
// }
// function hallCapacityP(){
//   if ((hallcapacityp.textContent === "300 seats")) {
//     return (hallcapacityp.textContent = "Tia Coders");
//   } else {
//     return (hallcapacityp.textContent = "300 seats");
//   }
// }

// Define an array of Hall Images
let hallImages = [
  "./images/hall2.jpg",
  "./images/hall3.jpg",
  "./images/hall4.jpg",
];

// Set an index to track the current image
let hallIndex = 0;

// Function to change the image source
function changeHall() {
  // Increment the index
  hallIndex++;

  // Reset the index if it exceeds the array length
  if (hallIndex >= hallImages.length) {
    hallIndex = 0;
  } else {
    // Set the image source to the new index
    halls.src = hallImages[0];
  }

  // Update the image source
  halls.src = hallImages[hallIndex];
}

hallBtn.addEventListener("click", function () {
  changeHall();
  hallsHeader();
  // hallStatush3();
  // hallStatusp();
  // hallPaymentH3();
  // hallPaymentP();
  // hallCapcityH3();
  // hallCapacityP();
});








// DECO
function decoHead() {
  if (decoHeader.textContent === "Gold Star Decorations") {
    return (decoHeader.textContent = "Heavenly Aura");
  } else if (decoHeader.textContent === "Heavenly Aura") {
    return (decoHeader.textContent = "Diamond");
  } else if (decoHeader.textContent === "Diamond") {
    return (decoHeader.textContent = "Emerald");
  } else {
    return (decoHeader.textContent = "Gold Star Decorations");
  }
}

// Define an array of Deco Images
let decoImages = [
  "./images/stardeco1.svg",
  "./images/stardeco2.svg",
  "./images/stardeco3.svg",
  "./images/stardeco4.svg",
];

// Set an index to track the current image
let decoIndex = 0;

// Function to change the image source
function changeDeco() {
  // Increment the index
  decoIndex++;

  // Reset the index if it exceeds the array length
  if (decoIndex >= decoImages.length) {
    decoIndex = 0;
  }
  // Update the image source
  deco.src = decoImages[decoIndex];
}

decoBtn.addEventListener("click", function () {
  changeDeco();
  decoHead();
});











// TABLES AND CHAIRS
function tcHead() {
  if (tcHeader.textContent === "Queen colby Tables and chairs") {
    return (tcHeader.textContent = "Dawn");
  } else if (tcHeader.textContent === "Dawn") {
    return (tcHeader.textContent = "Ruby");
  } else if (tcHeader.textContent === "Ruby") {
    return (tcHeader.textContent = "Pride's Touch");
  } else {
    return (tcHeader.textContent = "Queen colby Tables and chairs");
  }
}

// Define an array of Table and Chairs Images
let tcImages = [
  "./images/T&C1.svg",
  "./images/T&C2.svg",
  "./images/T&C3.svg",
  "./images/T&C4.svg",
];

// Set an index to track the current image
let tcIndex = 0;

// Function to change the image source
function changeTc() {
  // Increment the index
  tcIndex++;

  // Reset the index if it exceeds the array length
  if (tcIndex >= tcImages.length) {
    tcIndex = 0;
  }
  // Update the image source
  tc.src = tcImages[tcIndex];
}

tcBtn.addEventListener("click", function () {
  changeTc();
  tcHead();
});












// TENTS
function tentsHead() {
  if (tentsHeader.textContent === "Averino Tent") {
    return (tentsHeader.textContent = "Aura");
  } else if (tentsHeader.textContent === "Aura") {
    return (tentsHeader.textContent = "Sapphire");
  } else if (tentsHeader.textContent === "Sapphire") {
    return (tentsHeader.textContent = "Topaz");
  } else {
    return (tentsHeader.textContent = "Averino Tent");
  }
}
// Define an array of Table and Chairs Images
let tentsImages = [
  "./images/Tent1.svg",
  "./images/Tent2.svg",
  "./images/Tent3.svg",
  "./images/Tent4.svg",
];

// Set an index to track the current image
let tentsIndex = 0;

// Function to change the image source
function changeTents() {
  // Increment the index
  tentsIndex++;

  // Reset the index if it exceeds the array length
  if (tentsIndex >= tentsImages.length) {
    tentsIndex = 0;
  }
  // Update the image source
  tents.src = tentsImages[tentsIndex];
}

tentsBtn.addEventListener("click", function () {
  changeTents();
  tentsHead();
});
