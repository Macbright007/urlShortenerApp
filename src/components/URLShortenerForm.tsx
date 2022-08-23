// import axios from "axios"
import React, { useState } from "react"
import "./styles.css"


export const URL = "https://robot-shortener.herokuapp.com/api"

const URLShortenerForm = () => {
    const[newShortenedUrl, setNewShortenedUrl] = useState();

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // try {
        //     const result = await axios.post(URL, newShortenedUrl);
        //     console.log(result)
        //   } catch {
        //     console.log("Error!!!!");
        //   }
    }



  return (
    <form className="form__container" onSubmit={handleSubmit}>
        <input onChange={(e:any) => setNewShortenedUrl(e.target.value)} placeholder="🔗 Please enter url to be shortened..."/>
        <button type="submit">Create Url</button>
    </form>
  )
}

export default URLShortenerForm