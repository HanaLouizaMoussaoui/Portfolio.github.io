document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Hana";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(typeText, 150); // Adjust speed of typing
    }
  }

  typeText();
  const projectsList = document.getElementById("projects-list");

  window.addEventListener("keydown", (e) => {
  
    if (e.key === "ArrowRight") {
      projectsList.scrollLeft += 300; // Move right by 300px
    } else if (e.key === "ArrowLeft") {
      projectsList.scrollBy({ left: -300, behavior: "smooth" });
    }
  });
  

});


// Script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
const starContainer = document.createElement("div");
starContainer.classList.add("stars");
document.body.appendChild(starContainer);

const numStars = 100; // Number of stars
for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  star.style.animationDelay = Math.random() * 5 + "s";
  starContainer.appendChild(star);
}


let pages = ["home", "about", "projects", "contact"]
let currentPage = 0

document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0 ) { // Scrolling down
    if (currentPage + 1 < pages.length){
      currentPage++
      document.getElementById(pages[currentPage]).scrollIntoView({
        behavior: "smooth",
      });
    }

  } else if (event.deltaY < 0) { // Scrolling up
    if (currentPage - 1 >= 0){
      currentPage--
      document.getElementById(pages[currentPage]).scrollIntoView({
        behavior: "smooth",
      });
    }
  }
});

function goToList2 (){
  let list1 = document.getElementById("projects-list-1")
  let list2 = document.getElementById("projects-list-2")
 list1.style.display = "none"
  list2.style.display = "flex"
}
function goToList1 (){
  let list1 = document.getElementById("projects-list-1")
  let list2 = document.getElementById("projects-list-2")
 list1.style.display = "flex"
  list2.style.display = "none"
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // Current scroll position
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
  
  const scrollFraction = scrollTop / scrollHeight; // Fraction of scroll completed (0 to 1)
  
  // Calculate colors dynamically
  const startColor = [31, 29, 65]; // RGB for darkblue
  const endColor = [211, 126, 217]; // RGB for pink
  const currentColor = startColor.map((start, i) => 
    Math.round(start + (endColor[i] - start) * scrollFraction)
  );
  
  // Apply as background color
  document.body.style.background = `rgb(${currentColor.join(",")})`;
});

function scrollToSection(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
}

