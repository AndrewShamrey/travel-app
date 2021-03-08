import Header from '../src/components/header/header';
import DateWidget from "./components/dateWidget/dateWidget";
import Card from "./components/card/card";
import Footer from './components/footer/footer';
import Video from './components/video/Video';
import { Player } from 'video-react';

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header searchField />
      <div>
        <DateWidget />
        <Card />
        <Video
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
