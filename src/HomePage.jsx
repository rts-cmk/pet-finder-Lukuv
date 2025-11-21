import ApiDogs from "./ApiDogs";
import Footer from "./footer";
import Header from "./header";

function HomePage() {
  fetch("http://localhost:4000/dogs")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <Header />
      <ul className="petListSection">
        <li>Cats</li>
        <li>Dogs</li>
        <li>Birds</li>
        <li>Other</li>
      </ul>
      <ApiDogs />
      <Footer />
    </div>
  );
}

export default HomePage;
