import React, { useEffect, useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../config";
import MainImage from "../LandingPage/Sections/MainImage";
import { Descriptions, Button, Row,Typography } from "antd";
import GridCard from "../LandingPage/Sections/GridCard";
import Favourite from "./Sections/Favourite";

const {Title}=Typography;

function MovieDetailPage(props) {
  const [Movie, setMovie] = useState([]);
  const [Trailer, setTrailer] = useState("");
  const [Cast, setCast] = useState([]);
  const [CastViewToggle, setCastViewToggle] = useState(false);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    console.log(movieId);
    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
          .then((response) => response.json())
          .then((response) => setCast(response.cast));
          fetch(`${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            if(response?.results[0]?.key!==undefined){
              setTrailer(`https://www.youtube.com/embed/${response?.results[0]?.key}`)
            }
          });
      });
  }, [movieId]);

  const handleMovieCastToggle = () => {
    setCastViewToggle(!CastViewToggle);
  };

  return (
    <div>
      {Movie && (
        <MainImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${Movie.backdrop_path}`}
          title={Movie.original_title}
          text={Movie.overview}
        />
      )}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Favourite
            userFrom={localStorage.getItem("userId")}
            movieId={movieId}
            movieInfo={Movie}
          />
        </div>
        <Descriptions title="Movie Info" bordered>
          <Descriptions.Item label="Title">
            {Movie.original_title}
          </Descriptions.Item>
          <Descriptions.Item label="Release Date">
            {Movie.release_date}
          </Descriptions.Item>
          <Descriptions.Item label="Revenue">{Movie.revenue}</Descriptions.Item>
          <Descriptions.Item label="Runtime">
            {Movie.runtime} min
          </Descriptions.Item>
          <Descriptions.Item label="Vote Average" span={2}>
            {Movie.vote_average}
          </Descriptions.Item>
          <Descriptions.Item label="Vote Count">
            {Movie.vote_count}
          </Descriptions.Item>
          <Descriptions.Item label="Status">{Movie.status}</Descriptions.Item>
          <Descriptions.Item label="Popularity">
            {Movie.popularity}
          </Descriptions.Item>
        </Descriptions>
        {Trailer && (
          <div style={{ width: "85%",height:"40vw", margin: "1rem auto" }}>
          <Title level={4}>Trailer</Title>
          <hr />
          <iframe title={movieId} width="100%" height="100%" src={Trailer} frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>
        </div>
        )}
        <br />
        <div style={{ display: "flex", marginTop:"2rem", justifyContent: "center" }}>
        <Button onClick={handleMovieCastToggle}>{CastViewToggle?"Hide Movie Cast":"Show Movie Cast"}</Button>
        </div>
        <br />
        {CastViewToggle && (
          <Row gutter={[16, 16]}>
            {Cast &&
              Cast.map((cast, index) => (
                <React.Fragment key={index}>
                  {cast.profile_path && (
                    <GridCard
                      actor
                      image={`${IMAGE_BASE_URL}${POSTER_SIZE}${cast.profile_path}`}
                      name={cast.name}
                    />
                  )}
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default MovieDetailPage;
