import React from "react";
import { Formulario } from "./components/Formulario";

import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

export const App = () => {
  return (
    <div className="mt-3 p-5">
      <Header />
      <div className=" md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
};
