import css from '../ui/Card.module.scss';
import button from '../ui/Button.module.scss';
import React from "react";


const Modal = ({number, setNumber, postWeight, handleWdeight, error}) => {

  return (
    <div>
        <div className={css.modalcontainer}></div>
  
        <div className={css.modal}>
            <h2>Add Weight Log</h2>
            <p>You can manually add your weight log using the form below.</p>
            <br/>
            <div>
                <form onSubmit={postWeight}>
                    <h5>Weight</h5>
                    <input style={{borderColor: error ? 'red' : 'black'}} className={css.inputtext} value={number}
                       onChange={(e) => setNumber(e.target.value)}/> 
                    <br/>
                    <br/> 
                    <button className={button.rootsave}>Save</button>
                </form>
                 <button onClick={handleWdeight} className={button.rootcancel}>Cancel</button>
                 <p style={{color:'red'}}>{error}</p>
            </div>
        </div>
    </div>
  );
};

export default Modal;