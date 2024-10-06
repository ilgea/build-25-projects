import "./App.css";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
// import GithubProfileFinder from "./components/github-profile-finder";
// import ModalTest from "./components/custom-modal-popup/modal-test";
// import TabTest from "./components/custom-tabs/tab-test";
// import ScrollIndicator from "./components/scroll-indicator";
// import LightDarkMode from "./components/light-dark-mode";
// import QRCodeGenerator from "./components/qr-code-generator";
// import TreeView from "./components/tree-view";
// import menus from "./components/tree-view/data";
// import Accordion from "./components/accordions";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-raiting";
// import ImageSlider from "./components/image-slider";
// import Slayder from "./components/image-slider/Slayder";
// import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <div className="App">
      {/* ------------------------------  Accordion Component  ------------------------------ */}
      {/* <Accordion /> */}

      {/* ------------------------------  Random Color Component  ------------------------------ */}
      {/* <RandomColor /> */}

      {/* ------------------------------  Star Rating Component  ------------------------------ */}
      {/* <StarRating noOfStars={10} /> */}

      {/* ------------------------------  Image Slider Components  ------------------------------ */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={10}/> */}
      {/* <Slayder url={"https://picsum.photos/v2/list"} page={"1"} limit={10} /> */}

      {/* ------------------------------  Load More Products Component  ------------------------------ */}
      {/* <LoadMoreData /> */}

      {/* ------------------------------  Tree View component/menu UI component / recursive navigation menu  ------------------------------ */}
      {/* <TreeView menus={menus} /> */}

      {/* ------------------------------  QR Code Generator  ------------------------------ */}
      {/* <QRCodeGenerator /> */}

      {/* ------------------------------  light and dark theme switch  ------------------------------ */}
      {/* <LightDarkMode /> */}

      {/* ------------------------------  Scroll indicator component  ------------------------------ */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* ------------------------------  Custom tabs component  ------------------------------ */}
      {/* <TabTest /> */}

      {/* ------------------------------  Custom Modal Component  ------------------------------ */}
      {/* <ModalTest /> */}

      {/* ------------------------------  Github profile finder  ------------------------------ */}
      {/* <GithubProfileFinder /> */}

      {/* Search Autocomplete */}
      <SearchAutoComplete />
      {/* Tic tac toe */}
      {/* Feature Flag IMplementation */}
      {/* useFetch - Custom Hook Test*/}
      {/* Use Onclick Outside Hook Test */}
      {/* Use Window Resize Hook Test */}
      {/* Scroll to Top and Bottom */}
      {/* Scroll to a Particular Section */}
    </div>
  );
}

export default App;
