import React, { useState } from "react";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteVeri from "./sahte-veri";

import "./App.css";

const App = () => {
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gonderiler, setGonderiler] = useState(sahteVeri)
  const [aramaKriteri, setAramaKriteri] = useState("");
  console.log(gonderiler);
  const gonderiyiBegen = (gonderiID) => {
    const pureGonderiler = [...gonderiler.likes];
    setGonderiler(gonderiler.map((post) => {
      const updatedGonderi = {...post}
      if(updatedGonderi.likes !== post.likes){
        return updatedGonderi
      }else{
        if (gonderiID === post.id) {
          updatedGonderi.likes += 1;
          return updatedGonderi;
        } else {
          return post;
        }
      }
    }))
  };
/*


*/
  const aramaHandler = (val) => {
    setAramaKriteri(val);
    const filtered = sahteVeri.filter((g) => g.username.includes(val));
    setGonderiler(filtered);
  } 

  return (
    <div className="App">
      App Çalışıyor
      <AramaCubugu aramaKriteri={aramaKriteri} aramaHandler={aramaHandler}/>
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;
