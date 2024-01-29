import './App.css';
import lake from './image/lake.JPG';
import GallaryFooter from './components/GallaryFooter';
import GalleryBody from './components/GalleryBody';
import GalleryHeader from './components/GalleryHeader';

const imageData = [
  {
    id: 1,
    img: lake,
  },
  {
    id: 2,
    img: lake,
  },
  {
    id: 3,
    img: lake,
  },
  {
    id: 4,
    img: lake,
  },
];

function App() {
  return (
    <div>
      <GalleryHeader />
      <GalleryBody data = {imageData}/>
      <GallaryFooter />
    </div>
  );
}

export default App;
