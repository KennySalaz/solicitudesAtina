import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import InputMask from "react-input-mask";
import DataPicker from '../../../../Componentes/DataPicker';
import CurrencyFormat from 'react-currency-format';

const Steps1 = ({ formStep1, setFormStep1, errorTipo, handleChange, handleBlur, initialValues, errors, startDate, setStartDate }) => {

    const [formValue, setFormValue] = useState('')
    const [isActiveTitular, setIsActiveTitular] = useState(false)
    const [isActiveBeneficiario, setIsActiveBeneficiario] = useState(false)



    const [optionCI, setOptionCI] = useState(false)
    const [optionCI2, setOptionCI2] = useState(false)

    const [optionTitular, setOptionTitular] = useState(false)
    const [optionTitular2, setOptionTitular2] = useState(false)

    const [optionBeneficiario, setOptionBeneficiario] = useState(false)
    const [optionBeneficiario2, setOptionBeneficiario2] = useState(false)


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
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false
        });
    }, [AOS])

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
                                name='nombreTitularPoliza'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreTitularPoliza ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Nombre del titular de la póliza"
                            />
                            {
                                errors.nombreTitularPoliza && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.nombreTitularPoliza}  </span>
                            }




                        </div>

                    </div>

                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Cédula de identidad

                            </label>

                            <div class="flex">

                                <select
                                    defaultValue={''}
                                    onChange={e => setFormStep1({ ...formStep1, tipoDeCedula: e.target.value })}
                                    className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.cedulaIdentidad ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                    aria-label="Default select example">

                                    <option value="venezolano">V</option>
                                    <option value="extranjero">E</option>

                                </select>
                                <CurrencyFormat
                                    decimalScale={2}
                                    name='cedulaIdentidad'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaIdentidad ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                    decimalSeparator={false}
                                    thousandSeparator={'.'}
                                    prefix={optionCI ? 'E ' : 'CI '}
                                    placeholder="Cédula de identidad del titular"
                                />
                            </div>
                            {/*  <input
                                name='cedulaIdentidad'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaIdentidad ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Cédula de identidad"
                            />
                            {
                                errors.cedulaIdentidad && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.cedulaIdentidad}  </span>
                            } */}
                        </div>


                    </div>
                </div>
                <div className="row">

                    <div data-aos="fade-left" className="col-sm-6">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                            Fecha de nacimiento
                        </label>



                        <CurrencyFormat
                            format="##/##/####"
                            placeholder="DD/MM/AAAA"
                            name='fechaNacimiento'
                            mask={['D', 'D', 'M', 'M', 'A', 'A', 'A', 'A']}
                            onChange={handleChange}
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.fechaNacimiento ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                        />
                    </div>

                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Grado de licencia

                            </label>
                            <select
                                name='gradoLicencia'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.gradoLicencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}>
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
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Placa de vehiculo

                            </label>
                            <input
                                name='placaVehiculo'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.placaVehiculo ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Placa de vehiculo"
                            />
                            {
                                errors.placaVehiculo && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.placaVehiculo}  </span>
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
                                name='modelo'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.modelo ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Modelo"
                            />
                            {
                                errors.modelo && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.modelo}  </span>
                            }
                        </div>


                    </div>
                </div>
                <div className="row">
                    <div data-aos="fade-left" className="col-sm-6">
                        <div className="form-group">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                Marca

                            </label>
                            <input
                                name='marca'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.marca ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Marca"
                            />
                            {
                                errors.marca && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.marca}  </span>
                            }
                        </div>


                    </div>

                    <div data-aos="fade-left" className="col-sm-6">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                            Año
                        </label>


                        <CurrencyFormat
                            format="####"
                            placeholder="Año del vehiculo"
                            name='ano'

                            onChange={handleChange}
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.ano ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                        />


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
                                name='emailTitular'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.emailTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                id="grid-last-name"
                                type="text"
                                placeholder="Email"
                            />
                            {
                                errors.emailTitular && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.emailTitular}  </span>
                            }
                        </div>


                    </div>

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
                                name='celularTitular'
                                mask="+5\8 999 999 9999"
                                onBlur={handleBlur}
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                            />


                            {
                                errors.celularTitular && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.celularTitular}  </span>
                            }
                        </div>

                    </div>
                </div>





            </div>
        </>
    )
}

export default Steps1