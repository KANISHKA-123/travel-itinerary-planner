import './TripPlanner.css';
import User from './User';
function TripPlanner() {
    const hello = ()=>{
        alert("Hello")
    }
    return (
        <div>
        <h1 className="h1">testing</h1>
        <h2>testing</h2>
        <User name="Kanishka" education="BCA"/>
        <button onClick={hello}>say hello</button>
        </div>
    )
}
export default TripPlanner;