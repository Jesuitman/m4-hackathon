import { useState } from "react";
import './Form.css'
import cat1 from "../Media/cat1.m4a"
import cat2 from "../Media/cat2.m4a"
import cat3 from "../Media/cat3.m4a"
import cat4 from "../Media/cat4.m4a"
import cat5 from "../Media/cat5.m4a"
import Button from "../Button/Button.js";


function Form({ fetchReviews, newState, setFontSize, fontSize }) {
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [restaurantName, setRestaurantName] = useState("")
    
    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
        "Connecticut", "Florida", "Georgia", "Hawaii", 
        "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
        "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
        "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming", "This isn't a state", "Are you frustrated yet?"
    ];

    const audioFiles = [cat1, cat2, cat3, cat4, cat5];

    function getRandomState() {
        const randomIndex = Math.floor(Math.random() * states.length);
        return states[randomIndex];
    }

    function handleStateClick() {
        const randomState = getRandomState();
        setState(randomState);
        playSongsSequentially();
    }

    // Function to play songs sequentially
    function playSongsSequentially() {
        audioFiles.forEach((audioFile, index) => {
            setTimeout(() => {
                const audio = new Audio(audioFile);
                audio.play();
            }, (index + 1) * 2000); // Start each song 2 seconds after the previous one
        });
    }

    function submitForm(event) {
        event.preventDefault()
        fetchReviews(city, state, restaurantName);
        // Clear input fields after submission
        setCity("");
        setRestaurantName("");
    }

    return (
        <form onSubmit={submitForm}>
            <input
                type='text'
                placeholder='City'
                name='city'
                value={city}
                style={{fontSize: `${fontSize}px`}}
                onChange={event => setCity(event.target.value)}
                onClick={() => {
                  setFontSize(fontSize + 20);
                  playSongsSequentially();}} // Play song when clicked
            />

            <input
                type='text'
                placeholder='State'
                name='state'
                value={state}
                style={{fontSize: `${fontSize}px`}}
                onClick={() => {
                  setFontSize(fontSize + 20);
                  handleStateClick();}} // Changed to onClick event
                readOnly // Added to prevent manual typing
            />

            <input
                type='text'
                placeholder='Restaurant Name'
                name='restaurantName'
                value={restaurantName}
                style={{fontSize: `${fontSize}px`}}
                onChange={event => setRestaurantName(event.target.value)}
                onClick={() => {
                  setFontSize(fontSize + 20);
                  playSongsSequentially();}} // Play song when clicked
            />


        
            <button type="submit" onClick={newState}>Add a New State</button>

            <Button type={"submit"} setFontSize={setFontSize} fontSize={fontSize}/>

        </form>
    )
}

export default Form;