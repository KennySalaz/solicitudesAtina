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

const Steps3 = ({ setFileSelect, fileSelect, formStep1, setFormStep1, handleChange, handleBlur, errors, startDate, setStartDate, handleFile, setErrorFile, errorFile, initialValues, handleEnte, enteFile, setEnteFile }) => {


    const [options, setOptions] = useState(false)
    const [options2, setOptions2] = useState(false)
    const [optionHour, setOptionHour] = useState(false)
    const [optionHour2, setOptionHour2] = useState(false)

    useEffect(() => {

        if (formStep1.reparacionParcial === 'Reparacion parcial') {
            setOptions(true)
        } else {
            setOptions(false)
        }



    }, [formStep1.reparacionParcial])

    useEffect(() => {

        if (formStep1.intervinoSioNo === 'si') {
            setOptions2(true)
        } else if (formStep1.intervinoSioNo === 'no') {
            setEnteFile([''])
            setOptions2(false)
        }
    }, [formStep1.intervinoSioNo])

    useEffect(() => {
        if (formStep1.horaOcurrencia === 'am') {
            setOptionHour(true)
        } else {
            setOptionHour(false)
        }
        if (formStep1.horaOcurrencia === 'pm') {
            setOptionHour2(true)
        } else {
            setOptionHour2(false)
        }
    }, [formStep1.horaOcurrencia])


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false
        });
    }, [AOS])

    useEffect(() => {
        console.log('aqui la  fechaaa', initialValues.horaOcurrencia)

    }, [initialValues.horaOcurrencia])




    







    return (
        <>
            <div data-aos="fade-up" >
                {/*    <h2 className="step-title">Tipo de reembolso</h2> */}
                <div className="col-sm-12" style={{ marginBottom: (formStep1.reparacionParcial === '' || formStep1.reparacionParcial === 'Selecciona el tipo de reembolso') ? '25px' : '0px' }}>
                    <select
                        name='reparacionParcial'
                        onChange={e => setFormStep1({ ...formStep1, reparacionParcial: e.target.value })}
                        onBlur={handleBlur}
                        class={`  ${errors.reparacionParcial ? 'border-red-500' : 'border-gray-300'} form-select appearance-none block w-full px-5 py-4 text-md font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`} aria-label="Default select example">
                        <option value={'Selecciona'}>Selecciona </option>
                        <option value={'Reparacion parcial'}>Reparacion parcial</option>

                    </select>

                </div>


                {
                    options && (
                        <div data-aos="fade-up">
                            <div className="row">
                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">



                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Fecha de nacimiento
                                        </label>



                                        <CurrencyFormat
                                            format="##/##/####"
                                            placeholder="DD/MM/AAAA"
                                            name='fechaOcurrencia'
                                            mask={['D', 'D', 'M', 'M', 'A', 'A', 'A', 'A']}
                                            onChange={handleChange}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.fechaOcurrencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        />


                                        {/*  <DataPicker startDate={startDate} setStartDate={setStartDate} />
 */}

                                    </div>



                                </div>

                                <div data-aos="fade-left" className="col-sm-6">

                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Hora de ocurrencia

                                        </label>

                                        {/* 
                                        <input
                                            name='horaOcurrencia'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.horaOcurrencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="9:20pm"
                                        /> */}


                                        <div class="flex">


                                            <CurrencyFormat

                                                placeholder="09:20 PM"
                                                name='horaOcurrencia'
                                                format={'##:##'}
                                                onChange={handleChange}
                                                suffix={optionHour ? 'Am ' : 'Pm '}
                                                className={`appearance-none block w-1/4 mr-5 bg-gray-200 text-gray-700 ${errors.horaOcurrencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            />


                                            <select
                                                defaultValue={''}
                                                onChange={e => setFormStep1({ ...formStep1, horaOcurrencia: e.target.value })}
                                                className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.horaOcurrencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                                aria-label="Default select example">

                                                <option value="am">Am</option>
                                                <option value="pm">Pm</option>

                                            </select>
                                        </div>
                                        {
                                            errors.horaOcurrencia && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.horaOcurrencia}  </span>
                                        }
                                    </div>


                                </div>
                            </div>
                            <div className="row">

                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Lugar de ocurrencia

                                        </label>
                                        <input
                                            name='lugarOcurrencia'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.lugarOcurrencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Alta mira"
                                        />
                                        {
                                            errors.lugarOcurrencia && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.lugarOcurrencia}  </span>
                                        }




                                    </div>

                                </div>

                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Descripcion de los hechos

                                        </label>
                                        <input
                                            name='descripcionHechos'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.descripcionHechos ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Modelo"
                                        />
                                        {
                                            errors.descripcionHechos && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.descripcionHechos}  </span>
                                        }
                                    </div>


                                </div>
                            </div>
                            <div className="row">

                                <div data-aos="fade-left" className="col-sm-6">

                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Describir los daños al vehículo

                                        </label>
                                        <input
                                            name='describirDanos'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.describirDanos ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Modelo"
                                        />
                                        {
                                            errors.describirDanos && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.describirDanos}  </span>
                                        }
                                    </div>
                                </div>

                                <div data-aos="fade-left" className="col-sm-6">
                                    <div className='row'>
                                        <div className="col-sm-5">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                                Intervino alguna autoridad ?

                                            </label>

                                            <ul className="grid grid-cols-3 gap-x-5 mt-5 ">
                                                <li className="relative">
                                                    <input className="sr-only peer" type="radio" value="si" name="siOno" id="answer_yes" onChange={e => setFormStep1({ ...formStep1, intervinoSioNo: e.target.value })} />
                                                    <label className={` ${errors.siOnoAutoridad ? 'border-red-500' : 'border-gray-300'} flex p-2 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yes">Si</label>

                                                    <div className="absolute hidden w-2 h-5 peer-checked:block top-5 right-3">
                                                        👍
                                                    </div>
                                                </li>

                                                <li className="relative">
                                                    <input className="sr-only peer" type="radio" value="no" name="siOno" id="answer_no" onChange={e => setFormStep1({ ...formStep1, intervinoSioNo: e.target.value })} />
                                                    <label className={`${errors.siOnoAutoridad ? 'border-red-500' : 'border-gray-300'} flex p-2 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_no">No</label>

                                                    <div className="absolute hidden w-2 h-5 peer-checked:block top-5 right-3">
                                                        👎
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-7">

                                            {
                                                options2 && (
                                                    <>
                                                        <label
                                                            data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease"
                                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                                            Inspección del ente

                                                        </label>

                                                        <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease" >

                                                            <div className="form-group">
                                                                <label class="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                                                    for="default_size">

                                                                </label>
                                                                <input
                                                                    name='entefile'
                                                                    class={`  block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:border-white ${errorFile.enteFile ? 'file:bg-red-700 ' : 'file:bg-blue-700 '} file:text-white hover:file:bg-violet-100 hover:file:text-blue-700 hover:file:border-blue-700 hover:file:border-1
                    `}
                                                                    id="default_size"
                                                                    type="file"
                                                                    onBlur={handleBlur}
                                                                    onChange={e => handleEnte(e, 0)}
                                                                />
                                                                {
                                                                    errorFile.enteFile && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  El tipo de archivo debe ser PDF </span>
                                                                }
                                                                {
                                                                    errors.entefile && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>  Obligatorio </span>
                                                                }

                                                            </div>
                                                        </div>
                                                    </>





                                                )
                                            }

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">


                                <div data-aos="fade-left" className="col-sm-6">

                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            ¿Hubo daños a terceros?

                                        </label>
                                        <input
                                            name='danosTerceros'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.danosTerceros ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Si o no"
                                        />
                                        {
                                            errors.danosTerceros && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.danosTerceros}  </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="col-sm-6">

                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            ¿El vehículo está detenido?

                                        </label>
                                        <input
                                            name='vehiculoDetenido'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.vehiculoDetenido ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Si o no"
                                        />
                                        {
                                            errors.vehiculoDetenido && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.vehiculoDetenido}  </span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row">


                                <div data-aos="fade-left" className="col-sm-6">

                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            ¿El vehículo puede moverse?

                                        </label>
                                        <input
                                            name='vehiculoMoverse'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.vehiculoMoverse ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Si o no"
                                        />
                                        {
                                            errors.vehiculoMoverse && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.vehiculoMoverse}  </span>
                                        }
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="col-sm-6">

                                    <div className="form-group">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            Indicar si hay rotura de vidrios

                                        </label>
                                        <input
                                            name='indicarRotura'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.indicarRotura ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Si o no"
                                        />
                                        {
                                            errors.indicarRotura && <span data-aos="zoom-in" style={{ color: 'red' }}> {errors.indicarRotura}  </span>
                                        }
                                    </div>
                                </div>
                            </div>





                        </div>
                    )
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

export default Steps3