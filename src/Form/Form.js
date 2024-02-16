import { useState } from "react";
import './Form.css'

function Form({ fetchReviews }) {
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [restaurantName, setRestaurantName] = useState("")

    function submitForm(event) {
        event.preventDefault()
        fetchReviews(city, state, restaurantName);
        // Clear input fields after submission
        setCity("");
        setState("");
        setRestaurantName("");
    }

    return (
        <form onSubmit={submitForm}>
            <input
                type='text'
                placeholder='City'
                name='city'
                value={city}
                onChange={event => setCity(event.target.value)}
            />

            <input
                type='text'
                placeholder='State'
                name='state'
                value={state}
                onChange={event => setState(event.target.value)}
            />

            <input
                type='text'
                placeholder='Restaurant Name'
                name='restaurantName'
                value={restaurantName}
                onChange={event => setRestaurantName(event.target.value)}
            />

            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form
