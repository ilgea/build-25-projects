import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef(); //% tıklanan DOM elementini geçireceğiz
  useOutsideClick(ref, () => setShowContent(false)); //% ne zaman content'in dışına tıklasak, false olacak şekilde ayarlıyoruz

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}

//% Amaç, içerik dışına tıkladığımızda dom'dan, ekrandan kalkması,
//% butona tıkladığımızda tekrar gösterilmesi
//% bunu dom elementlerin referanslardan faydalanarak yapar.
//% biz burada div'in referansını baz alarak yapacağız
