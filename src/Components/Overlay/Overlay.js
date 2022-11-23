import {Component} from "react";
import Styles from './Overlay.module.css'
import OverlayCart from './OverlayCart'
class Overlay extends Component {


    render(){

        return (
            <section>
                {this.props.isOpen && ( <div className={Styles.overlay}>
          <div className={Styles.overlay__background} onClick={this.props.onClose} />
          <div className={Styles.overlay__container}>
            {/* <div className={Styles.overlay__controls}>
              <button
                className={Styles.overlay__close}
                type="button"
                onClick={this.props.onClose}
              />
            </div> */}
            <OverlayCart />
          </div>
        </div>)
    }
            </section>

        )
    }
}

export default Overlay