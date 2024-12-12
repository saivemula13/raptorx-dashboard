import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptoData } from '../../Slice/cryptoSlice';

const CryptoDataProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchInterval = setInterval(() => {
            dispatch(fetchCryptoData());
        }, 5000); 

        dispatch(fetchCryptoData()); 

        return () => clearInterval(fetchInterval); 
    }, [dispatch]);

    return <>{children}</>;
};

export default CryptoDataProvider;
 