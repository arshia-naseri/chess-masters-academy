import { useEffect, useRef } from "react";

function App() {
  const btnLink = useRef();
  useEffect(() => {
    const autoDownload = () => {
      btnLink.current.click();
    };

    autoDownload();

    return () => {};
  }, []);
  return (
    <>
      <a ref={btnLink} href="./Alireza Pakmehr.vcf" download>
        Click to download to contact
      </a>
    </>
  );
}

export default App;
