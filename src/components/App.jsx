// create your App component here
import { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchDog() {
    try {
      setLoading(true);

      const res = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      const data = await res.json();

      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    } finally {
      setLoading(false);
    }
  }

  // fetch on page load
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Random Dog Generator</h1>

      {/* Loading message */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={dogImage}
          alt="A Random Dog"
          style={{ width: "300px" }}
        />
      )}

      {/* Only ONE button allowed */}
      <button onClick={fetchDog}>
        Get New Dog
      </button>
    </div>
  );
}

export default App;
