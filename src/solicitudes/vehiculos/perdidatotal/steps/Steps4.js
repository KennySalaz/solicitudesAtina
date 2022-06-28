import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../../css/bootstrap.min.css'
import '../../../../css/font.css'
import '../../../../css/plugins.css'
import '../../../../css/style.css'
import DataPicker from '../../../../Componentes/DataPicker';
import CurrencyFormat from 'react-currency-format';


const Steps4 = ({ setFileSelect, fileSelect, formStep1, setFormStep1, handleChange, handleBlur, errors, startDate, setStartDate, handleFile, setErrorFile, errorFile, initialValues, updateData }) => {


    const [options, setOptions] = useState(false)
    const [options2, setOptions2] = useState(false)
    const [options3, setOptions3] = useState(false)
    const [options4, setOptions4] = useState(false)



    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true
        });
    }, [])




    return (
        <>
            <div data-aos="fade-up" >
                {/*    <h2 className="step-title">Tipo de reembolso</h2> */}
                <div data-aos="fade-left" className='row'>
                    <div className="col-sm-6">
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease" className=" col-sm-12">
                            {/*  <div className="step-label">Informe médico</div> */}
                            <div className="form-group">
                                <label className="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                    for="default_size">
                                    Cédula de identidad del conductor
                                </label>
                                <input
                                    name='cedulaConductor'
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
                                            
                                             ${errorFile.cedulaConductor ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
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
                                    errorFile.cedulaConductor && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  {errorFile.cedulaConductor} </span>
                                }
                                {
                                    errors.cedulaConductor && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                }
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease" className="col-sm-12">
                            {/*  <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div> */}
                            <div className="form-group">
                                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                    for="default_size">
                                    Certificado médico del conductor
                                </label>


                                <input
                                    name='certificadoMedico'
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
                                             ${errorFile.certificadoMedico ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                            
                                             
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
                                    errorFile.certificadoMedico && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  {errorFile.certificadoMedico} </span>
                                }

                                {
                                    errors.certificadoMedico && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                }
                            </div>

                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                            {/*   <div className="step-label">Exámenes realizados opcional</div> */}
                            <div className="form-group">
                                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                    for="default_size">
                                    Licencia de conducir del conductor
                                </label>
                                <input
                                    name='licenciaConductor'
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
                                             ${errorFile.licenciaConductor ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                           
                                             
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
                                    errorFile.licenciaConductor && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}> {errorFile.licenciaConductor} </span>
                                }
                                {
                                    errors.licenciaConductor && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                }

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1500" data-aos-easing="ease" className="col-sm-12">
                            {/*  <div className="step-label">Exámenes realizados opcional</div> */}
                            <div className="form-group">
                                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                    for="default_size">
                                    Carnet de circulación
                                </label>
                                <input
                                    name='carnetCirculacion'
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
                                             ${errorFile.carnetCirculacion ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                           
                                             
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
                                    errorFile.carnetCirculacion && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}> {errorFile.carnetCirculacion} </span>
                                }
                                {
                                    errors.carnetCirculacion && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                }

                            </div>

                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                            {/*  <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div> */}
                            <div className="form-group">
                                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                    for="default_size">
                                    Autorización para circular en caso de que aplique
                                </label>

                                <input
                                    name='autorizacion'
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
                                             ${errorFile.autorizacion ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                           
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                    id="default_size"
                                    type="file"
                                    onBlur={handleBlur}
                                    onChange={e => handleFile(e, 4)}
                                />
                                {
                                    errorFile.autorizacion && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  {errorFile.autorizacion} </span>
                                }

                                {
                                    errors.autorizacion && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                }

                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="2000" data-aos-easing="ease" className="col-sm-12">
                            <div className="form-group">
                                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
                                    for="default_size">
                                    Fotos del vehículo con los daños ocasionados
                                </label>

                                <input
                                    name='fotosVehiculos'
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
                                             ${errorFile.fotosVehiculos ? 'file:bg-red-700 ' : 'file:bg-blue-700 '}
                                           
                                             
                                             file:text-white
                                             hover:file:bg-violet-100
                                             hover:file:text-blue-700 
                                             hover:file:border-blue-700 
                                               hover:file:border-1
                                            `}
                                    id="default_size"
                                    type="file"
                                    onBlur={handleBlur}
                                    onChange={e => handleFile(e, 5)}
                                />
                                {
                                    errorFile.fotosVehiculos && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  {errorFile.fotosVehiculos} </span>
                                }

                                {
                                    errors.fotosVehiculos && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
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

export default Steps4