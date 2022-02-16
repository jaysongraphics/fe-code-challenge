import css from '../ui/Card.module.scss';
import button from '../ui/Button.module.scss';

const OtherReadings = ({weightInfo, removeWeight}) => {

    const filterData = weightInfo.filter(weight => {
      if(Math.abs(175 - weight.value) >= 50){
          return weight;
       } 
      }
    )

    const isRegularWeight = filterData.map(regWeight => {
      const isregweight = parseFloat(regWeight.value).toFixed(1)
        return (
              <p>{isregweight}</p>
          )
        }
      )

  const isRegularDate = filterData.map(regDate => {
    const d = new Date(regDate.dateTime);
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const finalDate = d.toLocaleDateString('en-US', options);
    return (
        <p>
          <button onClick={()=> removeWeight(regDate.id)} className={button.delete}>x</button>{finalDate}
        </p>
     )
    }
  )

  const isRegularGoal = filterData.map(regGoal => {
    const num = parseFloat(regGoal.value).toFixed(1)
    const goal = 175
    const operation = num - goal
    const delta = parseFloat(operation).toFixed(1)
     return (
        <p>{delta}</p>
     )
    }
  )
   
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
                    </tbody>
              </table>
            </div>
        </div>
    )
}


export default OtherReadings;
