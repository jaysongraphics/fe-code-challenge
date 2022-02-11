import React from 'react';
import LatestReadings from './LatestReadings';
import OtherReadings from './OtherReadings';
import Modal from './Modal';
import dateFormat from 'dateformat';
import css from '../ui/Card.module.scss';
import button from '../ui/Button.module.scss';
import { useEffect, useState } from "react";

const Weight = ({weightInfo}) => {
    // const [dateTime, id, isIrregular, value] = weightInfo
    //  console.log(weightInfo);
    //  console.log(id);

const [addWeight, setAddWeight] = useState(false);

const weightId = weightInfo.map(weightdetail => { 
    return (
            <p>{weightdetail.id}</p>
      )
    }
  )
  const weightValue = weightInfo.map(weightdetail => { 
    return (
            <p>{parseFloat(weightdetail.value).toFixed(1)}</p>
      )
    }
  )
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

  const dateTime = weightInfo.map(weightdetail =>  {
      const d = new Date(weightdetail.dateTime);
      const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
      const finalDate = d.toLocaleDateString('en-US', options);
      // let t = new Date(weightdetail.dateTime).toLocaleTimeString();
      // console.log(d.toLocaleDateString('en-US', options) + ' ' + t);  
      // console.log(d.toLocaleDateString('en-US', options));  
      return (
          <p>{finalDate}</p>
      )
  }
)

  const handleWdeight = () => {
    setAddWeight((addWeight)=> !addWeight)
    console.log(addWeight)
  }

  //isIrregular- true or false 

    return (
         <div>
            <h1>Weight</h1>
            <br />

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
                        <td className={css.wgoal}>{weightId}</td>
                      </tr>
                    </tbody>
                  </table>
            </div> 

            {/* <Modal /> */}
              <button className={button.root} 
              onClick={handleWdeight}>+ Add Reading</button>
            <LatestReadings />
            <OtherReadings 
                    />
        </div>
    )
};


export default Weight;