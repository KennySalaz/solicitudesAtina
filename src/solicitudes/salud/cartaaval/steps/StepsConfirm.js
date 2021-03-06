import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '../../../../Componentes/Modal';
import { format } from 'date-fns';


const StepsConfirm = ({ formStep1, sendData, loadingModal, data, startDate, fileSelect, phonestate }) => {
    const [newDate, setNewDate] = useState([])

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
                <h6 className="step-steps1Title3  " > Confirmar datos </h6>
                <hr className='hrDivider' />
                <div className="fadeTop">
                    <h3 className="step-sub-title">Tipo de póliza y compañía de seguros</h3>
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
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre De la empresa
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">
                                {data.nombreTomador}
                            </div>
                        </div>)
                }

                {
                    data?.selectSeguro !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Compañía de seguro</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">

                                {data?.selectSeguro}
                            </div>
                        </div>
                    )
                }
                <hr className='hrDivider' />
                <div className="fadeTop">
                    <h3 className="step-sub-title">Datos personales</h3>
                </div>
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
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del Titular de la Póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.nombreTitularPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {/* {
                    data?.apellidoTitularPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Apellido del titular de la póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.apellidoTitularPoliza
                                }
                            </div>
                        </div>
                    )
                } */}
                {
                    data?.cedulaTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text-2">

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
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.emailTitular
                                }
                            </div>
                        </div>
                    )
                }

                {
                    phonestate?.phoneTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono del titular </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    phonestate?.phoneTitular
                                }
                            </div>
                        </div>
                    )
                }


                {
                    data?.celularTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono del titular </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
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
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del Titular de la Póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.nombreTitularPoliza2
                                }
                            </div>
                        </div>
                    )
                }
                {/* {
                    data?.apellidoTitularPoliza2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Apellido del titular de la póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.apellidoTitularPoliza2
                                }
                            </div>
                        </div>
                    )
                } */}
                {
                    data?.cedulaTitular2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text-2">
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
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
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
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono del titular </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.celularTitular2
                                }
                            </div>
                        </div>
                    )
                }

                {
                    phonestate?.phoneTitular2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono del titular </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    phonestate?.phoneTitular2
                                }
                            </div>
                        </div>
                    )
                }


                {
                    data?.nombreBeneficiarioPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del beneficiario  </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.nombreBeneficiarioPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {/* {
                    data?.apellidoBeneficiarioPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Apellido del beneficiario de la póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.apellidoBeneficiarioPoliza
                                }
                            </div>
                        </div>
                    )
                } */}
                {
                    data?.cedulaBeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text-2">
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
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
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
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono  del beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.celularBeneficiario
                                }
                            </div>
                        </div>
                    )
                }

                {
                    phonestate?.phoneBeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono del beneficiario </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    phonestate?.phoneBeneficiario
                                }
                            </div>
                        </div>
                    )
                }


                {
                    data?.informeMedico !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Informe médico</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
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
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
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
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
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
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    data?.patologiaDiagnostico
                                }
                            </div>
                        </div>
                    )
                }
                {
                    startDate !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fecha de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {format(startDate, 'dd/MM/yyyy')}
                                {/*  {
                                    startDate.toISOString().slice(0, 10)
                                } */}
                            </div>
                        </div>
                    )
                }
                {
                    data?.montoTotal !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Monto</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">

                                {
                                    data?.montoTotal
                                }
                            </div>
                        </div>
                    )
                }

                <hr className='hrDivider' />
                <div className="fadeTop">
                    <h6 className="step-sub-title">Documentos </h6>
                </div>

                {
                    fileSelect.map((dateFile, i) => (

                        <>
                            {
                                i === 0 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Informe médico</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {
                                                dateFile[0]?.name.substr(0, 10)
                                            }
                                            {
                                                dateFile[0]?.type.substr(5)
                                            }


                                        </div>
                                    </div>
                                )
                            }
                            {
                                i === 1 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Exámenes que corroboren patología</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {
                                                dateFile[0]?.name.substr(0, 10)
                                            }
                                            {
                                                dateFile[0]?.type.substr(5)
                                            }

                                        </div>
                                    </div>
                                )
                            }
                            {
                                i === 2 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Presupuesto de la institución de salud (vigente)</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {
                                                dateFile[0]?.name.substr(0, 10)
                                            }
                                            {
                                                dateFile[0]?.type.substr(5)
                                            }

                                        </div>
                                    </div>
                                )
                            }
                            {
                                i === 3 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {
                                                dateFile[0]?.name.substr(0, 10)
                                            }
                                            {
                                                dateFile[0]?.type.substr(5)
                                            }

                                        </div>
                                    </div>
                                )
                            }

                        </>

                    ))
                }
                <div className="fadeTop">

                    <div className='buttonStyle_'>
                        <div onClick={sendData} className="btn btn-blue ">
                            Enviar Solicitud
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StepsConfirm