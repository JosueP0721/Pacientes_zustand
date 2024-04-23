import { usePatientStore } from "../store"
import { Patient } from "../types"
import { toast } from 'react-toastify'
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

    const {deletePatient, getPatientById}  = usePatientStore()

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente Eliminado')
    }

    return (
        <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem 
                label="ID"
                data={patient.id}
            /> 
            <PatientDetailItem 
                label="Nombre"
                data={patient.name}
            /> 
            <PatientDetailItem 
                label="Propietario"
                data={patient.caretraker}
            /> 
            <PatientDetailItem 
                label="Email"
                data={patient.email}
            /> 
            <PatientDetailItem 
                label="Fecha Alta"
                data={patient.date.toString()}
            /> 
            <PatientDetailItem 
                label="Síntomas"
                data={patient.symptoms}
            />   

            <div className=" flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className=" px-10 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className=" px-10 py-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleClick}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
