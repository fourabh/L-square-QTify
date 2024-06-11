import './App.css';
import Navbar from "./components/NavBar/NavBar.jsx"
import HeroSection from "./components/HeroSection/HeroSection.jsx"
import Card from "./components/Card/Card.jsx"
import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchnewAlbumData } from './api/api';
import Section from './components/Sections/Section';

function App() {

  const [topAlbumData, settopAlbumData] = useState([]);
  const [newAlbumCard, setNewAlbumCard] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    // console.log(data);
    settopAlbumData(data);
  };

  const generateNewAlbumData = async()=>{
    const data = await fetchnewAlbumData();
    setNewAlbumCard(data)
  }

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);
  console.log(topAlbumData, "topAlbumData");
  console.log(newAlbumCard, "newAlbumCard");

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>

      <div className="sectionWrapper">
        <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>

      {/* <Card data={topAlbumData}/> */}
    </div>
  );
}

export default App;
