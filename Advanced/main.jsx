import React from 'react';
import {useState} from 'react';
import {ReactDOM} from 'react-dom';
import {Config} from 'nginx-core';

export default async function App(props) {
    const SOURCE = `/node_modules/@types-react/`;
    var ROOT = '/'
    return <h1>ROOT ID - {ROOT}</h1>;
}

export class GPMod extends Error {
    constructor(src) {
        super();
        this.ROOT = src.trim();
        console.log(`ROOT Path Changed. \n`);
    }
    DISPLAY_SOURCE() {
        return this.ROOT;
    }
    EXIT_STATUS(CODE) {
        return 200;
    }
    PRINT_STATUS_CODES(){ }
}

export class MPMod extends GPMod {
    constructor () { }
    start() { return Config.NAS.start.code }
    stop() { return Config.NAS.stop.code }
    restart() { return Config.NAS.restart.code }
    details() { return NAS.statuscode || 8901 } 
    RESET() { Config.RESET || delete this; }
}

const appData = async(node, src) => {
    
}