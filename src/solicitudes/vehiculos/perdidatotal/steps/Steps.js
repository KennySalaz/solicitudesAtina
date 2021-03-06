import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Steps = ({ formStep1, setFormStep1, handleSend1, errorTipo, handleChange, handleBlur, initialValues, errors, updateData }) => {

    const [isActiveColective, setIsActiveColective] = useState(false)
    useEffect(() => {

        if (formStep1.tipoPoliza === 'Colectiva') {
            setIsActiveColective(true)
        } else if (formStep1.tipoPoliza === 'Individual') {
            setIsActiveColective(false)
        }
    }, [formStep1.tipoPoliza])


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
                <h6 className="step-steps1Title2">  Tipo de póliza y compañía de seguros</h6>
                <div  >
                    <div className="col-sm-6">
                        <ul className="grid grid-cols-2 gap-x-5 m-8 ml-0 ">
                            <li className="relative">
                                <input
                                    defaultChecked={formStep1?.tipoPoliza === 'Individual' && true}
                                    className="sr-only peer"
                                    type="radio"
                                    value='Individual'
                                    name='tipoPoliza'
                                    id="answer_yes"
                                    onChange={(e) => setFormStep1({ ...formStep1, tipoPoliza: e.target.value })}
                                />
                                <label className={` ${errors.tipoPoliza ? 'border-red-500' : 'border-gray-300'} flex justify-center  p-5 ali bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_yes">
                                    Individual
                                </label>
                            </li>

                            <li className="relative">
                                <input
                                    defaultChecked={formStep1?.tipoPoliza === 'Colectiva' && true}
                                    className="sr-only peer"
                                    type="radio"
                                    value='Colectiva'
                                    name='tipoPoliza'
                                    id="answer_no"
                                    onChange={(e) => setFormStep1({ ...formStep1, tipoPoliza: e.target.value })}
                                />
                                <label className={`${errors.tipoPoliza ? 'border-red-500' : 'border-gray-300'} flex justify-center p-5 bg-white border  rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent`} for="answer_no">
                                    Flota (Colectiva)
                                </label>
                            </li>
                        </ul>
                    </div>
                    {
                        isActiveColective && (
                            <div data-aos="fade-left" className="col-sm-6">
                                <div className="form-group">

                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">

                                        Nombre de la empresa

                                    </label>
                                    <input
                                        defaultValue={updateData?.nombreTomador}
                                        name='nombreTomador'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 ${errors.nombreTomador && "border-2 border-red-500"} rounded py-5  px-4  leading-tight focus:outline-nonefocus:bg-white focus:border-gray-500`}
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Nombre de la empresa"
                                    />
                                    {
                                        errors.nombreTomador && <span data-aos="zoom-in" className='errrorMsg'> {errors.nombreTomador} </span>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-sm-12">
                    <label
                        className="block uppercase tracking-wide text-gray-400 text-sm font-bold mb-2" for="grid-last-name"> Compañía de Seguros
                    </label>
                    <select
                        defaultValue={updateData?.selectSeguro}
                        name='selectSeguro'
                        onChange={handleChange}
                        onBlur={handleBlur}

                        className={`form-select appearance-none block w-full px-5 py-4 text-md font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid  ${errors.selectSeguro ? 'border-red-600' : 'border-gray-300'}  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}>
                        <option value={'Selecciona'}>Selecciona </option>
                        <option value={'Mercantil Seguros'}>Mercantil Seguros</option>
                        <option value={'Mapfre'}>Mapfre</option>
                        <option value={'Seguros Caracas'}>Seguros Caracas</option>
                        <option value={'Banesco Seguros'}>Banesco Seguros</option>
                        <option value={'Seguros Venezuela'}>Seguros Venezuela</option>
                        <option value={'Pirámide'}>Pirámide</option>
                        <option value={'Oceánica'}>Oceánica</option>
                        <option value={'Real Seguros'}>Real Seguros</option>
                    </select>
                </div>

            </div>

        </>

    )
}

export default Steps