import { createContext, useContext } from 'react';

const AxiosContext = createContext();

const useAxiosInstances = () => useContext(AxiosContext);

export { AxiosContext, useAxiosInstances };
