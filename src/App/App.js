import { useState, useEffect } from "react";
import Reviews from "../Reviews/Reviews"
import "./App.css"
import Form from "../Form/Form";
import frog from "../Media/Frog.mp3"
import happyPotter from "../Media/HappyPotter.mp3"

function App(){

  function graduallyIncreaseVolume(audio) {
    let currentVolume = 0; 
    const maxVolume = 1; 
    const volumeIncrement = 0.01; 
    const intervalTime = 5000;
  
    audio.volume = currentVolume; 
  
    const increaseVolume = () => {
      if (currentVolume < maxVolume) {
        currentVolume += volumeIncrement;
        audio.volume = currentVolume;
      } else {
        clearInterval(interval); 
      }
    };
  
    const interval = setInterval(increaseVolume, intervalTime);
  }

  useEffect(() => {
    const audio1 = new Audio(frog);
    const audio2 = new Audio(happyPotter)
    audio1.loop = true;
    audio2.play()
    audio1.play();
    graduallyIncreaseVolume(audio1)
}, []);

  function newState() {
    setShowMessage(true);
  }

    const [reviews, setReviews] = useState([])
    const [showMessage, setShowMessage] = useState(false);

    function fetchReviews(city, state, restaurantName) {
        // Here you will perform the fetch call to your API
        // Use city, state, and restaurantName to fetch reviews
        // Once you receive the reviews, update the state
        const fetchedReviews = []; // Example: Dummy data, replace with actual fetch
        setReviews(fetchedReviews);
    }

    return(
        <main className='App'>
          <h1>IdeaBox</h1>
          <Form fetchReviews={fetchReviews} newState={newState} graduallyIncreaseVolume={graduallyIncreaseVolume} />
      {showMessage && (
        <div className="card-delaware">
          <h1 className="valid-state-text">Uh Oh Partner! Delaware is NOT a God Dang Valid State!!</h1>
          <p>Well, let me tell ya somethin' 'bout Delaware. Them folks down there, they drive like they got all day! It's like they think they own the road or somethin'. Here in Jersey, we got places to be, and we ain't wastin' no time in the left lane doin' the speed limit. If you ain't doin' at least 80 in a 65, you're just holdin' up traffic! And don't even get me started on them roads. They're a mess, I tell ya. Potholes everywhere, and the traffic lights seem to be outta whack half the time. And don't even get me started on the rest of it. Them roads are like a twisted maze designed by a madman, and the weather's as unpredictable as a chicken in a fox den. It's either hotter than a pepper sprout or colder than a polar bear's toenail, ain't no middle ground! And talk about no fishin', it's like tryin' to catch a catfish in a dry creek bed. Wilmington ain't got no decent spots for fishin' neither, it's like they drained the whole darn river! Ain't no good fish to be fishin' for miles around! Ain't no Sam's Club neither, it's like tryin' to find a haystack without a needle. And blame it all on them knucklehead politicians, they couldn't organize a barn dance if their lives depended on it. And to top it all off, my ex-wife is in Delware. The first state might be small, but it's got more issues than a hound dog's got fleas.</p>
          <img src="https://thumbs.dreamstime.com/z/elderly-man-cowboy-hat-17204491.jpg?ct=jpeg" alt="Card" />
          <h3>Idaho has been omitted from state consideration.</h3>
        </div>
      )}
          <Reviews reviews={reviews} />
        </main>
      )
}

export default App
