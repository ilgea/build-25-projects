import "./App.css";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
// import Accordion from "./components/accordions";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-raiting";
// import ImageSlider from "./components/image-slider";
// import Slayder from "./components/image-slider/Slayder";
// import LoadMoreData from "./components/load-more-data";

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
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={10}/> */}
      {/* <Slayder url={"https://picsum.photos/v2/list"} page={"1"} limit={10} /> */}
      {/* ----------- Load More Products Component ----------- */}
      {/* <LoadMoreData /> */}
      {/* ----------------- Tree View component/menu UI component / recursive navigation menu --------------- */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
