import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Steps1 = ({ formStep1, setFormStep1, errorTipo, handleChange, handleBlur, initialValues, errors }) => {

    const [formValue, setFormValue] = useState('')
    const [isActiveTitular, setIsActiveTitular] = useState(false)
    const [isActiveBeneficiario, setIsActiveBeneficiario] = useState(false)



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
        AOS.init({

            duration: 1000,
            easing: 'ease',
            once: false
        });


    })




    return (
        <>

            <div data-aos="fade-up">
                <h2 className="step-title">TRAMITACIÓN DE SINIESTROS
                    DE RECLAMOS HCM</h2>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="step-label">Es usted el titular de la póliza?</div>

                            <label className="radio-inline">
                                <input
                                    type="radio"
                                    value="titular"
                                    onChange={(e) => setFormStep1({ ...formStep1, titularObeneficiario: e.target.value })}
                                    onBlur={handleBlur}

                                    name="titularObeneficiario" />
                                Soy el titular
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
                            }
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
                            {/*  <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Apellido del titular

                                    </label>
                                    <input
                                        name='apellidoTitularPoliza'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.apellidoTitularPoliza ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Apellido del titular de la póliza"
                                    />
                                    {
                                        errors.apellidoTitularPoliza && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.apellidoTitularPoliza}  </span>
                                    }
                                </div>

                            </div> */}
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Cedula del titular

                                    </label>
                                    <input
                                        name='cedulaTitular'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Cédula de identidad del titular"
                                    />

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
                                    <input
                                        name='celularTitular'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="4240000000"
                                    />


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
                                    <input
                                        name='celularTitular2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularTitular2 ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="424000000"
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
                                    <input
                                        name='cedulaBeneficiario'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.cedulaBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Cédula de identidad del beneficiario"
                                    />
                                    {
                                        errors.cedulaBeneficiario && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.cedulaBeneficiario}  </span>
                                    }
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
                                    <input
                                        name='celularBeneficiario'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.celularBeneficiario ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="4240000000"
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