import React  from "react";

export const ResultContext =  React.createContext();
export const AutoCompleteContext = React.createContext();

export const ResultProvider = ResultContext.Provider
export const AutoCompleteProvider =AutoCompleteContext.Provider