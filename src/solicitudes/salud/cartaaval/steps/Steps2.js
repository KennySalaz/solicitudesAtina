import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../../css/bootstrap.min.css'
import '../../../../css/font.css'
import '../../../../css/plugins.css'
import '../../../../css/style.css'
import DataPicker from '../../../../Componentes/DataPicker';
import CurrencyFormat from 'react-currency-format';



const Steps2 = ({ formStep1, setFormStep1, handleChange, handleBlur, errors, startDate, setStartDate, handleFile, errorFile, setErrorFile }) => {


    const [options, setOptions] = useState(false)
    const [options2, setOptions2] = useState(false)
    const [options3, setOptions3] = useState(false)
    const [options4, setOptions4] = useState(false)





    useEffect(() => {

        if (formStep1.tipoReembolso === 'Consulta medica') {
            setOptions(true)
        } else {
            setOptions(false)
        }


        if (formStep1.tipoReembolso === 'Farmacos') {
            setOptions2(true)
        } else {
            setOptions2(false)
        }
        if (formStep1.tipoReembolso === 'Sesiones de rehabilitacion, terapias, fisioterapia') {
            setOptions3(true)
        } else {
            setOptions3(false)
        }
        if (formStep1.tipoReembolso === 'Emergencia') {
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




    return (
        <>
            <div data-aos="fade-up" >
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
                                    id="informeMedico"
                                    type="file"
                                    onBlur={handleBlur}
                                    onChange={e => handleFile(e, 0)}

                                />
                                {
                                    errorFile.errorInforme && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  {errorFile.errorInforme} </span>
                                }
                                {
                                    errors.informeMedico && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                }
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                            {/*   <div className="step-label">Exámenes realizados opcional</div> */}
                            <div className="form-group">
                                <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                    for="default_size">
                                    Exámenes que corroboren patologia
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
                                    onChange={e => handleFile(e, 1)}


                                />
                                {
                                    errorFile.errorExamenes && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  {errorFile.errorExamenes} </span>
                                }

                                {
                                    errors.examenesRealizados && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                }

                            </div>

                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                            {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                            <div className="form-group">
                                <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                    for="default_size">
                                    Presupuesto de la institución de salud (Vigente)
                                </label>


                                <input
                                    name='presupuestoSalud'
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
                                             ${errorFile.errorPresupuesto ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                             
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
                                    errorFile.errorPresupuesto && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  {errorFile.errorPresupuesto} </span>
                                }

                                {
                                    errors.presupuestoSalud && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                }

                            </div>

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
                                    placeholder="Patologia"
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
                                            Obligatorio
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

                                <CurrencyFormat
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Bs"
                                    name='montoTotal'
                                    class={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.montoTotal ? 'border-red-600' : 'border-gray-200'} border  rounded py-3 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                    thousandSeparator={true} prefix={'BsF '}
                                />
                                {
                                    errors.montoTotal && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.montoTotal} </span>
                                }
                            </div>

                        </div>
                    </div>

                </div>





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