import React, { useState } from 'react';
import Select from 'react'

function Bgcolor() {
    var colors = [
        {
            value:1,
            label:"red"
        },
        {
            value:2,
            label:"blue"
        },
        {
            value:3,
            label:"green"
        },
    ];
    
    let [setBgColor, ddlvalue] = useState(colors.label);
    let ddlhandle = e =>{
        ddlvalue(e.label);
    }
    return (
        <div>
            <style>{'body {background-color}:'+setBgColor+';}'}</style>
            <Select options={colors} onChange={ddlhandle}></Select>
        </div>
    );
}

export default Bgcolor
