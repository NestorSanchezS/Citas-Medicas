import React, { useEffect, useState } from "react";
import { Error } from "./Error";

export const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [error, setError] = useState(false);
  const [valueInput, setValueInput] = useState({
    nameMascota: "",
    namePropietario: "",
    email: "",
    alta: "",
    sintomas: "",
  });

  const { nameMascota, namePropietario, email, alta, sintomas } = valueInput;

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setValueInput(paciente);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  const onError = () => {
    if (
      [
        valueInput.nameMascota,
        valueInput.namePropietario,
        valueInput.email,
        valueInput.alta,
        valueInput.sintomas,
      ].includes("")
    ) {
      setError(true);
    } else {
      setError(false);
    }

    if (valueInput.email.includes("@")) {
      setError(true);
    }

    if (valueInput.sintomas.length < 4) {
      setError(true);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const objetoPaciente = {
      nameMascota,
      namePropietario,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      //editando registro
      objetoPaciente.id == paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
    } else {
      //nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setValueInput({
      nameMascota: "",
      namePropietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmitForm}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p className="text-center">Todos los campos son requeridos</p>
          </Error>
        )}
        <div>
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            onChange={handleInputChange}
            value={valueInput.nameMascota}
            name="nameMascota"
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            onChange={handleInputChange}
            value={valueInput.namePropietario}
            name="namePropietario"
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            onChange={handleInputChange}
            value={valueInput.email}
            name="email"
            id="email"
            type="email"
            placeholder="Email contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
          {error && <Error>Debe incluir @</Error>}
        </div>

        <div className="mt-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            onChange={handleInputChange}
            value={valueInput.alta}
            name="alta"
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold "
          >
            Sintomas
          </label>
          <textarea
            onChange={handleInputChange}
            value={valueInput.sintomas}
            name="sintomas"
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
            placeholder="Describe los Sintomas"
          />
          {error && <Error>Debe contener mas de 4 digitos</Error>}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-opacity"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};
