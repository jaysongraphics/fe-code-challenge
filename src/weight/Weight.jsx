import React from 'react';
import LatestReadings from './LatestReadings';
import OtherReadings from './OtherReadings';
import Modal from './Modal';
import dateFormat from 'dateformat';
import css from '../ui/Card.module.scss';
import button from '../ui/Button.module.scss';
import { useEffect, useState } from "react";

const Weight = ({weightInfo, setWeightInfo}) => {
  const weightApi = 'http://localhost:9000/api/weights'

  // const id, datTime, value] = weightInfo
  // console.log(id);

  const [addWeight, setAddWeight] = useState(false);
  const [int, setInt] = useState(0)
  const [number, setNumber] = useState()
  const [string, setString] = useState('')
  const [boolean, setBoolean] = useState(false)
  const [latestWeight, setLatestWeight] = useState()

  const [regWeight, setregWeight] = useState('')

  const [error, setError] = useState('')

  // function removeId(id){
  //   const weightArray = weightInfo.filter(wightid => wightid.id !== id)
  //   // console.log(weightArray);
  //   return weightArray;
  // }
  
  // console.log(removeId());

  const removeWeight = (id) => {
    const t = weightInfo.filter(idWeight => idWeight.id !== id)
    fetch(`http://localhost:9000/api/weights/${id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {setWeightInfo(t)}) 
      //  setNumber('')
}

  const filterData = weightInfo.filter(weight => {
    if(Math.abs(175 - weight.value) >= 50){
  } else {
    return weight;
   }
  }
)

  const weightValue = filterData.map(weightdetail => { 
    const reg = weightdetail.isIrregular
    // if(reg === false){
      return (
        <p>{parseFloat(weightdetail.value).toFixed(1)}</p>
      )
    // } else if(reg === true){
    //     return null;
    // } 
    // return (
    //         <p>{parseFloat(weightdetail.value).toFixed(1)}</p>
    //   )
    }
  )

  const goalDelta = filterData.map(weightdetail => { 
    const reg = weightdetail.isIrregular
    const num = parseFloat(weightdetail.value).toFixed(1)
    const goal = 175
    const operation = num - goal
    const delta = parseFloat(operation).toFixed(1)
    // if(reg === false){
      return (
        <p>{delta}</p>
      )
    // } else if(reg === true){
    //     return null;
    // } 
    // return (
    //      <p>{delta}</p>
    //  )
    }
  )


  // const isRegular = weightInfo.map(goal => { 
  //   const reg = goal.isIrregular
  //   // const boolean = goal.isIrregular
  //   // console.log(boolean);
  //   if(reg === false){
  //     return (
  //       <p>{goal.isIrregular}</p>
  //     )
  //   } else if(reg === true){
  //       return null;
  //   } 
  //   // return (
  //   //         <p>{goal.isIrregular}</p>
  //   //   )
  //   }
  // )

  const dateTime = filterData.map(weightdetail =>  {
      const reg = weightdetail.isIrregular
      const d = new Date(weightdetail.dateTime);
      const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
      const finalDate = d.toLocaleDateString('en-US', options);
      // let t = new Date(weightdetail.dateTime).toLocaleTimeString();
      // console.log(d.toLocaleDateString('en-US', options) + ' ' + t);  
      // console.log(d.toLocaleDateString('en-US', options)); 
      // if(reg === false){
        return (
          <p><button onClick={()=> removeWeight(weightdetail.id)} className={button.delete}>x</button>{finalDate}</p>
        )
      // } else if(reg === true){
      //     return null;
      // } 
    //   return (
    //       <p><button onClick={removeWeight} className={button.delete}>x</button>  {finalDate}</p>
    //  )
  }
)


  const handleWdeight = () => {
      setAddWeight((addWeight)=> !addWeight)
    // console.log(addWeight)
  }

// const dateString = () => {
//   const d = new Date();
//   const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
//   const finalDate = d.toLocaleDateString('en-US', options);
//   return finalDate;
// }


// console.log(dateString());

const dateString = new Date();

    const postWeight = (e) => {
      e.preventDefault()
      if(!number){
        setError('Please enter your weight.')
      } else {
           
      fetch(weightApi,{
        method: 'POST',
        headers: {'Content-Type': 'application/json',
    },
        body: JSON.stringify({ 
            "id": int,
            "value": parseInt(number),
            "dateTime": dateString,
            "isIrregular": boolean
         }),
    })  .then(res => res.json())
        .then(data => setWeightInfo([...weightInfo, data])) 
          setNumber('')
          handleWdeight()

        // .then(data => console.log(data.error)) 
      //   .then((data) => {
      //     if(data.error) {
      //       setError(data.error);
      //       setNumber('')
      //        // .then(data => console.log(data)) 
      //     }
      //   }
      // )
     } 
    }
    


    return (
         <div>
           <div className={css.latest}>
                    <button className={button.root} onClick={handleWdeight}>+ Add Reading</button>
                    <LatestReadings 
                        weightInfo={weightInfo} 
                        int={int} 
                        boolean={boolean} 
                        number={number} 
                        setInt={setInt} 
                        setNumber={setNumber}
                        setBoolean={setBoolean}
                        postWeight={postWeight}
                        // dateString={dateString}
                        latestWeight={latestWeight}
                      />
                </div>
            <h1>Weight</h1>
            <br/>
            {addWeight && <Modal 
                  weightInfo={weightInfo} 
                  int={int} 
                  boolean={boolean} 
                  number={number} 
                  setInt={setInt} 
                  setNumber={setNumber}
                  setBoolean={setBoolean}
                  postWeight={postWeight}
                  // dateString={dateString}
                  handleWdeight={handleWdeight}
                  error={error}
                  />}
            <div className={css.root}>
                <h2>Your weight readings</h2>
                <p>These are weight readings that have been recorded for you.</p>
            <br/>
                  <table>
                    <thead>
                      <tr>
                        <th>Date, Time</th>
                        <th className={css.wspace}>Weight (lb)</th>
                        <th className={css.wgoal}>Goal Delta</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{dateTime}</td>
                        <td>{weightValue}</td>
                        <td className={css.wgoal}>{goalDelta}</td>                         
                      </tr>
                    </tbody>
                  </table>
            </div> 
            <OtherReadings 
                weightInfo={weightInfo}
                removeWeight={removeWeight}
            />
        </div>
    )
}



export default Weight;

// nvm use v17.4.0
// nvm use v12.4.0



  // const dateTime = weightInfo.map(weightdetail => { 
  //   return (
  //           <p>{dateFormat(weightdetail.dateTime, "mmmm, dS, hh:mm").toLocaleString()}</p>
  //     )
  //   }
  // )
  // const dateTime = weightInfo.map(weightdetail => { 
  //   return (
  //           <p>{dateFormat(weightdetail.dateTime, "mmm dS, hh:mm").toLocaleString()}</p>
  //     )
  //   }
  // )
  // const dateTimee = weightInfo.map(weightdetail => { 
  //   return (
  //           <p>{dateFormat(weightdetail.dateTime, "mmm dS, hh:mm")}</p>
  //     )
  //   }
  // )
  // const fdf = weightInfo.map(weightdetail => { 
  //     let d = (dateFormat(weightdetail.dateTime, "mmm dS, hh:mm:ss"))
  //     let s = new Date(weightdetail.dateTime)
  //     let t = new Date(weightdetail.dateTime).toLocaleTimeString('en-US');
  //     console.log(d);  
  //     // console.log(d + t.slice(8, 11));  
  //     console.log(s);  
  //   // return (

  //   //         <p>{dateFormat(weightdetail.dateTime, "mmm dS, hh:mm")}</p>

  //   //   )
  //   }
  // )
