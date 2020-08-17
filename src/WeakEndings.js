import React from 'react';
import './WeakEndings.css'

function WeakEndings(props) {
    return (
        <div id="weak-table">
            <button onClick={() => props.state.table ? props.endingsSetter("e") : ""} className="weak-items we" id="we1-field"></button>
            <button onClick={() => props.state.table ? props.endingsSetter("e") : ""} className="weak-items we" id="we2-field">e</button>
            <button onClick={() => props.state.table ? props.endingsSetter("n") : ""} className="weak-items wn" id="wn1-field"></button>
            <button onClick={() => props.state.table ? props.endingsSetter("n") : ""} className="weak-items wn" id="wn2-field">n</button>
            <button onClick={() => props.state.table ? props.endingsSetter("n") : ""} className="weak-items wn" id="wn3-field"></button>
        </div>
    );
}

export default WeakEndings