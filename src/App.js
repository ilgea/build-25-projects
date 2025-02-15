import "./App.css";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
// import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
// import UseWindowResizeTest from "./components/use-window-resize/test";
// import UseOnclickOutsideTest from "./components/use-outside-click/test";
// import UseFetchHookTest from "./components/use-fetch/test";
// import FeatureFlags from "./components/feature-flag";
// import FeatureFlagGlobalState from "./components/feature-flag/context";
// import TicTacToe from "./components/tic-tact-toe";
// import SearchAutoComplete from "./components/search-autocomplete-with-api";
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

      {/* ------------------------------  Search Autocomplete  ------------------------------ */}
      {/* <SearchAutoComplete /> */}

      {/* ------------------------------  Tic tac toe  ------------------------------ */}
      {/* <TicTacToe /> */}

      {/* ------------------------------ Feature Flag IMplementation  ------------------------------ */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* ------------------------------ useFetch - Custom Hook Test ------------------------------ */}
      {/* <UseFetchHookTest /> */}

      {/* ------------------------------ Use Onclick Outside Hook Test ------------------------------ */}
      {/* <UseOnclickOutsideTest/> */}

      {/* ------------------------------ Use Window Resize Hook Test ------------------------------ */}
      {/* <UseWindowResizeTest /> */}

      {/* ------------------------------ Scroll to Top and Bottom ------------------------------ */}
      {/* <ScrollToTopAndBottom /> */}

      {/* ------------------------------ Scroll to a Particular Section ------------------------------ */}
      <ScrollToSection/>
      
    </div>
  );
}

export default App;
