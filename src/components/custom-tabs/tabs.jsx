import { useState } from "react";
import "./tabs.css";

// parent component'ten tabsContent ve onChange props'larını alıyoruz
// onChange, currentIndex'i göstermek için kullandık.
const Tabs = ({ tabsContent, onChange}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex)=> {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem,index) => (
          <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
