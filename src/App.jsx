import React, { useEffect } from "react";
import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

export const App = () => {
  const [pacientes, setPacientes] = useState([]); //Aqui almacena la info de todos los usuarios
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacienteLocalStorage =
        JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacienteLocalStorage);
    };
    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const onDeletePaciente = (id) => {
    const pacientesActulizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActulizados);
  };

  return (
    <div className="mt-3 p-5">
      <Header />
      <div className=" md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          onDeletePaciente={onDeletePaciente}
        />
      </div>
    </div>
  );
};
