import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = props => {
  const { yorumlar } = props;

  return (
    <div>
      {
          yorumlar.map((yorum, index) => {
            return(
            <Yorum yorum={yorum} key={yorum.id}/>
            )
          })
        }
    </div>
  );
};

export default Yorumlar;
