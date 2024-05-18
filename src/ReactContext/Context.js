// import React, {createContext, useState} from 'react';

    
// const contextData = createContext();

// const contextDataProvider = ({children}) =>{  

// //child components
// const [slotSpaceImage, setSlotSpaceImage] = useState(''); //one

// const newSlotSpace = (newValue) => { //use for update
//     setSlotSpaceImage(newValue);
// };

// const [timings , setTimings] = useState('');//two

// const newTimings = (newValue) => { //use for update
//     setTimings(newValue);
// };

// const [slotNumber, setSlotNumber] = useState(''); //three

// const newSlotNumber = (newValue) => { //use for update
//     setSlotNumber(newValue) ;
// }





// return (
//     <contextData.Provider value={{slotSpaceImage, newSlotSpace, timings, newTimings, slotNumber, newSlotNumber}}>
//         {children}
//     </contextData.Provider>
//   );
// }



// export {contextData, contextDataProvider};


import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [image, setImage] = useState('');

    const newSlotSpace = (newValue) => {
        setImage(newValue);
    };

    const [timing, setTiming] = useState('');

    const newTimings = (newValue) => {
        setTiming(newValue);
    };

    const [slotNumber, setSlotNumber] = useState('');

    const newSlotNumber = (newValue) => {
        setSlotNumber(newValue);
    };

    return (
        <DataContext.Provider value={{ image, newSlotSpace, timing, newTimings, slotNumber, newSlotNumber }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };