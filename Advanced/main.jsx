import React from 'react';
import {useState} from 'react';
import {ReactDOM} from 'react-dom';


export default async function App(props) {
    const SOURCE = `/node_modules/@types-react/`;
    var ROOT = '/'
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
}