import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

function Profile() {
  return (
    <div>
      <div className="container" style={{ height: "80vh", overflow: "hidden" }}>
        <img
          src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Allujain's Bakery"
          style={{ width: "90vw", height: "100vh" }}
        />
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <div>
        <div className="container">
          <h1>Allujain's Bakery</h1>
        </div>
        <div className="container">
          <p>This is a Danish Bakery</p>
        </div>
      </div>
      <Profile />
    </div>
  );
}
