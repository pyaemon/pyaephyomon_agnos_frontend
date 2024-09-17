import React, { useState, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import default_abs from '../../public/abs_images/default-abs.png';
import epigastrium_highlight from '../../public/abs_images/epigastrium-highlight.png';
import epigastrium_active from '../../public/abs_images/epigastrium-active.png';
import llq_highlight from '../../public/abs_images/llq-highlight.png';
import llq_active from '../../public/abs_images/llq-active.png';
import luq_highlight from '../../public/abs_images/luq-highlight.png';
import luq_active from '../../public/abs_images/luq-active.png';
import rlq_highlight from '../../public/abs_images/rlq-highlight.png';
import rlq_active from '../../public/abs_images/rlq-active.png';
import ruq_highlight from '../../public/abs_images/ruq-highlight.png';
import ruq_active from '../../public/abs_images/ruq-active.png';
import suprapubic_highlight from '../../public/abs_images/suprapubic-highlight.png';
import suprapubic_active from '../../public/abs_images/suprapubic-active.png';
import umbilicus_highlight from '../../public/abs_images/umbilicus-highlight.png';
import umbilicus_active from '../../public/abs_images/umbilicus-active.png';

interface ImageItem {
  id: string;
  activeSrc: StaticImageData;
  highlightImage: StaticImageData;
  top: number;
  left: number;
  width: number;
  height: number;
}

const Abdominal: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const images: ImageItem[] = [
    // { id: 'epi', highlightImage: epigastrium_highlight, activeSrc: epigastrium_active, top: 0, left: 0, width: 100, height: 100 },
    // { id: 'luq', highlightImage: luq_highlight, activeSrc: luq_active, top: 0, left: 0, width: 100, height: 100 },
    // { id: 'ruq', highlightImage: ruq_highlight, activeSrc: ruq_active, top: 0, left: 0, width: 100, height: 100},
    // { id: 'llq', highlightImage: llq_highlight, activeSrc: llq_active, top: 0, left: 0, width: 100, height: 100 },
    // { id: 'rlq', highlightImage: rlq_highlight, activeSrc: rlq_active, top: 0, left: 0, width: 100, height: 100 },
    // { id: 'sup', highlightImage: suprapubic_highlight, activeSrc: suprapubic_active, top: 0, left: 0, width: 100, height: 100 },
    // { id: 'umb', highlightImage: umbilicus_highlight, activeSrc: umbilicus_active, top: 0, left: 0, width: 100, height: 100 },
  ];

  const handleImageClick = (id: string) => {
    setSelectedArea(id)
  };
  console.log(selectedArea,'select')

  return (
    
    <div className="flex justify-center items-center align-center border rounded shadow-md bg-white p-4">
        <div className='flex relative items-center max-w-[500px] lg:max-w-[600px] md:max-w-[600px] sm:max-w-[800px] bg-black'>
             <Image
              src={default_abs}
              alt="Abdominal Pain Locator"
              layout="responsive"
              width={500}
              height={700}
            />

              <span 
                id='umb'
                className="absolute border rounded-full bg-slate-300 bg-blue h-16 w-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-5 sm:h-5 " 
                style={{top: '49.5%',left: '44%'}}
                onClick={() => handleImageClick('umb')}
                >
              </span>

              <span 
                id='epi' 
                className='absolute border rounded-full bg-slate-300 bg-blue h-17 w-17 lg:w-14 lg:h-14 md:w-11 md:h-11 sm:w-6 sm:h-6' 
                style={{top: '36.5%',left: '43%'}}
                onClick={() => handleImageClick('epi')}
              />  
              <span 
                id='ruq' 
                className='absolute border rounded-full bg-slate-300 bg-blue h-17 w-17 lg:w-14 lg:h-14 md:w-11 md:h-11 sm:w-6 sm:h-6' 
                style={{top: '43.5%',left: '34%'}}
                onClick={() => handleImageClick('ruq')}
              />  
              <span 
                id='rlq' 
                className='absolute border rounded-full bg-slate-300 bg-blue h-17 w-17 lg:w-14 lg:h-14 md:w-11 md:h-11 sm:w-6 sm:h-6' 
                style={{top: '54.5%',left: '33%'}}
                onClick={() => handleImageClick('rlq')}
              /> 
              <span 
                id='suq' 
                className='absolute border rounded-full bg-slate-300 bg-blue h-17 w-17 lg:w-14 lg:h-14 md:w-11 md:h-11 sm:w-6 sm:h-6' 
                style={{top: '59.5%',left: '43.5%'}}
                onClick={() => handleImageClick('suq')}
              />  
               <span 
                id='llq' 
                className='absolute border rounded-full bg-slate-300 bg-blue h-17 w-17 lg:w-14 lg:h-14 md:w-11 md:h-11 sm:w-6 sm:h-6' 
                style={{top: '54.5%',left: '53.5%'}}
                onClick={() => handleImageClick('llq')}
              /> 
               <span 
                id='luq' 
                className='absolute border rounded-full bg-slate-300 bg-blue h-17 w-17 lg:w-14 lg:h-14 md:w-11 md:h-11 sm:w-6 sm:h-6' 
                style={{top: '43.5%',left: '53.5%'}}
                onClick={() => handleImageClick('luq')}
              />   
        
        </div>
    </div>
    // <div className="flex justify-center items-center border rounded shadow-md bg-white overflow-hidden p-4">
    //   <div className=" w-full max-w-[500px] md:max-w-[600px]">
    //     <Image
    //       src={default_abs}
    //       alt="Abdominal Pain Locator"
    //       layout="responsive"
    //       width={500}
    //       height={700}
    //       className="relative"
    //     />
    //     <div 
    //       id="epi_img" 
    //       className="absolute cursor-pointer image-container"
    //       style={{top: 3, right: 50, width: 500, height: 700, backgroundSize: 'cover'}} 
          
    //       >
    //       <Image 
    //         src={epigastrium_highlight} 
    //         className={'absolute top-0 left-0 image-container'}
    //         alt='abs'
    //         onClick={() => handleImageClick('epi_img')}
    //       />
    //     </div>
        
    //   {images.map((area) => (
    //       <div
    //         key={area.id}
    //         className="absolute cursor-pointer"
    //         style={{
    //           top: `${area.top}%`,
    //           left: `${area.left}%`,
    //           width: `${area.width}%`,
    //           height: `${area.height}%`,
    //           backgroundImage: `url(${selectedArea === area.id ? area.highlightImage.src : ''})`,
    //           backgroundSize: 'cover',
    //           backgroundPosition: 'center',
    //         }}
    //         onClick={() => handleImageClick(area.id)}
    //       >
    //         {selectedArea === area.id && (
    //           <Image
    //             src={area.activeSrc}
    //             alt={area.id}
    //             layout="fill"
    //             objectFit="cover"
    //             className="absolute top-0 left-0"
    //           />
    //         )}
    //       </div>
    //     ))} 
    //   </div>
    // </div>
  );
};

export default Abdominal;



