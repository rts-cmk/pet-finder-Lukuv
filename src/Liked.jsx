import { useEffect, useState } from "react";
import Footer from "./footer";
import { Link } from "react-router";

function Liked() {
  const [likedDogs, setLikedDogs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("likedDogs")) || [];
    setLikedDogs(saved);
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
    <div>
      <ul className="dogCard">
        {likedDogs.length === 0 && <p>Du har ikke liket nogen hunde endnu</p>}

        {likedDogs.map((dog) => (
          <li key={dog.id}>
            <Link to={`/detail/${dog.id}`} className="dogList">
              <img src={dog.image} alt={dog.breed} />
              <span className="dogInfo">
                <h2>{dog.breed}</h2>
                <p className="locationP">
                  <img className="location" src="/public/location.svg" alt="" />
                  {dog.location}
                </p>
                <p className="shortDescription">{dog.short_description}</p>
              </span>
            </Link>

            <button
              className="likedButton"
              onClick={(e) => {
                e.preventDefault();
                toggleLike(dog);
              }}
            >
              <img
                className="likedImage"
                src={isLiked(dog.id) ? "/heart-filled.svg" : "/heart.svg"}
                alt="Liked Icon"
              />
            </button>
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default Liked;
