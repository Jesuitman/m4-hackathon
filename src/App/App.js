
import { useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews"
import "./App.css"
import Form from "../Form/Form";
import frog from "../Media/Frog.mp3"
import happyPotter from "../Media/HappyPotter.mp3"

function App() {

  const [reviews, setReviews] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);
  const [fontSize, setFontSize] = useState(36);
  const [colors, setColors] = useState({
    fieldColor: '#FFFFFF',
    buttonColor: 'FFFFFF'
  });

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
    document.body.style.backgroundImage = "url('https://static.wikia.nocookie.net/clownopedia/images/2/26/Uhoo1-1-.jpg')";
    document.body.style.backgroundRepeat = "repeat";
  }

  const getRandoColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const updateColors = () => {
    setColors({
      fieldColorBG1: getRandoColor(),
      fieldColorBG2: getRandoColor(),
      fieldColorBG3: getRandoColor(),
      buttonColorSB1: getRandoColor(),
      buttonColorSB2: getRandoColor()
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateColors();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function cardTwoFunction() {
    setCardTwo(true)
    setShowMessage(false);
    document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2006cc3-9fe6-4105-9880-7563a1e5dc80/dfbuup9-4aaef9c0-06bd-4b09-86d3-9f89c5463e12.png/v1/fill/w_962,h_541/gangster_spongebob_vs_gangster_bugs_bunny__by_fightingiscool_dfbuup9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQxIiwicGF0aCI6IlwvZlwvZjIwMDZjYzMtOWZlNi00MTA1LTk4ODAtNzU2M2ExZTVkYzgwXC9kZmJ1dXA5LTRhYWVmOWMwLTA2YmQtNGIwOS04NmQzLTlmODljNTQ2M2UxMi5wbmciLCJ3aWR0aCI6Ijw9OTYyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ie6rtFKkJHhvP6cSnTSe08GJcSTRH5Am8Lr9VX4DDEA')";
    document.body.style.backgroundRepeat = "repeat";
  }


    const [reviews, setReviews] = useState([])
    const [showMessage, setShowMessage] = useState(false);

  function cardThreeFunction() {
    setCardThree(true);
    setCardTwo(false);
    document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/f/ff/Christopher_Moltisanti.jpg')";
    document.body.style.backgroundRepeat = "repeat";
  }
  function fetchReviews(city, state, restaurantName) {
    // Here you will perform the fetch call to your API
    // Use city, state, and restaurantName to fetch reviews
    // Once you receive the reviews, update the state
    const fetchedReviews = []; // Example: Dummy data, replace with actual fetch
    setReviews(fetchedReviews);
  }

  return (
    <main className='App'>

      <h1 className="title">Restaurant Review: re-View</h1>
      <Form fetchReviews={fetchReviews} newState={newState} setFontSize={setFontSize} fontSize={fontSize} colors={colors} />
      {
        showMessage && (
          <div className="card-delaware">
            <h1 className="valid-state-text">Uh Oh Partner! Delaware is NOT a God Dang Valid State!!</h1>
            <p>Well, let me tell ya somethin' 'bout Delaware. Them folks down there, they drive like they got all day! It's like they think they own the road or somethin'. Here in Jersey, we got places to be, and we ain't wastin' no time in the left lane doin' the speed limit. If you ain't doin' at least 80 in a 65, you're just holdin' up traffic! And don't even get me started on them roads. They're a mess, I tell ya. Potholes everywhere, and the traffic lights seem to be outta whack half the time. And don't even get me started on the rest of it. Them roads are like a twisted maze designed by a madman, and the weather's as unpredictable as a chicken in a fox den. It's either hotter than a pepper sprout or colder than a polar bear's toenail, ain't no middle ground! And talk about no fishin', it's like tryin' to catch a catfish in a dry creek bed. Wilmington ain't got no decent spots for fishin' neither, it's like they drained the whole darn river! Ain't no good fish to be fishin' for miles around! Ain't no Sam's Club neither, it's like tryin' to find a haystack without a needle. And blame it all on them knucklehead politicians, they couldn't organize a barn dance if their lives depended on it. And to top it all off, my ex-wife is in Delware. The first state might be small, but it's got more issues than a hound dog's got fleas.</p>
            <img src="https://thumbs.dreamstime.com/z/elderly-man-cowboy-hat-17204491.jpg?ct=jpeg" alt="Card" />
            <h3>Idaho has been omitted from state consideration.</h3>
            <button type="submit" onClick={cardTwoFunction}>Click to Remove this Card</button>
          </div>
        )
      }
      {
        cardTwo && (
          <div className="card-two">
            <h1 className="valid-card-text">WANTED: Winnie the Pooh</h1>
            <img src="https://static.wikia.nocookie.net/disney/images/0/03/Profile_-_Winnie_the_Pooh.png" alt="Pooh" />
            <h3>Description:</h3>
            <p>Delaware based gangster, subject is a small, stout bear of approximately 3 feet in height. Fur color is golden-brown with a red shirt often worn. Known for his insatiable appetite for honey. Banned from Boise, ID.</p>
            <h3>Offenses:</h3>
            <p>Suspected leader of an underground illegal honey pot smuggling ring. Subject has been implicated in numerous incidents involving the theft and distribution of honey pots from various apiaries and honey farms across state lines. Intelligence suggests involvement in a sophisticated network of honey pot smuggling, utilizing associates such as Rabbit, Piglet, and Tigger to facilitate operations.</p>
            <h3>Caution:</h3>
            <p>Subject should be considered armed with honey pots and potentially dangerous if provoked. Approach with caution and do not attempt to apprehend without proper authorization.</p>
            <h3>Reward:</h3>
            <p> A reward of up to $10,000 is being offered for information leading to the arrest and conviction of Winnie the Pooh. Contact the FBI tip line with any pertinent information.</p>
            <button type="submit" onClick={cardThreeFunction}>Click to Remove this Card</button>
          </div>
        )
      }
      {
        cardThree && (
          <div className="card-bats">
            <h1 className="bat-text">Fun Facts About Bats</h1>
            <img src="https://baseballhall.org/sites/default/files/styles/fullscreen_image_popup/public/Bat_Fisk_Carlton_1975_IL-9-2012.jpg.jpeg" alt="Card" />
            <p>"Imagine a creature that navigates the world through the dark, using a remarkable ability to emit high-pitched sounds and listen for their echoes. This creature, known as a bat, possesses wings that are uniquely adapted for flight. However, unlike birds, bats have wings that are more akin to hands, with elongated fingers connected by a thin membrane of skin, resembling an umbrella when stretched out. This membrane, called a patagium, allows bats to gracefully maneuver through the air with impressive agility. Bats are primarily nocturnal, meaning they are most active during the night. They play a crucial role in ecosystems worldwide, often serving as pollinators for various plants and as natural pest controllers by consuming insects in large quantities. Despite their association with darkness and the supernatural in some cultures, bats are fascinating creatures with diverse species found across the globe, ranging from tiny bumblebee bats to the large flying foxes with wingspans of several feet.

              And speaking of creatures of the night, let me tell you about Delaware. Just like bats, Delaware seems to thrive in the darkness, with its roads resembling dark, winding caverns that leave drivers feeling lost and disoriented. The state's infrastructure is as fragile as a bat's delicate wings, with potholes that could swallow a small car whole. And don't even get me started on the nightlife – it's about as lively as a cave inhabited solely by sleeping bats. It's no wonder why Delaware's nickname is 'The First State' - it's first in line for absolute doo doo heads!</p>
            <button type="submit" onClick={cardThreeFunction}>Click to Remove this Card</button>
            <p>Did you know that Lou Gehrig died of Lou Gehrig's disease? Pretty weird huh?</p>
          </div>

        )
      }
      <Reviews reviews={reviews} setFontSize={setFontSize} fontSize={fontSize} />
    </main >
  )
}

export default App
