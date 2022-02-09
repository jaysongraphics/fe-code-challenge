import css from '../ui/Card.module.scss';


const OtherReadings = () => {
    
    return(
        <div>
            <div className={css.root}>
                <h3>Other weight readings</h3>
                <p>Your scale is just for you. Readings that are +/- 50 lbs from your goal weight appear as irregular.</p>
    
            <br/>
            <table>
                    <tr>
                        <th>Date, Time</th>
                        <th>weight</th>
                        <th>Goal Delta</th>
                    </tr>
                <hr />
                    <tr>
                        <td>October, 31st, 11:10</td>
                        <td>56.2</td>
                        <td>7450656</td>
                    </tr>
            </table>
            </div>
        </div>
    )
}


export default OtherReadings;
