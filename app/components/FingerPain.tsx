import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Image from 'next/image';
import default_finger from '../../public/finger_images/default-finger.png';
import {fingerPainPoint} from '../FingerPainPoint.json'

interface ImageItem {
  id: string;
  active: {
        activeSrc: string | undefined;
        top: number;
        left: number,
        }
  highlightImage: string | undefined;
}


const FingerPain: React.FC  = () => {

  const [selectedArea, setSelectedArea] = useState<string[]>([]);
  const [selectedData,setSelectedData] = useState<ImageItem[]>([
    { id: 'epi', highlightImage: '/finger_images/epigastrium-highlight.png', active: { activeSrc: '/finger_images/epigastrium-active.png', top : -8, left: 2}},
    { id: 'luq', highlightImage: '/finger_images/luq-highlight.png', active: { activeSrc: '/finger_images/luq-active.png', top: 0 , left: 0} },
    { id: 'ruq', highlightImage: '/finger_images/ruq-highlight.png', active:{ activeSrc: '/finger_images/ruq-active.png', top: 1, left: -7}},
    { id: 'llq', highlightImage: '/finger_images/llq-highlight.png', active: { activeSrc: '/finger_images/llq-active.png', top: 0, left: 0} },
    { id: 'rlq', highlightImage: '/finger_images/rlq-highlight.png', active:{ activeSrc: '/finger_images/rlq-active.png', top: -4, left: 0} },
    { id: 'sup', highlightImage: '/finger_images/suprapubic-highlight.png', active: {activeSrc: '/finger_images/suprapubic-active.png',top: 5 ,left: 0} },
    { id: 'umb', highlightImage: '/finger_images/umbilicus-highlight.png', active: {activeSrc: '/finger_images/umbilicus-active.png', top: 3, left: 0} },
  ])
  
  const images: ImageItem[] = [
    { id: 'epi', highlightImage: '/finger_images/epigastrium-highlight.png', active: { activeSrc: '/finger_images/epigastrium-active.png', top : -8, left: 2}},
    { id: 'luq', highlightImage: '/finger_images/luq-highlight.png', active: { activeSrc: '/finger_images/luq-active.png', top: 0 , left: 0} },
    { id: 'ruq', highlightImage: '/finger_images/ruq-highlight.png', active:{ activeSrc: '/finger_images/ruq-active.png', top: 1, left: -7}},
    { id: 'llq', highlightImage: '/finger_images/llq-highlight.png', active: { activeSrc: '/finger_images/llq-active.png', top: 0, left: 0} },
    { id: 'rlq', highlightImage: '/finger_images/rlq-highlight.png', active:{ activeSrc: '/finger_images/rlq-active.png', top: -4, left: 0} },
    { id: 'sup', highlightImage: '/finger_images/suprapubic-highlight.png', active: {activeSrc: '/finger_images/suprapubic-active.png',top: 5 ,left: 0} },
    { id: 'umb', highlightImage: '/finger_images/umbilicus-highlight.png', active: {activeSrc: '/abs_images/umbilicus-active.png', top: 3, left: 0} },
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
console.log('finger',fingerPainPoint.map((item)=>item.dipPain.map((d)=>d)))

  return (
    <>
      <div className="flex flex-col justify-center items-center align-center bg-white p-4">
        <div className='flex relative items-center max-w-[500px] min-w-[500px] border shadow-md'>
             <Image
              src={default_finger}
              alt="Abdominal Pain Locator"
              layout="responsive"
              width={500}
              height={700}
            />
            {
                fingerPainPoint?.map((item: any)=>item.dipPain.map((d: any)=>
                    <>
                      <span 
                        id={d.id}
                        className="absolute border rounded-full bg-slate-100 bg-blue h-10 w-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-5 sm:h-5 " 
                        style={{
                            top: `${d.top}%`,
                            left: `${d.left}%`, 
                            width: d.width,
                            height: d.height,
                            cursor: 'pointer'
                            }}
                        onClick={() => handleImageClick('dipPain')}
                        >
                    </span>
                    </>
                    ))
            },
            {/* {
                fingerPainPoint?.map((item: any)=>item.mcpPain.map((d: any)=>
                    <>
                      <span 
                        id={d.id}
                        className="absolute border rounded-full bg-slate-100 bg-blue h-10 w-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-5 sm:h-5 " 
                        style={{
                            top: `${d.top}%`,
                            left: `${d.left}%`, 
                            width: d.width,
                            height: d.height,
                            cursor: 'pointer'
                            }}
                        onClick={() => handleImageClick('dipPain')}
                        >
                    </span>
                    </>
                    ))
            },
              {
                fingerPainPoint?.map((item: any)=>item.pipPain.map((d: any)=>
                    <>
                      <span 
                        id={d.id}
                        className="absolute border rounded-full bg-slate-100 bg-blue h-10 w-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-5 sm:h-5 " 
                        style={{
                            top: `${d.top}%`,
                            left: `${d.left}%`, 
                            width: d.width,
                            height: d.height,
                            cursor: 'pointer'
                            }}
                        onClick={() => handleImageClick('dipPain')}
                        >
                    </span>
                    </>
                    ))
            }, */}
            {/* {
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
                
            }  */}
           
        </div>
    </div>
   
    </>
  
  )
};

export default FingerPain;



