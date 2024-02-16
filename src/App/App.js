import { useState } from "react";
import Reviews from "../Reviews/Reviews"
import "./App.css"
import Form from "../Form/Form";


function App(){
    const [reviews, setReviews] = useState([])

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
          <Form fetchReviews={fetchReviews} />
          <Reviews reviews={reviews} />
        </main>
      )
}

export default App
