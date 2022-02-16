import css from '../ui/Card.module.scss';
import button from '../ui/Button.module.scss';


const OtherReadings = ({weightInfo, removeWeight}) => {

const filterData = weightInfo.filter(weight => {if(Math.abs(175 - weight.value) >= 50){
    return weight;
  } 
 }
)


const isRegularWeight = filterData.map(regWeight => {
    const reg = regWeight.isIrregular
    const isregweight = parseFloat(regWeight.value).toFixed(1)
    //  if(reg === true){
    //     return (
    //         <p>{isregweight}</p>
    //    )
    //   }
    return (
              <p>{isregweight}</p>
          )
    }
  )

  const isRegularDate = filterData.map(regDate => {
    const reg = regDate.isIrregular
    const d = new Date(regDate.dateTime);
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const finalDate = d.toLocaleDateString('en-US', options);
    //  if(reg === true){
    //     return (
    //         <p>{finalDate}</p>
    //     )
    //   } 
    return (
        <p><button onClick={()=> removeWeight(regDate.id)} className={button.delete}>x</button>{finalDate}</p>
     )
    }
  )

  const isRegularGoal = filterData.map(regGoal => {
    const reg = regGoal.isIrregular
    const date = regGoal.dateTime
    const num = parseFloat(regGoal.value).toFixed(1)
    const goal = 175
    const operation = num - goal
    const delta = parseFloat(operation).toFixed(1)
    //  if(reg === true){
    //     return (
    //         <p>{delta}</p>
    //     )
    //   }

    return (
        <p>{delta}</p>
    )
    }
  )


//   console.log(isRegular);
//   console.log(dateTime);
           
    return(
        <div>
            <div className={css.root}>
                <h2 className={css.other}>Other weight readings</h2>
                <p>Your scale is just for you. Readings that are +/- 50 lbs from your goal weight appear as irregular.</p>
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
                            <td>{isRegularDate}</td>
                            <td>{isRegularWeight}</td>
                            <td className={css.wgoal}>{isRegularGoal}</td> 
                        </tr>
                        {/* <tr>
                            <td>Jun 25, 08:00 PM</td>
                            <td>77.9</td>
                            <td className={css.wgoal}>-97.1</td> */}
                               {/* <td> */}
                               {/* {isRegular} */}
                                {/* </td>  */}
                               {/* {dateTime} */}
                        {/* </tr> */}
                    </tbody>
                  </table>
            </div>
        </div>
    )
}


export default OtherReadings;
