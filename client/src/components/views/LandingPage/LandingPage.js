import React, { useEffect, useState , Suspense } from "react";
import { Typography, Row } from "antd";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from "../../config";
import { LoadingOutlined } from "@ant-design/icons";

const MainImage = React.lazy(()=> import("./Sections/MainImage"));
const GridCard = React.lazy(()=> import("./Sections/GridCard"));

const { Title } = Typography;

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        setMovies([...Movies, ...result.results]);
        setCurrentPage(result.page);
      })
      .catch((error) => console.error("Error:", error));
  };

  const loadMoreItems = () => {
    let endpoint = "";
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      <Suspense fallback={<div className="app"><LoadingOutlined style={{ fontSize: "4rem" }} /></div>}>
        {Movies[0] && (
        <MainImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${Movies[0].backdrop_path}`}
          title={Movies[0].original_title}
          text={Movies[0].overview}
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <Title level={2}> Movies by latest </Title>
        <hr />
        <Row gutter={[16, 16]}>
          {Movies &&
            Movies.map((movie, index) => (
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

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="loadMore" onClick={loadMoreItems}>
            Load More
          </button>
        </div>
        <br/>
      </div>
      </Suspense>
    </div>
  );
}

export default LandingPage;
