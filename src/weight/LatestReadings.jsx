import css from '../ui/Card.module.scss';


const LatestReadings = ({weightInfo}) => {
       

    if(weightInfo.length === 0){
    return <></>
    }

    const latestWeightData = weightInfo[weightInfo.length -1]
    const d = new Date(latestWeightData.dateTime);
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const finalDate = d.toLocaleDateString('en-US', options);
    const weightLb = parseFloat(latestWeightData.value).toFixed(1)
    const isRegular = <p>{`${weightLb} lb on ${finalDate}`}</p>

    return(
        <div>
             <h3>Latest Readings</h3>
                {isRegular}
            <br/>
             <h3>Your Goal</h3>
             <p>175 lb</p>
        </div>
    )
}


export default LatestReadings;
