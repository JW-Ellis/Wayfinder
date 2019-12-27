  // Total Stars
  const starsTotal = 5;

  // Run getRatings and setImage when DOM loads
  document.addEventListener('DOMContentLoaded', () => {
      getRating(); 
      setImage(); 
  });

 // Get ratings
 function getRating() {

      // Get rating of trail 
      const rating = document.querySelector('.number-rating').innerHTML;

      // Get percentage
      const starPercentage = (rating / starsTotal) * 100;

      // Round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      // Set width of stars-inner to percentage
      document.querySelector('.stars-inner').style.width = starPercentageRounded;

      
  }

//Set trail summary image
function setImage() {

    //Get ascent count
    const ascent = document.querySelector('.trail-ascent').innerHTML; 
    
    //compare ascent height and set image
    switch(true) {
        case (ascent > 5000):
            document.querySelector('#trail-picture').src='canyon.jpg'; 
            document.querySelector('#picture-summary').innerHTML = "Big Canyon";
            break; 
        case (ascent > 4000):
            document.querySelector('#trail-picture').src='sidu.jpg'; 
            document.querySelector('#picture-summary').innerHTML = "Not the real bridge";
            break;
        case (ascent > 3000):
            document.querySelector('#trail-picture').src='burj.jpg'; 
            document.querySelector('#picture-summary').innerHTML = "Here burj is";
            break;
        case (ascent > 2000):
            document.querySelector('#trail-picture').src='cntower.jpg'; 
            document.querySelector('#picture-summary').innerHTML = "Canada tower";
            break;
        case (ascent > 1000):
            document.querySelector('#trail-picture').src='eiffel.jpg'; 
            document.querySelector('#picture-summary').innerHTML = "Checkin Eiffel";
            break;
        default:
            document.querySelector('#trail-picture').src='giza.jpg';
            document.querySelector('#picture-summary').innerHTML = "This is Giza style"; 
    }
}




  
 