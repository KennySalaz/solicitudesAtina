import React, { useState, useEffect } from 'react'
import '../css/Modals.css'
import Loading from './Loading';

const stopProp = (e) => {
    e.stopPropagation();
};

const LoginOverlay = ({ removeOverlay }) => {
    return (
        <div className="overlay_background__" >
            <div className="overlay_card__" >

                <Loading />

            </div>
        </div>
    );
};

const Modal = ({ loadingModal }) => {
    const [overlay, setOverlay] = useState(false);

    return (
        <div className="flex_column__">
            <div className={loadingModal ? "overlay_shown___" : "overlay_hidden___"}>
                <LoginOverlay removeOverlay={() => setOverlay(false)} />
            </div>
        </div>
    );
};

export default Modal
