import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Image from 'next/image';
import default_abs from '../../public/abs_images/default-abs.png';
import { AbsPainPoints } from '../AbsPainPoint.json'
import AbdominalPoint from './AbdominalPoint';

interface ImageItem {
  id: string;
  active: {
        activeSrc: string | undefined;
        top: number;
        left: number,
        }
  highlightImage: string | undefined;
}

const Abdominal: React.FC  = () => {

  const [selectedArea, setSelectedArea] = useState<string[]>([]);

  const [selectedData,setSelectedData] = useState<ImageItem[]>([
    { id: 'epi', highlightImage: '/abs_images/epigastrium-highlight.png', active: { activeSrc: '/abs_images/epigastrium-active.png', top : -8, left: 2}},
    { id: 'luq', highlightImage: '/abs_images/luq-highlight.png', active: { activeSrc: '/abs_images/luq-active.png', top: 0 , left: 0} },
    { id: 'ruq', highlightImage: '/abs_images/ruq-highlight.png', active:{ activeSrc: '/abs_images/ruq-active.png', top: 1, left: -7}},
    { id: 'llq', highlightImage: '/abs_images/llq-highlight.png', active: { activeSrc: '/abs_images/llq-active.png', top: 0, left: 0} },
    { id: 'rlq', highlightImage: '/abs_images/rlq-highlight.png', active:{ activeSrc: '/abs_images/rlq-active.png', top: -4, left: 0} },
    { id: 'sup', highlightImage: '/abs_images/suprapubic-highlight.png', active: {activeSrc: '/abs_images/suprapubic-active.png',top: 5 ,left: 0} },
    { id: 'umb', highlightImage: '/abs_images/umbilicus-highlight.png', active: {activeSrc: '/abs_images/umbilicus-active.png', top: 3, left: 0} },
  ])
  
  const images: ImageItem[] = [
    { id: 'epi', highlightImage: '/abs_images/epigastrium-highlight.png', active: { activeSrc: '/abs_images/epigastrium-active.png', top : -8, left: 2}},
    { id: 'luq', highlightImage: '/abs_images/luq-highlight.png', active: { activeSrc: '/abs_images/luq-active.png', top: 0 , left: 0} },
    { id: 'ruq', highlightImage: '/abs_images/ruq-highlight.png', active:{ activeSrc: '/abs_images/ruq-active.png', top: 1, left: -7}},
    { id: 'llq', highlightImage: '/abs_images/llq-highlight.png', active: { activeSrc: '/abs_images/llq-active.png', top: 0, left: 0} },
    { id: 'rlq', highlightImage: '/abs_images/rlq-highlight.png', active:{ activeSrc: '/abs_images/rlq-active.png', top: -4, left: 0} },
    { id: 'sup', highlightImage: '/abs_images/suprapubic-highlight.png', active: {activeSrc: '/abs_images/suprapubic-active.png',top: 5 ,left: 0} },
    { id: 'umb', highlightImage: '/abs_images/umbilicus-highlight.png', active: {activeSrc: '/abs_images/umbilicus-active.png', top: 3, left: 0} },
  ];

  const handleImageClick = (id: string) => {
    if (selectedArea.includes(id)) {
      setSelectedArea(selectedArea.filter((imageId) => imageId !== id));
    } else {
      setSelectedArea([...selectedArea, id]);
    }
  };

//     useMemo(()=>{
//         const Data = selectedArea?.length > 0 
//         ? images.filter((data) => selectedArea.map(d => d).includes(data.id)) 
//         : [];
//         setSelectedData(Data)
//     },[selectedArea])
//    console.log(selectedData)

  return (
    <>
      <div className="flex flex-col justify-center items-center align-center bg-white p-4">
        <div className='flex relative items-center max-w-[500px] min-w-[500px] border shadow-md'>
             <Image
              src={default_abs}
              alt="Abdominal Pain Locator"
              layout="responsive"
              width={500}
              height={700}
            />
            {
                AbsPainPoints?.map((item: any)=>
                    <>
                      <span 
                        id={item.id}
                        className="absolute border rounded-full bg-slate-100 bg-blue h-16 w-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-5 sm:h-5 " 
                        style={{
                            top: `${item.top}%`,
                            left: `${item.left}%`, 
                            width: item.width,
                            height: item.height,
                            cursor: 'pointer'
                            }}
                        onClick={() => handleImageClick(item.id)}
                        >
                    </span>
                    </>
                    
                )
            },
            {
                selectedData.map((area) => (
                
                    <div
                        key={area.id}
                        className="absolute cursor-pointer"
                        style={{
                        width: 500,
                        height: 500,
                        backgroundImage: `url(${area.highlightImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}    
                    >
                         <img
                            key={area.id}
                            src={area.active.activeSrc}
                            alt={area.id}
                            style={{position: 'absolute', top: `${area.active.top}%`, left: `${area.active.left}%`}}
                       /> 
                      
                    </div>
                    
                ))
                
            } 
           
        </div>
        <div className='mt-3'>
            <button 
                className='flex justify-center items-center w-full max-w-[500px] min-w-[500px] bg-blue-500 text-center text-white p-2 rounded-lg'>
                Next
            </button>
        </div>
      
    </div>
   
    </>
  
  )
};

export default Abdominal;



