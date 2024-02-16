import "./Reviews.css"

function Reviews({reviews}){
    const reviewItems = reviews.map((review, index) => (
        <div className="review" key={index}>
            <h2>{review.restaurantName}</h2>
            <h3>{review.title}</h3>
            <p>{review.description}</p>
        </div>
    ));

    return (
        <div className="reviews-container">
            {reviewItems}
        </div>
    )
}

export default Reviews
