import * as cal from 'calendrier-republicain';
import styles from './calendrier.module.css';

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
// function getpostfix(str)
// {
//     if()
// }
export default function Calendrier(props){
    var someDay = new Date();
    // var translatedDedication = await translate(`${cal.dayOfYearName(someDay)}`, {from:'fr', to:'en'})
    var dayNumStr = String(cal.dayOfMonth(someDay))
    
    var superscript = 'th'; 
    switch(dayNumStr.slice(-1))
    {
        case '1':
            if(dayNumStr !== '11')
            {
                superscript = 'st';
            }
            break;
        case '2':
            if(dayNumStr !== '12')
            {
                superscript = 'nd';
            }
            break;
        case '3':
            if(dayNumStr !== '13')
            {
                superscript = 'rd';
            }
            break;
        default:
            superscript = 'th';
    }
    return (
        <div className={styles.DMY}>
            {`${capitalize(cal.dayOfDecadeName(someDay))} the ${dayNumStr}${superscript} of ${capitalize(cal.monthName(someDay))},  ${cal.year(someDay)}`}
            {/* <br/>{`dedicated to the contemplation of \"${cal.dayOfYearName(someDay)}\"`} */}
            </div>
    )
}