import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import "./App.sass";

function Detail() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/dogs/${id}`)
      .then((res) => res.json())
      .then((data) => setDog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!dog) return <p>Loading...</p>;

  return (
    <>
      <div className="dogDetail">
        <img src={dog.image} alt={dog.breed} />
      </div>
      <div className="dogText">
        <h1>{dog.breed}</h1>
        <p>
          {" "}
          <img src="/public/location.svg" alt="" /> {dog.location}
        </p>
        <span>
          <p className="petBreed">
            <button>
              <img src="/public/pawprint.svg" alt="" />
            </button>
            {dog.breed}
          </p>

          <p className="petSex">
            <button>
              <img src="/public/sex 1.svg" alt="" />
            </button>
            {dog.gender}
          </p>
        </span>
        <p className="longDescription">{dog.long_description}</p>
        <button className="backButton" onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default Detail;
