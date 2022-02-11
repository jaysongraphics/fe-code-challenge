import css from '../ui/Card.module.scss';


const OtherReadings = () => {
    
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
                            <td>May 17, 11:10 AM</td>
                            <td>56.2</td>
                            <td className={css.wgoal}>-118.8</td>
                        </tr>
                        <tr>
                            <td>Jun 25, 08:00 PM</td>
                            <td>77.9</td>
                            <td className={css.wgoal}>-97.1</td>
                        </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    )
}


export default OtherReadings;
