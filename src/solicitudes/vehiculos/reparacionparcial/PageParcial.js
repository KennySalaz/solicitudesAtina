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
    const [enteUrl, setEnteUrl] = useState([])

    const [errorFile, setErrorFile] = useState({
        cedulaConductor: false,
        certificadoMedico: false,
        licenciaConductor: false,
        carnetCirculacion: false,
        autorizacion: false,
        fotosVehiculos: false,
        enteFile: false,

    })
    const [phonestate, setPhonestate] = useState({
        phoneTitular: '',
        phoneTitular2: '',
        phoneBeneficiario: '',

    })
    const [data, setData] = useState()
    const [startDate, setStartDate] = useState('');
    const [updateData, setupdateData] = useState()
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
        horaOcurrencia: '',
        tipoDeCedula: '',
        tipoDeCedulaTitular: '',
        tipoDeCedulaBeneficiario: '',
        tipoDeMoneda: '',
        siOnoHubo: '',
        danosSioNo: '',
        vehiculoDetenidoSioNo: '',
        vehiculomoverseSioNo: '',
        roturasSioNo: '',


    })
    const prevSteps = () => {
        if (page === 1) { setPage((current) => current - 1) }
        if (page === 2) { setPage((current) => current - 1) }
        if (page === 3) { setPage((current) => current - 1) }
        if (page === 4) { setPage((current) => current - 1) }
        if (page === 5) { setPage((current) => current - 1) }
        if (page === 6) { setPage((current) => current - 1) }
    }
    const handleFile = (e, n) => {

        if (e.target.name === 'cedulaConductor') {
            let file = e.target.files


            if (file[0].type === 'application/pdf' || file[0].type === 'image/png' || file[0].type === 'image/jpeg') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)

                } else {
                    setFileSelect([...fileSelect[0], e.target.files])
                }
                setErrorFile({ ...errorFile, cedulaConductor: false })
            } else {
                delete fileSelect[0]
                setErrorFile({ ...errorFile, cedulaConductor: 'El tipo de archivo debe ser PDF,JPG,PNG' })
            }


        }
        if (e.target.name === 'certificadoMedico') {
            let file = e.target.files
            if (file[0].type === 'application/pdf' || file[0].type === 'image/png' || file[0].type === 'image/jpeg') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)

                } else {
                    setFileSelect([...fileSelect[1], e.target.files])

                }
                setErrorFile({ ...errorFile, certificadoMedico: false })
            } else {
                delete fileSelect[1]
                setErrorFile({ ...errorFile, certificadoMedico: true })
            }
        }
        if (e.target.name === 'licenciaConductor') {
            let file = e.target.files
            if (file[0].type === 'application/pdf' || file[0].type === 'image/png' || file[0].type === 'image/jpeg') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)

                } else {
                    setFileSelect([...fileSelect[2], e.target.files])
                }
                setErrorFile({ ...errorFile, licenciaConductor: false })
            } else {
                delete fileSelect[2]
                setErrorFile({ ...errorFile, licenciaConductor: true })
            }
        }
        if (e.target.name === 'carnetCirculacion') {
            let file = e.target.files
            if (file[0].type === 'application/pdf' || file[0].type === 'image/png' || file[0].type === 'image/jpeg') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)

                } else {
                    setFileSelect([...fileSelect[3], e.target.files])
                }
                setErrorFile({ ...errorFile, carnetCirculacion: false })
            } else {
                delete fileSelect[3]
                setErrorFile({ ...errorFile, carnetCirculacion: true })
            }
        }
        if (e.target.name === 'autorizacion') {
            let file = e.target.files
            if (file[0].type === 'application/pdf' || file[0].type === 'image/png' || file[0].type === 'image/jpeg') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)

                } else {
                    setFileSelect([...fileSelect[4], e.target.files])
                }
                setErrorFile({ ...errorFile, autorizacion: false })
            } else {
                delete fileSelect[4]
                setErrorFile({ ...errorFile, autorizacion: true })
            }
        }
        if (e.target.name === 'fotosVehiculos') {
            let file = e.target.files
            if (file[0].type === 'application/pdf' || file[0].type === 'image/png' || file[0].type === 'image/jpeg') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)

                } else {
                    setFileSelect([...fileSelect[5], e.target.files])
                }
                setErrorFile({ ...errorFile, fotosVehiculos: false })
            } else {
                delete fileSelect[5]
                setErrorFile({ ...errorFile, fotosVehiculos: true })
            }

        }
    }


    const handleEnte = (e, n) => {


        if (e.target.name === 'entefile') {
            const file = e.target.files
            if (file[0].type === 'application/pdf' || file[0].type === 'image/png' || file[0].type === 'image/jpeg') {
                if (enteFile) {
                    enteFile.splice(n, 1, e.target.files)

                } else {
                    setEnteFile([...enteFile[0], e.target.files])
                }
                setErrorFile({ ...errorFile, enteFile: false })
            } else {
                delete enteFile[0]
                setErrorFile({ ...errorFile, enteFile: true })
            }
        }


    }

    const sendData = async () => {

        Swal.fire(
            {
                width: '400px',
                icon: 'question',
                title: '¿Está seguro que todos los datos son correctos?',
                showCancelButton: true,
                confirmButtonText: "Sí",
                confirmButtonColor: "blue",
                cancelButtonText: "No",
                cancelButtonColor: 'red',
            }).then(async (result) => {
                if (result.isConfirmed) {

                    setLoadingModal(true)
                    const id = uuidv4()
                    await Promise.all(
                        fileSelect.map(async (file, i) => {
                            const storageRef = ref(storage, `/solicitudes/vehiculos/reparacion-parcial/${id}/${file[0].name}`)
                            const uploadResult = await uploadBytes(storageRef, file[0])
                            urlGET.push(await getDownloadURL(uploadResult.ref))
                        })
                    )

                    await Promise.all(
                        enteFile.map(async (fileEnte, i) => {
                            const storageRefEnte = ref(storage, `/solicitudes/vehiculos/reparacion-parcial/${id}/${fileEnte[0]?.name}`)
                            const uploadResultEnte = await uploadBytes(storageRefEnte, fileEnte[0])
                            enteUrl.push(await getDownloadURL(uploadResultEnte.ref))
                        })
                    )
                    setEnteUrl(enteUrl)
                    setUrlGET(urlGET)
                    try {
                        setDoc(doc(db, '/solicitudes/vehiculo-reparacionParcial/historico/', id), {
                            Tipodepóliza: formStep1.tipoPoliza,
                            NombreDelTomador: data.nombreTomador,
                            CompañíadeSeguros: data.selectSeguro,
                            TitularOBeneficiario: formStep1.titularObeneficiario,
                            Nombredeltitulardelapóliza: data.nombreTitularPoliza,
                            CéduladeidentidadTitular: data.cedulaIdentidad,
                            FechaNacimiento: data.fechaNacimiento,
                            GradoDeLicencia: data.gradoLicencia,
                            PlacaDeVehiculo: data.placaVehiculo,
                            Marca: data.marca,
                            Modelo: data.modelo,
                            Ano: data.ano,
                            CorreoDelTitular: data.emailTitular,
                            TelefonoTitular: phonestate.phoneTitular,
                            NombreDelConductor: data.nombreConductor,
                            CedulaDelConductor: data.cedulaConductor,
                            FechaDeNacimientoDelConductor: data.fechaConductor,
                            GradoDeLicenciaDelConductor: data.gradoConductor,
                            CorreoDelConductor: data.correoConductor,
                            TelefonoDelConductor: phonestate.phoneTitular2,
                            FechaDeOcurrencia: data.fechaOcurrencia,
                            HoraAproxima: data.horaOcurrencia,
                            LugarOcurrencia: data.lugarOcurrencia,
                            DescripciónDeLosHechos: data.descripcionHechos,
                            DescribirLosDañosAlVehículo: data.describirDanos,
                            IndiqueAlgunaAutoridad: formStep1.intervinoSioNo,
                            InpeccionDelEntePDF: enteUrl,
                            HuboDañosATerceros: data.danosTerceros,
                            ElVehículoEstáDetenido: data.vehiculoDetenido,
                            ElVehículoPuedeMoverse: data.vehiculoMoverse,
                            RoturaDeVidrios: data.indicarRotura,
                            documentosPDF: urlGET
                        })
                        setLoadingModal(false)

                        Swal.fire({
                            width: '500px',
                            icon: 'success',
                            title: `Sus datos han sido enviados con éxito y entrarán en proceso de análisis.`,
                            text: '¿Desea agregar otra solicitud?',
                            showCancelButton: true,
                            confirmButtonText: "Sí",
                            confirmButtonColor: "blue",
                            cancelButtonText: "No",
                            cancelButtonColor: 'red',
                        }).then((result) => {

                            if (result.isConfirmed) {
                                window.location.href = 'https://atinaseguros.com/solicitudes/'
                            } else if (result.dismiss) {
                                window.location.href = 'https://atinaseguros.com/'


                            }
                        })

                    } catch (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error...',
                            text: 'No se pudo mandar su solicitud',

                        })


                    }
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false
        });
    }, [AOS])



    useEffect(() => {
        if (data) {
            setupdateData(data)
        }
    }, [data])



    return (
        <>
            <div className='' >
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



                                danosSioNo: '',
                                vehiculoDetenidoSioNo: '',
                                vehiculomoverseSioNo: '',
                                roturasSioNo: '',






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
                                    } else if (valores.ano === 1990) {
                                        errores.ano = 'Ingresa una fecha valida'


                                    }
                                    if (!valores.emailTitular) {
                                        errores.emailTitular = true
                                    } else if (valores.emailTitular !== '' && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.emailTitular)) {
                                        errores.emailTitular = 'Ingrese un correo valido'
                                    }

                                    if (phonestate.phoneTitular === '') {
                                        errores.celularTitular = true
                                    }


                                    /*  if (!valores.celularTitular) {
                                         errores.celularTitular = true
                                     } else if (valores.celularTitular.length < 16) {
                                         errores.celularTitular = ' INGRESE UN NÚMERO DE TELÉFONO VÁLIDO +58 424 000 0000'
                                     } */
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

                                        if (phonestate.phoneTitular2 === '') {
                                            errores.celularConductor = true
                                        }
                                        /* if (!valores.celularConductor) {
                                            errores.celularConductor = true
                                        } else if (valores.celularConductor.length < 16) {
                                            errores.celularConductor = ' INGRESE UN NÚMERO DE TELÉFONO VÁLIDO +58 424 000 0000'
                                        } */
                                    }


                                }

                                if (page === 4) {

                                    /*  if (!formStep1.reparacionParcial || formStep1.reparacionParcial === 'Selecciona') {
                                         errores.reparacionParcial = true
                                     } */

                                    if (!valores.fechaOcurrencia) {
                                        errores.fechaOcurrencia = true
                                    }

                                    if (!valores.horaOcurrencia) {
                                        errores.horaOcurrencia = true
                                    }

                                    if (!valores.lugarOcurrencia) {
                                        errores.lugarOcurrencia = true
                                    }


                                    if (!valores.descripcionHechos) {
                                        errores.descripcionHechos = true
                                    }


                                    if (formStep1.intervinoSioNo === '') {
                                        errores.siOnoAutoridad = true
                                    } else if (formStep1.intervinoSioNo === 'si') {

                                        if (!enteFile[0]) {
                                            errores.entefile = true
                                        }
                                    }


                                    if (!formStep1.danosSioNo) {
                                        errores.danosSioNo = true
                                    }
                                    if (!formStep1.vehiculoDetenidoSioNo) {
                                        errores.vehiculoDetenidoSioNo = true
                                    }
                                    if (!formStep1.vehiculomoverseSioNo) {
                                        errores.vehiculomoverseSioNo = true
                                    }
                                    if (!formStep1.roturasSioNo) {
                                        errores.roturasSioNo = true
                                    }
                                    if (!valores.describirDanos) {
                                        errores.describirDanos = true
                                    }
                                    /*  if (!valores.describirDanos) {
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
                                     } */


                                }

                                if (page === 5) {

                                    if (!fileSelect[0]) {
                                        errores.cedulaConductor = true
                                    }

                                    if (errorFile.cedulaConductor) {
                                        errores.cedulaConductor = false
                                        setErrorFile({ ...errorFile, cedulaConductor: 'El tipo de archivo debe ser PDF,JPG,PNG' })
                                    }



                                    if (!fileSelect[1]) {
                                        errores.certificadoMedico = true
                                    }


                                    if (errorFile.certificadoMedico) {
                                        errores.certificadoMedico = false
                                        setErrorFile({ ...errorFile, certificadoMedico: 'El tipo de archivo debe ser PDF,JPG,PNG' })
                                    }



                                    if (!fileSelect[2]) {
                                        errores.licenciaConductor = true
                                    }

                                    if (errorFile.licenciaConductor) {
                                        errores.licenciaConductor = false
                                        setErrorFile({ ...errorFile, licenciaConductor: 'El tipo de archivo debe ser PDF,JPG,PNG' })
                                    }




                                    if (!fileSelect[3]) {
                                        errores.carnetCirculacion = true
                                    }

                                    if (errorFile.carnetCirculacion) {
                                        errores.carnetCirculacion = false
                                        setErrorFile({ ...errorFile, carnetCirculacion: 'El tipo de archivo debe ser PDF,JPG,PNG' })
                                    }



                                    /* 
                                                                        if (!fileSelect[4]) {
                                                                            errores.autorizacion = true
                                                                        }
                                    
                                                                        if (errorFile.autorizacion) {
                                                                            errores.autorizacion = false
                                                                            setErrorFile({ ...errorFile, autorizacion: 'El tipo de archivo debe ser PDF,JPG,PNG' })
                                                                        } */





                                    if (!fileSelect[5]) {
                                        errores.fotosVehiculos = true
                                    }
                                    if (errorFile.fotosVehiculos) {
                                        errores.fotosVehiculos = false
                                        setErrorFile({ ...errorFile, fotosVehiculos: 'El tipo de archivo debe ser PDF,JPG,PNG' })
                                    }
                                }
                                return errores
                            }}
                            onSubmit={(valores) => {

                                if (page === 1) {
                                    if (formStep1.tipoPoliza === 'Individual') {
                                        valores.nombreTomador = ''
                                        setupdateData({
                                            ...updateData,
                                            nombreTomador: '',
                                        })
                                    }
                                    setData({ ...valores })
                                    setPage((current) => current + 1)

                                }


                                if (page === 2) {
                                    setData({ ...valores })
                                    setPage((current) => current + 1)
                                }


                                if (page === 3) {

                                    if (formStep1.SioNo === 'no') {
                                        valores.nombreConductor = ''
                                        valores.cedulaConductor = ''
                                        valores.fechaConductor = ''
                                        valores.gradoConductor = ''
                                        valores.correoConductor = ''
                                        valores.celularConductor = ''
                                        setupdateData({
                                            ...updateData,
                                            nombreConductor: '',
                                            cedulaConductor: '',
                                            fechaConductor: '',
                                            gradoConductor: '',
                                            correoConductor: '',
                                            celularConductor: '',
                                        })

                                        setFormStep1({ ...formStep1, SioNo: 'no' })
                                        setPhonestate({ ...phonestate, phoneTitular2: '' })
                                    }
                                    setData({ ...valores })

                                    setPage((current) => current + 1)
                                }
                                if (page === 4) {

                                    if (formStep1.intervinoSioNo === 'no') {
                                        setEnteFile([''])
                                    }
                                    setData({ ...valores })


                                    setPage((current) => current + 1)
                                }
                                if (page === 5) {
                                    setData({ ...valores })
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

                                        <div className="luna-navigation">
                                            <a
                                                style={{ display: page <= 1 && 'none' }}
                                                onClick={prevSteps}
                                                className="toPrev ">
                                                <i className="icon icon-arrow-up2"></i>
                                            </a>
                                            <ul className="dots"></ul>
                                            <a
                                                style={{ display: page >= 6 && 'none' }}
                                                onClick={handleSubmit} className="toNext ">
                                                <i className="icon icon-arrow-down2"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className='luna-signup-right'>
                                        <div className="container-fluid">
                                            <h3 className='text-reembolso' >Reparación Parcial </h3>
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
                                                            updateData={updateData}
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
                                                            updateData={updateData}
                                                            setPhonestate={setPhonestate}
                                                            phonestate={phonestate}

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
                                                            updateData={updateData}
                                                            setPhonestate={setPhonestate}
                                                            phonestate={phonestate}


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
                                                            updateData={updateData}

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
                                                            updateData={updateData}

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
                                                            enteFile={enteFile}
                                                            fileSelect={fileSelect}
                                                            updateData={updateData}
                                                            phonestate={phonestate}
                                                        />
                                                    )
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    <div className='button-container'>
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