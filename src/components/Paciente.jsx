import React from "react";

export const Paciente = ({ paciente, setPaciente }) => {
  const { nameMascota, namePropietario, email, alta, sintomas } = paciente;

  return (
    <div
      className="m-3 bg-white shadow-md px-5 py-10 rounded-xl
      "
    >
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nameMascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{namePropietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          onClick={() => setPaciente(paciente)}
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
