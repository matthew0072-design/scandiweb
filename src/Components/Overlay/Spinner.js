import {Component} from "react";
import Styles from "../../Assets/Styles/Spinner.module.css"

class Spinner extends Component {
    render(){


return(

    <div className={Styles.center}>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
  <div className={Styles.wave}></div>
</div>
)

    }
}

export default Spinner