import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      //? kapalı olduğunda veya tıklanan yer ref'in içerisinde ise -if- çalışır
      //? kapalı ise !false || undefined değerlerini verir.
      //? açık ve tıklanan yer ref'in icinde ise !<div>...</div> || true değerini verir.
      //? event.target bize tıklanan ekementi verir.
      //? ref.current.contains(event.target): Tıklanan element modalın neresinde kontrolü yapıyoruz. içindeyse true, dışında ise false veriyor.
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(); //? burada setShowContent(false) çalışıyor düşünebiliriz.
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}
