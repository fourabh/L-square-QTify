import './App.css';
import Navbar from "./components/NavBar/NavBar.jsx"
import HeroSection from "./components/HeroSection/HeroSection.jsx"
import Card from "./components/Card/Card.jsx"
import { useEffect, useState } from 'react';
import { fetchTopAlbums } from './api/api';
import Section from './components/Sections/Section';

function App() {

  const [topAlbumData, settopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    // console.log(data);
    settopAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);
  console.log(topAlbumData, "topAlbumData");

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
