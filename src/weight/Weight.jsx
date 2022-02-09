import React from 'react';
// import { useEffect, useState } from "react";
// import weightDetails from './weightDetails'
import dateFormat from 'dateformat';


const Weight = ({weightInfo}) => {
    // const [dateTime, id, isIrregular, value] = weightInfo

    //  console.log(weightInfo);
    //  console.log(id);

const weightId = weightInfo.map(weightdetail => { 
    return (
            <ul>{weightdetail.id}</ul>
      )
    }
  )


  const weightValue = weightInfo.map(weightdetail => { 
    return (
            <ul>{parseFloat(weightdetail.value).toFixed(1)}</ul>
      )
    }
  )

  const dateTime = weightInfo.map(weightdetail => { 
    return (
            <ul>{dateFormat(weightdetail.dateTime, "mmmm, dS, hh:mm")}</ul>
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
            <div>
                <h3>Your weight readings</h3>
                <p>These are weight readings that have been recorded for you.</p>
            </div>
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
    )
};






export default Weight;


// <table className="table">
// <tbody>
//     <tr>
//         <th> 
//             <h5 className="date">Date, Time</h5>
//             <hr/>
//                 <tr>
//                     <li>{weightInfo.dateTime}</li>
//                 </tr>
//         </th>
//         <th>
//             <h5 className="weight">Weigth (lb)</h5>
//             <hr/>
//                 <tr>
//                     <li>{weightInfo.dateTime}</li>
//                 </tr>
//         </th>
//         <th>
//             <h5 className="goal">Goal Delta</h5>
//             <hr/>
//                 <tr>
//                     <li>{weightInfo.dateTime}</li>
//                 </tr>
//         </th>
//         <hr/>
//     </tr> 
//         {/* {weightList} */}
// </tbody>
// </table>
