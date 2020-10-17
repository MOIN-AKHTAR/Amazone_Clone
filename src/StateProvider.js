import React,{useContext,createContext,useReducer} from 'react';


const myContext=createContext();

export const ContextProvider=({initialState,reducer,children})=>(
    <myContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </myContext.Provider>
);

export const useContextValue=()=>useContext(myContext);



