import React, { useState, useEffect} from 'react';
import Image, { StaticImageData } from 'next/image';
import default_finger from '../../public/finger_images/default-finger.png';
import  fingerPainPoint from '../FingerPainPoint.json'

interface ImageItem {
  id: string;
  active: {
    activeSrc: string | StaticImageData;
    top: number;
    left: number,
  }
  highlightImage: string | StaticImageData;
}
interface PainPoint {
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
}
interface FingerPainPoint {
  dipPain: PainPoint[];
  pipPain: PainPoint[];
  mcpPain: PainPoint[];
}

const images: ImageItem[] = [
  { id: 'dipPain', 
  highlightImage: '/finger_images/dip-highlight.png', 
  active: { activeSrc: '/finger_images/dip-active.png', top : 0, left: 2}
  },
  { id: 'pipPain', 
  highlightImage: '/finger_images/pip-highlight.png', 
  active:{ activeSrc: '/finger_images/pip-active.png', top: 0, left: 2}
  },
  { id: 'mcpPain', 
  highlightImage: '/finger_images/mcp-highlight.png', 
  active: { activeSrc: '/finger_images/mcp-active.png', top: 0, left: 0} 
  },
];


const FingerPain: React.FC  = () => {
  const [selectedArea, setSelectedArea] = useState<string[]>([]);
  const [selectedData,setSelectedData] = useState<ImageItem[]>([])
  
    const handleImageClick = (id: string) => {
        if (selectedArea.includes(id)) {
        setSelectedArea(selectedArea.filter((imageId) => imageId !== id));
        } else {
        setSelectedArea([...selectedArea, id]);
        }
    };
    
    useEffect(()=>{
      const Data = selectedArea?.length > 0 
      ? images.filter((data) => selectedArea.map(d => d).includes(data.id)) 
      : [];
      setSelectedData(Data)
    
  },[selectedArea])

  return (
     <div className='flex w-full justify-center items-center rounded-lg p-5'>
        <div className='relative max-w-md max-w-[500px] border shadow-md'>
            <Image
                src={default_finger}
                alt="Abdominal Pain Locator"
                layout="responsive"
                style={{zIndex: 0}}
                width={500}
                height={600}
            />
            {
                fingerPainPoint?.map((item: FingerPainPoint)=>item.dipPain.map((d)=>
                <>
                    <span 
                    key={d.id}
                    id={d.id}
                    className="absolute rounded-full h-10 w-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-5 sm:h-5 xs-w-h xs:h-5" 
                    style={{
                        top: `${d.top}%`,
                        left: `${d.left}%`, 
                        width: d.width,
                        height: d.height,
                        zIndex: 1,
                        cursor: 'pointer'
                        }}
                    onClick={() => handleImageClick('dipPain')}
                    >
                    </span>
                </>
                ))
            }
            {
                fingerPainPoint?.map((item: FingerPainPoint)=>item.pipPain.map((d)=>
                <>
                    <span 
                    key={d.id}
                    id={d.id}
                    className="absolute rounded-full bg-blue h-10 w-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-5 sm:h-5 " 
                    style={{
                        top: `${d.top}%`,
                        left: `${d.left}%`, 
                        width: d.width,
                        height: d.height,
                        zIndex: 1,
                        cursor: 'pointer'
                        }}
                    onClick={() => handleImageClick('pipPain')}
                    >
                    </span>
                </>
                ))
            }
            {
                fingerPainPoint?.map((item: FingerPainPoint)=>item.mcpPain.map((d)=>
                <>
                <span 
                    key={d.id}
                    id={d.id}
                    className="absolute rounded-full bg-blue h-10 w-10 lg:w-9 lg:h-9 md:w-8 md:h-8 sm:w-5 sm:h-5 " 
                    style={{
                        top: `${d.top}%`,
                        left: `${d.left}%`, 
                        width: d.width,
                        height: d.height,
                        zIndex: 1,
                        cursor: 'pointer'
                        }}
                    onClick={() => handleImageClick('mcpPain')}
                    >
                </span>
                </>
                ))
            }
            {
                selectedData.map((area) => (
                <div
                    key={area.id}
                    className="w-full h-full absolute cursor-pointer max-w-[500px] "
                    style={{
                    top: 0,
                    left: 0,
                    backgroundImage: `url(${area.highlightImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}    
                >
                  {
                    selectedData.length < 3 &&
                    <Image
                      key={area.id}
                      src={area.active.activeSrc}
                      alt={area.id}
                      width={500}
                      height={600}
                      style={{position: 'absolute', top: `${area.active.top}%`, left: `${area.active.left}%`}}
                    />   
                  }
                    
                </div>
                )) 
            } 
        </div>
    </div>
  )
};

export default FingerPain;



