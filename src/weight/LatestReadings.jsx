import css from '../ui/Card.module.scss';


const LatestReadings = ({weightInfo, int, boolean, number, setInt, setNumber, setBoolean, postWeight, dateString, latestWeight}) => {
   
    // const {dateTime, id, isIrregular, value} = latestWeight

    // const {dateTime, id, isIrregular, value} = weightInfo

    // console.log(`${value} lb on ${dateTime}`);
    // console.log(weightInfo);

    const isRegular = weightInfo.map(latest => { 
        const d = new Date();
        const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        const finalDate = d.toLocaleDateString('en-US', options);
        return (
                <p>{`${latest.value} lb on ${finalDate.last}`}</p>
          )
        }
      )

    return(
        <div>
             <h3>Latest Readings</h3>
                {/* <p>{`${value} lb on ${dateTime}`}</p> */}
                {/* <p>{isRegular}</p> */}

            <br/>
             <h3>Your Goal</h3>
             <p>175 lb</p>
        </div>
    )
}


export default LatestReadings;
