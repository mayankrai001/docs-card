import React, { useState,useRef } from "react";
import Card from "./Card";


function Foreground() {

    const ref = useRef(null);

  const data = [
    {
      desc: "hi mayank bhagwan ki maya h kahin dhoop kahin chhaya h samjh rahe ho na mein kya bol raha hun",
      filesize: "0.9mb",
      close: false,
      tag:{
        isOpen:true , tagTitle:"Downlad Now" , tagColor:"green"
      }
    },
    {
        desc: "hi mayank bhagwan ki maya h kahin dhoop kahin chhaya h samjh rahe ho na mein kya bol raha hun",
        filesize: "0.9mb",
        close: true,
        tag:{
          isOpen: false, tagTitle:"Downlad Now" , tagColor:"blue"
        }
      },
      {
        desc: "hi mayank bhagwan ki maya h kahin dhoop kahin chhaya h samjh rahe ho na mein kya bol raha hun",
        filesize: "0.9mb",
        close: true,
        tag:{
          isOpen:true , tagTitle:"Downlad Now" , tagColor:"green"
        }
      },
  ];
  useState();
  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item) =>(
            <Card data={item} reference={ref}/>
        ))}
      </div>

  );
}

export default Foreground;
