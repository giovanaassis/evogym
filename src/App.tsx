import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPages } from "@/shared/types";
import Home from "./scenes/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPages>(
    SelectedPages.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPages.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app font-dmsans bg-gray-20 text-(--color-primary-800)">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
