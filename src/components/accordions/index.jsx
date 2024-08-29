// singe accordions
// multiple accordions

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  // tıkladığım question'ların id'lerini depolamak için
  const [multiple, setMultiple] = useState([]);
  const [buttonText, setButtonText] = useState("Enabled ");

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    // direk state üzerinde çalışma, kopyası üzerinde işlem yap
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    // console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  };

  const handleButtonSelection = () => {
    setEnableMultiSelection(!enableMultiSelection);
    setButtonText((prev) => (prev === "Enabled " ? "Disabled " : "Enabled "));
    if (enableMultiSelection) setMultiple([]);
    if (!enableMultiSelection) setSelected(null);
  };

  const isItemExpanded = (itemId) => {
    console.log(selected);
    console.log(itemId);
    return enableMultiSelection
      ? multiple.includes(itemId)
      : selected === itemId;
  };

  // console.log(selected, multiple);
  return (
    <div className="wrapper">
      {/* aşağıda bir toggle mantığı kurduk. */}
      <button onClick={handleButtonSelection}>
        {buttonText}
        Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div
                // argument olarak belirli questions'un id'sini alır.
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{isItemExpanded(dataItem.id) ? "-" : "+"}</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="contenty">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="contenty">{dataItem.answer}</div>
                  )}

              {/* 
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="contenty">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

// Açıklama
// bir bileşen klasörü oluşturdum ve bunun içinde
// başka bir akordeon klasörü oluşturuyorum
// bunun ana nedeni, bunu kullanılabilir bir bileşen olarak oluşturmamdır,
// böylece birden fazla yerde bunu kullanabiliriz
