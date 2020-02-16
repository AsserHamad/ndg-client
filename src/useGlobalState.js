import { createContext, useReducer, useContext } from 'react';
import React from 'react';

const GlobalStateContext = createContext();

const SET_LANG = 'SET_LANG';

const initialState = {
    lang: {
        lang: 'en'
    }
};

const globalStateReducer = (state, action) => {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                lang: action.payload
            };
        default:
            return state;
    }
}

export const GlobalStateProvier = ({ children }) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    )
}

const useGlobalState = () => {
    const [state, dispatch] = useContext(GlobalStateContext);
  
    const setLang = (lang) => {
        console.log('lang is', lang)
      dispatch({ 
        type: SET_LANG, 
        payload: { 
          lang
        } 
      });
    };
  
    return {
      setLang,
      lang: state.lang,
    };
  };
  
  export default useGlobalState;