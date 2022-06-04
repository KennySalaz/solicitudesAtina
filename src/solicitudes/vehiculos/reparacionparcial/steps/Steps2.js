import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../../css/bootstrap.min.css'
import '../../../../css/font.css'
import '../../../../css/plugins.css'
import '../../../../css/style.css'
import DataPicker from '../../../../Componentes/DataPicker';
import CurrencyFormat from 'react-currency-format';
import InputMask from "react-input-mask";




const Steps2 = ({ setFileSelect, fileSelect, formStep1, setFormStep1, handleChange, handleBlur, errors, startDate, setStartDate, handleFile, setErrorFile, errorFile, initialValues }) => {


    const [options, setOptions] = useState(false)





    useEffect(() => {

        if (formStep1.SioNo === 'si') {
            setOptions(true)
        } else if (formStep1.SioNo === 'no') {
            setOptions(false)
        }
    }, [formStep1.SioNo])





    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false
        });
    })

    useEffect(() => {
        console.log('aqui la  fechaaa', startDate)

    }, [startDate])







    return (
        <>
            <div data-aos="fade-up" >


                <h2 className="step-title">¿Al momento de ocurrencia del siniestro el conductor era diferente al titular de la póliza? </h2>
                <ul class="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                    <li class="relative">
                        <input class="sr-only peer" type="radio" value="si" name="siOno" id="answer_yes" onChange={e => setFormStep1({ ...formStep1, SioNo: e.target.value })} />
                        <label class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent" for="answer_yes">Si</label>

                        <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                            👍
                        </div>
                    </li>

                    <li class="relative">
                        <input class="sr-only peer" type="radio" value="no" name="siOno" id="answer_no" onChange={e => setFormStep1({ ...formStep1, SioNo: e.target.value })} />
                        <label class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent" for="answer_no">No</label>

                        <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                            👎
                        </div>
                    </li>


                </ul>

                {
                    options && (
                        <div data-aos="fade-up">



                            <div className="row">

                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Nombre y Apellido del conductor

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

                                <div className="col-sm-6">
                                    <div className="form-group">

                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Celular del beneficiario

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
                    )
                }










            </div>
        </>
    )
}

export default Steps2