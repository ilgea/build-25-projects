import "./App.css";
import Accordion from "./components/accordions";
import ImageSlider from "./components/image-slider";
// import Slayder from "./components/image-slider/Slayder";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-raiting";

function App() {
  return (
    <div className="App">
      {/* ---------- Accordion Component ---------- */}
      {/* <Accordion /> */}
      {/* ---------- Random Color Component ---------- */}
      {/* <RandomColor /> */}
      {/* ---------- Star Rating Component ---------- */}
      {/* <StarRating noOfStars={10} /> */}
      {/* ---------- Image Slider Components ---------- */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={10}
      />
      {/* <Slayder url={"https://picsum.photos/v2/list"} page={"1"} limit={10} /> */}
      {/*  */}
    </div>
  );
}

export default App;
