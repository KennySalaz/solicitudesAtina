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
    const [fileSelect, setFileSelect] = useState(new Array(3))
    const [urlGET, setUrlGET] = useState([])

    const [errorFile, setErrorFile] = useState({
        errorInforme: false,
        errorRecipe: false,
        errorExamenes: false,
        errorFactura: false,
    })
    const [data, setData] = useState()
    const [startDate, setStartDate] = useState(new Date());
    const [formStep1, setFormStep1] = useState({
        tipoPoliza: '',
        titularObeneficiario: '',
        tipoReembolso: '',
        fileDataInformeMedico: '',
        fileDataRecipeIndicaciones: '',
        fileDataExamenesRealizados: '',
        fileDataFacturas: '',
        SioNo: '',
        intervinoSioNo: '',
    })
    const prevSteps = () => {
        if (page === 1) { setPage((current) => current - 1) }
        if (page === 2) { setPage((current) => current - 1) }
        if (page === 3) { setPage((current) => current - 1) }
        if (page === 4) { setPage((current) => current - 1) }
        if (page === 5) { setPage((current) => current - 1) }
    }
    const handleFile = (e, n) => {
        if (e.target.name === 'informeMedico') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[0], e.target.files])
                }
                setErrorFile({ ...errorFile, errorInforme: false })
            } else {
                setErrorFile({ ...errorFile, errorInforme: true })
            }
        }
        if (e.target.name === 'recipeIndicaciones') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[1], e.target.files])
                    console.log('se ha agregado')
                }
                setErrorFile({ ...errorFile, errorRecipe: false })
            } else {
                setErrorFile({ ...errorFile, errorRecipe: true })
            }
        }
        if (e.target.name === 'examenesRealizados') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[2], e.target.files])
                }
                setErrorFile({ ...errorFile, errorExamenes: false })
            } else {
                setErrorFile({ ...errorFile, errorExamenes: true })
            }
        }
        if (e.target.name === 'facturas') {
            let file = e.target.files
            if (file[0].type === 'application/pdf') {
                if (fileSelect) {
                    fileSelect.splice(n, 1, e.target.files)
                    console.log(fileSelect)
                } else {
                    setFileSelect([...fileSelect[3], e.target.files])
                }
                setErrorFile({ ...errorFile, errorFactura: false })
            } else {
                setErrorFile({ ...errorFile, errorFactura: true })
            }
        }
    }

    const sendData = async () => {
        setLoadingModal(true)
        const id = uuidv4()
        await Promise.all(
            fileSelect.map(async (file, i) => {
                const storageRef = ref(storage, `/solicitudes/salud/reembolso/${id}/${file[0].name}`)
                const uploadResult = await uploadBytes(storageRef, file[0])
                urlGET.push(await getDownloadURL(uploadResult.ref))
            })
        )
        setUrlGET(urlGET)
        try {
            setDoc(doc(db, '/solicitudes/salud-reembolso/historico/', id), {
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
    })

    useEffect(() => {

        console.log(page)


    }, [page])


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
                                apellidoTitularPoliza: '',
                                cedulaTitular: '',
                                emailTitular: '',
                                celularTitular: '',
                                nombreTitularPoliza2: '',
                                apellidoTitularPoliza2: '',
                                cedulaTitular2: '',
                                emailTitular2: '',
                                celularTitular2: '',
                                nombreBeneficiarioPoliza: '',
                                apellidoBeneficiarioPoliza: '',
                                cedulaBeneficiario: '',
                                emailBeneficiario: '',
                                celularBeneficiario: '',
                                //Page 3
                                tipoReembolso: '',
                                informeMedico: '',
                                recipeIndicaciones: '',
                                examenesRealizados: '',
                                facturas: '',
                                patologiaDiagnostico: '',
                                fechaOcurrencia: '',
                                montoTotal: '',
                                siOno: ''


                            }}
                            /*   validate={(valores) => {
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
                                      if (!formStep1.titularObeneficiario) {
                                          errores.titularObeneficiario = 'Obligatorio'
  
                                      }
                                      if (!valores.nombreTitularPoliza && formStep1.titularObeneficiario === 'titular') {
                                          errores.nombreTitularPoliza = true
                                      } else if (valores.nombreTitularPoliza !== '' && formStep1.titularObeneficiario === 'titular' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreTitularPoliza)) {
                                          errores.nombreTitularPoliza = 'Solo letras y espacios'
                                      }
  
  
  
                                      if (!valores.cedulaTitular && formStep1.titularObeneficiario === 'titular') {
                                          errores.cedulaTitular = true
                                      } else if (valores.cedulaTitular !== '' && formStep1.titularObeneficiario === 'titular' && !/^\d*\.?\d*$/.test(valores.cedulaTitular)) {
                                          errores.cedulaTitular = 'Solo numeros'
                                      }
                                      if (!valores.emailTitular && formStep1.titularObeneficiario === 'titular') {
                                          errores.emailTitular = true
                                      } else if (valores.emailTitular !== '' && formStep1.titularObeneficiario === 'titular' && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.emailTitular)) {
                                          errores.emailTitular = 'Ingrese un correo valido'
                                      }
  
  
                                      if (!valores.celularTitular && formStep1.titularObeneficiario === 'titular') {
                                          errores.celularTitular = true
                                      } else if (formStep1.titularObeneficiario === 'titular' && valores.celularTitular.length < 16) {
                                          errores.celularTitular = 'Ingrese un numero de telefono valido +58 424 000 0000'
                                      }
  
  
                                      if (!valores.nombreTitularPoliza2 && formStep1.titularObeneficiario === 'beneficiario') {
                                          errores.nombreTitularPoliza2 = true
                                      } else if (valores.nombreTitularPoliza2 !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreTitularPoliza2)) {
                                          errores.nombreTitularPoliza2 = 'Solo letras y espacios'
                                      }
  
  
  
  
  
                                      if (!valores.cedulaTitular2 && formStep1.titularObeneficiario === 'beneficiario') {
                                          errores.cedulaTitular2 = true
                                      } else if (valores.cedulaTitular2 !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^\d*\.?\d*$/.test(valores.cedulaTitular2)) {
                                          errores.cedulaTitular2 = 'Solo letras y espacios'
                                      }
  
  
  
                                      if (!valores.emailTitular2 && formStep1.titularObeneficiario === 'beneficiario') {
                                          errores.emailTitular2 = true
                                      } else if (valores.emailTitular2 !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.emailTitular2)) {
                                          errores.emailTitular2 = 'Ingrese un correo valido'
                                      }
  
  
  
                                      if (!valores.celularTitular2 && formStep1.titularObeneficiario === 'beneficiario') {
                                          errores.celularTitular2 = true
                                      } else if (formStep1.titularObeneficiario === 'beneficiario' && valores.celularTitular2.length < 16) {
                                          errores.celularTitular2 = 'Ingrese un numero de telefono valido +58 424 000 0000'
                                      }
  
  
  
                                      if (!valores.nombreBeneficiarioPoliza && formStep1.titularObeneficiario === 'beneficiario') {
                                          errores.nombreBeneficiarioPoliza = true
                                      } else if (valores.nombreBeneficiarioPoliza !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreBeneficiarioPoliza)) {
                                          errores.nombreBeneficiarioPoliza = 'Solo letras y espacios'
                                      }
  
  
  
  
                                      
  
  
  
                                      if (!valores.cedulaBeneficiario && formStep1.titularObeneficiario === 'beneficiario') {
                                          errores.cedulaBeneficiario = true
                                      } else if (valores.cedulaBeneficiario !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^\d*\.?\d*$/.test(valores.cedulaBeneficiario)) {
                                          errores.cedulaBeneficiario = 'Solo numeros'
                                      }
  
  
  
                                      if (!valores.emailBeneficiario && formStep1.titularObeneficiario === 'beneficiario') {
                                          errores.emailBeneficiario = true
                                      } else if (valores.emailBeneficiario !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.emailBeneficiario)) {
                                          errores.emailBeneficiario = 'Ingrese un correo valido'
                                      }
  
  
  
                                      if (!valores.celularBeneficiario && formStep1.titularObeneficiario === 'beneficiario') {
                                          errores.celularBeneficiario = true
                                      } else if (formStep1.titularObeneficiario === 'beneficiario' && valores.celularBeneficiario.length < 16) {
                                          errores.celularBeneficiario = 'Ingrese un numero de telefono valido +58 424 000 0000'
                                      }
  
  
  
                                  }
  
                                  if (page === 3) {
  
                                      if (formStep1.tipoReembolso === 'Consulta medica') {
                                          if (!fileSelect[0]) {
                                              errores.informeMedico = true
                                          }
  
                                          if (fileSelect && errorFile.errorInforme) {
                                              errores.informeMedico = false
                                              setErrorFile({ ...errorFile, errorInforme: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!fileSelect[1]) {
                                              errores.recipeIndicaciones = true
                                          }
  
                                          if (fileSelect && errorFile.errorRecipe) {
                                              errores.recipeIndicaciones = false
                                              setErrorFile({ ...errorFile, errorRecipe: 'El tipo de archivo debe ser PDF' })
                                          }
  
  
                                          if (!fileSelect[2]) {
                                              errores.examenesRealizados = true
                                          }
  
                                          if (fileSelect && errorFile.errorExamenes) {
                                              errores.examenesRealizados = false
                                              setErrorFile({ ...errorFile, errorExamenes: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!fileSelect[3]) {
                                              errores.facturas = true
                                          }
  
                                          if (fileSelect && errorFile.errorFactura) {
                                              errores.facturas = false
                                              setErrorFile({ ...errorFile, errorFactura: 'El tipo de archivo debe ser PDF' })
                                          }
  
  
                                          if (!valores.patologiaDiagnostico) {
                                              errores.patologiaDiagnostico = true
                                          } else if (valores.patologiaDiagnostico !== '' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.patologiaDiagnostico)) {
                                              errores.patologiaDiagnostico = 'Solo letras y espacios'
                                          }
  
  
  
  
                                           if (!valores.fechaOcurrencia) {
                                               errores.fechaOcurrencia = 'Obligatorio'
                                           }
  
                                          if (!valores.montoTotal) {
                                              errores.montoTotal = true
                                          }
                                      }
  
                                      if (formStep1.tipoReembolso === 'Farmacos') {
                                          if (!fileSelect[0]) {
                                              errores.informeMedico = true
                                          }
  
                                          if (fileSelect && errorFile.errorInforme) {
                                              errores.informeMedico = false
                                              setErrorFile({ ...errorFile, errorInforme: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!fileSelect[1]) {
                                              errores.recipeIndicaciones = true
                                          }
  
                                          if (fileSelect && errorFile.errorRecipe) {
                                              errores.recipeIndicaciones = false
                                              setErrorFile({ ...errorFile, errorRecipe: 'El tipo de archivo debe ser PDF' })
                                          }
                                          if (!fileSelect[2]) {
                                              errores.facturas = true
                                          }
  
                                          if (fileSelect && errorFile.errorFacturaOp1) {
                                              errores.facturas = false
                                              setErrorFile({ ...errorFile, errorFactura: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!valores.patologiaDiagnostico) {
                                              errores.patologiaDiagnostico = true
                                          } else if (valores.patologiaDiagnostico !== '' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.patologiaDiagnostico)) {
                                              errores.patologiaDiagnostico = 'Solo letras y espacios'
                                          }
  
                                            if(!valores.fechaOcurrencia){
                                                errores.fechaOcurrencia = 'Obligatorio'
                                            }
  
                                          if (!valores.montoTotal) {
                                              errores.montoTotal = true
                                          }
                                      }
                                      if (formStep1.tipoReembolso === 'Sesiones de rehabilitacion, terapias, fisioterapia') {
  
  
                                          if (!fileSelect[0]) {
                                              errores.informeMedico = true
                                          }
  
                                          if (fileSelect && errorFile.errorInforme) {
                                              errores.informeMedico = false
                                              setErrorFile({ ...errorFile, errorInforme: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!fileSelect[1]) {
                                              errores.recipeIndicaciones = true
                                          }
  
                                          if (fileSelect && errorFile.errorRecipe) {
                                              errores.recipeIndicaciones = false
                                              setErrorFile({ ...errorFile, errorRecipe: 'El tipo de archivo debe ser PDF' })
                                          }
                                          if (!fileSelect[2]) {
                                              errores.facturas = true
                                          }
  
                                          if (fileSelect && errorFile.errorFactura) {
                                              errores.facturas = false
                                              setErrorFile({ ...errorFile, errorFactura: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!valores.patologiaDiagnostico) {
                                              errores.patologiaDiagnostico = true
                                          } else if (valores.patologiaDiagnostico !== '' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.patologiaDiagnostico)) {
                                              errores.patologiaDiagnostico = 'Solo letras y espacios'
                                          }
  
                                          if (!valores.fechaOcurrencia) {
                                              errores.fechaOcurrencia = 'Obligatorio'
                                          }
  
                                          if (!valores.montoTotal) {
                                              errores.montoTotal = true
                                          }
                                      }
  
                                      if (formStep1.tipoReembolso === 'Emergencia') {
  
  
  
                                          if (!fileSelect[0]) {
                                              errores.informeMedico = true
                                          }
  
                                          if (fileSelect && errorFile.errorInforme) {
                                              errores.informeMedico = false
                                              setErrorFile({ ...errorFile, errorInforme: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!fileSelect[1]) {
                                              errores.recipeIndicaciones = true
                                          }
  
                                          if (fileSelect && errorFile.errorRecipe) {
                                              errores.recipeIndicaciones = false
                                              setErrorFile({ ...errorFile, errorRecipe: 'El tipo de archivo debe ser PDF' })
                                          }
  
  
                                          if (!fileSelect[2]) {
                                              errores.examenesRealizados = true
                                          }
  
                                          if (fileSelect && errorFile.errorExamenes) {
                                              errores.examenesRealizados = false
                                              setErrorFile({ ...errorFile, errorExamenes: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!fileSelect[3]) {
                                              errores.facturas = true
                                          }
  
                                          if (fileSelect && errorFile.errorFactura) {
                                              errores.facturas = false
                                              setErrorFile({ ...errorFile, errorFactura: 'El tipo de archivo debe ser PDF' })
                                          }
  
                                          if (!valores.patologiaDiagnostico) {
                                              errores.patologiaDiagnostico = true
                                          } else if (valores.patologiaDiagnostico !== '' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.patologiaDiagnostico)) {
                                              errores.patologiaDiagnostico = 'Solo letras y espacios'
                                          }
  
  
                                          if (!valores.fechaOcurrencia) {
                                              errores.fechaOcurrencia = 'Obligatorio'
                                          }
  
                                          if (!valores.montoTotal) {
                                              errores.montoTotal = true
                                          }
                                      }
                                  }
                                  return errores
                              }} */
                            onSubmit={(valores) => {
                                /*  if (valores.selectSeguro && formStep1.tipoPoliza !== '') { */
                                if (page === 1) {
                                    setPage((current) => current + 1)
                                }
                                /*    } */
                                /*    if (formStep1.titularObeneficiario !== '' && valores.nombreTitularPoliza !== '' || formStep1.titularObeneficiario !== '' && valores.nombreTitularPoliza2 !== '') { */
                                if (page === 2) {
                                    setPage((current) => current + 1)
                                }
                                /*   } */
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
                                                Paso <span className="step-current"> {page} </span>/<span className="step-count"> 5 </span>
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