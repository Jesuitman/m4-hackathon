import { useState } from "react";
import Reviews from "../Reviews/Reviews"
import "./App.css"
import Form from "../Form/Form";


function App(){

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
          <Form fetchReviews={fetchReviews} newState={newState} />
      {showMessage && (
        <div className="card-delaware">
          <h1 className="valid-state-text">Uh Oh Partner! Delaware is NOT a God Dang Valid State!!</h1>
          <p>Well, let me tell ya somethin' 'bout Delaware. Them folks down there, they drive like they got all day! It's like they think they own the road or somethin'. Here in Jersey, we got places to be, and we ain't wastin' no time in the left lane doin' the speed limit. If you ain't doin' at least 80 in a 65, you're just holdin' up traffic! And don't even get me started on them roads. They're a mess, I tell ya. Potholes everywhere, and the traffic lights seem to be outta whack half the time. Plus, it's always either too hot or too cold down there. Ain't no in-between! And good luck findin' a decent job – seems like everyone's strugglin' to make ends meet. Crime rates are through the roof, too. You gotta watch your back at all times. And the pollution? It's like they don't even care 'bout the environment down there. Schools ain't much better – overcrowded classrooms and not enough resources for the kids. And don't even get me started on the politicians – bunch of crooks if you ask me. Delaware might be small, but it's got its fair share of problems. Ain't no wonder why folks ain't flockin' down there to live!</p>
          <img src="https://thumbs.dreamstime.com/z/elderly-man-cowboy-hat-17204491.jpg?ct=jpeg" alt="Card" />
        </div>
      )}
          <Reviews reviews={reviews} />
        </main>
      )
}

export default App
