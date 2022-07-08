import React from "react";
import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

export const App = () => {
  const [pacientes, setPacientes] = useState([]); //Aqu almaena la info de todos los usuarios
  const [paciente, setPaciente] = useState({});

  return (
    <div className="mt-3 p-5">
      <Header />
      <div className=" md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
      </div>
    </div>
  );
};
