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
import PhoneInput from 'react-phone-input-2';




const Steps2 = ({ setFileSelect, fileSelect, formStep1, setFormStep1, handleChange, handleBlur, errors, startDate, setStartDate, handleFile, setErrorFile, errorFile, initialValues, updateData, phonestate, setPhonestate }) => {


    const [options, setOptions] = useState(false)



    const [optionCI, setOptionCI] = useState(false)
    const [optionCI2, setOptionCI2] = useState(false)
    useEffect(() => {
        if (formStep1.tipoDeCedula === 'extranjero') {
            setOptionCI(true)
        } else {
            setOptionCI(false)
        }
        if (formStep1.tipoDeCedula === 'venezolano') {
            setOptionCI2(true)
        } else {
            setOptionCI2(false)
        }
    }, [formStep1.tipoDeCedula])

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
            once: true
        });
    }, [])

    /*  useEffect(() => {
         if (phonestate.phoneTitular2 !== '') {
             errors.celularConductor = false
         }
     }, [phonestate.phoneTitular2]) */





    return (
        <>
            <div data-aos="fade-up" >
                <h6 className="step-steps1Title2">¿AL MOMENTO DE OCURRENCIA DEL SINIESTRO EL CONDUCTOR ERA
                    DIFERENTE AL TITULAR DE LA PÓLIZA? </h6>
                <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md ">
                    <li className="relative">
                        <input
                            defaultChecked={formStep1?.SioNo === 'si' && true}
                            className="sr-only peer" type="radio" value="si" name="siOno" id="answer_yes" onChange={e => setFormStep1({ ...formStep1, SioNo: e.target.value })} />
                        <label className={` ${errors.siOno ? 'border-red-500' : 'border-gray-300'}  flex justify-center p-5 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent `} for="answer_yes">Sí</label>


                    </li>

                    <li className="relative">
                        <input
                            defaultChecked={formStep1?.SioNo === 'no' && true}
                            className="sr-only peer" type="radio" value="no" name="siOno" id="answer_no" onChange={e => setFormStep1({ ...formStep1, SioNo: e.target.value })} />
                        <label className={` ${errors.siOno ? 'border-red-500' : 'border-gray-300'}  flex justify-center p-5 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent `} for="answer_no">No</label>


                    </li>


                </ul>

                {
                    options && (
                        <div data-aos="fade-up">



                            <div className="row">

                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Nombre y Apellido del conductor

                                        </label>
                                        <input
                                            defaultValue={updateData?.nombreConductor}
                                            name='nombreConductor'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreConductor ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Nombre del titular de la póliza"
                                        />
                                        {
                                            errors.nombreConductor && <span data-aos="zoom-in" className='errrorMsg'> {errors.nombreConductor}  </span>
                                        }




                                    </div>

                                </div>

                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Cédula de identidad

                                        </label>

                                        <div className="flex">

                                            <select

                                                defaultValue={''}
                                                onChange={e => setFormStep1({ ...formStep1, tipoDeCedula: e.target.value })}
                                                className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.cedulaConductor ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                aria-label="Default select example">

                                                <option value="venezolano">V</option>
                                                <option value="extranjero">E</option>

                                            </select>
                                            <CurrencyFormat
                                                defaultValue={updateData?.cedulaConductor}
                                                decimalScale={2}
                                                name='cedulaConductor'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaConductor ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                decimalSeparator={false}
                                                thousandSeparator={'.'}
                                                prefix={optionCI ? 'E ' : 'C.I '}
                                                placeholder="Cédula de identidad del titular"
                                            />
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div className="row">

                                <div data-aos="fade-left" className="col-sm-6">



                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Fecha de nacimiento
                                    </label>



                                    <CurrencyFormat
                                        defaultValue={updateData?.fechaConductor}
                                        format="##/##/####"
                                        placeholder="DD/MM/AAAA"
                                        name='fechaConductor'
                                        mask={['D', 'D', 'M', 'M', 'A', 'A', 'A', 'A']}
                                        onChange={handleChange}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.fechaConductor ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                    />





                                </div>

                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Grado de licencia

                                        </label>
                                        <select
                                            defaultValue={updateData?.gradoConductor}
                                            name='gradoConductor'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.gradoConductor ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}>
                                            <option value={'Selecciona'}>Selecciona </option>
                                            <option value={'Segundo grado'}>Segundo grado</option>
                                            <option value={'Tercer grado'}>Tercer grado</option>
                                            <option value={'Cuarto grado'}>Cuarto grado</option>
                                            <option value={'Quinto grado'}>Quinto grado</option>
                                        </select>
                                    </div>


                                </div>
                            </div>


                            <div className="row">
                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            CORREO ELECTRÓNICO DEL CONDUCTOR

                                        </label>
                                        <input
                                            defaultValue={updateData?.correoConductor}
                                            name='correoConductor'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.correoConductor ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Correo Electronico"
                                        />
                                        {
                                            errors.correoConductor && <span data-aos="zoom-in" className='errrorMsg'> {errors.correoConductor}  </span>
                                        }
                                    </div>


                                </div>

                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">

                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            NÚMERO DE TELÉFONO del conductor

                                        </label>
                                        {/*  <InputMask
                                            defaultValue={updateData?.celularConductor}
                                            onChange={handleChange}
                                            placeholder="+58 000 000 0000"
                                            maskPlaceholder={null}
                                            name='celularConductor'
                                            mask="+5\8 999 999 9999"
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularConductor ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        /> */}

                                        <PhoneInput
                                            country={'ve'}
                                            name='celularConductor'
                                            placeholder=''
                                            inputClass={`${errors.celularConductor && "rojo_erros"} `}
                                            onChange={(v, c, e, f) => setPhonestate({ ...phonestate, phoneTitular2: e.target.value })}
                                            masks={{ ve: '(...) ...-....' }}
                                        />
                                        {
                                            errors.celularConductor && <span data-aos="zoom-in" className='errrorMsg'> {errors.celularConductor}  </span>
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