import React, { useEffect, useState } from "react";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteVeri from "./sahte-veri";

import "./App.css";

const App = () => {
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [originGonderiler,setOriginGonderiler] = useState([...sahteVeri]);
  const [gonderiler, setGonderiler] = useState(sahteVeri)
  const [aramaKriteri, setAramaKriteri] = useState("");
  console.log("originGonderiler:",originGonderiler)

  const gonderiyiBegen = (gonderiID) => {
    setGonderiler(gonderiler.map((post) => {
        if (gonderiID === post.id) {
          const updatedPost = { ...post, likes: post.likes + 1 };
          return updatedPost;
        } else {
          return post;
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
      <AramaCubugu aramaKriteri={aramaKriteri} aramaHandler={aramaHandler}/>
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} originGonderiler={originGonderiler} />
    </div>
  );
};

export default App;
