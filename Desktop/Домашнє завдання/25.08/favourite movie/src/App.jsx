import './App.css'
import Movie from "./components/Movie"

const App = () => {
  return (
    <>
      <Movie
        image_url="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/22/2a/1d/222a1d18-6d21-fec2-3ef0-ce0f7988ed65/06UMGIM05485.rgb.jpg/600x600bf-60.jpg"
        movie_name="Gladiator"
        year={2000}
        director="Ridley Scott"
        screenwriter="David Franzoni; John Logan; William Nicholson"
        my_rating={"9.0"}
      />
    </>
  )
}

export default App
