import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";
import PageSolicitud from "../solicitudes/PageSolicitud";
import PageCartaAval from "../solicitudes/salud/cartaaval/PageCartaAval";
import PageReembolso from "../solicitudes/salud/reembolso/PageReembolso";


function AppRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageSolicitud />} />
                    <Route path="/salud/reembolso" element={<PageReembolso />} />
                    <Route path="/salud/cartaAval" element={<PageCartaAval />} />

                </Routes>
            </BrowserRouter>


        </>
    );
}

export default AppRoute;
