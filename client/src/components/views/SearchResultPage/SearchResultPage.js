import React, { useState, useEffect } from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, API_KEY, API_URL } from "../../config";
import { Typography, Row } from "antd";
import GridCard from "../LandingPage/Sections/GridCard";

const { Title } = Typography;

function SearchResultPage(props) {
  const [searchMovies, setsearchMovies] = useState([]);
  const movieName = props.match.params.movieName;

  useEffect(() => {
    fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&adult=false`
    )
      .then((response) => response.json())
      .then((response) => {
        setsearchMovies(response.results);
      });
  }, []);

  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <Title level={2}> Search Results </Title>
      <hr />
      <Row gutter={[16, 16]}>
        {searchMovies &&
          searchMovies.map((movie, index) => (
            <React.Fragment key={index}>
              {movie.poster_path && (
                <GridCard
                  image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                  movieId={movie.id}
                />
              )}
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
}

export default SearchResultPage;
