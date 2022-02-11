import React from "react";

const Modal = () => {
  return (
    <div >
        <h2>Add Weight Log</h2>
        <p>You can manually add your weight log using the form below.</p>

        <div>
            <form>
                <h4>Weight</h4>
                <input className='text' placeholder='add your latest weight'/> 
                <button>Cancel</button>
                <button>Save</button>
            </form>
        </div>
    </div>
  );
};

export default Modal;