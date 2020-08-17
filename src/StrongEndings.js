import React from 'react';
import './StrongEndings.css'

function StrongEndings(props) {
    return (
        <div id="strong-table" className="table">
            <button onClick={() => props.state.table ? props.endingsSetter("r") : ""} className="strong-items" id="sr1-field">r</button>
            <button onClick={() => props.state.table ? props.endingsSetter("s") : ""} className="strong-items" id="ss-field">s</button>
            <button onClick={() => props.state.table ? props.endingsSetter("e") : ""} className="strong-items" id="se-field">e</button>
            <button onClick={() => props.state.table ? props.endingsSetter("n") : ""} className="strong-items" id="sn1-field">n</button>
            <button onClick={() => props.state.table ? props.endingsSetter("m") : ""} className="strong-items" id="sm-field">m</button>
            <button onClick={() => props.state.table ? props.endingsSetter("r") : ""} className="strong-items" id="sr2-field">r</button>
            <button onClick={() => props.state.table ? props.endingsSetter("n") : ""} className="strong-items" id="sn2-field">n</button>
        </div>
    );
}

export default StrongEndings

