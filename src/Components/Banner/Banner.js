import React from "react";
import "./Banner.css";
import { BsFillPlayFill, AiFillInfoCircle } from "react-icons/all";
import pic from "../../Assets/images/lu.png";
// import { Card } from "reactstrap";
import { Card, CardImg, CardBody, CardText, Button } from "reactstrap";

export default function Banner() {
  return (
    <div className="bann">
      <Card className="div-card">
        <CardImg top width="100%" src={pic} alt="Card image cap" />
        <CardBody>
          <CardText className="text">
            After an old acquaintance meets a voilent fate, the charming Lucifer
            vows revange on the perpetrators and makes an unexpected alience.
          </CardText>
          <div className="show-btn">
            <Button className="play">
              <BsFillPlayFill />
              Play{" "}
            </Button>
            <Button className="more">
              <AiFillInfoCircle />
              More Info
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
