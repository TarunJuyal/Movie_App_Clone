import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";

function Favourite(props) {
  const [FavouriteNumber, setFavouriteNumber] = useState(0);
  const [Favourited, setFavourited] = useState(false);
  const variable = {
    userFrom: props.userFrom,
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
    movieImage: props.movieInfo.backdrop_path,
    movieRuntime: props.movieInfo.runtime,
  };

  useEffect(() => {
    axios.post("/api/favourite/favouriteNumber", variable).then((response) => {
      if (response.data.success) {
        setFavouriteNumber(response.data.FavouriteNumber);
      } else {
        console.warn("Failed to get favourite number");
      }
    });
    axios.post("/api/favourite/favourited", variable).then((response) => {
      if (response.data.success) {
        setFavourited(response.data.Favourited);
      } else {
        console.warn("Failed to get favourite info");
      }
    });
  }, []);

  const handleFavouriteClick = () => {
    if (Favourited) {
      axios
        .post("/api/favourite/removeFromFavourite", variable)
        .then((response) => {
          if (response.data.success) {
            setFavouriteNumber(FavouriteNumber - 1);
            setFavourited(!Favourited);
          } else {
            alert("Failed to remove from Favourites");
          }
        });
    } else {
      axios.post("/api/favourite/addToFavourite", variable).then((response) => {
        if (response.data.success) {
          setFavouriteNumber(FavouriteNumber + 1);
          setFavourited(!Favourited);
        } else {
          alert("Login first to add to favourites");
        }
      });
    }
  };

  return (
    <div>
      <Button onClick={handleFavouriteClick}>
        {Favourited ? "Remove From Favourites" : "Add To Favourites"}{" "}
        {/* {FavouriteNumber} */}
      </Button>
    </div>
  );
}

export default Favourite;
