import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // alttaki fonksiyon ile yıldızlara tıkladığımızda rating değeri güncellenir.
  function handleClick(getCurrentIndex) {
    console.log("1", getCurrentIndex);
    setRating(getCurrentIndex);
  }

  // alttaki fonksiyon ile yıldızların üzerine geldiğimizde hover değeri güncellenir.
  function handleMouseEnter(getCurrentIndex) {
    console.log("2", getCurrentIndex);
    setHover(getCurrentIndex);
    console.log("4", hover);
  }

  // alttaki fonksiyon ile yıldızların üzerinden çekildiğimizde hover değeri güncellenir.
  function handleMouseLeave() {
    console.log("3", rating);
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {/* alttaki kod parçası ile yıldızlar oluşturulur.  Array(noOfStars) ile noOfStars değeri kadar bir dizi oluşturulur. */}
      {/* map fonksiyonunda _ kullanılmasının sebebi, bu değerin (elemanların her biri) kullanılmayacağını belirtmektir.   */}
      {[...Array(noOfStars)].map((_, index) => {
        // index değeri 1 arttırılır. Çünkü index 0'dan başlar.
        index += 1;

        return (
          <FaStar
            key={index}
            // classname içindeki ters ok işareti ile bir koşul belirtilir. Eğer index değeri hover veya rating değerinden küçükse active, değilse inactive olur.
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
