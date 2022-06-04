import React, { useState, useEffect } from 'react'
import '../css/card.css'
import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = () => {

    const [isActiveSalud, setIsActiveSalud] = useState(false)
    const [isActiveVehiculo, setIsActiveVehiculo] = useState(false)

    const selectOptionSalud = () => {
        setIsActiveSalud(!isActiveSalud)
    }
    const selectOptionVehiculo = () => {
        setIsActiveVehiculo(!isActiveVehiculo)
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false
        });
    })


    return (
        <>
            <div className='container container-Card'>
                <div className='row'>
                    <div className='col-md-4'>

                        <div className="flex justify-center m-5" onClick={selectOptionSalud} >
                            <div className="card rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!">
                                    <img className=" p-4 rounded-t-lg" src="https://atinaseguros.com/wp-content/uploads/2022/03/polizas-de-salud.png" alt="" />
                                </a>
                                <div className="p-6">

                                    <button type="button" onClick={selectOptionSalud} className=" w-full block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">SALUD</button>
                                </div>
                            </div>
                        </div>

                        {
                            isActiveSalud && (

                                <div className='row ' data-aos="fade-left" style={{ margin: '5px' }} >
                                    <div className='col-md-6'>
                                        <Link to={'/salud/reembolso'}>
                                            <button type="button" className=" w-full block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reembolso</button>
                                        </Link>

                                    </div>
                                    <div className='col-md-6'>
                                        <Link to={'/salud/cartaAval'}>
                                            <button type="button" className=" w-full block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Carta Aval</button>
                                        </Link>
                                    </div>

                                </div>
                            )
                        }


                    </div>

                    <div className='col-md-4'>

                        <div className="flex justify-center m-5" >
                            <div className="card rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!">
                                    <img className="rounded-t-lg" src="https://atinaseguros.com/wp-content/uploads/2022/03/polizas-de-accidentes-P.png" alt="" />
                                </a>
                                <div className="p-6">

                                    <button type="button" className=" w-full block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='col-md-4'>
                        <div className="flex justify-center m-5" onClick={selectOptionVehiculo} >
                            <div className="card rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!">
                                    <img className="rounded-t-lg" src="https://atinaseguros.com/wp-content/uploads/2022/03/poliza-de-automobiles.png" alt="" />
                                </a>
                                <div className="p-6">
                                    <button type="button" className=" w-full  block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Vehiculos</button>
                                </div>
                            </div>
                        </div>
                        {
                            isActiveVehiculo && (

                                <div className='row ' data-aos="fade-left" style={{ margin: '5px' }} >
                                    <div className='col-md-6'>
                                        <Link to={'/vehiculos/reparacion'}>
                                            <button type="button" className=" w-full block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reparacion Parcial</button>
                                        </Link>

                                    </div>
                                    <div className='col-md-6'>
                                        <Link to={'/salud/cartaAval'}>
                                            <button type="button" className=" w-full block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Perdida Total</button>
                                        </Link>
                                    </div>

                                </div>


                            )
                        }

                    </div>



                </div>
            </div>
        </>
    )
}

export default Card