import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes, } from "firebase/storage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { v4 as uuidv4 } from 'uuid';
import firebaseApp from '../../../firebase';
import '../../../css/bootstrap.min.css'
import '../../../css/font.css'
import '../../../css/Loading.css'
import '../../../css/Modals.css'
import '../../../css/plugins.css'
import '../../../css/style.css'
import imgLogo from '../../../images/atinaL.png'
import { Formik } from 'formik';
import Steps1 from './steps/Steps1';
import Steps from './steps/Steps';
import Steps2 from './steps/Steps2';
import StepsConfirm from './steps/StepsConfirm';
import { useNavigate, BrowserRouter } from "react-router-dom";
import Steps3 from './steps/Steps3';
import Steps4 from './steps/Steps4';
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

const PageParcial = () => {

    const navigate = useNavigate()
    const Swal = require('sweetalert2')
    const [page, setPage] = useState(1)
    const [loadingModal, setLoadingModal] = useState(false)
    const [fileSelect, setFileSelect] = useState(new Array(5))
    const [enteFile, setEnteFile] = useState([])
    const [urlGET, setUrlGET] = useState([])

    const [errorFile, setErrorFile] = useState({
        cedulaConductor: false,
        certificadoMedico: false,
        licenciaConductor: false,
        carnetCirculacion: false,
        autorizacion: false,
        fotosVehiculos: false,
        enteFile: false,

    })
    const [data, setData] = useState()
    const [startDate, setStartDate] = useState('');
    const [formStep1, setFormStep1] = useState({
        tipoPoliza: '',
        titularObeneficiario: '',
        reparacionParcial: '',
        fileDataInformeMedico: '',
        fileDataRecipeIndicaciones: '',
        fileDataExamenesRealizados: '',
        fileDataFacturas: '',
        SioNo: '',
        intervinoSioNo: '',
        horaOcurrencia : '',
        tipoDeCedula: '',
        tipoDeCedulaTitular: '',
        tipoDeCedulaBeneficiario: '',
        tipoDeMoneda: '',
    })
    const prevSteps = () => {
        if (page === 1) { setPage((current) => current - 1) }
        if (page === 2) { setPage((current) => current - 1) }
        if (page === 3) { setPage((current) => current - 1) }
        if (page === 4) { setPage((current) => current - 1) }
        if (page === 5) { setPage((current) => current - 1) }
    }
    const handleFile = (e, n) => {

        if (e.target.name === 'cedulaConductor') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[0], e.target.files])
                }
                setErrorFile({ ...errorFile, cedulaConductor: false })
            } else {
                setErrorFile({ ...errorFile, cedulaConductor: true })
            }


        }

        if (e.target.name === 'certificadoMedico') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[1], e.target.files])
                    console.log('se ha agregado')
                }
                setErrorFile({ ...errorFile, certificadoMedico: false })
            } else {
                setErrorFile({ ...errorFile, certificadoMedico: true })
            }
        }
        if (e.target.name === 'licenciaConductor') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[2], e.target.files])
                }
                setErrorFile({ ...errorFile, licenciaConductor: false })
            } else {
                setErrorFile({ ...errorFile, licenciaConductor: true })
            }
        }
        if (e.target.name === 'carnetCirculacion') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[3], e.target.files])
                }
                setErrorFile({ ...errorFile, carnetCirculacion: false })
            } else {
                setErrorFile({ ...errorFile, carnetCirculacion: true })
            }
        }
        if (e.target.name === 'autorizacion') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[4], e.target.files])
                }
                setErrorFile({ ...errorFile, autorizacion: false })
            } else {
                setErrorFile({ ...errorFile, autorizacion: true })
            }
        }
        if (e.target.name === 'fotosVehiculos') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[5], e.target.files])
                }
                setErrorFile({ ...errorFile, fotosVehiculos: false })
            } else {
                setErrorFile({ ...errorFile, fotosVehiculos: true })
            }

        }
    }


    const handleEnte = (e, n) => {


        if (e.target.name === 'entefile') {
            const file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (enteFile) {
                    enteFile.splice(n, 1, e.target.files)
                    console.log(enteFile)
                } else {
                    setEnteFile([...enteFile[0], e.target.files])
                }
                setErrorFile({ ...errorFile, enteFile: false })
            } else {
                setErrorFile({ ...errorFile, enteFile: true })
            }
        }


    }

    const sendData = async () => {
        setLoadingModal(true)
        const id = uuidv4()
        await Promise.all(
            fileSelect.map(async (file, i) => {
                const storageRef = ref(storage, `/vehiculos/reparacionParcial/reembolso/${id}/${file[0].name}`)
                const uploadResult = await uploadBytes(storageRef, file[0])
                urlGET.push(await getDownloadURL(uploadResult.ref))
            })
        )
        setUrlGET(urlGET)
        try {
            setDoc(doc(db, '/vehiculos/reparacion-parcial/historico/', id), {
                Tipodepóliza: formStep1.tipoPoliza,
                NombreDelTomador: data.nombreTomador,
                CompañíadeSeguros: data.selectSeguro,
                TitularOBeneficiario: formStep1.titularObeneficiario,
                Nombredeltitulardelapóliza: data.nombreTitularPoliza || data.nombreTitularPoliza2,
                /*    Appellidodeltitulardelapóliza: data.apellidoTitularPoliza || data.apellidoTitularPoliza2, */
                CéduladeidentidadTitular: data.cedulaTitular || data.cedulaTitular2,
                CorreoElectrónicoTitular: data.emailTitular || data.emailTitular2,
                NumeroTelefonoTitular: data.celularTitular || data.celularTitular2,
                NombredelBeneficiariodelapóliza: data.nombreBeneficiarioPoliza,
                /*  AppellidodelBeneficiariodelapóliza: data.apellidoBeneficiarioPoliza, */
                CéduladeidentidadBeneficiario: data.cedulaBeneficiario,
                CorreoElectrónicoBeneficiario: data.emailBeneficiario,
                NumeroTelefonoBeneficiario: data.celularBeneficiario,
                tipoReembolso: formStep1.tipoReembolso,
                PatologíaoDiagnóstico: data.patologiaDiagnostico,
                Fechadeocurrencia: startDate,
                Monto: data.montoTotal,
                documentosPdf: urlGET,
            })
        } catch (error) {
            alert(error)
        }
        setTimeout(() => {
            setLoadingModal(false)
            Swal.fire(
                'Solicitud enviada',
                ` Gracias por iniciar el trámite de su solicitud, en Atina estaremos canalizando la misma y 
                validando que todos los soportes estén bien. <br/> En caso de duda, alguna aclaración, o solicitud 
                de información adicional, uno de nuestros asesores te estará contactando. Gracias`,
            )
            setFileSelect([''])
            setErrorFile({
                errorInformeOp1: false,
                errorRecipeOp1: false,
                errorExamenesOp1: false,
                errorFacturaOp1: false,
            })
            window.location.href = 'https://atinaseguros.com/'
        }, 5000);
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false
        });
    }, [AOS])

    useEffect(() => {

        console.log(enteFile)


    }, [enteFile])


    return (
        <>
            <div className='container mx-auto' >
                <div className="h_total luna-signup-left-overlay" ></div>
                <div className='container'>
                    <div className="row">
                        <Formik
                            initialValues={{
                                //PAGE 1
                                nombreTomador: '',
                                selectSeguro: '',
                                titularObeneficiario: '',
                                //PAGE 2
                                nombreTitularPoliza: '',
                                cedulaIdentidad: '',
                                fechaNacimiento: '',
                                gradoLicencia: '',
                                placaVehiculo: '',
                                modelo: '',
                                marca: '',
                                ano: '',
                                emailTitular: '',
                                celularTitular: '',
                                //Page 3
                                siOno: '',
                                nombreConductor: '',
                                cedulaConductor: '',
                                fechaConductor: '',
                                gradoConductor: '',
                                correoConductor: '',
                                celularConductor: '',
                                //PAGE  4
                                reparacionParcial: '',
                                fechaOcurrencia: '',
                                horaOcurrencia: '',
                                lugarOcurrencia: '',
                                descripcionHechos: '',
                                describirDanos: '',
                                entefile: '',
                                siOnoAutoridad: '',
                                danosTerceros: '',
                                vehiculoDetenido: '',
                                vehiculoMoverse: '',
                                indicarRotura: '',
                                //Page 5
                                cedulaConductor: '',
                                certificadoMedico: '',
                                licenciaConductor: '',
                                carnetCirculacion: '',
                                autorizacion: '',
                                fotosVehiculos: '',
                            }}
                            validate={(valores) => {
                                let errores = {}
                                if (page === 1) {
                                    if (!valores.selectSeguro || valores.selectSeguro === 'Selecciona') {
                                        errores.selectSeguro = 'Obligatorio'
                                    }

                                    if (!valores.nombreTomador && formStep1.tipoPoliza === 'Colectiva') {
                                        errores.nombreTomador = true
                                    } else if (valores.nombreTomador !== '' && formStep1.tipoPoliza === 'Colectiva' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreTomador)) {
                                        errores.nombreTomador = 'Solo letras y espacios'
                                    }


                                    if (!formStep1.tipoPoliza) {
                                        errores.tipoPoliza = 'Obligatorio'
                                    }
                                }

                                if (page === 2) {

                                    if (!valores.nombreTitularPoliza) {
                                        errores.nombreTitularPoliza = true
                                    } else if (valores.nombreTitularPoliza !== '' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreTitularPoliza)) {
                                        errores.nombreTitularPoliza = 'Solo letras y espacios'
                                    }

                                    if (!valores.cedulaIdentidad) {
                                        errores.cedulaIdentidad = true
                                    }

                                    if (!valores.gradoLicencia || valores.gradoLicencia === 'Selecciona') {
                                        errores.gradoLicencia = true
                                    }



                                    if (!valores.fechaNacimiento) {
                                        errores.fechaNacimiento = true
                                    }
                                    if (!valores.placaVehiculo) {
                                        errores.placaVehiculo = true
                                    }

                                    if (!valores.modelo) {
                                        errores.modelo = true
                                    }

                                    if (!valores.marca) {
                                        errores.marca = true
                                    }

                                    if (!valores.ano) {
                                        errores.ano = true
                                    }
                                    if (!valores.emailTitular) {
                                        errores.emailTitular = true
                                    } else if (valores.emailTitular !== '' && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.emailTitular)) {
                                        errores.emailTitular = 'Ingrese un correo valido'
                                    }


                                    if (!valores.celularTitular) {
                                        errores.celularTitular = true
                                    } else if (valores.celularTitular.length < 16) {
                                        errores.celularTitular = 'Ingrese un numero de telefono valido +58 424 000 0000'
                                    }
                                }

                                if (page === 3) {


                                    if (!formStep1.SioNo) {
                                        errores.siOno = true
                                    }

                                    if (formStep1.SioNo === 'si') {

                                        if (!valores.nombreConductor) {
                                            errores.nombreConductor = true
                                        } else if (valores.nombreConductor !== '' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreConductor)) {
                                            errores.nombreConductor = 'Solo letras y espacios'
                                        }
                                        if (!valores.cedulaConductor) {
                                            errores.cedulaConductor = true
                                        }

                                        if (!valores.gradoConductor || valores.gradoConductor === 'Selecciona') {
                                            errores.gradoConductor = true
                                        }

                                        if (!valores.fechaConductor) {
                                            errores.fechaConductor = true
                                        }

                                        if (!valores.correoConductor) {
                                            errores.correoConductor = true
                                        } else if (valores.correoConductor !== '' && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correoConductor)) {
                                            errores.correoConductor = 'Ingrese un correo valido'
                                        }
                                        if (!valores.celularConductor) {
                                            errores.celularConductor = true
                                        } else if (valores.celularConductor.length < 16) {
                                            errores.celularConductor = 'Ingrese un numero de telefono valido +58 424 000 0000'
                                        }
                                    }


                                }

                                if (page === 4) {

                                    if (!formStep1.reparacionParcial || formStep1.reparacionParcial === 'Selecciona') {
                                        errores.reparacionParcial = true
                                    }

                                    if (!valores.fechaOcurrencia) {
                                        errores.fechaOcurrencia = true
                                    }

                                    if (!valores.horaOcurrencia) {
                                        errores.horaOcurrencia = true
                                    }/* else if(valores.horaOcurrencia.length < 6){
                                        errores.horaOcurrencia = 'Ingrese una hora valida'
                                    } */

                                    if (!valores.lugarOcurrencia) {
                                        errores.lugarOcurrencia = true
                                    }


                                    if (!valores.descripcionHechos) {
                                        errores.descripcionHechos = true
                                    }


                                    if (formStep1.intervinoSioNo === '') {
                                        errores.siOnoAutoridad = true
                                    } else if (formStep1.intervinoSioNo === 'si') {

                                        if (!enteFile[0] ) {
                                            errores.entefile = true
                                        }
                                    }



                                    if (!valores.describirDanos) {
                                        errores.describirDanos = true
                                    }





                                    if (!valores.danosTerceros) {
                                        errores.danosTerceros = true
                                    }
                                    if (!valores.vehiculoDetenido) {
                                        errores.vehiculoDetenido = true
                                    }
                                    if (!valores.vehiculoMoverse) {
                                        errores.vehiculoMoverse = true
                                    }

                                    if (!valores.indicarRotura) {
                                        errores.indicarRotura = true
                                    }


                                }

                                if (page === 5) {

                                    if (!fileSelect[0]) {
                                        errores.cedulaConductor = true
                                    } else if (fileSelect[0] && errorFile.cedulaConductor) {
                                        setErrorFile({ ...errorFile, cedulaConductor: 'El tipo de archivo debe ser PDF' })
                                    }

                                    if (!fileSelect[1]) {
                                        errores.certificadoMedico = true
                                    } else if (fileSelect[1] && errorFile.certificadoMedico) {
                                        setErrorFile({ ...errorFile, certificadoMedico: 'El tipo de archivo debe ser PDF' })
                                    }

                                    if (!fileSelect[2]) {
                                        errores.licenciaConductor = true
                                    } else if (fileSelect[2] && errorFile.licenciaConductor) {
                                        setErrorFile({ ...errorFile, licenciaConductor: 'El tipo de archivo debe ser PDF' })
                                    }

                                    if (!fileSelect[3]) {
                                        errores.carnetCirculacion = true
                                    } else if (fileSelect[3] && errorFile.carnetCirculacion) {
                                        setErrorFile({ ...errorFile, carnetCirculacion: 'El tipo de archivo debe ser PDF' })
                                    }

                                    if (!fileSelect[4]) {
                                        errores.autorizacion = true
                                    } else if (fileSelect[4] && errorFile.autorizacion) {
                                        setErrorFile({ ...errorFile, autorizacion: 'El tipo de archivo debe ser PDF' })
                                    }

                                    if (!fileSelect[5]) {
                                        errores.fotosVehiculos = true
                                    } else if (fileSelect[5] && errorFile.fotosVehiculos) {
                                        setErrorFile({ ...errorFile, fotosVehiculos: 'El tipo de archivo debe ser PDF' })
                                    }
                                }
                                return errores
                            }}
                            onSubmit={(valores) => {

                                if (page === 1) {
                                    setPage((current) => current + 1)
                                }


                                if (page === 2) {
                                    setPage((current) => current + 1)
                                }

                                /*  if (valores.patologiaDiagnostico !== '') { */
                                if (page === 3) {
                                    /* 
                                                                            if (formStep1.tipoPoliza === 'Individual') {
                                                                                valores.nombreTomador = ''
                                                                            }
                                    
                                                                            if (formStep1.titularObeneficiario === 'titular') {
                                                                                valores.nombreTitularPoliza2 = ''
                                                                                valores.apellidoTitularPoliza2 = ''
                                                                                valores.cedulaTitular2 = ''
                                                                                valores.emailTitular2 = ''
                                                                                valores.celularTitular2 = ''
                                                                                valores.nombreBeneficiarioPoliza = ''
                                                                                valores.apellidoBeneficiarioPoliza = ''
                                                                                valores.cedulaBeneficiario = ''
                                                                                valores.emailBeneficiario = ''
                                                                                valores.celularBeneficiario = ''
                                    
                                                                            } else if (formStep1.titularObeneficiario === 'beneficiario') {
                                                                                valores.nombreTitularPoliza = ''
                                                                                valores.apellidoTitularPoliza = ''
                                                                                valores.cedulaTitular = ''
                                                                                valores.emailTitular = ''
                                                                                valores.celularTitular = ''
                                                                            }
                                                                            setData({ ...valores }) */
                                    setPage((current) => current + 1)
                                }
                                if (page === 4) {


                                    setPage((current) => current + 1)
                                }
                                if (page === 5) {
                                    setPage((current) => current + 1)
                                }
                                /*   } */
                            }}
                        >
                            {({
                                handleBlur, handleChange, handleSubmit, errors, initialValues
                            }) => (
                                <>
                                    <div className='h_total luna-signup-left'>
                                        <img className='luna-signup-logo img-responsive'
                                            src={imgLogo} alt="logo" />
                                        <h3 className='text-reembolso' >Reparación Parcial </h3>
                                        <div className="luna-navigation">
                                            <a
                                                style={{ display: page <= 1 && 'none' }}
                                                onClick={prevSteps}
                                                className="toPrev ">
                                                <i className="icon icon-arrow-up2"></i>
                                            </a>
                                            <ul className="dots"></ul>
                                            <a
                                                style={{ display: page >= 4 && 'none' }}
                                                onClick={handleSubmit} className="toNext ">
                                                <i className="icon icon-arrow-down2"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className='luna-signup-right'>
                                        <div className="container-fluid">
                                            <div className='steps-count'>
                                                Paso <span className="step-current"> {page} </span>/<span className="step-count"> 6 </span>
                                            </div>
                                            <div className="luna-steps">
                                                {
                                                    page === 1 && (
                                                        <Steps
                                                            formStep1={formStep1}
                                                            setFormStep1={setFormStep1}
                                                            handleChange={handleChange}
                                                            handleBlur={handleBlur}
                                                            errors={errors}
                                                            initialValues={initialValues}
                                                        />
                                                    )
                                                }
                                                {
                                                    page === 2 && (
                                                        <Steps1
                                                            setFormStep1={setFormStep1}
                                                            formStep1={formStep1}
                                                            handleChange={handleChange}
                                                            handleBlur={handleBlur}
                                                            errors={errors}
                                                            initialValues={initialValues}
                                                            setStartDate={setStartDate}
                                                            startDate={startDate}

                                                        />
                                                    )
                                                }
                                                {
                                                    page === 3 && (
                                                        <Steps2
                                                            setFormStep1={setFormStep1}
                                                            formStep1={formStep1}
                                                            handleChange={handleChange}
                                                            handleBlur={handleBlur}
                                                            errors={errors}
                                                            initialValues={initialValues}
                                                            setStartDate={setStartDate}
                                                            startDate={startDate}
                                                            handleFile={handleFile}
                                                            setErrorFile={setErrorFile}
                                                            errorFile={errorFile}
                                                            fileSelect={fileSelect}
                                                            setFileSelect={setFileSelect}

                                                        />
                                                    )
                                                }
                                                {
                                                    page === 4 && (
                                                        <Steps3
                                                            setFormStep1={setFormStep1}
                                                            formStep1={formStep1}
                                                            handleChange={handleChange}
                                                            handleBlur={handleBlur}
                                                            errors={errors}
                                                            initialValues={initialValues}
                                                            setStartDate={setStartDate}
                                                            startDate={startDate}
                                                            handleFile={handleFile}
                                                            setErrorFile={setErrorFile}
                                                            errorFile={errorFile}
                                                            fileSelect={fileSelect}
                                                            setFileSelect={setFileSelect}
                                                            handleEnte={handleEnte}
                                                            enteFile={enteFile}
                                                            setEnteFile={setEnteFile}

                                                        />
                                                    )
                                                }
                                                {
                                                    page === 5 && (
                                                        <Steps4
                                                            setFormStep1={setFormStep1}
                                                            formStep1={formStep1}
                                                            handleChange={handleChange}
                                                            handleBlur={handleBlur}
                                                            errors={errors}
                                                            initialValues={initialValues}
                                                            setStartDate={setStartDate}
                                                            startDate={startDate}
                                                            handleFile={handleFile}
                                                            setErrorFile={setErrorFile}
                                                            errorFile={errorFile}
                                                            fileSelect={fileSelect}
                                                            setFileSelect={setFileSelect}

                                                        />
                                                    )
                                                }
                                                {
                                                    page === 6 && (
                                                        <StepsConfirm
                                                            formStep1={formStep1}
                                                            sendData={sendData}
                                                            loadingModal={loadingModal}
                                                            data={data}
                                                            startDate={startDate}
                                                        />
                                                    )
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    <div class='button-container'>
                                        <div style={{ display: page > 5 && 'none' }} onClick={handleSubmit} className="btn btn-blue ">
                                            Continuar
                                        </div>
                                    </div>
                                </>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageParcial