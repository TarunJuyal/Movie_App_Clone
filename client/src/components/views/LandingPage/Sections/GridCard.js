import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

function GridCards(props) {
  if (props.actor) {
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <a
            href={`https://en.wikipedia.org/wiki/${props.name}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              style={{ width: "100%", height: "320px" }}
              alt={props.name}
              src={props.image}
            />
          </a>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {props.name}
          </p>
        </div>
      </Col>
    );
  } else {
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <Link to={`/movie/${props.movieId}`}>
            <img
              style={{ width: "100%", height: "320px" }}
              alt="img"
              src={props.image}
            />
          </Link>
        </div>
      </Col>
    );
  }
}

export default GridCards;
