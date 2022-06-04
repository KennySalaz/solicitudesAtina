import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import InputMask from "react-input-mask";
import DataPicker from '../../../../Componentes/DataPicker';

const Steps1 = ({ formStep1, setFormStep1, errorTipo, handleChange, handleBlur, initialValues, errors, startDate, setStartDate }) => {

    const [formValue, setFormValue] = useState('')
    const [isActiveTitular, setIsActiveTitular] = useState(false)
    const [isActiveBeneficiario, setIsActiveBeneficiario] = useState(false)



    /* useEffect(() => {
        if (formStep1.titularObeneficiario === 'titular') {

            setIsActiveTitular(true)
        } else {
            setIsActiveTitular(false)
        }


        if (formStep1.titularObeneficiario === 'beneficiario') {

            setIsActiveBeneficiario(true)
        } else {
            setIsActiveBeneficiario(false)
        }
    }, [formStep1.titularObeneficiario]) */


    useEffect(() => {
        AOS.init({

            duration: 1000,
            easing: 'ease',
            once: false
        });


    })

    useEffect(() => {

        console.log("AQUIIIIIIIIII",
            initialValues.celularTitular,
            initialValues.nombreTitularPoliza
        )
    }, [initialValues.celularTitular, initialValues.nombreTitularPoliza])


    return (
        <>

            <div data-aos="fade-up">
                <h2 className="step-title">Datos personales y del vehículo </h2>


                <div className="row">

                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Nombre y Apellido del titular de la poliza

                            </label>
                            <input
                                name='nombreTitularPoliza2'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreTitularPoliza2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Nombre del titular de la póliza"
                            />
                            {
                                errors.nombreTitularPoliza2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.nombreTitularPoliza2}  </span>
                            }




                        </div>

                    </div>

                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Cédula de identidad

                            </label>
                            <input
                                name='cedulaTitular2'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Cédula de identidad"
                            />
                            {
                                errors.cedulaTitular2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.cedulaTitular2}  </span>
                            }
                        </div>


                    </div>
                </div>
                <div className="row">

                    <div data-aos="fade-left" className="col-sm-6">


                        <label
                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                            {
                                errors.fechaOcurrencia ?
                                    <span style={{ color: 'red' }}>
                                        Obligatorio
                                    </span>
                                    :
                                    <span >
                                        Fecha de nacimiento
                                    </span>
                            }

                        </label>

                        <DataPicker startDate={startDate} setStartDate={setStartDate} />



                    </div>

                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Grado de licencia

                            </label>
                            <input
                                name='cedulaTitular2'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Grado de licencia"
                            />
                            {
                                errors.cedulaTitular2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.cedulaTitular2}  </span>
                            }
                        </div>


                    </div>
                </div>
                <div className="row">

                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Placa de vehiculo

                            </label>
                            <input
                                name='nombreTitularPoliza2'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreTitularPoliza2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Placa de vehiculo"
                            />
                            {
                                errors.nombreTitularPoliza2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.nombreTitularPoliza2}  </span>
                            }




                        </div>

                    </div>

                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Modelo

                            </label>
                            <input
                                name='cedulaTitular2'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Modelo"
                            />
                            {
                                errors.cedulaTitular2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.cedulaTitular2}  </span>
                            }
                        </div>


                    </div>
                </div>
                <div className="row">

                    <div data-aos="fade-left" className="col-sm-6">


                        <label
                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                            {
                                errors.fechaOcurrencia ?
                                    <span style={{ color: 'red' }}>
                                        Obligatorio
                                    </span>
                                    :
                                    <span >
                                        Año
                                    </span>
                            }

                        </label>

                        <DataPicker startDate={startDate} setStartDate={setStartDate} />



                    </div>

                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Correo Electronico

                            </label>
                            <input
                                name='cedulaTitular2'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Modelo"
                            />
                            {
                                errors.cedulaTitular2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.cedulaTitular2}  </span>
                            }
                        </div>


                    </div>
                </div>
                <div className="row">


                    <div className="col-sm-6">
                        <div className="form-group">

                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Celular

                            </label>
                            <InputMask
                                onChange={handleChange}
                                placeholder="+58 000 000 0000"
                                maskPlaceholder={null}
                                name='celularBeneficiario'
                                mask="+5\8 999 999 9999"
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                            />


                            {
                                errors.celularBeneficiario && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.celularBeneficiario}  </span>
                            }
                        </div>

                    </div>
                </div>





            </div>
        </>
    )
}

export default Steps1