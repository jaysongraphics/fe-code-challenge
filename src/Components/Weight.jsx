import React from 'react';
import LatestReadings from './LatestReadings';
import OtherReadings from './OtherReadings';
import Modal from './Modal';
import css from '../ui/Card.module.scss';
import button from '../ui/Button.module.scss';
import { useState } from "react";

const Weight = ({weightInfo, setWeightInfo}) => {
    const weightApi = 'http://localhost:9000/api/weights'
    const [addWeight, setAddWeight] = useState();
    const [int, setInt] = useState(0)
    const [number, setNumber] = useState()
    const [boolean, setBoolean] = useState(false)
    const [error, setError] = useState('')

  const removeWeight = (id) => {
    const dataId = weightInfo.filter(idWeight => idWeight.id !== id)
    fetch(`http://localhost:9000/api/weights/${id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          setWeightInfo(dataId)
        }
      ) 
    }

  const filterData = weightInfo.filter(weight => {
    if(Math.abs(175 - weight.value) >= 50){
    } else {
        return weight;
    }
  }
)

  const weightValue = filterData.map(weightdetail => { 
      return (
        <p>{parseFloat(weightdetail.value).toFixed(1)}</p>
      )
    }
  )

  const goalDelta = filterData.map(weightdetail => { 
    const num = parseFloat(weightdetail.value).toFixed(1)
    const goal = 175
    const operation = num - goal
    const delta = parseFloat(operation).toFixed(1)
      return (
        <p>{delta}</p>
      )
    }
  )

  const dateTime = filterData.map(weightdetail =>  {
      const d = new Date(weightdetail.dateTime);
      const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
      const finalDate = d.toLocaleDateString('en-US', options);

      return (
          <p><button onClick={()=> removeWeight(weightdetail.id)} className={button.delete}>x</button>{finalDate}</p>
        )
      }
    )

  const handleWdeight = () => {
      setAddWeight((addWeight)=> !addWeight)
  }

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
      } 
    }
    
    return (
         <div>
           <div className={css.latest}>
                    <button className={button.root} onClick={handleWdeight}>+ Add Reading</button>
                    <LatestReadings 
                        weightInfo={weightInfo}
                      />
                </div>
            <h1>Weight</h1>
            <br/>
           
            {addWeight && <Modal 
                  number={number} 
                  setNumber={setNumber}
                  postWeight={postWeight}
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

// nvm use v12.4.0

export default Weight;

