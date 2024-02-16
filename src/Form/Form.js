import { useState } from "react";
import './Form.css'
import Button from "../Button/Button.js";

const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming", "This isn't a state", "Are you frustrated yet?"
];

function Form({ fetchReviews }) {
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [restaurantName, setRestaurantName] = useState("")

    function submitForm(event) {
        event.preventDefault()
        fetchReviews(city, state, restaurantName);
        setCity("");
        setRestaurantName("");
    }

    function getRandomState() {
        const randomIndex = Math.floor(Math.random() * states.length);
        return states[randomIndex];
    }

    function handleStateClick() {
        const randomState = getRandomState();
        setState(randomState);
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
                onClick={handleStateClick} 
                readOnly 
            />

            <input
                type='text'
                placeholder='Restaurant Name'
                name='restaurantName'
                value={restaurantName}
                onChange={event => setRestaurantName(event.target.value)}
            />

            <Button type="submit" />
        </form>
    )
}

export default Form