'use client'
import React, { useState } from 'react';
import Abdominal from './components/AbdominalPain';
import Finger from './components/FingerPain';

export default function Home () {
  const [activeComponent, setActiveComponent] = useState<'abdominal' | 'finger'>('abdominal');
 
  return (
    <div className='flex justify-center items-center w-full h-screen'>
     {/* <div>
        <button onClick={() => setActiveComponent('finger')}>Show Finger</button>
      </div>  */}
        {/* <Abdominal/> */}
        <Finger/>
        {/* {
          activeComponent === 'abdominal' ?
            <Abdominal /> 
            :<Finger/>
        } */}
      
    </div>
  );
};
