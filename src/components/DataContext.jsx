import { createContext } from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  //Creamos los estados que queremos que vean los demas componentes
  const [query, setQuery ] = useState("Mickey%20Mouse");
  //llamamos al hook
  const {cargando, error, datos} = useFetch(`=${query}`);

  return (
    <DataContext.Provider value={{setQuery, cargando, error, datos }}>  {/*Definimos que estados queremos que compartan nuestros componentes*/}
      {children}
    </DataContext.Provider>
  )
}