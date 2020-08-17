import React from 'react';
import './EinEndings.css'

function EinEndings(props) {
    return (
        <div id="ein-table">
            <button onClick={() => props.state.table ? props.endingsSetter("no ending") : ""} className="ein-items ee" id="O1-field">No Ending</button>
            <button onClick={() => props.state.table ? props.endingsSetter("no ending") : ""} className="ein-items ee" id="O2-field"></button>
            <button onClick={() => props.state.table ? props.tableSetter("strong") : ""} className="ein-items en" id="S1-field"></button>
            <button onClick={() => props.state.table ? props.tableSetter("strong") : ""} className="ein-items en" id="S2-field"></button>
            <button onClick={() => props.state.table ? props.tableSetter("strong") : ""} className="ein-items en" id="S3-field">Strong Ending</button>
        </div>
    );
}

export default EinEndings