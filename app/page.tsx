'use client'
import React, { useState } from 'react';
import Abdominal from './components/AbdominalPain';
import Finger from './components/FingerPain';

const Home: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'abdominal' | 'finger'>('abdominal');

  return (
    <div className='flex justify-center items-center w-full h-screen'>
     {/* <div>
        <button onClick={() => setActiveComponent('finger')}>Show Finger</button>
      </div>  */}
    
        {
          activeComponent === 'abdominal' ?
            <Abdominal /> 
            :<Finger/>
        }
      

    </div>
  );
};

export default Home;