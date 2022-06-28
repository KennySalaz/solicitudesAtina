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

const Steps3 = ({ setFileSelect, fileSelect, formStep1, setFormStep1, handleChange, handleBlur, errors, startDate, setStartDate, handleFile, setErrorFile, errorFile, initialValues, handleEnte, enteFile, setEnteFile, updateData }) => {


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
            /*   setEnteFile(['']) */
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
            once: true
        });
    }, [])








    const ArchivoCargado0 = () => {
        return (
            <>
                {
                    enteFile.map((fileNAME, index) => (
                        <>
                            {
                                !errorFile.enteFile && (
                                    <>
                                        {
                                            index === 0 && (
                                                <div className="bg-blue-100 w-full  p-5 hover:bg-blue-200 text-blue-800 text-sm font-semibold mr-2 mt-4 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">

                                                    <span style={{ color: 'black', paddingRight: '8px' }}>   Archivo Cargado  </span>
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







    return (
        <>
            <div data-aos="fade-up" >
                <div data-aos="fade-up row">
                    <div className="row ">
                        <div className="col-sm-6">
                            <div data-aos="fade-left" className="col-sm-12">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide mt-7 text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Fecha de ocurrencia
                                    </label>



                                    <CurrencyFormat
                                        defaultValue={updateData?.fechaOcurrencia}
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

                            <div data-aos="fade-left" className="col-sm-12">

                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

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


                                    <div className="flex">
                                        <CurrencyFormat
                                            defaultValue={updateData?.horaOcurrencia}
                                            placeholder="09:20 PM"
                                            name='horaOcurrencia'
                                            format={`##:## ${optionHour ? 'AM' : 'PM'} `}
                                            onChange={handleChange}
                                            suffix={optionHour ? 'AM' : 'PM'}
                                            className={`appearance-none block w-1/4 mr-5 bg-gray-200 text-gray-700 ${errors.horaOcurrencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        />


                                        <select
                                            defaultValue={''}
                                            onChange={e => setFormStep1({ ...formStep1, horaOcurrencia: e.target.value })}
                                            className={`appearance-none block w-1/6 mr-4 text-xl bg-gray-200 text-gray-700 ${errors.horaOcurrencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 pl-6 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                            aria-label="Default select example">

                                            <option value="am">AM</option>
                                            <option value="pm">PM</option>

                                        </select>
                                    </div>
                                    {
                                        errors.horaOcurrencia && <span data-aos="zoom-in" className='errrorMsg'> {errors.horaOcurrencia}  </span>
                                    }
                                </div>


                            </div>
                            <div data-aos="fade-left" className="col-sm-12">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Lugar de ocurrencia

                                    </label>
                                    <input
                                        defaultValue={updateData?.lugarOcurrencia}
                                        name='lugarOcurrencia'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.lugarOcurrencia ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Lugar"
                                    />
                                    {
                                        errors.lugarOcurrencia && <span data-aos="zoom-in" className='errrorMsg'> {errors.lugarOcurrencia}  </span>
                                    }




                                </div>

                            </div>

                            <div data-aos="fade-left" className="col-sm-12">
                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        DESCRIPCIÓN DE LOS HECHOS

                                    </label>
                                    <input
                                        defaultValue={updateData?.descripcionHechos}
                                        name='descripcionHechos'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.descripcionHechos ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Descripcion de los hechos"
                                    />
                                    {
                                        errors.descripcionHechos && <span data-aos="zoom-in" className='errrorMsg'> {errors.descripcionHechos}  </span>
                                    }
                                </div>


                            </div>
                            <div data-aos="fade-left" className="col-sm-12">

                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Describir los daños al vehículo

                                    </label>
                                    <input
                                        defaultValue={updateData?.describirDanos}
                                        name='describirDanos'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.describirDanos ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Daños"
                                    />
                                    {
                                        errors.describirDanos && <span data-aos="zoom-in" className='errrorMsg'> {errors.describirDanos}  </span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">



                            <div data-aos="fade-left" className="col-sm-12">
                                <div className='row'>
                                    <div className="col-sm-5" style={{ paddingRight: '10px' }}>
                                        <label
                                            className="block uppercase tracking-wide mt-8 text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                            ¿INTERVINO ALGUNA AUTORIDAD?

                                        </label>

                                        <ul className="grid grid-cols-3 gap-x-5 mt-5 ">
                                            <li className="relative">
                                                <input
                                                    defaultChecked={formStep1?.intervinoSioNo === 'si' && true}
                                                    className="sr-only peer" type="radio" value="si" name="siOno" id="answer_yes" onChange={e => setFormStep1({ ...formStep1, intervinoSioNo: e.target.value })} />
                                                <label className={` ${errors.siOnoAutoridad ? 'border-red-500' : 'border-gray-300'} flex justify-center p-2 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yes">Sí </label>


                                            </li>

                                            <li className="relative">
                                                <input
                                                    defaultChecked={formStep1?.intervinoSioNo === 'no' && true}
                                                    className="sr-only peer" type="radio" value="no" name="siOno" id="answer_no" onChange={e => setFormStep1({ ...formStep1, intervinoSioNo: e.target.value })} />
                                                <label className={`${errors.siOnoAutoridad ? 'border-red-500' : 'border-gray-300'} flex justify-center p-2 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_no">No</label>


                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-7">

                                        {
                                            options2 && (
                                                <>
                                                    <label
                                                        data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease"
                                                        className="block uppercase tracking-wide mt-8 text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                                        Inspección del ente

                                                    </label>

                                                    <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease" >

                                                        <div className="form-group">
                                                            <label className="block mt-7 text-md font-medium text-gray-900 dark:text-gray-300"
                                                                for="default_size">

                                                            </label>
                                                            <input
                                                                name='entefile'
                                                                className={`  block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:border-white ${errorFile.enteFile ? 'file:bg-red-700 ' : 'file:bg-blue-700 '} file:text-white hover:file:bg-violet-100 hover:file:text-blue-700 hover:file:border-blue-700 hover:file:border-1 `}
                                                                id="default_size"
                                                                type="file"
                                                                onBlur={handleBlur}
                                                                onChange={e => handleEnte(e, 0)}
                                                            />

                                                            {
                                                                enteFile[0] && (
                                                                    <ArchivoCargado0 />
                                                                )
                                                            }


                                                            {
                                                                errorFile.enteFile && <span data-aos="zoom-in" style={{ color: 'red', fontSize: '10px' }}>   El tipo de archivo debe ser PDF/JPG/PNG </span>
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

                            <div data-aos="fade-left" className="col-sm-12">

                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide mt-3 text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        ¿Hubo daños a terceros?

                                    </label>

                                    <ul className="grid grid-cols-3 gap-x-5 mt-5 ">
                                        <li className="relative">
                                            <input
                                                defaultChecked={formStep1?.danosSioNo === 'si' && true}
                                                className="sr-only peer" type="radio" value="si" name="danosSioNo" id="answer_yess" onChange={e => setFormStep1({ ...formStep1, danosSioNo: e.target.value })} />
                                            <label className={` ${errors.danosSioNo ? 'border-red-500' : 'border-gray-300'} flex p-2 justify-center bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yess">Si</label>

                                        </li>

                                        <li className="relative">
                                            <input
                                                defaultChecked={formStep1?.danosSioNo === 'no' && true}
                                                className="sr-only peer" type="radio" value="no" name="danosSioNo" id="answer_noo" onChange={e => setFormStep1({ ...formStep1, danosSioNo: e.target.value })} />
                                            <label className={`${errors.danosSioNo ? 'border-red-500' : 'border-gray-300'} flex p-2 justify-center bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_noo">No</label>


                                        </li>
                                    </ul>

                                    {/*  <input
                                        defaultValue={updateData?.danosTerceros}
                                        name='danosTerceros'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.danosTerceros ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Si o no"
                                    />
                                    {
                                        errors.danosTerceros && <span data-aos="zoom-in" className='errrorMsg'> {errors.danosTerceros}  </span>
                                    } */}
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-sm-12">

                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        ¿El vehículo está detenido?

                                    </label>


                                    <ul className="grid grid-cols-3 gap-x-5 mt-5 ">
                                        <li className="relative">
                                            <input
                                                defaultChecked={formStep1?.vehiculoDetenidoSioNo === 'si' && true}
                                                className="sr-only peer" type="radio" value="si" name="vehiculoDetenidoSioNo" id="answer_yesss" onChange={e => setFormStep1({ ...formStep1, vehiculoDetenidoSioNo: e.target.value })} />
                                            <label className={`${errors.vehiculoDetenidoSioNo ? 'border-red-500' : 'border-gray-300'} flex p-2  justify-center bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yesss">Si</label>

                                        </li>

                                        <li className="relative">
                                            <input
                                                defaultChecked={formStep1?.vehiculoDetenidoSioNo === 'no' && true}
                                                className="sr-only peer" type="radio" value="no" name="vehiculoDetenidoSioNo" id="answer_nooo" onChange={e => setFormStep1({ ...formStep1, vehiculoDetenidoSioNo: e.target.value })} />
                                            <label className={`${errors.vehiculoDetenidoSioNo ? 'border-red-500' : 'border-gray-300'} flex p-2 justify-center  bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_nooo">No</label>


                                        </li>
                                    </ul>
                                    {/* <input
                                        defaultValue={updateData?.vehiculoDetenido}
                                        name='vehiculoDetenido'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.vehiculoDetenido ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Si o no"
                                    />
                                    {
                                        errors.vehiculoDetenido && <span data-aos="zoom-in" className='errrorMsg'> {errors.vehiculoDetenido}  </span>
                                    } */}
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-sm-12">

                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        ¿El vehículo puede moverse?

                                    </label>

                                    <ul className="grid grid-cols-3 gap-x-5 mt-5 ">
                                        <li className="relative">
                                            <input
                                                defaultChecked={formStep1?.vehiculomoverseSioNo === 'si' && true}
                                                className="sr-only peer" type="radio" value="si" name="vehiculomoverseSioNo" id="answer_yessss" onChange={e => setFormStep1({ ...formStep1, vehiculomoverseSioNo: e.target.value })} />
                                            <label className={`${errors.vehiculomoverseSioNo ? 'border-red-500' : 'border-gray-300'} justify-center flex p-2 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yessss">Si</label>

                                        </li>

                                        <li className="relative">
                                            <input
                                                defaultChecked={formStep1?.vehiculomoverseSioNo === 'no' && true}
                                                className="sr-only peer" type="radio" value="no" name="vehiculomoverseSioNo" id="answer_noooo" onChange={e => setFormStep1({ ...formStep1, vehiculomoverseSioNo: e.target.value })} />
                                            <label className={`${errors.vehiculomoverseSioNo ? 'border-red-500' : 'border-gray-300'} flex justify-center p-2 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_noooo">No</label>


                                        </li>
                                    </ul>
                                    {/*  <input
                                        defaultValue={updateData?.vehiculoMoverse}
                                        name='vehiculoMoverse'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.vehiculoMoverse ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Si o no"
                                    />
                                    {
                                        errors.vehiculoMoverse && <span data-aos="zoom-in" className='errrorMsg'> {errors.vehiculoMoverse}  </span>
                                    } */}
                                </div>
                            </div>
                            <div data-aos="fade-left" className="col-sm-12">

                                <div className="form-group">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Indicar si hay rotura de vidrios

                                    </label>
                                    <ul className="grid grid-cols-3 gap-x-5 mt-5 ">
                                        <li className="relative">
                                            <input
                                                defaultChecked={formStep1?.roturasSioNo === 'si' && true}
                                                className="sr-only peer" type="radio" value="si" name="roturasSioNo" id="answer_yesssss" onChange={e => setFormStep1({ ...formStep1, roturasSioNo: e.target.value })} />
                                            <label className={`${errors.roturasSioNo ? 'border-red-500' : 'border-gray-300'} flex justify-center p-2 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yesssss">Si</label>

                                        </li>

                                        <li className="relative">
                                            <input
                                                defaultChecked={formStep1?.roturasSioNo === 'no' && true}
                                                className="sr-only peer" type="radio" value="no" name="roturasSioNo" id="answer_nooooo" onChange={e => setFormStep1({ ...formStep1, roturasSioNo: e.target.value })} />
                                            <label className={`${errors.roturasSioNo ? 'border-red-500' : 'border-gray-300'} flex justify-center p-2 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_nooooo">No</label>


                                        </li>
                                    </ul>
                                    {/* <input
                                        defaultValue={updateData?.indicarRotura}
                                        name='indicarRotura'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.indicarRotura ? "border-2 border-red-500" : 'border border-gray-200'}   rounded py-5 px-4 leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Si o no"
                                    />
                                    {
                                        errors.indicarRotura && <span data-aos="zoom-in" className='errrorMsg'> {errors.indicarRotura}  </span>
                                    } */}
                                </div>
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

export default Steps3