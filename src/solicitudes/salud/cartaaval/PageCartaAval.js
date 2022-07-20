import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import "../../../css/bootstrap.min.css";
import "../../../css/font.css";
import "../../../css/Loading.css";
import "../../../css/Modals.css";
import "../../../css/plugins.css";
import "../../../css/style.css";
import imgLogo from "../../../images/atinaL.png";
import { Formik } from "formik";
import Steps1 from "./steps/Steps1";
import Steps2 from "./steps/Steps2";
import StepsConfirm from "./steps/StepsConfirm";
import Steps from "./steps/Steps";
import firebaseApp from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const PageCartaAval = () => {
  const Swal = require("sweetalert2");
  const [page, setPage] = useState(1);
  const [loadingModal, setLoadingModal] = useState(false);
  const [data, setData] = useState();

  const [updateData, setupdateData] = useState();
  const [urlCartaAval, setUrlCartaAval] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [fileSelect, setFileSelect] = useState(new Array(2));
  const [phonestate, setPhonestate] = useState({
    phoneTitular: "",
    phoneTitular2: "",
    phoneBeneficiario: "",
  });
  const [errorFile, setErrorFile] = useState({
    errorInforme: false,
    errorPresupuesto: false,
    errorExamenes: false,
    errorPhone: false,
  });
  const [formStep1, setFormStep1] = useState({
    tipoPoliza: "",
    titularObeneficiario: "",
    tipoReembolso: "",
    tipoDeCedula: "",
    tipoDeCedulaTitular: "",
    tipoDeCedulaBeneficiario: "",
    tipoDeMoneda: "",
  });

  const prevSteps = () => {
    if (page === 1) {
      setPage((current) => current - 1);
    }
    if (page === 2) {
      setPage((current) => current - 1);
    }
    if (page === 3) {
      setPage((current) => current - 1);
    }
    if (page === 4) {
      setPage((current) => current - 1);
    }
  };

  /* const { cedulaTitular, celularTitular, emailTitular, montoTotal, nombreTitularPoliza, nombreTomador, patologiaDiagnostico, selectSeguro } = data */

  const handleFile = (e, n) => {
    if (e.target.name === "informeMedico") {
      let file = e.target.files;
      if (
        file[0].type === "application/pdf" ||
        file[0].type === "image/png" ||
        file[0].type === "image/jpeg"
      ) {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[0], e.target.files]);
        }
        setErrorFile({ ...errorFile, errorInforme: false });
      } else {
        delete fileSelect[0];
        setErrorFile({ ...errorFile, errorInforme: true });
      }
    }
    if (e.target.name === "examenesRealizados") {
      let file = e.target.files;
      if (
        file[0].type === "application/pdf" ||
        file[0].type === "image/png" ||
        file[0].type === "image/jpeg"
      ) {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[1], e.target.files]);
        }
        setErrorFile({ ...errorFile, errorExamenes: false });
      } else {
        delete fileSelect[1];
        setErrorFile({ ...errorFile, errorExamenes: true });
      }
    }
    if (e.target.name === "presupuestoSalud") {
      let file = e.target.files;
      if (
        file[0].type === "application/pdf" ||
        file[0].type === "image/png" ||
        file[0].type === "image/jpeg"
      ) {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[2], e.target.files]);
        }
        setErrorFile({ ...errorFile, errorPresupuesto: false });
      } else {
        delete fileSelect[2];
        setErrorFile({ ...errorFile, errorPresupuesto: true });
      }
    }
  };
  const onClickSplice = (n) => {
    fileSelect.splice();
  };

  const sendData = async () => {
    Swal.fire({
      width: "400px",
      icon: "question",
      title: "¿Está seguro que todos los datos son correctos? ",
      showCancelButton: true,
      confirmButtonText: "Sí",
      confirmButtonColor: "blue",
      cancelButtonText: "No",
      cancelButtonColor: "red",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingModal(true);
        const id = uuidv4();
        await Promise.all(
          fileSelect.map(async (file, i) => {
            const storageRef = ref(
              storage,
              `/solicitudes/salud/cartaaval/${id}/${file[0].name}`
            );
            const uploadResult = await uploadBytes(storageRef, file[0]);
            urlCartaAval.push(await getDownloadURL(uploadResult.ref));
          })
        );
        setUrlCartaAval(urlCartaAval);
        try {
          setDoc(doc(db, "/solicitudes/salud-cartaaval/historico/", id), {
            Tipodepóliza: formStep1.tipoPoliza,
            NombreDelaEmpresa: data.nombreTomador,
            CompañíadeSeguros: data.selectSeguro,
            TitularOBeneficiario: formStep1.titularObeneficiario,
            Nombredeltitulardelapóliza:data.nombreTitularPoliza || data.nombreTitularPoliza2,
            CéduladeidentidadTitular: data.cedulaTitular || data.cedulaTitular2,
            CorreoElectrónicoTitular: data.emailTitular || data.emailTitular2,
            NumeroTelefonoTitular: data.celularTitular || data.celularTitular2,
            NombredelBeneficiariodelapóliza: data.nombreBeneficiarioPoliza,
            CéduladeidentidadBeneficiario: data.cedulaBeneficiario,
            CorreoElectrónicoBeneficiario: data.emailBeneficiario,
            NumeroTelefonoBeneficiario: data.celularBeneficiario,
            PatologíaoDiagnóstico: data.patologiaDiagnostico,
            Fechadeocurrencia: startDate,
            Monto: data.montoTotal,
            documentosPdf: urlCartaAval,
          });
          addDoc(collection(db, "mail"), {
            to: "info@atinaseguros.com",
            message: {
              subject: "Solicitud Atina Carta Aval!",
              html: ` 
              <ul >
              <h2 >Tipo de póliza y Compañía de seguro</h2>
              <div class="content">
               <h4 >Tipo de póliza : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${formStep1.tipoPoliza} </span>   </h4>
               <h4 s>Nombre de la empresa : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${data.nombreTomador} </span>   </h4>
               <h4 s>Compañía de seguro : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;"> ${data.selectSeguro} </span>    </h4>
               </div>
                </li>
                 <li >
              <h2 >Datos personales</h2>
              <div class="content">
              <h4 >Titular o beneficiario : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${formStep1.titularObeneficiario} </span>   </h4>
              <h4 s>Nombre del titular de la Póliza : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;"> ${data.nombreTitularPoliza || data.nombreTitularPoliza2} </span>    </h4>
              <h4 s>Cédula de identidad del titular :  <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${data.cedulaTitular || data.cedulaTitular2} </span>  </h4>
              <h4 s>Correo electrónico del titular : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;"> ${data.emailTitular || data.emailTitular2}  </span>   </h4>
              <h4 s>Número de teléfono del titular : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;"> ${phonestate.phoneTitular || phonestate.phoneTitular2} </span>    </h4>
              <h4 s>Nombre del beneficiario :  <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${data.nombreBeneficiarioPoliza} </span>  </h4>
              <h4 s>Cédula de identidad del beneficiario : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${data.cedulaBeneficiario} </span>   </h4>
              <h4 s>Correo electrónico del beneficiario : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${data.emailBeneficiario}  </span>   </h4>
              <h4 s>WhNúmero de teléfono del beneficiario : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${phonestate.phoneBeneficiario}  </span>    </h4>
              </div>
            </li>
            <li >
              <h2 >Tipo de reembolso</h2>
              <div class="content">
                <h4 >Tipo de reembolso : Consulta medica </h4>
                <h4 s>Patología o diagnóstico : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${data.patologiaDiagnostico} </span>   </h4>
                <h4 s>Fecha de ocurrencia : <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${format(startDate, "dd/MM/yyyy")} </span>   </h4>
                <h4 s>Monto: <span  style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;">  ${data.montoTotal} </span>  
                </h4>
              </div>
            </li>
            <li >
            <h2>Adjuntos</h2>
              <div class="content">
              <div > <a href="${urlCartaAval[0]}"> Documento 1 </a>     </div>
               <div > <a href="${urlCartaAval[1]}"> Documento 2 </a>  </div>
               <div > <a href="${urlCartaAval[2]}"> Documento 3 </a> </div>
               </div>
            </li>
              </ul>`
            },
          });
          setLoadingModal(false);
          Swal.fire({
            width: "500px",
            icon: "success",
            title: `Sus datos han sido enviados con éxito y entrarán en proceso de análisis.`,
            text: "¿Desea agregar otra solicitud?",
            showCancelButton: true,
            confirmButtonText: "Sí",
            confirmButtonColor: "blue",
            cancelButtonText: "No",
            cancelButtonColor: "red",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "https://atinaseguros.com/solicitudes/";
            } else if (result.dismiss) {
              window.location.href = "https://atinaseguros.com/";
            }
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: "No se pudo mandar su solicitud",
          });
          setLoadingModal(false);
          alert(error);
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "info");
      }
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, [AOS]);

  useEffect(() => {
    if (data) {
      setupdateData(data);
    }
  }, [data]);

  return (
    <>
      <div /* className='container mx-auto' */>
        <div className="h_total luna-signup-left-overlay"></div>
        <div className="container">
          <div className="row">
            <Formik
              initialValues={{
                //PAGE 1
                nombreTomador: "",
                selectSeguro: "",
                titularObeneficiario: "",
                //PAGE 2
                nombreTitularPoliza: "",

                cedulaTitular: "",
                emailTitular: "",
                celularTitular: "",
                nombreTitularPoliza2: "",

                cedulaTitular2: "",
                emailTitular2: "",
                celularTitular2: "",
                nombreBeneficiarioPoliza: "",
                apellidoBeneficiarioPoliza: "",
                cedulaBeneficiario: "",
                emailBeneficiario: "",
                celularBeneficiario: "",
                //Page 3
                tipoReembolso: "",
                informeMedico: "",
                examenesRealizados: "",
                presupuestoSalud: "",
                patologiaDiagnostico: "",
                fechaOcurrencia: "",
                montoTotal: "",
              }}
              validate={(valores) => {
                let errores = {};
                if (page === 1) {
                  if (
                    !valores.selectSeguro ||
                    valores.selectSeguro === "Selecciona"
                  ) {
                    errores.selectSeguro = "Obligatorio";
                  }
                  if (
                    !valores.nombreTomador &&
                    formStep1.tipoPoliza === "Colectiva"
                  ) {
                    errores.nombreTomador = true;
                  } else if (
                    valores.nombreTomador !== "" &&
                    formStep1.tipoPoliza === "Colectiva" &&
                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreTomador)
                  ) {
                    errores.nombreTomador = "Solo letras y espacios";
                  }
                  if (!formStep1.tipoPoliza) {
                    errores.tipoPoliza = "Obligatorio";
                  }
                }

                if (page === 2) {
                  if (!formStep1.titularObeneficiario) {
                    errores.titularObeneficiario = "Obligatorio";
                  }
                  if (
                    !valores.nombreTitularPoliza &&
                    formStep1.titularObeneficiario === "titular"
                  ) {
                    errores.nombreTitularPoliza = true;
                  } else if (
                    valores.nombreTitularPoliza !== "" &&
                    formStep1.titularObeneficiario === "titular" &&
                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreTitularPoliza)
                  ) {
                    errores.nombreTitularPoliza = "Solo letras y espacios";
                  }

                  if (
                    !valores.cedulaTitular &&
                    formStep1.titularObeneficiario === "titular"
                  ) {
                    errores.cedulaTitular = true;
                  } /* else if (valores.cedulaTitular !== '' && formStep1.titularObeneficiario === 'titular' && !/^\d*\.?\d*$/.test(valores.cedulaTitular)) {
                                        errores.cedulaTitular = 'Solo numeros'
                                    } */
                  if (
                    !valores.emailTitular &&
                    formStep1.titularObeneficiario === "titular"
                  ) {
                    errores.emailTitular = true;
                  } else if (
                    valores.emailTitular !== "" &&
                    formStep1.titularObeneficiario === "titular" &&
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      valores.emailTitular
                    )
                  ) {
                    errores.emailTitular = "Ingrese un correo valido";
                  }

                  if (
                    (!phonestate.phoneTitular &&
                      formStep1.titularObeneficiario === "titular") ||
                    (phonestate.phoneTitular === "" &&
                      formStep1.titularObeneficiario === "titular")
                  ) {
                    errores.celularTitular = true;
                  }
                  /*  if (!valores.celularTitular && formStep1.titularObeneficiario === 'titular') {
                                         errores.celularTitular = true
                                     } else if (formStep1.titularObeneficiario === 'titular' && valores.celularTitular.length < 16) {
                                         errores.celularTitular = ' INGRESE UN NÚMERO DE TELÉFONO VÁLIDO +58 424 000 0000'
                                     } */
                  /*  if (!formStep1.titularObeneficiario && formStep1.titularObeneficiario === 'beneficiario') {
                                         errores.titularObeneficiario = 'Obligatorio'
     
                                     } */

                  if (
                    !valores.nombreTitularPoliza2 &&
                    formStep1.titularObeneficiario === "beneficiario"
                  ) {
                    errores.nombreTitularPoliza2 = true;
                  } else if (
                    valores.nombreTitularPoliza2 !== "" &&
                    formStep1.titularObeneficiario === "beneficiario" &&
                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreTitularPoliza2)
                  ) {
                    errores.nombreTitularPoliza2 = "Solo letras y espacios";
                  }
                  /*  if (!valores.apellidoTitularPoliza2 && formStep1.titularObeneficiario === 'beneficiario') {
                                         errores.apellidoTitularPoliza2 = true
                                     } else if (valores.nombreTitularPoliza2 !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidoTitularPoliza2)) {
                                         errores.apellidoTitularPoliza2 = 'Solo letras y espacios'
                                     } */
                  if (
                    !valores.cedulaTitular2 &&
                    formStep1.titularObeneficiario === "beneficiario"
                  ) {
                    errores.cedulaTitular2 = true;
                  } /* else if (valores.cedulaTitular2 !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^\d*\.?\d*$/.test(valores.cedulaTitular2)) {
                                        errores.cedulaTitular2 = 'Solo letras y espacios'
                                    } */
                  if (
                    !valores.emailTitular2 &&
                    formStep1.titularObeneficiario === "beneficiario"
                  ) {
                    errores.emailTitular2 = true;
                  } else if (
                    valores.emailTitular2 !== "" &&
                    formStep1.titularObeneficiario === "beneficiario" &&
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      valores.emailTitular2
                    )
                  ) {
                    errores.emailTitular2 = "Ingrese un correo valido";
                  }

                  if (
                    phonestate.phoneTitular2 === "" &&
                    formStep1.titularObeneficiario === "beneficiario"
                  ) {
                    errores.celularTitular2 = true;
                  }
                  /* if (!valores.celularTitular2 && formStep1.titularObeneficiario === 'beneficiario') {
                                        errores.celularTitular2 = true
                                    } else if (formStep1.titularObeneficiario === 'beneficiario' && valores.celularTitular2.length < 16) {
                                        errores.celularTitular2 = ' INGRESE UN NÚMERO DE TELÉFONO VÁLIDO +58 424 000 0000'
                                    } */
                  if (
                    !valores.nombreBeneficiarioPoliza &&
                    formStep1.titularObeneficiario === "beneficiario"
                  ) {
                    errores.nombreBeneficiarioPoliza = true;
                  } else if (
                    valores.nombreBeneficiarioPoliza !== "" &&
                    formStep1.titularObeneficiario === "beneficiario" &&
                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
                      valores.nombreBeneficiarioPoliza
                    )
                  ) {
                    errores.nombreBeneficiarioPoliza = "Solo letras y espacios";
                  }

                  if (
                    !valores.cedulaBeneficiario &&
                    formStep1.titularObeneficiario === "beneficiario"
                  ) {
                    errores.cedulaBeneficiario = true;
                  } /*  else if (valores.cedulaBeneficiario !== '' && formStep1.titularObeneficiario === 'beneficiario' && !/^\d*\.?\d*$/.test(valores.cedulaBeneficiario)) {
                                        errores.cedulaBeneficiario = 'Solo numeros'
                                    } */
                  if (
                    !valores.emailBeneficiario &&
                    formStep1.titularObeneficiario === "beneficiario"
                  ) {
                    errores.emailBeneficiario = true;
                  } else if (
                    valores.emailBeneficiario !== "" &&
                    formStep1.titularObeneficiario === "beneficiario" &&
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      valores.emailBeneficiario
                    )
                  ) {
                    errores.emailBeneficiario = "Ingrese un correo valido";
                  }

                  if (
                    phonestate.phoneBeneficiario === "" &&
                    formStep1.titularObeneficiario === "beneficiario"
                  ) {
                    errores.celularBeneficiario = true;
                  }
                  /*  if (!valores.celularBeneficiario && formStep1.titularObeneficiario === 'beneficiario') {
                                         errores.celularBeneficiario = true
                                     } else if (formStep1.titularObeneficiario === 'beneficiario' && valores.celularBeneficiario.length < 16) {
                                         errores.celularBeneficiario = ' INGRESE UN NÚMERO DE TELÉFONO VÁLIDO +58 424 000 0000'
                                     } */
                }

                if (page === 3) {
                  if (!fileSelect[0]) {
                    errores.informeMedico = true;
                  }

                  if (fileSelect && errorFile.errorInforme) {
                    errores.informeMedico = false;
                    setErrorFile({
                      ...errorFile,
                      errorInforme: "El tipo de archivo debe ser PDF",
                    });
                  }

                  /* if (!fileSelect[1]) {
                                        errores.examenesRealizados = true
                                    }

                                    if (errorFile.errorExamenes) {
                                        errores.examenesRealizados = false
                                        setErrorFile({ ...errorFile, errorExamenes: 'El tipo de archivo debe ser PDF' })
                                    } */

                  if (!fileSelect[2]) {
                    errores.presupuestoSalud = true;
                  }

                  if (fileSelect && errorFile.errorPresupuesto) {
                    errores.presupuestoSalud = false;
                    setErrorFile({
                      ...errorFile,
                      errorPresupuesto: "El tipo de archivo debe ser PDF",
                    });
                  }

                  if (!valores.patologiaDiagnostico) {
                    errores.patologiaDiagnostico = true;
                  } /* else if (valores.patologiaDiagnostico !== '' && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.patologiaDiagnostico)) {
                                        errores.patologiaDiagnostico = 'Solo letras y espacios'
                                    } */

                  if (startDate === "") {
                    errores.fechaOcurrencia = true;
                  }

                  if (!valores.montoTotal) {
                    errores.montoTotal = true;
                  }
                }
                return errores;
              }}
              onSubmit={(valores) => {
                if (valores.selectSeguro && formStep1.tipoPoliza !== "") {
                  if (page === 1) {
                    if (formStep1.tipoPoliza === "Individual") {
                      valores.nombreTomador = "";
                      setupdateData({
                        ...updateData,
                        nombreTomador: "",
                      });
                    }
                    setData({ ...valores });

                    setPage((current) => current + 1);
                  }
                }
                if (
                  (formStep1.titularObeneficiario !== "" &&
                    valores.nombreTitularPoliza !== "") ||
                  (formStep1.titularObeneficiario !== "" &&
                    valores.nombreTitularPoliza2 !== "")
                ) {
                  if (page === 2) {
                    if (formStep1.titularObeneficiario === "beneficiario") {
                      valores.nombreTitularPoliza = "";
                      valores.cedulaTitular = "";
                      valores.emailTitular = "";
                      valores.celularTitular = "";
                      setupdateData({
                        ...updateData,
                        nombreTitularPoliza: "",
                        cedulaTitular: "",
                        emailTitular: "",
                        celularTitular: "",
                      });
                      setFormStep1({
                        ...formStep1,
                        titularObeneficiario: "beneficiario",
                      });
                      setPhonestate({ ...phonestate, phoneTitular: "" });
                    }

                    if (formStep1.titularObeneficiario === "titular") {
                      valores.cedulaBeneficiario = "";
                      valores.cedulaTitular2 = "";
                      valores.celularBeneficiario = "";
                      valores.celularTitular2 = "";
                      valores.emailBeneficiario = "";
                      valores.emailTitular2 = "";
                      valores.nombreBeneficiarioPoliza = "";
                      valores.nombreTitularPoliza2 = "";
                      setupdateData({
                        ...updateData,
                        cedulaBeneficiario: "",
                        cedulaTitular2: "",
                        celularBeneficiario: "",
                        celularTitular2: "",
                        emailBeneficiario: "",
                        emailTitular2: "",
                        nombreBeneficiarioPoliza: "",
                        nombreTitularPoliza2: "",
                      });
                      setFormStep1({
                        ...formStep1,
                        titularObeneficiario: "titular",
                      });
                      setPhonestate({
                        ...phonestate,
                        phoneTitular2: "",
                        phoneBeneficiario: "",
                      });
                    }
                    setData({ ...valores });
                    setPage((current) => current + 1);
                  }
                }
                if (valores.patologiaDiagnostico !== "") {
                  if (page === 3) {
                    /* if (formStep1.tipoPoliza === 'Individual') {
                                            valores.nombreTomador = ''
                                        } */

                    /* if (formStep1.titularObeneficiario === 'titular') {
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
                                        } */
                    setData({ ...valores });
                    setPage((current) => current + 1);
                  }
                }
              }}
            >
              {({
                handleBlur,
                handleChange,
                handleSubmit,
                errors,
                initialValues,
              }) => (
                <>
                  <div className="h_total luna-signup-left">
                    <img
                      className="luna-signup-logo img-responsive"
                      src={imgLogo}
                      alt="logo"
                    />

                    <div className="luna-navigation">
                      <a
                        style={{ display: page <= 1 && "none" }}
                        onClick={prevSteps}
                        className="toPrev "
                      >
                        <i className="icon icon-arrow-up2"></i>
                      </a>
                      <ul className="dots"></ul>
                      <a
                        style={{ display: page >= 4 && "none" }}
                        onClick={handleSubmit}
                        className="toNext "
                      >
                        <i className="icon icon-arrow-down2"></i>
                      </a>
                    </div>
                  </div>
                  <div className="luna-signup-right">
                    <div className="container-fluid">
                      <h3 className="text-reembolso">Carta Aval </h3>
                      <div className="steps-count">
                        Paso <span className="step-current"> {page} </span>/
                        <span className="step-count"> 4 </span>
                      </div>
                      <div className="luna-steps">
                        {page === 1 && (
                          <Steps
                            formStep1={formStep1}
                            setFormStep1={setFormStep1}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            errors={errors}
                            initialValues={initialValues}
                            updateData={updateData}
                            setupdateData={setupdateData}
                            /*   nombreTomador={nombreTomador}
                                                          selectSeguro={selectSeguro} */
                          />
                        )}
                        {page === 2 && (
                          <Steps1
                            setFormStep1={setFormStep1}
                            formStep1={formStep1}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            errors={errors}
                            initialValues={initialValues}
                            updateData={updateData}
                            setupdateData={setupdateData}
                            setData={setData}
                            data={data}
                            phonestate={phonestate}
                            setPhonestate={setPhonestate}
                          />
                        )}
                        {page === 3 && (
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
                            onClickSplice={onClickSplice}
                            errorFile={errorFile}
                            setErrorFile={setErrorFile}
                            updateData={updateData}
                            data={data}
                            fileSelect={fileSelect}
                          />
                        )}
                        {page === 4 && (
                          <StepsConfirm
                            formStep1={formStep1}
                            sendData={sendData}
                            loadingModal={loadingModal}
                            data={data}
                            startDate={startDate}
                            fileSelect={fileSelect}
                            phonestate={phonestate}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="button-container">
                    <div
                      style={{ display: page >= 4 && "none" }}
                      onClick={handleSubmit}
                      className="btn btn-blue "
                    >
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
  );
};

export default PageCartaAval;
