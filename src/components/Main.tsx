import undraw from "../images/undraw_moving.svg"
import URLShortenerForm from './URLShortenerForm'
import "./styles.css"


const Main = () => {
  return (
    <div className='container'>
        <img src={undraw} alt="pic" />
        <div className="content__side">
            <h1>URL <span>Shortener</span></h1>
            <URLShortenerForm />
        </div>
    </div>
  )
}

export default Main