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
    start() { return Config.NAS.code }
    stop() { return Config.NAS.stop.code }
}