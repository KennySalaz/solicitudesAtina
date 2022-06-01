import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '../../../../Componentes/Modal';


const StepsConfirm = ({ formStep1, sendData, loadingModal, data, startDate }) => {

    const [newDate, setNewDate] = useState([])
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease',
            once: false
        });
    })
    useEffect(() => {

        console.log('NOMBREEEEEEEEEEE', data)
    }, [data])




    return (
        <>
            <div data-aos="fade-up" >
                <h2 className="step-title">Confirmar Datos </h2>
                <div className="fadeTop">
                    <h3 className="step-sub-title">Tipo de póliza</h3>
                </div>
                <Modal loadingModal={loadingModal} />
                {
                    formStep1.tipoPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Tipo de póliza
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {formStep1.tipoPoliza}
                            </div>
                        </div>
                    )
                }

                {
                    data.nombreTomador !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre Del Tomador
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">
                                {data.nombreTomador}
                            </div>
                        </div>)
                }

                {
                    data?.selectSeguro !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Compañia de seguro</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">

                                {data?.selectSeguro}
                            </div>
                        </div>
                    )
                }



                {
                    formStep1?.titularObeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Titular o Beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">
                                {formStep1?.titularObeneficiario}
                            </div>
                        </div>
                    )
                }
                {
                    data?.nombreTitularPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del Titular de la Poliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.nombreTitularPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.apellidoTitularPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Apellido del titular de la póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.apellidoTitularPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.cedulaTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.cedulaTitular
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.emailTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Correo electrónico del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.emailTitular
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.celularTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Celular con WSP del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.celularTitular
                                }
                            </div>
                        </div>
                    )
                }







                {
                    data?.nombreTitularPoliza2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del Titular de la Poliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.nombreTitularPoliza2
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.apellidoTitularPoliza2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Apellido del titular de la póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.apellidoTitularPoliza2
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.cedulaTitular2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.cedulaTitular2
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.emailTitular2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Correo electrónico del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.emailTitular2
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.celularTitular2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Celular con WSP del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.celularTitular2
                                }
                            </div>
                        </div>
                    )
                }









                {
                    data?.nombreBeneficiarioPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del beneficiario de la póliza </div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.nombreBeneficiarioPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.apellidoBeneficiarioPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Apellido del beneficiario de la póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.apellidoBeneficiarioPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.cedulaBeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.cedulaBeneficiario
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.emailBeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Correo electrónico del beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.emailBeneficiario
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.celularBeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Celular con WSP del beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.celularBeneficiario
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.informeMedico !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Informe médico</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.informeMedico
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.presupuestoSalud !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Presupuesto de la institución de salud</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.presupuestoSalud
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.examenesRealizados !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Exámenes realizados</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.examenesRealizados
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.patologiaDiagnostico !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Patología o Diagnóstico</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.patologiaDiagnostico
                                }
                            </div>
                        </div>
                    )
                }
                {/* {
                    newDate !== '' && (
                        <div   className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fecha de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    newDate
                                }
                            </div>
                        </div>
                    )
                } */}
                {
                    data?.montoTotal !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Monto</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    data?.montoTotal
                                }
                            </div>
                        </div>
                    )
                }


                {/*   <div className="fadeTop">
                    <h3 className="step-sub-title">Datos del Titular / Beneficiario</h3>
                </div>

 */}












                <div className="fadeTop">
                    <div onClick={sendData} className="btn btn-blue ">
                        Enviar Solicitud
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepsConfirm