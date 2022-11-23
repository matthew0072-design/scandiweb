
import "./Slider.css";
import leftArrow from "../../Assets/Images/left-arrow.svg";
import rightArrow from "../../Assets/Images/right-arrow.svg";

const BtnSlider = ({click, direction}) => {
  
  
    return (
      <button  onClick={click}
        
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} alt="slider-button"/>
      
      </button>
    );
  }
  


export default BtnSlider