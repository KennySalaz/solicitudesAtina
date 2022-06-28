import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../../css/bootstrap.min.css'
import '../../../../css/font.css'
import '../../../../css/plugins.css'
import '../../../../css/style.css'
import DataPicker from '../../../../Componentes/DataPicker';
import CurrencyFormat from 'react-currency-format';


const Steps2 = ({
    setFileSelect,
    fileSelect,
    formStep1,
    setFormStep1,
    handleChange,
    handleBlur,
    errors,
    startDate,
    setStartDate,
    handleFile,
    setErrorFile,
    errorFile,
    initialValues,
    setupdateData,
    updateData,
    setArrayConfirm,
    arrayConfirm,
    newTipoReembolso,
    data,
    setData,
}) => {

    const [options, setOptions] = useState(false)
    const [options2, setOptions2] = useState(false)
    const [options3, setOptions3] = useState(false)
    const [options4, setOptions4] = useState(false)
    const [optionMoneda, setOptionMoneda] = useState(false)




    const ArchivoCargado0 = () => {
        return (
            <>
                {
                    fileSelect.map((fileNAME, index) => (
                        <>
                            {
                                !errorFile.errorInforme && (
                                    <>
                                        {
                                            index === 0 && (
                                                <div className="bg-blue-100 w-7/12  p-5 hover:bg-blue-200 text-blue-800 text-sm font-semibold mr-2 mt-4 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">

                                                    <span style={{ color: 'black', paddingRight: '15px' }}>   Archivo Cargado  </span>
                                                    {fileNAME[0]?.name.substr(0, 10)}{fileNAME[0]?.type.substr(5)}
                                                    <span className="bg-slate-50 ml-8 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    </span>
                                                </div>

                                            )
                                        }
                                    </>

                                )
                            }


                        </>
                    ))
                }
            </>
        )
    }

    const ArchivoCargado1 = () => {
        return (
            <>
                {
                    fileSelect.map((fileNAME, index) => (
                        <>
                            {
                                !errorFile.errorExamenes && (
                                    <>
                                        {
                                            index === 1 && (
                                                <div className="bg-blue-100 w-7/12  p-5 hover:bg-blue-200 text-blue-800 text-sm font-semibold mr-2 mt-4 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">

                                                    <span style={{ color: 'black', paddingRight: '15px' }}>   Archivo Cargado  </span>
                                                    {fileNAME[0]?.name.substr(0, 10)}{fileNAME[0]?.type.substr(5)}
                                                    <span className="bg-slate-50 ml-8 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    </span>
                                                </div>

                                            )
                                        }
                                    </>

                                )
                            }


                        </>
                    ))
                }
            </>
        )
    }

    const ArchivoCargado2 = () => {
        return (
            <>
                {
                    fileSelect.map((fileNAME, index) => (
                        <>
                            {
                                !errorFile.errorPresupuesto && (
                                    <>
                                        {
                                            index === 2 && (
                                                <div className="bg-blue-100 w-7/12  p-5 hover:bg-blue-200 text-blue-800 text-sm font-semibold mr-2 mt-4 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">

                                                    <span style={{ color: 'black', paddingRight: '15px' }}>   Archivo Cargado  </span>
                                                    {fileNAME[0]?.name.substr(0, 10)}{fileNAME[0]?.type.substr(5)}
                                                    <span className="bg-slate-50 ml-8 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    </span>
                                                </div>

                                            )
                                        }
                                    </>

                                )
                            }


                        </>
                    ))
                }
            </>
        )
    }

    const ArchivoCargado3 = () => {
        return (
            <>
                {
                    fileSelect.map((fileNAME, index) => (
                        <>
                            {
                                !errorFile.errorPresupuesto && (
                                    <>
                                        {
                                            index === 3 && (
                                                <div className="bg-blue-100 w-7/12  p-5 hover:bg-blue-200 text-blue-800 text-sm font-semibold mr-2 mt-4 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">

                                                    <span style={{ color: 'black', paddingRight: '15px' }}>   Archivo Cargado  </span>
                                                    {fileNAME[0]?.name.substr(0, 10)}{fileNAME[0]?.type.substr(5)}
                                                    <span className="bg-slate-50 ml-8 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    </span>
                                                </div>

                                            )
                                        }
                                    </>

                                )
                            }


                        </>
                    ))
                }
            </>
        )
    }


    useEffect(() => {

        if (formStep1.tipoReembolso === 'Consulta medica') {
            if (newTipoReembolso !== formStep1.tipoReembolso) {
                setFileSelect(new Array(3))
                setData({
                    ...data,
                    montoTotal: '',
                    patologiaDiagnostico: '',

                })
                setupdateData({
                    ...updateData,
                    montoTotal: '',
                    patologiaDiagnostico: '',

                })
                /* initialValues.montoTotal = ''
                initialValues.patologiaDiagnostico = ''
                errors.informeMedico = false
                errors.recipeIndicaciones = false
                errors.examenesRealizados = false
                errors.facturas = false
                errors.patologiaDiagnostico = false
                errors.montoTotal = false
                errors.fechaOcurrencia = false */

            }
            if (!arrayConfirm) {
                setFileSelect(new Array(3))
            }

            /*   if (fileSelect[]) */

            setErrorFile({
                errorInforme: false,
                errorRecipe: false,
                errorExamenes: false,
                errorFactura: false,
            })



            setOptions(true)

        } else {
            setOptions(false)
        }
        if (formStep1.tipoReembolso === 'Farmacos') {
            if (newTipoReembolso !== formStep1.tipoReembolso) {
                setFileSelect(new Array(2))
                setData({
                    ...data,
                    montoTotal: '',
                    patologiaDiagnostico: '',

                })
                setupdateData({
                    ...updateData,
                    montoTotal: '',
                    patologiaDiagnostico: '',

                })
                /*  initialValues.montoTotal = ''
                 initialValues.patologiaDiagnostico = ''
                 errors.informeMedico = false
                 errors.recipeIndicaciones = false
                 errors.examenesRealizados = false
                 errors.facturas = false
                 errors.patologiaDiagnostico = false
                 errors.montoTotal = false
                 errors.fechaOcurrencia = false */

            }
            if (!arrayConfirm) {
                setFileSelect(new Array(2))
            }

            setErrorFile({
                errorInforme: false,
                errorRecipe: false,
                errorExamenes: false,
                errorFactura: false,
            })



            setOptions2(true)

        } else {
            setOptions2(false)
        }
        if (formStep1.tipoReembolso === 'Sesiones de rehabilitacion, terapias, fisioterapia') {
            if (newTipoReembolso !== formStep1.tipoReembolso) {
                setFileSelect(new Array(2))
                setData({
                    ...data,
                    montoTotal: '',
                    patologiaDiagnostico: '',

                })
                setupdateData({
                    ...updateData,
                    montoTotal: '',
                    patologiaDiagnostico: '',

                })
                /* initialValues.montoTotal = ''
                initialValues.patologiaDiagnostico = ''
                initialValues.montoTotal = ''
                initialValues.patologiaDiagnostico = ''
                errors.informeMedico = false
                errors.recipeIndicaciones = false
                errors.examenesRealizados = false
                errors.facturas = false
                errors.patologiaDiagnostico = false
                errors.montoTotal = false
                errors.fechaOcurrencia = false */
            }

            if (!arrayConfirm) {
                setFileSelect(new Array(2))
            }


            setErrorFile({
                errorInforme: false,
                errorRecipe: false,
                errorExamenes: false,
                errorFactura: false,
            })


            setOptions3(true)
        } else {
            setOptions3(false)
        }
        if (formStep1.tipoReembolso === 'Emergencia') {
            if (newTipoReembolso !== formStep1.tipoReembolso) {
                setFileSelect(new Array(3))
                setData({
                    ...data,
                    montoTotal: '',
                    patologiaDiagnostico: '',

                })
                setupdateData({
                    ...updateData,
                    montoTotal: '',
                    patologiaDiagnostico: '',

                })
                /*  initialValues.montoTotal = ''
                 initialValues.patologiaDiagnostico = ''
                 errors.informeMedico = false
                 errors.recipeIndicaciones = false
                 errors.examenesRealizados = false
                 errors.facturas = false
                 errors.patologiaDiagnostico = false
                 errors.montoTotal = false
                 errors.fechaOcurrencia = false */
            }

            if (!arrayConfirm) {
                setFileSelect(new Array(3))
            }

            setErrorFile({
                errorInforme: false,
                errorRecipe: false,
                errorExamenes: false,
                errorFactura: false,
            })


            setOptions4(true)

        } else {
            setOptions4(false)
        }
    }, [formStep1.tipoReembolso])


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true
        });
    }, [])

    useEffect(() => {
        if (formStep1.tipoDeMoneda === 'dolar') {
            setOptionMoneda(true)

        } else if (formStep1.tipoDeMoneda === 'bolivar') {
            setOptionMoneda(false)
        }

    }, [formStep1.tipoDeMoneda])

    return (
        <>
            <div data-aos="fade-up" >

                <h6 className="step-steps1Title"> Tipo de reembolso</h6>
                {/*    <h2 className="step-title">Tipo de reembolso</h2> */}
                <div className="col-sm-12" style={{ marginBottom: (formStep1.tipoReembolso === '' || formStep1.tipoReembolso === 'Selecciona el tipo de reembolso') ? '25px' : '0px' }}>
                    <select
                        defaultValue={formStep1?.tipoReembolso}
                        name='tipoReembolso'
                        onChange={e => setFormStep1({ ...formStep1, tipoReembolso: e.target.value })}
                        onBlur={handleBlur}
                        className={`form-select ${errors.tipoReembolso ? 'border-red-500' : 'border-gray-300'} appearance-none block w-full px-5 py-4 text-md font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none `} aria-label="Default select example">
                        <option value={'Selecciona el tipo de reembolso'}>Selecciona el tipo de reembolso </option>
                        <option value={'Consulta medica'}>Consulta médica</option>
                        <option value={'Farmacos'}>Fármacos</option>
                        <option value={'Sesiones de rehabilitacion, terapias, fisioterapia'}>Sesiones de rehabilitación, terapias, fisioterapia</option>
                        <option value={'Emergencia'}>Emergencia</option>
                    </select>

                </div>


                {
                    options &&
                    <>

                        <div data-aos="fade-left" className='row'>
                            <div className="col-sm-6">
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease" className=" col-sm-12">
                                    {/*  <div className="step-label">Informe médico</div> */}
                                    <div className="form-group">
                                        <label className="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Informe médico
                                        </label>
                                        <input
                                            name='informeMedico'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                            
                                             ${errorFile.errorInforme ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 0)}

                                        />

                                        {
                                            fileSelect[0] && <ArchivoCargado0 />
                                        }


                                        {
                                            errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }
                                        {
                                            errors.informeMedico && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Récipe e indicaciones (Fármacos/tratamiento)
                                        </label>


                                        <input
                                            name='recipeIndicaciones'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorRecipe ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                            
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700  
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 1)}
                                        />

                                        {
                                            fileSelect[1] && <ArchivoCargado1 />
                                        }
                                        {
                                            errorFile.errorRecipe && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }

                                        {
                                            errors.recipeIndicaciones && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                                    {/*   <div className="step-label">Exámenes realizados opcional</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Exámenes realizados (opcional)
                                        </label>
                                        <input
                                            name='examenesRealizados'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorExamenes ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                           
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 2)}
                                        />
                                        {
                                            fileSelect[2] && <ArchivoCargado2 />
                                        }

                                        {
                                            errorFile.errorExamenes && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }
                                        {
                                            errors.examenesRealizados && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }

                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)
                                        </label>

                                        <input
                                            name='facturas'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorFactura ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                           
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 3)}
                                        />

                                        {
                                            fileSelect[3] && <ArchivoCargado3 />
                                        }

                                        {
                                            errorFile.errorFactura && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }

                                        {
                                            errors.facturas && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }

                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Patología o Diagnóstico</div> */}
                                    <div className="form-group">
                                        <label
                                            className="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 " for="grid-last-name">

                                            Patología o Diagnóstico


                                        </label>
                                        <input
                                            defaultValue={updateData?.patologiaDiagnostico}
                                            name='patologiaDiagnostico'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.patologiaDiagnostico ? 'border-red-600' : 'border-gray-200'}  rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Patología"
                                        />

                                        {
                                            errors.patologiaDiagnostico && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.patologiaDiagnostico} </span>
                                        }

                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2800" data-aos-easing="ease" className="col-sm-12">

                                    <label className="block mt-3 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        Fecha de ocurrencia
                                    </label>


                                    <DataPicker startDate={startDate} setStartDate={setStartDate} errors={errors} />





                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="3000" data-aos-easing="ease" className="col-sm-12">

                                    <div className="form-group">


                                        <label
                                            className="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Monto total del reembolso (Bs)


                                        </label>

                                        <div className="flex">

                                            <select
                                                defaultValue={formStep1?.tipoDeMoneda}
                                                onChange={e => setFormStep1({ ...formStep1, tipoDeMoneda: e.target.value })}
                                                className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.montoTotal ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                aria-label="Default select example">
                                                <option value="bolivar">BSF</option>
                                                <option value="dolar">USD</option>

                                            </select>
                                            <CurrencyFormat
                                                defaultValue={updateData?.montoTotal}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={optionMoneda ? '$ ' : 'Bsf '}
                                                name='montoTotal'
                                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                thousandSeparator={true} prefix={optionMoneda ? '$ ' : 'BsF '}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </>
                }
                {
                    options2 &&
                    <>
                        <div data-aos="fade-left" className='row'>
                            <div className="col-sm-6">
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Informe médico</div> */}
                                    <div className="form-group">
                                        <label className="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Informe médico con referencia medica
                                        </label>
                                        <input
                                            name='informeMedico'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                           
                                            ${errorFile.errorInforme ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 0)}
                                        />
                                        {
                                            fileSelect[0] && <ArchivoCargado0 />
                                        }

                                        {
                                            errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }
                                        {
                                            errors.informeMedico && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Récipe e indicaciones (Fármacos/tratamiento)
                                        </label>


                                        <input
                                            name='recipeIndicaciones'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorRecipe ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 1)}
                                        />
                                        {
                                            fileSelect[1] && <ArchivoCargado1 />
                                        }


                                        {
                                            errorFile.errorRecipe && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }

                                        {
                                            errors.recipeIndicaciones && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>

                                </div>

                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)
                                        </label>

                                        <input
                                            name='facturas'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorFactura ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 2)}
                                        />
                                        {
                                            fileSelect[2] && <ArchivoCargado2 />
                                        }

                                        {
                                            errorFile.errorFactura && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }

                                        {
                                            errors.facturas && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Patología o Diagnóstico</div> */}
                                    <div className="form-group">
                                        <label
                                            className="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Patología o Diagnóstico


                                        </label>
                                        <input
                                            defaultValue={updateData?.patologiaDiagnostico}
                                            name='patologiaDiagnostico'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.patologiaDiagnostico ? 'border-red-600' : 'border-gray-200'}  rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Patología"
                                        />



                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2800" data-aos-easing="ease" className="col-sm-12">

                                    <label
                                        className="block mt-3 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Fecha de ocurrencia


                                    </label>
                                    <DataPicker startDate={startDate} setStartDate={setStartDate} errors={errors} />





                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="3000" data-aos-easing="ease" className="col-sm-12">

                                    <div className="form-group">


                                        <label
                                            className="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Monto total del reembolso (Bs)


                                        </label>

                                        <div className="flex">

                                            <select
                                                defaultValue={formStep1?.tipoDeMoneda}
                                                onChange={e => setFormStep1({ ...formStep1, tipoDeMoneda: e.target.value })}
                                                className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.montoTotal ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                aria-label="Default select example">

                                                <option value="bolivar">BSF</option>
                                                <option value="dolar">USD</option>

                                            </select>


                                            <CurrencyFormat
                                                defaultValue={updateData?.montoTotal}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={optionMoneda ? '$ ' : 'Bsf '}
                                                name='montoTotal'
                                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                thousandSeparator={true} prefix={optionMoneda ? '$ ' : 'BsF '}
                                            />




                                        </div>




                                    </div>

                                </div>
                            </div>

                        </div>

                    </>
                }
                {
                    options3 &&
                    <>

                        <div data-aos="fade-left" className='row'>
                            <div className="col-sm-6">
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Informe médico</div> */}
                                    <div className="form-group">
                                        <label className="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Informe médico
                                        </label>
                                        <input
                                            name='informeMedico'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                            
                                            ${errorFile.errorInforme ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 0)}
                                        />
                                        {
                                            fileSelect[0] && <ArchivoCargado0 />
                                        }

                                        {
                                            errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }
                                        {
                                            errors.informeMedico && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }

                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            indicaciones (Sesiones de rehabilitación, terapias, fisioterapia)
                                        </label>


                                        <input
                                            name='recipeIndicaciones'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorRecipe ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 1)}
                                        />

                                        {
                                            fileSelect[1] && <ArchivoCargado1 />
                                        }

                                        {
                                            errorFile.errorRecipe && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }

                                        {
                                            errors.recipeIndicaciones && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>

                                </div>

                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)
                                        </label>

                                        <input
                                            name='facturas'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorFactura ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 2)}
                                        />
                                    </div>

                                    {
                                        fileSelect[2] && <ArchivoCargado2 />
                                    }

                                    {
                                        errorFile.errorFactura && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                    }
                                    {
                                        errors.facturas && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Patología o Diagnóstico</div> */}
                                    <div className="form-group">
                                        <label
                                            className="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Patología o Diagnóstico


                                        </label>
                                        <input
                                            defaultValue={updateData?.patologiaDiagnostico}
                                            name='patologiaDiagnostico'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.patologiaDiagnostico ? 'border-red-600' : 'border-gray-200'}  rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Patología"
                                        />



                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2500" data-aos-easing="ease" className="col-sm-12">

                                    <label
                                        className="block mt-3 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Fecha de ocurrencia


                                    </label>


                                    <DataPicker startDate={startDate} setStartDate={setStartDate} errors={errors} />




                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="3000" data-aos-easing="ease" className="col-sm-12">

                                    <div className="form-group">


                                        <label
                                            className="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Monto total del reembolso (Bs)


                                        </label>
                                        <div className="flex">

                                            <select
                                                defaultValue={formStep1?.tipoDeMoneda}
                                                onChange={e => setFormStep1({ ...formStep1, tipoDeMoneda: e.target.value })}
                                                className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.montoTotal ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                aria-label="Default select example">

                                                <option value="bolivar">BSF</option>
                                                <option value="dolar">USD</option>

                                            </select>


                                            <CurrencyFormat
                                                defaultValue={updateData?.montoTotal}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={optionMoneda ? '$ ' : 'Bsf '}
                                                name='montoTotal'
                                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                thousandSeparator={true} prefix={optionMoneda ? '$ ' : 'BsF '}
                                            />




                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>

                    </>
                }
                {
                    options4 &&
                    <>
                        <div data-aos="fade-left" className='row'>
                            <div className="col-sm-6">
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Informe médico</div> */}
                                    <div className="form-group">
                                        <label className="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Informe médico
                                        </label>
                                        <input
                                            name='informeMedico'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorInforme ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 0)}
                                            accept
                                        />
                                        {
                                            fileSelect[0] && <ArchivoCargado0 />
                                        }

                                        {
                                            errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }
                                        {
                                            errors.informeMedico && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Récipe e indicaciones (Fármacos/tratamiento)
                                        </label>


                                        <input
                                            name='recipeIndicaciones'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorRecipe ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 1)}
                                        />
                                        {
                                            fileSelect[1] && <ArchivoCargado1 />
                                        }

                                        {
                                            errorFile.errorRecipe && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }
                                        {
                                            errors.recipeIndicaciones && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                                    {/*   <div className="step-label">Exámenes realizados opcional</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Exámenes realizados (opcional)
                                        </label>
                                        <input
                                            name='examenesRealizados'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorExamenes ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 2)}
                                        />
                                        {
                                            fileSelect[2] && <ArchivoCargado2 />
                                        }

                                        {
                                            errorFile.errorExamenes && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }
                                        {
                                            errors.examenesRealizados && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }

                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                                    <div className="form-group">
                                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)
                                        </label>

                                        <input
                                            name='facturas'
                                            className={`
                                            block w-full text-sm 
                                            text-slate-500
                                            file:mr-4 
                                            file:py-2 
                                            file:px-4
                                            file:rounded-md
                                            file:border-0
                                            file:text-sm 
                                             file:font-semibold
                                             file:border-white 
                                             ${errorFile.errorFactura ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                            id="default_size"
                                            type="file"
                                            onBlur={handleBlur}
                                            onChange={e => handleFile(e, 3)}

                                        />

                                        {
                                            fileSelect[3] && <ArchivoCargado3 />
                                        }


                                        {
                                            errorFile.errorFactura && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
                                        }
                                        {
                                            errors.facturas && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Patología o Diagnóstico</div> */}
                                    <div className="form-group">
                                        <label
                                            className="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Patología o Diagnóstico


                                        </label>
                                        <input
                                            defaultValue={updateData?.patologiaDiagnostico}
                                            name='patologiaDiagnostico'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.patologiaDiagnostico ? 'border-red-600' : 'border-gray-200'}  rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Patología"
                                        />



                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2800" data-aos-easing="ease" className="col-sm-12">

                                    <label
                                        className="block mt-3 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Fecha de ocurrencia


                                    </label>

                                    <DataPicker startDate={startDate} setStartDate={setStartDate} errors={errors} />



                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="3000" data-aos-easing="ease" className="col-sm-12">

                                    <div className="form-group">


                                        <label
                                            className="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Monto total del reembolso (Bs)


                                        </label>
                                        <div className="flex">

                                            <select
                                                defaultValue={formStep1?.tipoDeMoneda}
                                                onChange={e => setFormStep1({ ...formStep1, tipoDeMoneda: e.target.value })}
                                                className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.montoTotal ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                aria-label="Default select example">

                                                <option value="bolivar">BSF</option>
                                                <option value="dolar">USD</option>

                                            </select>


                                            <CurrencyFormat
                                                defaultValue={updateData?.montoTotal}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={optionMoneda ? '$ ' : 'Bsf '}
                                                name='montoTotal'
                                                className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                thousandSeparator={true} prefix={optionMoneda ? '$ ' : 'BsF '}
                                            />
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </>
                }
                <div style={{ padding: '17px' }}>
                    <h6  >

                        Información necesaria y documentos a anexar (Los documentos deben estar en
                        formato .PDF y debidamente identificados con tipo de documento y su nombre y
                        apellido)
                    </h6>
                </div>







            </div>
        </>
    )
}

export default Steps2