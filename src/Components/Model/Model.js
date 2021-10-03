import { Button, Modal, ModalFooter } from "reactstrap";
import "./Model.css";
import { AiFillStar, BsFillPlayFill } from "react-icons/all";

const Model = ({ modal, toggle, details }) => {
  return (
    <div className="main-div">
      <Modal isOpen={modal} toggle={toggle}>
        <div className="img-gradient">
          <img
            className="m-img"
            src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
            alt="img"
          />
        </div>

        <ModalFooter>
          <p>
            <span className="tittle"> {details.title}</span>
            <span className="rate">
              Rating : {details.vote_average}
              <AiFillStar />
            </span>
            <br />
            <span className="texxxt"> {details.overview}</span>
          </p>

          <Button className="playy" onClick={toggle}>
            <BsFillPlayFill />
            Play{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Model;
