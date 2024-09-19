"use client";
import { useState } from "react";
import Abdominal from "./components/AbdominalPain";
import FingerPain from "./components/FingerPain";
import Button from "./ui/button";


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      {currentPage === 1 ? (
        <div className="w-full justify-center items-center rounded-lg p-5 max-w-md ">
            <h3 className="m-2 text-center text-lg text-gray-500 font-bold">
                Where do you have stomach pain?
            </h3>
          <Abdominal />
        </div>
      )
      :
      (
        <div className="w-full justify-center items-center rounded-lg p-5 max-w-md ">
          <h2 className="text-xl font-bold mb-4 text-gray-600 text-center">
              Where Do you have the finger pain?
          </h2>
          <FingerPain/>
        </div>
      )
    }

      <div className="flex mt-4 w-full justify-center">
        {currentPage ===1  ? 
          <Button
            name="Next"
            onClick={()=>setCurrentPage(prev=>prev+1)}
            
          />
          :
          <Button
            name="Previous"
            onClick={()=>setCurrentPage(prev=>prev-1)}
        />
        }
      </div>
    </div>
  );
}
