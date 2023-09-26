import React, { useState } from "react";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteVeri from "./sahte-veri";

import "./App.css";

const App = () => {
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gonderiler, setGonderiler] = useState(sahteVeri)
  const [aramaKriteri, setAramaKriteri] = useState(0);
  console.log(gonderiler);
  const gonderiyiBegen = (gonderiID) => {
    setGonderiler(gonderiler.map((posts) => {
      if (gonderiID === posts.id) {
        posts.likes += 1;
        return posts;
      } else {
        return posts;
      }
    }))
  };

  return (
    <div className="App">
      App Çalışıyor
      <AramaCubugu />
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;
