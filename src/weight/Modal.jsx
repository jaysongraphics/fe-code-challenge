import css from '../ui/Card.module.scss';
import button from '../ui/Button.module.scss';
import React from "react";
import { useEffect, useState } from "react";


const Modal = ({weightInfo, int, boolean, number, setInt, setNumber, setBoolean, postWeight, dateString, handleWdeight}) => {
 
  
  // const [id, setId] = useState("")
  // const [value, setValue] = useState("")
  // const [dateTime, setDateTime] = useState("")
  // const [isIrregular, setIsIrregular] = useState("")

  // const weightObj = {
  //   'id': id,
  //   'value': value,
  //   'dateTime': dateTime,
  //   'isIrregular': isIrregular
  // }

// const postDate = () => {
//   const d = new Date();
//   const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
//   const finalDate = d.toLocaleDateString('en-US', options);
//   return finalDate;
// }

//   const addWeight = (e) => {
//     e.preventDefault()
//     fetch(weightApi, {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json',
//   },
//       body: JSON.stringify({ 
//           "id": int,
//           "value": number,
//           "dateTime": postDate(),
//           "isIrregular": boolean
//        }),
//   })  .then(res => res.json())
//       .then(data => console.log(data)) 
//   }

  
  // function removeId(id){
  //   const favArr = f.filter(f => f.id !== id)
  //   setFaves(favArr)    
  // }

//   function removeWeight(id){
//     fetch(`http://localhost:9000/api/weights/${id}`, {
//         method: 'DELETE'
//     })
//     console.log(id);
//     // removeFave(id)    
// }

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
                    <input className={css.inputtext} type="number" value={number}
                       onChange={(e) => setNumber(e.target.value)} /> 
                    <br/>
                    <br/> 
                    <button className={button.rootsave}>Save</button>
                    <button className={button.rootcancel}>Cancel</button>
                </form>
               
            </div>
        </div>
    </div>
  );
};

export default Modal;