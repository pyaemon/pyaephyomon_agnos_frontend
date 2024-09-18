import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Image from 'next/image';
import default_abs from '../../public/abs_images/default-abs.png';
import { AbsPainPoints } from '../AbsPainPoint.json'
import FingerPain from './FingerPain';

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
  const [selectedData,setSelectedData]  = useState<ImageItem[]>([])
  const [nextPage,setNextPage] = useState<Boolean>(false)
  
  const images: ImageItem[] = [
    { id: 'epi', 
      highlightImage: '/abs_images/epigastrium-highlight.png', 
      active: { activeSrc: '/abs_images/epigastrium-active.png', top : -8, left: 2}
    },
    { id: 'luq', 
      highlightImage: '/abs_images/luq-highlight.png', 
      active: { activeSrc: '/abs_images/luq-active.png', top: 0 , left: 0} 
    },
    { id: 'ruq', 
      highlightImage: '/abs_images/ruq-highlight.png', 
      active:{ activeSrc: '/abs_images/ruq-active.png', top: 1, left: -1}
    },
    { id: 'llq', 
      highlightImage: '/abs_images/llq-highlight.png', 
      active: { activeSrc: '/abs_images/llq-active.png', top: -14, left: 0} 
    },
    { id: 'rlq', 
      highlightImage: '/abs_images/rlq-highlight.png', 
      active:{ activeSrc: '/abs_images/rlq-active.png', top: -16, left: -4} 
    },
    { id: 'sup', 
      highlightImage: '/abs_images/suprapubic-highlight.png', 
      active: {activeSrc: '/abs_images/suprapubic-active.png',top: -5 ,left: 0} 
    },
    { id: 'umb', 
      highlightImage: '/abs_images/umbilicus-highlight.png', 
      active: {activeSrc: '/abs_images/umbilicus-active.png', top: -8, left: 0} 
    },
  ];

  const handleImageClick = (id: string) => {
    if (selectedArea.includes(id)) {
      setSelectedArea(selectedArea.filter((imageId) => imageId !== id));
    } else {
      setSelectedArea([...selectedArea, id]);
    }
  };

  useMemo(()=>{
    const Data = selectedArea?.length > 0 
      ? images.filter((data) => selectedArea.map(d => d).includes(data.id)) 
      : [];
      setSelectedData(Data)
  },[selectedArea])

  return (
    <>
      {
        !nextPage ?
          <div className="flex flex-col justify-center items-center align-center p-4">
            <div className='flex relative w-full items-center max-w-[500px] min-w-[400px] border shadow-md'>
                <Image
                  src={default_abs}
                  alt="Abdominal Pain Locator"
                  layout="responsive"
                  style={{zIndex: 0}}
                  width={500}
                  height={700}
                />
                {
                    AbsPainPoints?.map((item: any)=>
                    <>
                      <span 
                        id={item.id}
                        className="w-full absolute rounded-full bg-black h-16 w-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-5 sm:h-5 xs-w-h xs:h-5" 
                        style={{
                            top: `${item.top}%`,
                            left: `${item.left}%`, 
                            width: item.width,
                            height: item.height,
                            zIndex: 1,
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
                        className="w-full h-full lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] absolute cursor-pointer "
                        style={{
                          backgroundImage: `url(${area.highlightImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}    
                    >
                      {
                        selectedData.length < 7 && 
                        <img
                          key={area.id}
                          src={area.active.activeSrc}
                          alt={area.id}
                          style={{
                            position: 'absolute', 
                            top: `${area.active.top}%`, 
                            left: `${area.active.left}%`
                          }}
                        /> 
                      }
                    </div>
                  ))
                } 
            </div>
            {
              selectedData?.length === 7 &&
              <div className='mt-3 w-full max-w-[500px]'>
                <button 
                    className='flex justify-center items-center w-full max-w-[500px] min-w-[500px] bg-blue-500 text-center text-white p-2 rounded-lg'
                    onClick={() => setNextPage(!nextPage)}
                  >
                  Next
                </button>
              </div>
            }
          </div>
          :
          <FingerPain/>
      }
    </>
  )
};

export default Abdominal;



