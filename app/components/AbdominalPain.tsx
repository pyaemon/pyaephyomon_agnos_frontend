import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import default_abs from '../../public/abs_images/default-abs.png';
import AbsPainPoints  from '../AbsPainPoint.json'

interface ImageItem {
  id: string;
  active: {
    activeSrc: string | StaticImageData;
    top: number;
    left: number,
  }
  highlight: {
    highlightSrc: string | StaticImageData;
    top: number;
    left: number,
  }

}

const Abdominal: React.FC= () => {

  const [selectedArea, setSelectedArea] = useState<string[]>([]);
  const [selectedData,setSelectedData]  = useState<ImageItem[]>([])
  
  const images: ImageItem[] = [
    { id: 'epi', 
      highlight: { highlightSrc: '/abs_images/epigastrium-highlight.png', top : 0, left: 0},
      active: { activeSrc: '/abs_images/epigastrium-active.png', top : 0, left: 2}
    },
    { id: 'luq', 
      highlight: { highlightSrc: '/abs_images/luq-highlight.png', top : 0, left: 0},
      active: { activeSrc: '/abs_images/luq-active.png', top: 0 , left: 0} 
    },
    { id: 'ruq', 
      highlight: { highlightSrc: '/abs_images/ruq-highlight.png', top : 0, left: 0},
      active:{ activeSrc: '/abs_images/ruq-active.png', top: 8, left: 0}
    },
    { id: 'llq', 
      highlight: { highlightSrc: '/abs_images/llq-highlight.png', top : 0, left: 0},
      active: { activeSrc: '/abs_images/llq-active.png', top: 0, left: 0} 
    },
    { id: 'rlq', 
      highlight: { highlightSrc: '/abs_images/rlq-highlight.png', top : 0, left: 0},
      active:{ activeSrc: '/abs_images/rlq-active.png', top: -8, left: -4} 
    },
    { id: 'sup', 
      highlight: { highlightSrc: '/abs_images/suprapubic-highlight.png', top : 0, left: 0},
      active: {activeSrc: '/abs_images/suprapubic-active.png',top: 0 ,left: 0} 
    },
    { id: 'umb', 
      highlight: { highlightSrc: '/abs_images/umbilicus-highlight.png', top : 0, left: 0},
      active: {activeSrc: '/abs_images/umbilicus-active.png', top: 0, left: 0} 
    },
    ];

    const handleImageClick = (id: string) => {
        if (selectedArea.includes(id)) {
        setSelectedArea(selectedArea.filter((imageId) => imageId !== id));
        } else {
        setSelectedArea([...selectedArea, id]);
        }
    };
    

    useEffect(() => {
        const Data = selectedArea.length > 0 
        ? images.filter((data) => selectedArea.includes(data.id)) 
        : [];
        
        setSelectedData(Data);
    
    }, [selectedArea]);

  return (
    <>
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
                AbsPainPoints?.map((k: any,item: any)=>
                <>
                    <span 
                    key={item.id}
                    id={item.id}
                    className="w-full absolute rounded-full h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-5 sm:h-5 xs-w-h xs:h-5" 
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
                    className="w-full h-full absolute cursor-pointer max-w-[500px] min-w-[400px]"
                    style={{
                        backgroundImage: `url(${area.highlight.highlightSrc})`,
                        top: `${area.highlight.top}%`, 
                        left: `${area.highlight.left}%`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}    
                >
                    {
                    selectedData.length < 7 && 
                    <Image
                        key={area.id}
                        src={area.active.activeSrc}
                        alt={area.id}
                        width={500}
                        height={700}
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
    </> 
  )
};

export default Abdominal;



