import { useEffect, useState } from "react";
import React from 'react';
import {Suspense} from 'react';
import logo from './logo.svg';
import css from './App.module.scss';
import Weight from './Components/Weight';

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
                    {new Date().getFullYear()} &copy; Livongo. All rights reserved.
                </small>
            </footer>
        </div>
    );
}

export default App;
