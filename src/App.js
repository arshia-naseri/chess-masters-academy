import { useEffect, useRef } from "react";
import contact from "./Alireza-Pakmehr.vcf";

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
      <a
        ref={btnLink}
        href={contact}
        download="Chess Masters Academy-Alireza Pakmehr"
      >
        Click to download to contact
      </a>
    </>
  );
}

export default App;
