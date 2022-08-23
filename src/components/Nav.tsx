import {FaLink} from "react-icons/fa"
import "./styles.css"

const Nav = () => {
  return (
    <div className='nav'>
        <div className="left__side">
            <FaLink style={{marginTop: 2, fontSize: 47, marginLeft: 10, color: "#034873"}}/>
            <h3>URLs</h3>
        </div>
        <div className="right__side">
            <div className="btn">login</div>
            <div className="btn__btn">Sign Up</div>
        </div>
    </div>
  )
}

export default Nav