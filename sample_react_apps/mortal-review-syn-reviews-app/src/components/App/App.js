import "./App.css";
import { ReviewComponent as Review } from "../ReviewComponent/Review";
import { useEffect, useState } from "react";

//network handler function --- gives us the data
let networkHandler = async (
  callback_success_function,
  callback_error_function
) => {
  try {
    let raw_response = await fetch(
      "https://raw.githubusercontent.com/german-wings/ReactSandbox/master/review_app_data.json"
    );
    let response_data = await raw_response.text();
    response_data = JSON.parse(response_data);
    callback_success_function(response_data);
  } catch (error) {
    callback_error_function(error);
  }
};

//review_container_component

const ReviewContainer = ({ reviews }) => {
  //states
  let [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="review-container">
      <h1>Reviews {`${currentIndex + 1} of ${reviews.length}`}</h1>
      <Review {...reviews[currentIndex]}></Review>
      <button
        onClick={() => {
          currentIndex >= reviews.length - 1
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1);
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          currentIndex === 0
            ? setCurrentIndex(reviews.length - 1)
            : setCurrentIndex(currentIndex - 1);
        }}
      >
        Previous
      </button>
    </div>
  );
};

// main function
function App() {
  //states
  let [reviews, setReviews] = useState([]);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

  //effects
  //this effect runs for the first time only once
  useEffect(() => {
    networkHandler(setReviews, setError);
  }, []);
  //this effect changes the loading state when we have the data
  useEffect(() => {
    reviews.length > 0 ? setLoading(false) : setLoading(true);
  }, [reviews]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  } else {
    return (
      <div className="app-container">
        <ReviewContainer reviews={reviews}></ReviewContainer>
      </div>
    );
  }
}

export default App;
