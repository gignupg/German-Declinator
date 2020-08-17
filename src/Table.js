import React from 'react';
import './Table.css';
import StrongEndings from './StrongEndings'
import EinEndings from './EinEndings'
import WeakEndings from './WeakEndings'

function Table(props) {
    return (
        <div>
        {props.state.table && <h1 id="heading-strong">Choose a{props.state.table === "ein" ? "n" : " " + props.state.table} ending</h1>}
            <div id="middle-box" style={props.transform}>
                <div id="entire-table">
                    <div id="header">
                        <div className="header-item" id="mas">Mas</div>
                        <div className="header-item" id="neu">Neu</div>
                        <div className="header-item" id="fem">Fem</div>
                        <div className="header-item" id="pl">Pl</div>
                    </div>
                    <div id="sidebar">
                        <div className="sidebar">Nom</div>
                        <div className="sidebar">Acc</div>
                        <div className="sidebar">Dat</div>
                    </div>
                    {(props.state.table === "strong" || props.tableSwitch === "strong") && <StrongEndings state={props.state} endingsSetter={props.endingsSetter}/>}
                    {(props.state.table === "weak" || props.tableSwitch === "weak") && <WeakEndings state={props.state} endingsSetter={props.endingsSetter}/>}
                    {(props.state.table === "ein" || props.tableSwitch === "ein") && <EinEndings state={props.state} tableSetter={props.tableSetter} endingsSetter={props.endingsSetter}/>}
                </div>
            </div>   
        </div>
    );
}

export default Table;
