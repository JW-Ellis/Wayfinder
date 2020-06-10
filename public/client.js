// Total Stars
const starsTotal = 5;

// Run getRatings and setImage when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  getRating();
  setImage();
});

// Get ratings
function getRating() {
  // Get rating of trail
  const rating = document.querySelector(".number-rating").innerHTML;

  // Get percentage
  const starPercentage = (rating / starsTotal) * 100;

  // Round to nearest 10
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  // Set width of stars-inner to percentage
  document.querySelector(".stars-inner").style.width = starPercentageRounded;
}

// Set trail summary image
function setImage() {
  // Get ascent count
  const ascent = document.querySelector(".trail-ascent").innerHTML;

  // compare ascent height and set image
  switch (true) {
    case ascent > 5000:
      document.querySelector("#trail-picture").src = "canyon.png";
      document.querySelector("#picture-summary").innerHTML =
        "From top to bottom the Grand Canyon has an average depth of approximately 5,000 feet.";
      break;
    case ascent > 4000:
      document.querySelector("#trail-picture").src = "sidu.png";
      document.querySelector("#picture-summary").innerHTML =
        "The Sidu river bridge in Enshi City, China is approximately 4,000 feet long!";
      break;
    case ascent > 3000:
      document.querySelector("#trail-picture").src = "burj.png";
      document.querySelector("#picture-summary").innerHTML =
        "Your ascent on this trail will simulate climbing the tallest building in the world. Topping out at 2,717 feet, the Burj Khalifa in Dubai, UAE is currently the tallest structure ever built.  ";
      break;
    case ascent > 2000:
      document.querySelector("#trail-picture").src = "cntower.png";
      document.querySelector("#picture-summary").innerHTML =
        "Built in 1976, the CN Tower in Ontario, Canada is approximately 1,815 feet tall! Based off of the ascent of this trail, your journey would take you to the top of this tower";
      break;
    case ascent > 1000:
      document.querySelector("#trail-picture").src = "eiffel.png";
      document.querySelector("#picture-summary").innerHTML =
        "The Eiffel Tower stands at 1,063 feet tall - you will nearly climb the height of the tower on this trail!";
      break;
    case ascent > 500:
      document.querySelector("#trail-picture").src = "giza.png";
      document.querySelector("#picture-summary").innerHTML =
        "The Great Pyramids of Giza stands at 455 feet tall - comparatively similar to your trail ascent.";
    default:
      document.querySelector("#trail-picture").src = "home.png";
      document.querySelector("#picture-summary").innerHTML =
        "The average building story is 14 ft tall.";
  }
}
