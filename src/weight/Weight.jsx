import React from 'react';
import LatestReadings from './LatestReadings';
import dateFormat from 'dateformat';
// import Button from '../ui/Button';
import css from '../ui/Card.module.scss';
import table from '../ui/table.scss';

const Weight = ({weightInfo}) => {
    // const [dateTime, id, isIrregular, value] = weightInfo

    //  console.log(weightInfo);
    //  console.log(id);

  

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

  const dateTime = weightInfo.map(weightdetail => { 
    return (
            <p>{dateFormat(weightdetail.dateTime, "mmmm, dS, hh:mm")}</p>
      )
    }
  )

//   A'} ticking={true} timezone={'US/Pacific'}

//   const isIrregular = weightInfo.map(weightdetail => { 
//     return (
//             <ul>{weightdetail.isIrregular}</ul>
//       )
//     }
//   )

    return (
         <div>
            <h1>Weight</h1>
            <br />

            <div className={css.root}>
                <h3>Your weight readings</h3>
                <p>These are weight readings that have been recorded for you.</p>
            <br/>

            <table>
                    <tr>
                        <th>Date, Time</th>
                        <th>weight</th>
                        <th>Goal Delta</th>
                    </tr>
                <hr />
                    <tr>
                        <td>{dateTime}</td>
                        <td>{weightValue}</td>
                        <td>{weightId}</td>
                    </tr>
            </table>
            </div> 
            <LatestReadings />
        </div>
    )
};


export default Weight;