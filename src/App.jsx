import { useState } from 'react';
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import satData from "./components/satData";


function App() {
  
  const [sat, setSat] = useState(satData);

  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <div>
      <Banner />
      <Buttons filterByType={filterByType} displaySats={displaySats}/>
      <Table sat={sat} />
    </div>
  );
}

export default App;