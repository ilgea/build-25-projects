import { useLayoutEffect, useState } from "react";

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  //? çağrıldığında windowSize durumunu geçerli pencerenin iç genişliği ve yüksekliği ile günceller 
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  //? useLayoutEffect ile useEffect arasındaki fark;
  //? useEffect, componentin render edilmesinden sonra calistirilir. useLayoutEffect ise render edilmeden calistirilir.
  useLayoutEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return windowSize;
}
