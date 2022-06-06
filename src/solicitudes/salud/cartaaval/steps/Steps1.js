import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import InputMask from "react-input-mask";
import CurrencyFormat from 'react-currency-format';
const Steps1 = ({ formStep1, setFormStep1, errorTipo, handleChange, handleBlur, initialValues, errors }) => {

    const [formValue, setFormValue] = useState('')
    const [isActiveTitular, setIsActiveTitular] = useState(false)
    const [isActiveBeneficiario, setIsActiveBeneficiario] = useState(false)



    const [optionCI, setOptionCI] = useState(false)
    const [optionCI2, setOptionCI2] = useState(false)

    const [optionTitular, setOptionTitular] = useState(false)
    const [optionTitular2, setOptionTitular2] = useState(false)

    const [optionBeneficiario, setOptionBeneficiario] = useState(false)
    const [optionBeneficiario2, setOptionBeneficiario2] = useState(false)



    useEffect(() => {
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
    }, [formStep1.titularObeneficiario])
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
        if (formStep1.tipoDeCedulaTitular === 'extranjero') {

            setOptionTitular(true)
        } else {
            setOptionTitular(false)
        }

        if (formStep1.tipoDeCedulaTitular === 'venezolano') {

            setOptionTitular2(true)
        } else {
            setOptionTitular2(false)
        }
    }, [formStep1.tipoDeCedulaTitular])

    useEffect(() => {
        if (formStep1.tipoDeCedulaBeneficiario === 'extranjero') {

            setOptionBeneficiario(true)
        } else {
            setOptionBeneficiario(false)
        }

        if (formStep1.tipoDeCedulaBeneficiario === 'venezolano') {

            setOptionBeneficiario2(true)
        } else {
            setOptionBeneficiario2(false)
        }
    }, [formStep1.tipoDeCedulaBeneficiario])


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false
        });
    }, [AOS])




    return (
        <>

            <div data-aos="fade-up">
                <h2 className="step-title">TRAMITACIÓN DE SINIESTROS
                    DE RECLAMOS HCM</h2>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="step-label">Es usted el titular de la póliza?</div>

                            
                            <ul class="grid grid-cols-2 gap-x-5 m-8  ml-0  ">
                                <li class="relative">
                                    <input
                                        class="sr-only peer"
                                        type="radio"
                                        value='titular'
                                        name='titularObeneficiario'
                                        id="answer_yes"
                                        onChange={(e) => setFormStep1({ ...formStep1, titularObeneficiario: e.target.value })}
                                    />
                                    <label class={` ${errors.titularObeneficiario ? 'border-red-500' : 'border-gray-300'} flex justify-center  p-5 ali bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yes">
                                    Soy el Titular
                                    </label>


                                </li>

                                <li class="relative">
                                    <input
                                        class="sr-only peer"
                                        type="radio"
                                        value='beneficiario'
                                        name='titularObeneficiario'
                                        id="answer_no"
                                        onChange={(e) => setFormStep1({ ...formStep1, titularObeneficiario: e.target.value })}
                                    />
                                    <label class={`${errors.titularObeneficiario ? 'border-red-500' : 'border-gray-300'} flex justify-center p-5 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_no">
                                    Soy Beneficiario
                                    </label>


                                </li>


                            </ul>

                           {/*  <label className="radio-inline">
                                <input
                                    type="radio"
                                    value="titular"
                                    onChange={(e) => setFormStep1({ ...formStep1, titularObeneficiario: e.target.value })}
                                    onBlur={handleBlur}

                                    name="titularObeneficiario" />
                                Soy el Titular
                            </label>
                            <label className="radio-inline">
                                <input
                                    name='titularObeneficiario'
                                    type="radio"
                                    value="beneficiario"
                                    onChange={(e) => setFormStep1({ ...formStep1, titularObeneficiario: e.target.value })}
                                    onBlur={handleBlur}
                                />
                                Soy Beneficiario
                            </label>

                            {
                                errors.titularObeneficiario &&
                                <span style={{ color: 'red' }}>
                                    Obligatorio
                                </span>
                            } */}
                        </div>

                    </div>
                </div>

                {
                    isActiveTitular && <>
                        <div className="row">
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        Nombre y Apellido del Titular
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

                                        Cedula del titular

                                    </label>

                                    <div className='flex'>

                                        <select
                                            defaultValue={''}
                                            onChange={e => setFormStep1({ ...formStep1, tipoDeCedula: e.target.value })}
                                            className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.cedulaTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            aria-label="Default select example">

                                            <option value="venezolano">V</option>
                                            <option value="extranjero">E</option>

                                        </select>
                                        <CurrencyFormat
                                            decimalScale={2}
                                            name='cedulaTitular'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            decimalSeparator={false}
                                            thousandSeparator={'.'}
                                            prefix={optionCI ? 'E ' : 'CI '}
                                            placeholder="Cédula de identidad del titular"
                                        />

                                    </div>




                                    {
                                        errors.cedulaTitular && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.cedulaTitular}  </span>
                                    }

                                </div>

                            </div>
                        </div>


                        <div className="row">

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Correo del titular

                                    </label>
                                    <input
                                        name='emailTitular'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.emailTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico del titular"
                                    />

                                    {
                                        errors.emailTitular && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.emailTitular}  </span>
                                    }


                                </div>

                            </div>
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Numero de telefono del titular

                                    </label>
                                    {/*   <input
                                        name='celularTitular'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="4240000000"
                                    /> */}
                                    <InputMask
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        mask="+5\8 999 999 9999"
                                        placeholder="+58 000 000 0000"
                                        onBlur={handleBlur}
                                        maskPlaceholder={null}
                                        name='celularTitular'
                                        onChange={handleChange} />


                                    {
                                        errors.celularTitular && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.celularTitular}  </span>
                                    }

                                </div>

                            </div>
                        </div></>

                }

                {
                    isActiveBeneficiario &&
                    <>
                        <div className="row">

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Nombre y Apellido del titular de la póliza

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
                            {/* <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">

                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Apellido del titular

                                    </label>
                                    <input
                                        name='apellidoTitularPoliza2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.apellidoTitularPoliza2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Apellido del titular de la póliza"
                                    />


                                    {
                                        errors.apellidoTitularPoliza2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.apellidoTitularPoliza2}  </span>
                                    }

                                </div>

                            </div> */}
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Cédula del titular

                                    </label>


                                    <div class="flex">

                                        <select
                                            defaultValue={''}
                                            onChange={e => setFormStep1({ ...formStep1, tipoDeCedulaTitular: e.target.value })}
                                            className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.cedulaTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            aria-label="Default select example">

                                            <option value="venezolano">V</option>
                                            <option value="extranjero">E</option>

                                        </select>
                                        <CurrencyFormat
                                            decimalScale={2}
                                            name='cedulaTitular2'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            decimalSeparator={false}
                                            thousandSeparator={'.'}
                                            prefix={optionTitular ? 'E ' : 'CI '}
                                            placeholder="Cédula de identidad del titular"
                                        />
                                    </div>

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

                                        Correo electrónico

                                    </label>
                                    <input
                                        name='emailTitular2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.emailTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico"
                                    />
                                    {
                                        errors.emailTitular2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.emailTitular2}  </span>
                                    }
                                </div>

                            </div>
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Celular del titular

                                    </label>
                                    {/* <input
                                        name='celularTitular2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="424000000"
                                    /> */}
                                    <InputMask
                                        onChange={handleChange}
                                        placeholder="+58 000 000 0000"
                                        maskPlaceholder={null}
                                        mask="+5\8 999 999 9999"
                                        onBlur={handleBlur}

                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        name='celularTitular2'


                                    />
                                    {
                                        errors.celularTitular2 && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.celularTitular2}  </span>
                                    }
                                </div>


                            </div>
                        </div>

                        <div className="row">

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Nombre y Apellido del beneficiario

                                    </label>
                                    <input
                                        name='nombreBeneficiarioPoliza'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreBeneficiarioPoliza ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Nombre del beneficiario de la póliza"
                                    />
                                    {
                                        errors.nombreBeneficiarioPoliza && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.nombreBeneficiarioPoliza}  </span>
                                    }


                                </div>


                            </div>
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Cédula de identidad del beneficiario

                                    </label>

                                    <div class="flex">

                                        <select
                                            defaultValue={''}
                                            onChange={e => setFormStep1({ ...formStep1, tipoDeCedulaBeneficiario: e.target.value })}
                                            className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.cedulaBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            aria-label="Default select example">

                                            <option value="venezolano">V</option>
                                            <option value="extranjero">E</option>

                                        </select>
                                        <CurrencyFormat
                                            decimalScale={2}
                                            name='cedulaBeneficiario'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            decimalSeparator={false}
                                            thousandSeparator={'.'}
                                            prefix={optionBeneficiario ? 'E ' : 'CI '}
                                            placeholder="Cédula de identidad del titular"
                                        />
                                    </div>

                                </div>

                            </div>
                            {/*  <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Apellido del beneficiario de la póliza

                                    </label>
                                    <input
                                        name='apellidoBeneficiarioPoliza'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.apellidoBeneficiarioPoliza ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Apellido del beneficiario de la póliza"
                                    />
                                    {
                                        errors.apellidoBeneficiarioPoliza && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.apellidoBeneficiarioPoliza}  </span>
                                    }

                                </div>

                            </div> */}
                        </div>
                        <div data-aos="fade-left" className="row">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Correo electrónico del beneficiario

                                    </label>
                                    <input
                                        name='emailBeneficiario'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.emailBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico del beneficiario"
                                    />
                                    {
                                        errors.emailBeneficiario && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.emailBeneficiario}  </span>
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">

                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Celular del beneficiario

                                    </label>
                                    {/*  <input
                                        name='celularBeneficiario'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="4240000000"
                                    /> */}
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
                    </>
                }
            </div>
        </>
    )
}

export default Steps1