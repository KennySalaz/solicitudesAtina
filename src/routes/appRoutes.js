import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";
import PageSolicitud from "../solicitudes/PageSolicitud";
import PageCartaAval from "../solicitudes/salud/cartaaval/PageCartaAval";
import PageReembolso from "../solicitudes/salud/reembolso/PageReembolso";
import PagePerdidaTotal from "../solicitudes/vehiculos/perdidatotal/PagePerdidaTotal";
import PageParcial from "../solicitudes/vehiculos/reparacionparcial/PageParcial";
/* import PageVehiculos from "../solicitudes/vehiculos/PageVehiculos"; */


function AppRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageSolicitud />} />
                    <Route path="/salud/reembolso" element={<PageReembolso />} />
                    <Route path="/salud/cartaAval" element={<PageCartaAval />} />
                    <Route path="/vehiculos/reparacion" element={<PageParcial />} />
                    <Route path="/vehiculos/perdidatotal" element={<PagePerdidaTotal />} />

                </Routes>
            </BrowserRouter>


        </>
    );
}

export default AppRoute;
