import React, { useState } from "react";
import ListingsGrid from "./ListingCards";
import "../Styles/Listingcards.css"; // Import the CSS file
import { FaSearch } from "react-icons/fa";
import "../Styles/Home.css";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    console.log("Search button clicked"); // Add logging to check if function is called
    var inputElement = document.getElementById("myInput");

    // Get the value entered by the user
    var inputValue = inputElement.value;
    setCategory(inputValue);

    try {
      const serverUrl = process.env.REACT_APP_SERVER_PORT;
      const response = await axios.get(`${serverUrl}/api/listings/search`, {
        params: {
          query: inputValue, // Send location as query parameter
        },
      });
      setSearchResults(response.data); // Update the search results state
      console.log("Search results:", response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="home">
      <div className="search-container">
        <input type="text" id="myInput" placeholder="Search..." />
        <button onClick={handleSearch} className="search-button">
          <FaSearch className="search-icon" />
        </button>
      </div>
      <ListingsGrid category={category} />
    </div>
  );
};

export default Home;
