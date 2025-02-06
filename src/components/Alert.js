import React from "react";

export default function Alert(props) {
    function close() {
        props.seta(null)
    }
    return (
        props.alert && (
            <div
                class="alert alert-success alert-dismissible fade show mb-0"
                role="alert"
            >
                <strong>{props.alert.type}</strong>{props.alert.msg}
                <button type="button" onClick={close} class="btn-close"></button>
            </div>
        )
    );
}