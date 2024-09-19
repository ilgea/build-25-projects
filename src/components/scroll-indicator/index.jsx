// sorulacak soru -> parent'tan mı alacağız, her zaman aynı mı olacak.
// Burada parent'tan props olarak alacağız.

import { useEffect, useState } from "react";
import "./scroll.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  // 3 şeyi hesaplamamız gerekiyor.
  // bunlar ; document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.scrollTop
  // scrollHeight, burada scroll edilen toplam yüksekliği verir. Yani aşağıya kadar kaydırdığımız toplam alan.
  // scrollTop ise şu an scroll edilen yüksekliği verir. ilk başta 0'dır. sonra scroll ettikçe artar.

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  if(errorMessage){
    return <div>Error ! {errorMessage}</div>
  }

  if(loading){
    return <div>Loading data! Please wait...</div>
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          {/* scrollPercentage değeri 0'dan başlayıp, scroll ettikçe artacak. width değeri de scrollPercentage değerine göre artacak */}
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
