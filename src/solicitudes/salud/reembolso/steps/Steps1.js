import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import InputMask from "react-input-mask";
import CurrencyFormat from 'react-currency-format';
import PhoneInput from 'react-phone-input-2';

const Steps1 = ({ formStep1, setFormStep1, errorTipo, handleChange, handleBlur, initialValues, errors, updateData, phonestate, setPhonestate }) => {

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
            once: true
        });
    }, [])

    useEffect(() => {
        if (phonestate.phoneBeneficiario !== '') {

            errors.celularBeneficiario = false

        }
    }, [phonestate.phoneBeneficiario])


    useEffect(() => {
        if (phonestate.phoneTitular !== '') {

            errors.celularTitular = false

        }
    }, [phonestate.phoneTitular])

    useEffect(() => {
        if (phonestate.phoneTitular2 !== '') {

            errors.celularTitular2 = false

        }
    }, [phonestate.phoneTitular2])





    return (
        <>

            <div data-aos="fade-up">

                <h6 className="step-steps1Title">¿ES USTED TITULAR DE LA PÓLIZA?</h6>

                {/*  <h2 className="step-title">TRAMITACIÓN DE SINIESTROS
                    DE RECLAMOS HCM</h2> */}
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            {/*  <div className="step-label">Es usted el titular de la póliza?</div> */}


                            <ul className="grid grid-cols-2 gap-x-5 m-8  ml-0  ">
                                <li className="relative">
                                    <input
                                        defaultChecked={formStep1?.titularObeneficiario === 'titular' && true}
                                        className="sr-only peer"
                                        type="radio"
                                        value='titular'
                                        name='titularObeneficiario'
                                        id="answer_yes"
                                        onChange={(e) => setFormStep1({ ...formStep1, titularObeneficiario: e.target.value })}
                                    />
                                    <label className={` ${errors.titularObeneficiario ? 'border-red-500' : 'border-gray-300'} flex justify-center  p-5 ali bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yes">
                                        Soy el Titular
                                    </label>


                                </li>

                                <li className="relative">
                                    <input
                                        defaultChecked={formStep1?.titularObeneficiario === 'beneficiario' && true}
                                        className="sr-only peer"
                                        type="radio"
                                        value='beneficiario'
                                        name='titularObeneficiario'
                                        id="answer_no"
                                        onChange={(e) => setFormStep1({ ...formStep1, titularObeneficiario: e.target.value })}
                                    />
                                    <label className={`${errors.titularObeneficiario ? 'border-red-500' : 'border-gray-300'} flex justify-center p-5 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_no">
                                        Soy Beneficiario
                                    </label>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                {/*  <div className="step-label_2">Datos del intermediario</div> */}
                {/*  <div className="row">

                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="formLabel" for="Codigo">Codigo</label>
                            <input type="text" className="formInput" id='Codigo' name="Codigo"
                            />
                        </div>
                    </div>
                </div>
 */}
                {
                    isActiveTitular && <>
                        <div className="row">

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        Nombre y Apellido del titular
                                    </label>
                                    <input
                                        defaultValue={updateData?.nombreTitularPoliza}
                                        name='nombreTitularPoliza'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreTitularPoliza ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Nombre del titular de la póliza"
                                    />
                                    {
                                        errors.nombreTitularPoliza && <span data-aos="zoom-in" className='errrorMsg'> {errors.nombreTitularPoliza}  </span>
                                    }




                                </div>

                            </div>

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        cédula del titular

                                    </label>
                                    <div className="flex">

                                        <select
                                            defaultValue={formStep1?.tipoDeCedula}
                                            onChange={e => setFormStep1({ ...formStep1, tipoDeCedula: e.target.value })}
                                            className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.cedulaTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            aria-label="Default select example">

                                            <option value="venezolano">V</option>
                                            <option value="extranjero">E</option>

                                        </select>
                                        <CurrencyFormat
                                            defaultValue={updateData?.cedulaTitular}
                                            decimalScale={2}
                                            name='cedulaTitular'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            decimalSeparator={false}
                                            thousandSeparator={'.'}
                                            prefix={optionCI ? 'E ' : 'C.I '}
                                            placeholder="Cédula de identidad del titular"
                                        />
                                    </div>
                                    {
                                        errors.cedulaTitular && <span data-aos="zoom-in" className='errrorMsg'> {errors.cedulaTitular}  </span>
                                    }

                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        CORREO ELECTRÓNICO DEL TITULAR

                                    </label>
                                    <input
                                        defaultValue={updateData?.emailTitular}
                                        name='emailTitular'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.emailTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico del titular"
                                    />

                                    {
                                        errors.emailTitular && <span data-aos="zoom-in" className='errrorMsg'> {errors.emailTitular}  </span>
                                    }


                                </div>

                            </div>
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        NÚMERO DE TELÉFONO DEL TITULAR

                                    </label>
                                    {/*  <InputMask
                                        defaultValue={updateData?.celularTitular}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        mask="+5\8 999 999 9999"
                                        placeholder="+58 000 000 0000"
                                        onBlur={handleBlur}
                                        maskPlaceholder={null}
                                        name='celularTitular'
                                        onChange={handleChange} />
                                        
 */}

                                    <PhoneInput
                                        country={'ve'}
                                        name='celularTitular'
                                        placeholder=''
                                        inputClass={`${errors.celularTitular && "rojo_erros"} `}
                                        onChange={(v, c, e, f) => setPhonestate({ ...phonestate, phoneTitular: e.target.value })}
                                        masks={{ ve: '(...) ...-....' }}
                                    />


                                    {
                                        errors.celularTitular && <span data-aos="zoom-in" className='errrorMsg'> {errors.celularTitular}  </span>
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
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Nombre y Apellido del titular

                                    </label>
                                    <input
                                        defaultValue={updateData?.nombreTitularPoliza2}
                                        name='nombreTitularPoliza2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreTitularPoliza2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Nombre del titular de la póliza"
                                    />
                                    {
                                        errors.nombreTitularPoliza2 && <span data-aos="zoom-in" className='errrorMsg'> {errors.nombreTitularPoliza2}  </span>
                                    }




                                </div>

                            </div>

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Cédula del titular

                                    </label>
                                    <div className="flex">

                                        <select
                                            defaultValue={formStep1?.tipoDeCedulaTitular}
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
                                            prefix={optionTitular ? 'E ' : 'C.I '}
                                            placeholder="Cédula de identidad del titular"
                                            defaultValue={updateData?.cedulaTitular2}
                                        />
                                    </div>
                                    {/*  <input
                                        name='cedulaTitular2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Cédula de identidad"
                                    /> */}
                                    {
                                        errors.cedulaTitular2 && <span data-aos="zoom-in" className='errrorMsg'> {errors.cedulaTitular2}  </span>
                                    }


                                </div>


                            </div>
                        </div>


                        <div className="row">

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Correo electrónico del titular

                                    </label>
                                    <input
                                        defaultValue={updateData?.emailTitular2}
                                        name='emailTitular2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.emailTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico"
                                    />
                                    {
                                        errors.emailTitular2 && <span data-aos="zoom-in" className='errrorMsg'> {errors.emailTitular2}  </span>
                                    }
                                </div>

                            </div>
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        NÚMERO DE TELÉFONO DEL TITULAR

                                    </label>
                                    {/* <InputMask
                                        onChange={handleChange}
                                        placeholder="+58 000 000 0000"
                                        maskPlaceholder={null}
                                        mask="+5\8 999 999 9999"
                                        onBlur={handleBlur}
                                        defaultValue={updateData?.celularTitular2}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        name='celularTitular2'


                                    /> */}

                                    <PhoneInput
                                        defaultValue={phonestate?.phoneTitular2}
                                        country={'ve'}

                                        inputClass={`${errors.celularTitular2 && "rojo_erros"} `}
                                        name='celularTitular2'
                                        placeholder=''

                                        onChange={(v, c, e, f) => setPhonestate({ ...phonestate, phoneTitular2: e.target.value })}
                                        masks={{ ve: '(...) ...-....' }}


                                    />

                                    {
                                        errors.celularTitular2 && <span data-aos="zoom-in" className='errrorMsg'> {errors.celularTitular2}  </span>
                                    }
                                </div>


                            </div>
                        </div>

                        <div className="row">

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Nombre y Apellido del beneficiario

                                    </label>
                                    <input
                                        name='nombreBeneficiarioPoliza'
                                        defaultValue={updateData?.nombreBeneficiarioPoliza}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreBeneficiarioPoliza ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Nombre del beneficiario de la póliza"
                                    />
                                    {
                                        errors.nombreBeneficiarioPoliza && <span data-aos="zoom-in" className='errrorMsg'> {errors.nombreBeneficiarioPoliza}  </span>
                                    }


                                </div>


                            </div>

                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Cédula de identidad del beneficiario

                                    </label>

                                    <div className="flex">

                                        <select
                                            defaultValue={formStep1?.tipoDeCedulaBeneficiario}
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
                                            prefix={optionBeneficiario ? 'E ' : 'C.I '}
                                            placeholder="Cédula de identidad del titular"
                                            defaultValue={updateData?.cedulaBeneficiario}
                                        />
                                    </div>
                                    {/*  <input
                                        name='cedulaBeneficiario'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Cédula de identidad del beneficiario"
                                    /> */}
                                    {
                                        errors.cedulaBeneficiario && <span data-aos="zoom-in" className='errrorMsg'> {errors.cedulaBeneficiario}  </span>
                                    }
                                </div>

                            </div>
                        </div>
                        <div data-aos="fade-left" className="row">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Correo electrónico del beneficiario

                                    </label>
                                    <input
                                        name='emailBeneficiario'
                                        defaultValue={updateData?.emailBeneficiario}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.emailBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico del beneficiario"
                                    />
                                    {
                                        errors.emailBeneficiario && <span data-aos="zoom-in" className='errrorMsg'> {errors.emailBeneficiario}  </span>
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">

                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        NÚMERO DE TELÉFONO DEL TITULAR

                                    </label>
                                    {/* <InputMask
                                        defaultValue={updateData?.celularBeneficiario}
                                        onChange={handleChange}
                                        placeholder="+58 000 000 0000"
                                        maskPlaceholder={null}
                                        name='celularBeneficiario'
                                        mask="+5\8 999 999 9999"
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                    /> */}
                                    <PhoneInput
                                        country={'ve'}
                                        name='celularBeneficiario'
                                        placeholder=''
                                        onBlur={handleBlur}
                                        inputClass={`${errors.celularBeneficiario && "rojo_erros"} `}
                                        onChange={(v, c, e, f) => setPhonestate({ ...phonestate, phoneBeneficiario: e.target.value })}
                                        masks={{ ve: '(...) ...-....' }}
                                    />

                                    {
                                        errors.celularBeneficiario && <span data-aos="zoom-in" className='errrorMsg'> {errors.celularBeneficiario}  </span>
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