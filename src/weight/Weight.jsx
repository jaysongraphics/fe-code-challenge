import React from 'react';
import LatestReadings from './LatestReadings';
import OtherReadings from './OtherReadings';
import Modal from './Modal';
import dateFormat from 'dateformat';
import css from '../ui/Card.module.scss';
import button from '../ui/Button.module.scss';
import { useEffect, useState } from "react";

const Weight = ({weightInfo}) => {
  const weightApi = 'http://localhost:9000/api/weights'

  const [addWeight, setAddWeight] = useState(false);

  const [int, setInt] = useState()
  const [number, setNumber] = useState()
  // const [string, setString] = useState("")
  const [boolean, setBoolean] = useState(false)
  const [latestWeight, setLatestWeight] = useState("")


  // function removeId(id){
  //   const weightArray = weightInfo.filter(wightid => wightid.id !== id)
  // }
  

  const removeWeight = (id) => {
    fetch(`http://localhost:9000/api/weights/${id}`, {
          method: 'DELETE'
      })
        // removeWeight(id)
        console.log(id);
}

  const weightValue = weightInfo.map(weightdetail => { 
    return (
            <p>{parseFloat(weightdetail.value).toFixed(1)}</p>
      )
    }
  )

  const dateTime = weightInfo.map(weightdetail =>  {
      const d = new Date(weightdetail.dateTime);
      const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
      const finalDate = d.toLocaleDateString('en-US', options);
      // let t = new Date(weightdetail.dateTime).toLocaleTimeString();
      // console.log(d.toLocaleDateString('en-US', options) + ' ' + t);  
      // console.log(d.toLocaleDateString('en-US', options));  
      return (
          <p><button onClick={removeWeight} className={button.delete}>x</button>{finalDate}</p>
     )
  }
)


const isRegular = weightInfo.map(goal => { 
  return (
          <p>{goal.isIrregular}</p>
    )
  }
)

  const handleWdeight = () => {
    setAddWeight((addWeight)=> !addWeight)
    // console.log(addWeight)
  }

  const dateString = () => {
    const d = new Date();
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const finalDate = d.toLocaleDateString('en-US', options);
    return finalDate;
  }
  
    const postWeight = (e) => {
      e.preventDefault()
      fetch(weightApi, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
    },
        body: JSON.stringify({ 
            "id": int,
            "value": number,
            "dateTime": dateString(),
            "isIrregular": boolean
         }),
    })  .then(res => res.json())
        .then(data => setLatestWeight(data)) 
         setNumber('')
        // .then(data => console.log(data)) 
    }

    return (
         <div>
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
                  dateString={dateString}
                  handleWdeight={handleWdeight}
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
                        <td className={css.wgoal}>{isRegular}</td>
                      </tr>
                    </tbody>
                  </table>
            </div> 

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
                        dateString={dateString}
                        latestWeight={latestWeight}
                      />
                </div>
            <OtherReadings />
        </div>
    )
};


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
