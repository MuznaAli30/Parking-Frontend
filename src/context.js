import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [image, setImage] = useState('');

    const updateImage = (newValue) => {
        setImage(newValue);
    };

    const [timing, setTiming] = useState('');

    const updateTiming = (newValue) => {
        setTiming(newValue);
    };

    const [number, setNumber] = useState('');

    const updateNumber = (newValue) => {
        setNumber(newValue);
    };

    return (
        <DataContext.Provider value={{ image, updateImage, timing, updateTiming, number, updateNumber }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
