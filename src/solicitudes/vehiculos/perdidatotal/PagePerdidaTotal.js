import React, { useState, useEffect } from "react";
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import firebaseApp from "../../../firebase";
import "../../../css/bootstrap.min.css";
import "../../../css/font.css";
import "../../../css/Loading.css";
import "../../../css/Modals.css";
import "../../../css/plugins.css";
import "../../../css/style.css";
import imgLogo from "../../../images/logowhite.png";
import { Formik } from "formik";
import Steps1 from "./steps/Steps1";
import Steps from "./steps/Steps";
import Steps2 from "./steps/Steps2";
import StepsConfirm from "./steps/StepsConfirm";
import { useNavigate, BrowserRouter } from "react-router-dom";
import Steps3 from "./steps/Steps3";
import Steps4 from "./steps/Steps4";
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const PagePerdidaTotal = () => {
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  const [page, setPage] = useState(1);
  const [loadingModal, setLoadingModal] = useState(false);
  const [fileSelect, setFileSelect] = useState(new Array(5));
  const [enteFile, setEnteFile] = useState(new Array(3));
  const [updateData, setupdateData] = useState();
  const [urlGET, setUrlGET] = useState([]);
  const [enteUrl, setEnteUrl] = useState([]);
  const [arrayConfirm, setArrayConfirm] = useState(false);
  const [newTipoReembolso, setNewTipoReembolso] = useState("");

  const [errorFile, setErrorFile] = useState({
    cedulaConductor: false,
    certificadoMedico: false,
    licenciaConductor: false,
    carnetCirculacion: false,
    autorizacion: false,
    fotosVehiculos: false,
    enteFile: false,
    enteFile3: false,
    enteCICPC: false,
    enteBomberos: false,
  });
  const [data, setData] = useState();
  const [startDate, setStartDate] = useState("");
  const [formStep1, setFormStep1] = useState({
    tipoPoliza: "",
    titularObeneficiario: "",
    reparacionParcial: "",
    fileDataInformeMedico: "",
    fileDataRecipeIndicaciones: "",
    fileDataExamenesRealizados: "",
    fileDataFacturas: "",
    SioNo: "",
    intervinoSioNo: "",
    intervinoSioNoIncendio: "",
    horaOcurrencia: "",
    tipoDeCedula: "",
    tipoDeCedulaTitular: "",
    tipoDeCedulaBeneficiario: "",
    tipoDeMoneda: "",
    siOnoHubo: "",
    danosSioNo: "",
    danosSioNo2: "",
    vehiculoDetenidoSioNo: "",
  });

  const [phonestate, setPhonestate] = useState({
    phoneTitular: "",
    phoneTitular2: "",
    phoneBeneficiario: "",
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
      /*   setNewTipoReembolso(formStep1.reparacionParcial) */
      setPage((current) => current - 1);
    }
    if (page === 5) {
      setNewTipoReembolso(formStep1.reparacionParcial);
      setArrayConfirm(true);
      setPage((current) => current - 1);
    }
  };
  const handleFile = (e, n) => {
    if (e.target.name === "cedulaConductor") {
      let file = e.target.files;

      if (file[0].type === "application/pdf") {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[0], e.target.files]);
        }
        setErrorFile({ ...errorFile, cedulaConductor: false });
      } else {
        setErrorFile({ ...errorFile, cedulaConductor: true });
      }
    }

    if (e.target.name === "certificadoMedico") {
      let file = e.target.files;
      if (file[0].type === "application/pdf") {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[1], e.target.files]);
        }
        setErrorFile({ ...errorFile, certificadoMedico: false });
      } else {
        setErrorFile({ ...errorFile, certificadoMedico: true });
      }
    }
    if (e.target.name === "licenciaConductor") {
      let file = e.target.files;
      if (file[0].type === "application/pdf") {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[2], e.target.files]);
        }
        setErrorFile({ ...errorFile, licenciaConductor: false });
      } else {
        setErrorFile({ ...errorFile, licenciaConductor: true });
      }
    }
    if (e.target.name === "carnetCirculacion") {
      let file = e.target.files;
      if (file[0].type === "application/pdf") {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[3], e.target.files]);
        }
        setErrorFile({ ...errorFile, carnetCirculacion: false });
      } else {
        setErrorFile({ ...errorFile, carnetCirculacion: true });
      }
    }
    if (e.target.name === "autorizacion") {
      let file = e.target.files;
      if (file[0].type === "application/pdf") {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[4], e.target.files]);
        }
        setErrorFile({ ...errorFile, autorizacion: false });
      } else {
        setErrorFile({ ...errorFile, autorizacion: true });
      }
    }
    if (e.target.name === "fotosVehiculos") {
      let file = e.target.files;
      if (file[0].type === "application/pdf") {
        if (fileSelect) {
          fileSelect.splice(n, 1, e.target.files);
        } else {
          setFileSelect([...fileSelect[5], e.target.files]);
        }
        setErrorFile({ ...errorFile, fotosVehiculos: false });
      } else {
        setErrorFile({ ...errorFile, fotosVehiculos: true });
      }
    }
  };

  const handleEnte = (e, n) => {
    if (e.target.name === "entefile") {
      const file = e.target.files;
      if (
        file[0].type === "application/pdf" ||
        file[0].type === "image/png" ||
        file[0].type === "image/jpeg"
      ) {
        if (enteFile) {
          enteFile.splice(n, 1, e.target.files);
        } else {
          setEnteFile([...enteFile[0], e.target.files]);
        }
        setErrorFile({ ...errorFile, enteFile: false });
      } else {
        delete enteFile[0];
        setErrorFile({ ...errorFile, enteFile: true });
      }
    }

    if (e.target.name === "enteCICPC") {
      const file = e.target.files;
      if (
        file[0].type === "application/pdf" ||
        file[0].type === "image/png" ||
        file[0].type === "image/jpeg"
      ) {
        if (enteFile) {
          enteFile.splice(n, 1, e.target.files);
        } else {
          setEnteFile([...enteFile[1], e.target.files]);
        }
        setErrorFile({ ...errorFile, enteCICPC: false });
      } else {
        delete enteFile[1];
        setErrorFile({ ...errorFile, enteCICPC: true });
      }
    }

    if (e.target.name === "enteBomberos3") {
      const file = e.target.files;
      if (
        file[0].type === "application/pdf" ||
        file[0].type === "image/png" ||
        file[0].type === "image/jpeg"
      ) {
        if (enteFile) {
          enteFile.splice(n, 1, e.target.files);
        } else {
          setEnteFile([...enteFile[2], e.target.files]);
        }
        setErrorFile({ ...errorFile, enteBomberos3: false });
      } else {
        delete enteFile[2];
        setErrorFile({ ...errorFile, enteBomberos3: true });
      }
    }

    if (e.target.name === "entefile3") {
      const file = e.target.files;
      if (
        file[0].type === "application/pdf" ||
        file[0].type === "image/png" ||
        file[0].type === "image/jpeg"
      ) {
        if (enteFile) {
          enteFile.splice(n, 1, e.target.files);
        } else {
          setEnteFile([...enteFile[3], e.target.files]);
        }
        setErrorFile({ ...errorFile, enteFile3: false });
      } else {
        delete enteFile[3];
        setErrorFile({ ...errorFile, enteFile3: true });
      }
    }
  };

  const sendData = async () => {
    Swal.fire({
      width: "400px",
      icon: "question",
      title: "¿Está seguro que todos los datos son correctos?",
      showCancelButton: true,
      confirmButtonText: "Sí",
      confirmButtonColor: "blue",
      cancelButtonText: "No",
      cancelButtonColor: "red",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingModal(true);
        const id = uuidv4();
        /*  await Promise.all(
                         fileSelect.map(async (file, i) => {
                             const storageRef = ref(storage, `/solicitudes/vehiculos/perdida-total/${id}/${file[0].name}${enteFile[0].name}`)
                             const uploadResult = await uploadBytes(storageRef, file[0], enteFile[0])
                             urlGET.push(await getDownloadURL(uploadResult.ref))
                         })
                     ) */

        await Promise.all(
          enteFile.map(async (fileEnte, i) => {
            const storageRefEnte = ref(
              storage,
              `/solicitudes/vehiculos/perdida-total/${id}/${fileEnte[0].name}`
            );
            const uploadResultEnte = await uploadBytes(
              storageRefEnte,
              fileEnte[0]
            );
            enteUrl.push(await getDownloadURL(uploadResultEnte.ref));
          })
        );
        setEnteUrl(enteUrl);

        try {
          setDoc(doc(db, "/solicitudes/vehiculo-perdidaTotal/historico/", id), {
            Tipodepóliza: formStep1.tipoPoliza,
            NombreDeLaEmpresa: data.nombreTomador,
            CompañíadeSeguros: data.selectSeguro,


            Nombredeltitulardelapóliza: data.nombreTitularPoliza,
            CéduladeidentidadTitular: data.cedulaIdentidad,
            FechaNacimiento: data.fechaNacimiento,
            GradoDeLicencia: data.gradoLicencia,
            PlacaDeVehiculo: data.placaVehiculo,
            Marca: data.marca,
            Modelo: data.modelo,
            Ano: data.ano,
            CorreoDelTitular: data.emailTitular,
            Telefono: phonestate.phoneTitular,

            NombreDelConductor: data.nombreConductor,
            CedulaDelConductor: data.cedulaConductor,
            FechaDeNacimientoDelConductor: data.fechaConductor,
            GradoDeLicenciaDelConductor: data.gradoConductor,
            CorreoDelConductor: data.correoConductor,
            TelefonoDelConductor: phonestate.phoneTitular2,

            FechaDeOcurrencia: data.fechaOcurrencia || data.fechaOcurrencia2 || data.fechaOcurrencia3,
            HoraAproxima: data.horaOcurrencia || data.horaOcurrencia2 || data.horaOcurrencia3,
            LugarOcurrencia: data.lugarOcurrencia || data.lugarOcurrencia2 || data.lugarOcurrencia3,
            DescripciónDeLosHechos: data.descripcionHechos || data.descripcionHechos2 || data.descripcionHechos3,
            DescribirLosDañosAlVehículo: data.describirDanos || data.describirDanos2 || data.describirDanos3,
            IntervinoAlgunaAutoridad: formStep1.intervinoSioNo,
            /* InpeccionDelEntePDF: enteUrl, */
            HuboDañosATerceros: formStep1.danosSioNo || formStep1.danosSioNo2,
            ElVehículoEstáDetenido: formStep1.vehiculoDetenidoSioNo,
            documentosPDF: enteUrl,
          });

          const dataBeneficiario = `
          ${data.nombreConductor !== '' ? `<h4 >Nombre del conductor : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.nombreConductor} </span></h4>` : ''}
          ${data.cedulaConductor !== '' ? `<h4 >Cédula de identidad del conductor : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.cedulaConductor} </span></h4>` : ''}
          ${data.fechaConductor !== '' ? `<h4 >Fecha de nacimiento del conductor  : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.fechaConductor} </span></h4>` : ''}
          ${data.gradoConductor !== '' ? `<h4 >Grado de licencia del conductor : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.gradoConductor} </span></h4>` : ''}
          ${data.correoConductor !== '' ? `<h4 >Correo electrónico del conductor : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.correoConductor} </span></h4>` : ''}
          ${phonestate.phoneTitular2 !== '' ? `<h4 >Número de teléfono del conductor : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${phonestate.phoneTitular2} </span></h4>` : ''}`;


          const compa = `
          ${data.selectSeguro !== '' ? `<h4 >Compañía de seguro  : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.selectSeguro} </span></h4>` : ''}
          ${data.nombreTomador !== '' ? `<h4 >Nombre de la empresa  : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.nombreTomador} </span></h4>` : ''}`;

          const dataSioNo = `
          ${data.fechaOcurrencia !== '' || data.fechaOcurrencia2 !== '' || data.fechaOcurrencia3 !== '' ? `<h4 >Fecha de ocurrencia : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.fechaOcurrencia || data.fechaOcurrencia2 || data.fechaOcurrencia3} </span></h4>` : ''}
          ${data.horaOcurrencia !== '' || data.horaOcurrencia2 !== '' || data.horaOcurrencia3 !== '' ? `<h4 >Hora de ocurrencia  : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.horaOcurrencia || data.horaOcurrencia2 || data.horaOcurrencia3} </span></h4>` : ''}
          ${data.lugarOcurrencia !== '' || data.lugarOcurrencia2 !== '' || data.lugarOcurrencia3 !== '' ? `<h4 >Lugar de ocurrencia : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.lugarOcurrencia || data.lugarOcurrencia2 || data.lugarOcurrencia3} </span></h4>` : ''}
          ${data.descripcionHechos !== '' || data.descripcionHechos2 !== '' || data.descripcionHechos3 !== '' ? `<h4 >Descripción de los hechos : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.descripcionHechos || data.descripcionHechos2 || data.descripcionHechos3} </span></h4>` : ''}
          ${data.describirDanos !== '' || data.describirDanos3 !== '' ? `<h4 >Descripcion de los daños del vehículo : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${data.describirDanos || data.describirDanos3} </span></h4>` : ''}
          ${formStep1.intervinoSioNo !== '' ? `<h4 >¿Intervino alguna autoridad? : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${formStep1.intervinoSioNo} </span></h4>` : ''}
          ${formStep1.danosSioNo !== '' || formStep1.danosSioNo2 !== '' ? `<h4 >¿Hubo daños a terceros? : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${formStep1.danosSioNo || formStep1.danosSioNo2} </span></h4>` : ''}
          ${formStep1.vehiculoDetenidoSioNo !== '' ? `<h4 >¿El vehiculo esta detenido? : <span  style="font-weight: 800; color: #6e6e6e;font-size: 13px;text-transform: uppercase;margin-left: 10px;"> ${formStep1.vehiculoDetenidoSioNo} </span></h4>` : ''}
`;

          const documentosAdjuntos = `
          ${enteUrl[0] !== undefined ? `<div > <a href="${enteUrl[0]}">Documento 1 </a>  </div>` : ''}
          ${enteUrl[1] !== undefined ? `<div > <a href="${enteUrl[1]}">Documento 2 </a>  </div>` : ''}
          ${enteUrl[2] !== undefined ? `<div > <a href="${enteUrl[2]}">Documento 3 </a>  </div>` : ''}
          ${enteUrl[3] !== undefined ? `<div > <a href="${enteUrl[3]}">Documento 3 </a>  </div>` : ''}`;

          addDoc(collection(db, "mail"), {
            to: "atinagestionreclamos@gmail.com",
            message: {
              subject: "Solicitud Atina Perdida Total!",
              html: ` 

              
              <ul > 
                                <h2>Tipo de póliza y Compañía de seguro</h2> 
                               
                                <h4> Tipo de póliza :  <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${formStep1.tipoPoliza} </span> </h4>
                               
                                
                               ${compa}
                               
                               <li>

                                <h2>Datos personales</h2> 
                               
                                <h4> Nombre del Titular de la Póliza : <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.nombreTitularPoliza} </span> </h4>
                               
                                <h4> Cédula de identidad del titular :   <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.cedulaIdentidad} </span> </h4>
                               
                                <h4> Fecha de nacimiento  :   <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.fechaNacimiento} </span></h4>
                               
                                <h4>Grado de licencia : <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.gradoLicencia} </span></h4>
                               
                                <h4>Placa del vehículo : <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.placaVehiculo} </span></h4>
                               
                                <h4>Modelo del vehículo :  <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.modelo} </span></h4>
                               
                                <h4>Marca del vehículo :  <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.marca} </span></h4>
                               
                                <h4>Año :  <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.ano} </span></h4>
                               
                                <h4>Correo electrónico del titular :  <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${data.emailTitular} </span></h4>
                               
                                <h4>Número de teléfono del titular : <span style="font-weight: 800;
    color: #6e6e6e;
    font-size: 13px;
    text-transform: uppercase;
    margin-left: 10px;" > ${phonestate.phoneTitular} </span></h4>
                               
                                </li>
                                <li>

                                <h2>Datos del conductor</h2> 
                               
                             ${dataBeneficiario}
                               

                                </li>
                                <li>
                                <h2>Reparacion parcial</h2> 
${dataSioNo}
                                </li>
                                <li>
                                
                               
                                <h2>Adjuntos</h2>
                               
                              
${documentosAdjuntos}
                               
                                </li>
                                <ul > `,
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
          console.log('first', error)
          alert(error)
          setLoadingModal(false);
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
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
      <div /* className='container mx-auto'  */>
        <div className="h_total luna-signup-left-overlay">
          <div>
            <img
              className="luna-signup-logo img-responsive"
              src={imgLogo}
              alt="logo"
            />
          </div>
        </div>
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
                cedulaIdentidad: "",
                fechaNacimiento: "",
                gradoLicencia: "",
                placaVehiculo: "",
                modelo: "",
                marca: "",
                ano: "",
                emailTitular: "",
                celularTitular: "",
                //Page 3
                siOno: "",
                nombreConductor: "",
                cedulaConductor: "",
                fechaConductor: "",
                gradoConductor: "",
                correoConductor: "",
                celularConductor: "",
                //PAGE  4
                reparacionParcial: "",
                fechaOcurrencia: "",
                horaOcurrencia: "",
                lugarOcurrencia: "",
                descripcionHechos: "",
                describirDanos: "",
                entefile: "",
                enteCICPC: "",
                enteBomberos: "",
                siOnoAutoridad: "",
                danosTerceros: "",
                vehiculoDetenido: "",

                fechaOcurrencia2: "",
                horaOcurrencia2: "",
                lugarOcurrencia2: "",
                descripcionHechos2: "",

                fechaOcurrencia3: "",
                horaOcurrencia3: "",
                lugarOcurrencia3: "",
                descripcionHechos3: "",
                entefile3: "",
                describirDanos3: "",
                enteBomberos3: "",
                siOnoAutoridad3: "",
                danosTerceros3: "",

                danosSioNo: "",
                danosSioNo2: "",
                vehiculoDetenidoSioNo: "",
                //Page 5
                cedulaConductor: "",
                certificadoMedico: "",
                licenciaConductor: "",
                carnetCirculacion: "",
                autorizacion: "",
                fotosVehiculos: "",
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
                  if (!valores.nombreTitularPoliza) {
                    errores.nombreTitularPoliza = true;
                  } else if (
                    valores.nombreTitularPoliza !== "" &&
                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreTitularPoliza)
                  ) {
                    errores.nombreTitularPoliza = "Solo letras y espacios";
                  }
                  if (!valores.cedulaIdentidad) {
                    errores.cedulaIdentidad = true;
                  }
                  if (
                    !valores.gradoLicencia ||
                    valores.gradoLicencia === "Selecciona"
                  ) {
                    errores.gradoLicencia = true;
                  }
                  if (!valores.fechaNacimiento) {
                    errores.fechaNacimiento = true;
                  }
                  if (!valores.placaVehiculo) {
                    errores.placaVehiculo = true;
                  }
                  if (!valores.modelo) {
                    errores.modelo = true;
                  }
                  if (!valores.marca) {
                    errores.marca = true;
                  }
                  if (!valores.ano) {
                    errores.ano = true;
                  } else if (valores.ano === 1990) {
                    errores.ano = "Ingresa una fecha valida";
                  }
                  if (!valores.emailTitular) {
                    errores.emailTitular = true;
                  } else if (
                    valores.emailTitular !== "" &&
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      valores.emailTitular
                    )
                  ) {
                    errores.emailTitular = "Ingrese un correo valido";
                  }

                  if (phonestate.phoneTitular === "") {
                    errores.celularTitular = true;
                  }
                  /*  if (!valores.celularTitular) {
                                         errores.celularTitular = true
                                     } else if (valores.celularTitular.length < 16) {
                                         errores.celularTitular = ' INGRESE UN NÚMERO DE TELÉFONO VÁLIDO +58 424 000 0000'
                                     } */
                }

                if (page === 3) {
                  if (!formStep1.SioNo) {
                    errores.siOno = true;
                  }

                  if (formStep1.SioNo === "si") {
                    if (!valores.nombreConductor) {
                      errores.nombreConductor = true;
                    } else if (
                      valores.nombreConductor !== "" &&
                      !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreConductor)
                    ) {
                      errores.nombreConductor = "Solo letras y espacios";
                    }
                    if (!valores.cedulaConductor) {
                      errores.cedulaConductor = true;
                    }
                    if (
                      !valores.gradoConductor ||
                      valores.gradoConductor === "Selecciona"
                    ) {
                      errores.gradoConductor = true;
                    }
                    if (!valores.fechaConductor) {
                      errores.fechaConductor = true;
                    }
                    if (!valores.correoConductor) {
                      errores.correoConductor = true;
                    } else if (
                      valores.correoConductor !== "" &&
                      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                        valores.correoConductor
                      )
                    ) {
                      errores.correoConductor = "Ingrese un correo valido";
                    }

                    if (phonestate.phoneTitular2 === "") {
                      errores.celularConductor = true;
                    }
                    /*  if (!valores.celularConductor) {
                                             errores.celularConductor = true
                                         } else if (valores.celularConductor.length < 16) {
                                             errores.celularConductor = ' INGRESE UN NÚMERO DE TELÉFONO VÁLIDO +58 424 000 0000'
                                         } */
                  }
                }

                if (page === 4) {
                  if (
                    !formStep1.reparacionParcial ||
                    formStep1.reparacionParcial === "Selecciona"
                  ) {
                    errores.reparacionParcial = true;
                  }

                  if (
                    formStep1.reparacionParcial ===
                    "Perdida total por accidente"
                  ) {
                    if (!valores.fechaOcurrencia) {
                      errores.fechaOcurrencia = true;
                    }
                    if (!valores.horaOcurrencia) {
                      errores.horaOcurrencia = true;
                    }
                    if (!valores.lugarOcurrencia) {
                      errores.lugarOcurrencia = true;
                    }
                    if (!valores.descripcionHechos) {
                      errores.descripcionHechos = true;
                    }
                    if (formStep1.intervinoSioNo === "") {
                      errores.siOnoAutoridad = true;
                    } else if (formStep1.intervinoSioNo === "si") {
                      if (!enteFile[0]) {
                        errores.siOnoAutoridad = false;
                        errores.entefile = true;
                      }
                    }

                    if (!formStep1.danosSioNo) {
                      errores.danosSioNo = true;
                    }
                    if (!formStep1.vehiculoDetenidoSioNo) {
                      errores.vehiculoDetenidoSioNo = true;
                    }
                    if (!valores.describirDanos) {
                      errores.describirDanos = true;
                    }
                    /* if (!valores.danosTerceros) {
                                            errores.danosTerceros = true
                                        }
                                        if (!valores.vehiculoDetenido) {
                                            errores.vehiculoDetenido = true
                                        } */
                  }

                  if (
                    formStep1.reparacionParcial ===
                    "Perdida total por robo o hurto"
                  ) {
                    if (!valores.fechaOcurrencia2) {
                      errores.fechaOcurrencia2 = true;
                    }
                    if (!valores.horaOcurrencia2) {
                      errores.horaOcurrencia2 = true;
                    }
                    if (!valores.lugarOcurrencia2) {
                      errores.lugarOcurrencia2 = true;
                    }
                    if (!valores.descripcionHechos2) {
                      errores.descripcionHechos2 = true;
                    }
                    if (!enteFile[1]) {
                      errores.enteCICPC = true;
                    }
                  }

                  if (
                    formStep1.reparacionParcial === "Perdida total por incendio"
                  ) {
                    if (!valores.fechaOcurrencia3) {
                      errores.fechaOcurrencia3 = true;
                    }
                    if (!valores.horaOcurrencia3) {
                      errores.horaOcurrencia3 = true;
                    }
                    if (!valores.lugarOcurrencia3) {
                      errores.lugarOcurrencia3 = true;
                    }
                    if (!valores.descripcionHechos3) {
                      errores.descripcionHechos3 = true;
                    }
                    if (formStep1.intervinoSioNoIncendio === "") {
                      errores.siOnoAutoridad3 = true;
                    } else if (formStep1.intervinoSioNoIncendio === "si") {
                      if (!enteFile[3]) {
                        errores.siOnoAutoridad3 = false;
                        errores.entefile3 = true;
                      }
                    }
                    if (!valores.describirDanos3) {
                      errores.describirDanos3 = true;
                    }
                    if (!formStep1.danosSioNo2) {
                      errores.danosSioNo2 = true;
                    }
                    /* if (!valores.danosTerceros3) {
                                            errores.danosTerceros3 = true
                                        } */
                    if (!enteFile[2]) {
                      errores.enteBomberos3 = true;
                    }
                  }
                }

                return errores;
              }}
              onSubmit={(valores, errores) => {
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
                if (page === 2) {
                  setData({ ...valores });
                  setPage((current) => current + 1);
                }
                if (page === 3) {
                  if (formStep1.SioNo === "no") {
                    valores.nombreConductor = "";
                    valores.cedulaConductor = "";
                    valores.fechaConductor = "";
                    valores.gradoConductor = "";
                    valores.correoConductor = "";
                    valores.celularConductor = "";
                    setupdateData({
                      ...updateData,
                      nombreConductor: "",
                      cedulaConductor: "",
                      fechaConductor: "",
                      gradoConductor: "",
                      correoConductor: "",
                      celularConductor: "",
                    });

                    setFormStep1({ ...formStep1, SioNo: "no" });
                    setPhonestate({ ...phonestate, phoneTitular2: "" });
                  }
                  setData({ ...valores });

                  setPage((current) => current + 1);
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
                }
                if (page === 4) {
                  if (formStep1.intervinoSioNo === "no") {
                    setEnteFile(new Array(3));
                  }
                  if (formStep1.intervinoSioNoIncendio === "no") {
                    delete enteFile[3];
                  }
                  if (
                    formStep1.reparacionParcial ===
                    "Perdida total por accidente"
                  ) {
                    valores.fechaOcurrencia2 = "";
                    valores.horaOcurrencia2 = "";
                    valores.lugarOcurrencia2 = "";
                    valores.descripcionHechos2 = "";
                    valores.fechaOcurrencia3 = "";
                    valores.horaOcurrencia3 = "";
                    valores.lugarOcurrencia3 = "";
                    valores.descripcionHechos3 = "";
                    valores.describirDanos3 = "";
                    valores.enteBomberos3 = "";
                    valores.siOnoAutoridad3 = "";
                    valores.danosTerceros3 = "";
                    setupdateData({
                      ...updateData,
                      fechaOcurrencia2: "",
                      horaOcurrencia2: "",
                      lugarOcurrencia2: "",
                      descripcionHechos2: "",
                      fechaOcurrencia3: "",
                      horaOcurrencia3: "",
                      lugarOcurrencia3: "",
                      descripcionHechos3: "",
                      describirDanos3: "",
                      enteBomberos3: "",
                      siOnoAutoridad3: "",
                      danosTerceros3: "",
                    });
                    setFormStep1({
                      ...formStep1,
                      horaOcurrencia: "",
                      intervinoSioNoIncendio: "",
                    });
                  }

                  if (
                    formStep1.reparacionParcial ===
                    "Perdida total por robo o hurto"
                  ) {
                    valores.fechaOcurrencia = "";
                    valores.horaOcurrencia = "";
                    valores.lugarOcurrencia = "";
                    valores.descripcionHechos = "";
                    valores.describirDanos = "";

                    valores.enteBomberos = "";
                    valores.danosTerceros = "";
                    valores.vehiculoDetenido = "";
                    valores.fechaOcurrencia3 = "";
                    valores.horaOcurrencia3 = "";
                    valores.lugarOcurrencia3 = "";
                    valores.descripcionHechos3 = "";
                    valores.describirDanos3 = "";
                    valores.enteBomberos3 = "";
                    valores.siOnoAutoridad3 = "";
                    valores.danosTerceros3 = "";
                    setupdateData({
                      ...updateData,
                      fechaOcurrencia: "",
                      horaOcurrencia: "",
                      lugarOcurrencia: "",
                      descripcionHechos: "",
                      describirDanos: "",

                      enteBomberos: "",
                      danosTerceros: "",
                      vehiculoDetenido: "",
                      fechaOcurrencia3: "",
                      horaOcurrencia3: "",
                      lugarOcurrencia3: "",
                      descripcionHechos3: "",
                      describirDanos3: "",
                      enteBomberos3: "",
                      siOnoAutoridad3: "",
                      danosTerceros3: "",
                    });

                    setFormStep1({
                      ...formStep1,
                      intervinoSioNo: "",
                      intervinoSioNoIncendio: "",
                      horaOcurrencia: "",
                    });
                  }

                  if (
                    formStep1.reparacionParcial === "Perdida total por incendio"
                  ) {
                    valores.fechaOcurrencia = "";
                    valores.horaOcurrencia = "";
                    valores.lugarOcurrencia = "";
                    valores.descripcionHechos = "";
                    valores.describirDanos = "";

                    valores.enteCICPC = "";
                    valores.enteBomberos = "";
                    valores.siOnoAutoridad = "";
                    valores.danosTerceros = "";
                    valores.vehiculoDetenido = "";
                    valores.fechaOcurrencia2 = "";
                    valores.horaOcurrencia2 = "";
                    valores.lugarOcurrencia2 = "";
                    valores.descripcionHechos2 = "";
                    setupdateData({
                      ...updateData,

                      fechaOcurrencia: "",
                      horaOcurrencia: "",
                      lugarOcurrencia: "",
                      descripcionHechos: "",
                      describirDanos: "",

                      enteCICPC: "",
                      enteBomberos: "",
                      siOnoAutoridad: "",
                      danosTerceros: "",
                      vehiculoDetenido: "",
                      fechaOcurrencia2: "",
                      horaOcurrencia2: "",
                      lugarOcurrencia2: "",
                      descripcionHechos2: "",
                    });
                    setFormStep1({
                      ...formStep1,
                      horaOcurrencia: "",
                      intervinoSioNo: "",
                    });
                  }
                  setData({ ...valores });
                  setPage((current) => current + 1);
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
                    <div className="tainer__">
                      <img
                        className="luna-signup-logo2 "
                        src={imgLogo}
                        alt="logo"
                      />
                    </div>
                    <div className="item_table">
                      <img
                        className="luna-signup-logo3"
                        src={imgLogo}
                        alt="logo"
                      />
                    </div>

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
                        style={{ display: page >= 5 && "none" }}
                        onClick={handleSubmit}
                        className="toNext "
                      >
                        <i className="icon icon-arrow-down2"></i>
                      </a>
                    </div>
                  </div>

                  <div className="luna-signup-right">
                    <div className="container-fluid">
                      <h3 className="text-reembolso">PÉRDIDA TOTAL</h3>
                      <div className="steps-count">
                        Paso <span className="step-current"> {page} </span>/
                        <span className="step-count"> 5 </span>
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
                            setStartDate={setStartDate}
                            startDate={startDate}
                            updateData={updateData}
                            setPhonestate={setPhonestate}
                            phonestate={phonestate}
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
                            setErrorFile={setErrorFile}
                            errorFile={errorFile}
                            fileSelect={fileSelect}
                            setFileSelect={setFileSelect}
                            updateData={updateData}
                            phonestate={phonestate}
                            setPhonestate={setPhonestate}
                          />
                        )}
                        {page === 4 && (
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
                            setupdateData={setupdateData}
                            setArrayConfirm={setArrayConfirm}
                            arrayConfirm={arrayConfirm}
                            newTipoReembolso={newTipoReembolso}
                            data={data}
                            setData={setData}
                          />
                        )}
                        {/*  {
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
                                                } */}
                        {page === 5 && (
                          <StepsConfirm
                            formStep1={formStep1}
                            sendData={sendData}
                            loadingModal={loadingModal}
                            data={data}
                            startDate={startDate}
                            enteFile={enteFile}
                            fileSelect={fileSelect}
                            updateData={updateData}
                            setupdateData={setupdateData}
                            phonestate={phonestate}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="button-container">
                    <div
                      style={{ display: page > 4 && "none" }}
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

export default PagePerdidaTotal;
