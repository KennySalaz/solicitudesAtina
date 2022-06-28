import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '../../../../Componentes/Modal';


const StepsConfirm = ({ formStep1, sendData, loadingModal, data, startDate, enteFile, fileSelect, updateData, phonestate }) => {



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
                    <h3 className="step-sub-title">Tipo de póliza y Compañía de seguro</h3>
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
                    data?.nombreTomador !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre de la empresa
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">
                                {data?.nombreTomador}
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

                <div className="fadeTop">
                    <h3 className="step-sub-title2">Datos del titular</h3>
                </div>


                {
                    data?.nombreTitularPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del Titular de la Póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.nombreTitularPoliza
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.cedulaIdentidad !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text-2">
                                {
                                    data?.cedulaIdentidad
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.fechaNacimiento !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fecha de nacimiento</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.fechaNacimiento
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.gradoLicencia !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Grado de licencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.gradoLicencia
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.placaVehiculo !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Placa del vehículo</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.placaVehiculo
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.modelo !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Modelo del vehículo</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.modelo
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.marca !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Marca del vehículo</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.marca
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.ano !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Año</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.ano
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.emailTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Correo electrónico del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.emailTitular
                                }
                            </div>
                        </div>
                    )
                }
                {/* {
                    data?.celularTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.celularTitular
                                }
                            </div>
                        </div>
                    )
                } */}

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


                <div className="fadeTop">
                    <h3 className="step-sub-title2">Datos del conductor</h3>
                </div>

                {
                    data?.nombreConductor !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del conductor</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.nombreConductor
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.cedulaConductor !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del conductor</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text-2">
                                {
                                    data?.cedulaConductor
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.fechaConductor !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fecha de nacimiento del conductor</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.fechaConductor
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.gradoConductor !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Grado de licencia del conductor</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.gradoConductor
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.correoConductor !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Correo electrónico del conductor</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.correoConductor
                                }
                            </div>
                        </div>
                    )
                }
                {/* {
                    data?.celularConductor !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono del conductor</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.celularConductor
                                }
                            </div>
                        </div>
                    )
                } */}

                {
                    phonestate?.phoneTitular2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Número de teléfono del conductor </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">
                                {
                                    phonestate?.phoneTitular2
                                }
                            </div>
                        </div>
                    )
                }
                <hr className='hrDivider' />

                <div className="fadeTop">
                    <h3 className="step-sub-title">Reparacion parcial</h3>
                </div>

                {
                    formStep1?.reparacionParcial !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Pérdida total</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    formStep1?.reparacionParcial
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.fechaOcurrencia !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fecha de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.fechaOcurrencia
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.fechaOcurrencia2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fecha de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.fechaOcurrencia2
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.fechaOcurrencia3 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fecha de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.fechaOcurrencia3
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.horaOcurrencia !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Hora de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.horaOcurrencia
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.horaOcurrencia2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Hora de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.horaOcurrencia2
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.horaOcurrencia3 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Hora de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.horaOcurrencia3
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.lugarOcurrencia !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Lugar de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.lugarOcurrencia
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.lugarOcurrencia2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Lugar de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.lugarOcurrencia2
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.lugarOcurrencia3 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Lugar de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.lugarOcurrencia3
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.descripcionHechos !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Descripción de los hechos</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.descripcionHechos
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.descripcionHechos2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Descripción de los hechos</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.descripcionHechos2
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.descripcionHechos3 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Descripción de los hechos</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.descripcionHechos3
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.describirDanos !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Descripcion de los daños del vehículo</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.describirDanos
                                }
                            </div>
                        </div>
                    )
                }
                {
                    data?.describirDanos3 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Descripcion de los daños del vehículo</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.describirDanos3
                                }
                            </div>
                        </div>
                    )
                }


                {
                    formStep1.intervinoSioNo !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">¿Intervino alguna autoridad?</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    formStep1.intervinoSioNo
                                }
                            </div>
                        </div>
                    )
                }

                {
                    formStep1.danosSioNo !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">¿Hubo danos a terceros?</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    formStep1.danosSioNo
                                }
                            </div>
                        </div>
                    )
                }

                {
                    formStep1.danosSioNo2 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">¿Hubo danos a terceros?</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    formStep1.danosSioNo2
                                }
                            </div>
                        </div>
                    )
                }

                {
                    formStep1.vehiculoDetenidoSioNo !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">¿El vehiculo esta detenido?</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    formStep1.vehiculoDetenidoSioNo
                                }
                            </div>
                        </div>
                    )
                }


                {/*  {
                    data?.danosTerceros !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">¿Hubo daños a terceros?</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.danosTerceros
                                }
                            </div>
                        </div>
                    )
                }

                {
                    data?.danosTerceros3 !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">¿Hubo daños a terceros?</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.danosTerceros3
                                }
                            </div>
                        </div>
                    )
                } */}
                {/*   {
                    data?.vehiculoDetenido !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">¿El vehiculo esta detenido?</div>
                            <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                {
                                    data?.vehiculoDetenido
                                }
                            </div>
                        </div>
                    )
                } */}






                {
                    enteFile && (
                        <>
                            <hr className='hrDivider' />
                            <div className="fadeTop">
                                <h3 className="step-sub-title">Documentos</h3>
                            </div>

                            {
                                enteFile?.map((dataFile, index) => (
                                    <>

                                        {
                                            index === 0 && (
                                                <div className="row fadeTop">
                                                    <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Inspeccion de la autoridad </div>
                                                    <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                                        {
                                                            dataFile[0]?.name.substr(0, 12)
                                                        }
                                                        {
                                                            dataFile[0]?.type.substr(5)
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        }

                                        {
                                            index === 3 && (
                                                <div className="row fadeTop">
                                                    <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Inspeccion de la autoridad </div>
                                                    <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                                        {
                                                            dataFile[0]?.name.substr(0, 12)
                                                        }
                                                        {
                                                            dataFile[0]?.type.substr(5)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            index === 1 && (
                                                <div className="row fadeTop">
                                                    <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Denuncia de las autoridades </div>
                                                    <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                                        {
                                                            dataFile[0]?.name.substr(0, 12)
                                                        }
                                                        {
                                                            dataFile[0]?.type.substr(5)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            index === 2 && (
                                                <div className="row fadeTop">
                                                    <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Informe bomberos o autoridad competente </div>
                                                    <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                                        {
                                                            dataFile[0]?.name.substr(0, 12)
                                                        }
                                                        {
                                                            dataFile[0]?.type.substr(5)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                ))
                            }
                        </>
                    )
                }

                {/*  {
                    fileSelect.map((dataFile, index) => (
                        <>
                            {
                                index === 0 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del conductor</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {
                                                dataFile[0].name.substr(0, 12)
                                            }
                                            ... (.pdf)

                                        </div>
                                    </div>

                                )
                            }
                            {
                                index === 1 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Certificado médico del conductor</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {dataFile[0].name.substr(0, 12)
                                            }
                                            ... (.pdf)
                                        </div>
                                    </div>

                                )
                            }
                            {
                                index === 2 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Licencia de conducir del conductor</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {dataFile[0].name.substr(0, 12)
                                            }
                                            ... (.pdf)
                                        </div>
                                    </div>

                                )
                            }
                            {
                                index === 3 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Carnet de circulación</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {dataFile[0].name.substr(0, 12)
                                            }
                                            ... (.pdf)
                                        </div>
                                    </div>

                                )
                            }
                            {
                                index === 4 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Autorización para circular en caso de que aplique</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {dataFile[0].name.substr(0, 12)
                                            }
                                            ... (.pdf)
                                        </div>
                                    </div>

                                )
                            }
                            {
                                index === 5 && (
                                    <div className="row fadeTop">
                                        <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fotos del vehículo con los daños ocasionados</div>
                                        <div className="col-md-8 col-sm-6 col-xs-12  confirm-text">
                                            {dataFile[0].name.substr(0, 12)
                                            }
                                            ... (.pdf)
                                        </div>
                                    </div>

                                )
                            }
                        </>
                    )
                    )
                } */}
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