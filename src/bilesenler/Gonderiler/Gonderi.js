import React, { useEffect }  from "react";
import { useState }  from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BegenBolumu from "./BegenBolumu";
import GonderiBasligi from "./GonderiBasligi";

const Gonderi = (props) => {
  const {  gonderiyiBegen, gonderi, originGonderiler} = props;
  const [clickedLike, setClickedLike] = useState(false);
  const filteredOriginGonderi = originGonderiler.filter((item) => item.id === gonderi.id)
  console.log(filteredOriginGonderi[0].likes)
  useEffect(()=>{
      if(filteredOriginGonderi[0].likes !== gonderi.likes){
        setClickedLike(true);
      }
  })
  return (
    <div className="post-border">
      <GonderiBasligi
        username={gonderi.username}
        thumbnailUrl={gonderi.thumbnailUrl}
      />
      <div className="post-image-wrapper" >
        <img
          alt="post thumbnail"
          className="post-image"
          src={gonderi.imageUrl}
        />
      </div>
    
        {
          !clickedLike ? (<BegenBolumu gonderiyiBegen={() => gonderiyiBegen(gonderi.id)} begeniSayisi = {gonderi.likes}/>) : (<BegenBolumu gonderiyiBegen={() => gonderiyiBegen(0)} begeniSayisi = {gonderi.likes} />)
        }
      
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar = {gonderi.comments}/>
    </div>
  );
};

export default Gonderi;
