import { useState, useEffect } from "react";
import { Link } from "react-router";

function ApiDogs() {
  const [dogs, setDogs] = useState([]);
  const [likedDogs, setLikedDogs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("likedDogs")) || [];
    setLikedDogs(saved);
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/dogs")
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((err) => console.error(err));
  }, []);

  const isLiked = (id) => likedDogs.some((dog) => dog.id === id);

  const toggleLike = (dog) => {
    let updatedLikes;

    if (isLiked(dog.id)) {
      updatedLikes = likedDogs.filter((d) => d.id !== dog.id);
    } else {
      updatedLikes = [...likedDogs, dog];
    }

    setLikedDogs(updatedLikes);
    localStorage.setItem("likedDogs", JSON.stringify(updatedLikes));
  };

  return (
    <div className="dogCard">
      {dogs.map((p) => (
        <li key={p.id}>
          <Link to={`/detail/${p.id}`} className="dogList">
            <img src={p.image} alt={p.breed} />
            <span className="dogInfo">
              <h2>{p.breed}</h2>
              <p className="locationP">
                <img className="location" src="/public/location.svg" alt="" />
                {p.location}
              </p>
              <p className="shortDescription">{p.short_description}</p>
            </span>
          </Link>

          <button
            className="likedButton"
            onClick={(e) => {
              e.preventDefault();
              toggleLike(p);
            }}
          >
            <img
              className="likedImage"
              src={isLiked(p.id) ? "/heart-filled.svg" : "/heart.svg"}
              alt="Liked Icon"
            />
          </button>
        </li>
      ))}
    </div>
  );
}

export default ApiDogs;
