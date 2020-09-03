import React, { useEffect, useState } from "react";
import { Typography, Popover } from "antd";
import "./FavouritePage.css";
import axios from "axios";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const { Title } = Typography;
const variables = { userFrom: localStorage.getItem("userId") };

function FavouritePage() {
  const [FavouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = () => {
    axios
      .post("/api/favourite/getFavouriteMovies", variables)
      .then((response) => {
        if (response.data.success) {
          setFavouriteMovies([...response.data.favourites]);
        } else {
          console.log("Failed to get favourites");
        }
      });
  };

  const handleRemove = (movieId) => {
    const variable = {
      movieId: movieId,
      userFrom: localStorage.getItem("userId"),
    };
    axios
      .post("/api/favourite/removeFromFavourite", variable)
      .then((response) => {
        if (response.data.success) {
          fetchFavourites();
        } else {
          alert("Failed to remove from Favourites");
        }
      });
  };

  const renderTableBody = FavouriteMovies.map((movie, index) => {
    const content = (
      <div>
        {movie.movieImage && (
          <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.movieImage}`}></img>
        )}
      </div>
    );

    return (
      <tr key={index}>
        <Popover content={content} title={`${movie.movieTitle}`}>
          <td>{movie.movieTitle}</td>
        </Popover>
        <td>{movie.movieRuntime}</td>
        <td>
          <button onClick={() => handleRemove(movie.movieId)}>
            Remove from favourites
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> Your Favorite Movies </Title>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <th>Remove from favorites</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default FavouritePage;
