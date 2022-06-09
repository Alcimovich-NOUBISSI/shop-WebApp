import "./Backdrop.css";

const Backdrop = (props) => {
  return (
    props.show && <div className="Backdrop" onClick={props.handleClick}></div>
  );
};

export default Backdrop;
