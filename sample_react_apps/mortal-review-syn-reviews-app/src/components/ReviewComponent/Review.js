import "./Review.css";

const Review = ({ name, avatar_url, company, designation, review }) => {
  return (
    <div className="review-container">
      <img src={avatar_url} alt={name}></img>
      <h1>{name}</h1>
      <h2>{`${designation}@${company}`}</h2>
      <p>{review}</p>
    </div>
  );
};

export { Review as ReviewComponent };
