import React from "react";

import SearchBox from "./SearchBox";
import DeeperDiveCards from "./ContentComponent/DeeperDiveCards";

const MainPage = () => {
  return (
    <>
      <div className=" md:h-dvh items-center justify-between py-12 gap-2 pt-10 z-0 md:px-20">
        <SearchBox />

        <DeeperDiveCards />
      </div>
    </>
  );
};

export default MainPage;
