import React from "react";
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <SearchBar />
      <ImageShow />
      <ImageList />
    </div>
  );
};

export default App;
