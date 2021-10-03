import React from "react";
import { Card, CardImg } from "reactstrap";
import Carousel from "react-elastic-carousel";
import "./Movie.css";
import { useState } from "react";
import Model from "../Model/Model";
// import Footer from "../Footer/Footer";

export default function Movie({ movies, title }) {
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});

  const toggle = (item, index) => {
    setDetails(item, index);

    setModal(!modal);
  };
  const breakPoints = [{ width: 1000, itemsToScroll: 3, itemsToShow: 7 }];
  return (
    <>
      <div>
        <div className="px-4">
          <Card className="movies">
            <h5 className="texxt">{title}</h5>
            <Carousel breakPoints={breakPoints} pagination={false}>
              {movies.length > 0 &&
                movies.map((item, index) => {
                  return (
                    <div className="img-card">
                      <CardImg
                        top
                        width="100%"
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        alt="Card image cap"
                        onClick={() => toggle(item, index)}
                      />
                    </div>
                  );
                })}
              <Model modal={modal} details={details} toggle={toggle} />
            </Carousel>
          </Card>
        </div>
      </div>
    </>
  );
}
