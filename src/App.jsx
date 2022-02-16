import { useEffect, useState } from "react";
import React from 'react';

import {Suspense} from 'react';
import logo from './logo.svg';
import css from './App.module.scss';
import Weight from './weight/Weight';
import LatestReadings from './weight/LatestReadings';
import OtherReadings from './weight/OtherReadings';
import Card from "./ui/Card";
import Button from "./ui/Button";


function App() {

    const api = 'http://localhost:9000/api/weights'
    const [weightInfo, setWeightInfo] = useState([])

    useEffect(()=> {
        fetch(api)
        .then (res => res.json())
        .then (weigthData => setWeightInfo(weigthData))
      }, [])

    return (
        <div>
            <header className={css.header}>
                <img className={css.logo} src={logo} alt="Livongo logo" />
            </header>
         
            <div role="main" className={css.content}>
                <Suspense fallback={<div>Loading weight data...</div>}>
                    <Weight 
                         weightInfo={weightInfo}
                         setWeightInfo={setWeightInfo}
                    />
                </Suspense>
            </div>
            <footer className={css.footer}>
                <small>
                    {new Date().getFullYear()} &copy; Livongo. All rights
                    reserved.
                </small>
            </footer>
        </div>
    );
}

export default App;
