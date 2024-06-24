import "./App.css";
import Navbar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Card from "./components/Card/Card.jsx";
import { useEffect, useState } from "react";
import {
  fetchGenres,
  fetchSongs,
  fetchTopAlbums,
  fetchnewAlbumData,
} from "./api/api";
import Section from "./components/Sections/Section";
import GenresSection from "./components/GenresSection/GenresSection";

function App() {
  const [topAlbumData, settopAlbumData] = useState([]);
  const [newAlbumCard, setNewAlbumCard] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    // console.log(data);
    settopAlbumData(data);
  };

  const generateNewAlbumData = async () => {
    const data = await fetchnewAlbumData();
    setNewAlbumCard(data);
  };

  const generateSongs = async () => {
    const data = await fetchSongs();
    setSongs(data);
  };

  const generateGenres = async () => {
    const data = await fetchGenres();
    setGenres(data);
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateSongs();
    generateGenres()
  }, []);
  // console.log(topAlbumData, "topAlbumData");
  // console.log(newAlbumCard, "newAlbumCard");
  console.log(songs, "songs");
  console.log(genres, "genres");

  return (
    <div className="App">
      <Navbar />
      <HeroSection />

      <div className="sectionWrapper">
        <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>

      <div className="sectionWrapper">
        <Section type="album" title="New Albums" data={newAlbumCard} />
      </div>
      
      <div className="sectionWrapper" >
        <GenresSection data={songs} type="songs" title="Songs" genreLists={genres}/>
      </div>

      {/* <Card data={topAlbumData}/> */}
    </div>
  );
}

export default App;
