import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../../css/bootstrap.min.css'
import '../../../../css/font.css'
import '../../../../css/plugins.css'
import '../../../../css/style.css'
import DataPicker from '../../../../Componentes/DataPicker';




const Steps2 = ({ setFileSelect, fileSelect, formStep1, setFormStep1, handleChange, handleBlur, errors, startDate, setStartDate, handleFile, setErrorFile, errorFile }) => {


    const [options, setOptions] = useState(false)
    const [options2, setOptions2] = useState(false)
    const [options3, setOptions3] = useState(false)
    const [options4, setOptions4] = useState(false)





    useEffect(() => {

        if (formStep1.tipoReembolso === 'Consulta medica') {
            setFileSelect(new Array(3))
            setErrorFile({
                errorInformeOp1: false,
                errorRecipeOp1: false,
                errorExamenesOp1: false,
                errorFacturaOp1: false,
            })
            setOptions(true)
        } else {
            setOptions(false)
        }


        if (formStep1.tipoReembolso === 'Farmacos') {
            setFileSelect(new Array(2))
            setErrorFile({
                errorInformeOp1: false,
                errorRecipeOp1: false,
                errorExamenesOp1: false,
                errorFacturaOp1: false,
            })
            setOptions2(true)
        } else {
            setOptions2(false)
        }
        if (formStep1.tipoReembolso === 'Sesiones de rehabilitacion, terapias, fisioterapia') {
            setFileSelect(new Array(2))
            setErrorFile({
                errorInformeOp1: false,
                errorRecipeOp1: false,
                errorExamenesOp1: false,
                errorFacturaOp1: false,
            })
            setOptions3(true)
        } else {
            setOptions3(false)
        }
        if (formStep1.tipoReembolso === 'Emergencia') {
            setFileSelect(new Array(3))
            setErrorFile({
                errorInformeOp1: false,
                errorRecipeOp1: false,
                errorExamenesOp1: false,
                errorFacturaOp1: false,
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
            once: false
        });
    })

    useEffect(() => {

        console.log('Dataaaaaaaaaaaaa ',
            formStep1.fileDatainformeMedico
        )

    }, [

        formStep1.fileDatainformeMedico
    ])



    return (
        <>
            <div data-aos="fade-up" >
                {/*    <h2 className="step-title">Tipo de reembolso</h2> */}
                <div className="col-sm-12" style={{ marginBottom: (formStep1.tipoReembolso === '' || formStep1.tipoReembolso === 'Selecciona el tipo de reembolso') ? '25px' : '0px' }}>
                    <select
                        name='tipoReembolso'
                        onChange={e => setFormStep1({ ...formStep1, tipoReembolso: e.target.value })}
                        onBlur={handleBlur}
                        class="form-select appearance-none block w-full px-5 py-4 text-md font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option value={'Selecciona el tipo de reembolso'}>Selecciona el tipo de reembolso </option>
                        <option value={'Consulta medica'}>Consulta médica</option>
                        <option value={'Farmacos'}>Fármacos</option>
                        <option value={'Sesiones de rehabilitacion, terapias, fisioterapia'}>Sesiones de rehabilitación, terapias, fisioterapia</option>
                        <option value={'Emergencia'}>Emergencia</option>
                    </select>
                    {
                        errors.tipoReembolso === true &&
                        <span style={{ color: 'red' }}>
                            Obligatorio
                        </span>
                    }
                </div>


                {
                    options &&
                    <>

                        <div data-aos="fade-left" className='row'>
                            <div className="col-sm-6">
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease" className=" col-sm-12">
                                    {/*  <div className="step-label">Informe médico</div> */}
                                    <div className="form-group">
                                        <label class="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Informe médico
                                        </label>
                                        <input
                                            name='informeMedico'
                                            class={`
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
                                            errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Récipe e indicaciones (Fármacos/tratamiento)
                                        </label>


                                        <input
                                            name='recipeIndicaciones'
                                            class={`
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
                                            errorFile.errorRecipe && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                                    {/*   <div className="step-label">Exámenes realizados opcional</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Exámenes realizados opcional
                                        </label>
                                        <input
                                            name='examenesRealizados'
                                            class={`
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
                                            errorFile.errorExamenes && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }

                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)
                                        </label>

                                        <input
                                            name='facturas'
                                            class={`
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
                                    </div>
                                    {
                                        errorFile.errorFactura && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                    }

                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Patología o Diagnóstico</div> */}
                                    <div className="form-group">
                                        <label
                                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Patología o Diagnóstico


                                        </label>
                                        <input
                                            name='patologiaDiagnostico'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.patologiaDiagnostico ? 'border-red-600' : 'border-gray-200'}  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
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

                                    <label
                                        class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errors.fechaOcurrencia ?
                                                <span style={{ color: 'red' }}>
                                                    INGRESE UNA FECHA
                                                </span>
                                                :
                                                <span >
                                                    Fecha de ocurrencia
                                                </span>
                                        }

                                    </label>

                                    <DataPicker startDate={startDate} setStartDate={setStartDate} />


                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="3000" data-aos-easing="ease" className="col-sm-12">

                                    <div className="form-group">


                                        <label
                                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Monto total del reembolso (Bs)


                                        </label>
                                        <input
                                            name='montoTotal'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Bs"
                                        />
                                        {
                                            errors.montoTotal && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.montoTotal} </span>
                                        }
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
                                        <label class="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Informe médico con referencia medica
                                        </label>
                                        <input
                                            name='informeMedico'
                                            class={`
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
                                            file:bg-blue-700 
                                            ${errorFile.errorInforme ? 'file:bg-red-700 ' : 'file:bg-blue-700 ' || errors.informeMedico && 'file:bg-red-700'}
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
                                            errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Récipe e indicaciones (Fármacos/tratamiento)
                                        </label>


                                        <input
                                            name='recipeIndicaciones'
                                            class={`
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
                                            errorFile.errorRecipe && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>

                                </div>

                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)
                                        </label>

                                        <input
                                            name='facturas'
                                            class={`
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
                                            errorFile.errorFactura && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Patología o Diagnóstico</div> */}
                                    <div className="form-group">
                                        <label
                                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Patología o Diagnóstico


                                        </label>
                                        <input
                                            name='patologiaDiagnostico'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.patologiaDiagnostico ? 'border-red-600' : 'border-gray-200'}  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Patología"
                                        />



                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2800" data-aos-easing="ease" className="col-sm-12">

                                    <label
                                        class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errors.fechaOcurrencia ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Fecha de ocurrencia
                                                </span>
                                        }

                                    </label>
                                    <DataPicker startDate={startDate} setStartDate={setStartDate} />



                                    {/*  <div class='input-group date' id='datetimepicker1'>
                                            <input onBlur={handleBlur} onChange={handleChange} type='text' class="form-control" />
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                        {
                                            errors.errorFechaOcurrencia === true &&
                                            <span style={{ color: 'red' }}>
                                                Obligatorio
                                            </span>
                                        } */}

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="3000" data-aos-easing="ease" className="col-sm-12">

                                    <div className="form-group">


                                        <label
                                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Monto total del reembolso (Bs)


                                        </label>
                                        <input
                                            name='montoTotal'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Bs"
                                        />

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
                                        <label class="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Informe médico
                                        </label>
                                        <input
                                            name='informeMedico'
                                            class={`
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
                                            errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            indicaciones (Sesiones de rehabilitación, terapias, fisioterapia)
                                        </label>


                                        <input
                                            name='recipeIndicaciones'
                                            class={`
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
                                            errorFile.errorRecipe && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>

                                </div>

                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)
                                        </label>

                                        <input
                                            name='facturas'
                                            class={`
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
                                        errorFile.errorFactura && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Patología o Diagnóstico</div> */}
                                    <div className="form-group">
                                        <label
                                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Patología o Diagnóstico


                                        </label>
                                        <input
                                            name='patologiaDiagnostico'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.patologiaDiagnostico ? 'border-red-600' : 'border-gray-200'}  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Patología"
                                        />



                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2500" data-aos-easing="ease" className="col-sm-12">

                                    <label
                                        class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errors.fechaOcurrencia ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Fecha de ocurrencia
                                                </span>
                                        }

                                    </label>


                                    <DataPicker startDate={startDate} setStartDate={setStartDate} />


                                    {/*  <div class='input-group date' id='datetimepicker1'>
                                            <input onBlur={handleBlur} onChange={handleChange} type='text' class="form-control" />
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                        {
                                            errors.errorFechaOcurrencia === true &&
                                            <span style={{ color: 'red' }}>
                                                Obligatorio
                                            </span>
                                        } */}

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="3000" data-aos-easing="ease" className="col-sm-12">

                                    <div className="form-group">


                                        <label
                                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Monto total del reembolso (Bs)


                                        </label>
                                        <input
                                            name='montoTotal'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Bs"
                                        />

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
                                        <label class="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Informe médico
                                        </label>
                                        <input
                                            name='informeMedico'
                                            class={`
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
                                            errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Récipe e indicaciones (Fármacos/tratamiento)
                                        </label>


                                        <input
                                            name='recipeIndicaciones'
                                            class={`
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
                                            errorFile.errorRecipe && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }
                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                                    {/*   <div className="step-label">Exámenes realizados opcional</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Exámenes realizados opcional
                                        </label>
                                        <input
                                            name='examenesRealizados'
                                            class={`
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
                                            errorFile.errorExamenes && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                        }

                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                                    <div className="form-group">
                                        <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                            for="default_size">
                                            Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)
                                        </label>

                                        <input
                                            name='facturas'
                                            class={`
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
                                    </div>
                                    {
                                        errorFile.errorFactura && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2500" data-aos-easing="ease" className="col-sm-12">
                                    {/*  <div className="step-label">Patología o Diagnóstico</div> */}
                                    <div className="form-group">
                                        <label
                                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Patología o Diagnóstico


                                        </label>
                                        <input
                                            name='patologiaDiagnostico'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.patologiaDiagnostico ? 'border-red-600' : 'border-gray-200'}  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Patología"
                                        />



                                    </div>

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="2800" data-aos-easing="ease" className="col-sm-12">

                                    <label
                                        class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errors.fechaOcurrencia ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Fecha de ocurrencia
                                                </span>
                                        }

                                    </label>

                                    <DataPicker startDate={startDate} setStartDate={setStartDate} />

                                    {/*  <div class='input-group date' id='datetimepicker1'>
                                            <input onBlur={handleBlur} onChange={handleChange} type='text' class="form-control" />
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                        {
                                            errors.errorFechaOcurrencia === true &&
                                            <span style={{ color: 'red' }}>
                                                Obligatorio
                                            </span>
                                        } */}

                                </div>
                                <div data-aos="fade-left" data-aos-offset="50" data-aos-duration="3000" data-aos-easing="ease" className="col-sm-12">

                                    <div className="form-group">


                                        <label
                                            class="block mt-9 uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Monto total del reembolso (Bs)


                                        </label>
                                        <input
                                            name='montoTotal'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            class={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Bs"
                                        />

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