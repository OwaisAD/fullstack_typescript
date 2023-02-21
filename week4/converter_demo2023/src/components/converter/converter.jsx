import React, {useState, useEffect} from "react"
import './converter.css'

export default (props)=>{
    const [temperature, setTemperature] = useState(0);
    const update =(event) => {
        const fahrenheit = event.target.value;
        const celcius = (fahrenheit - 32) * 5/9;
        setTemperature(celcius);
    }
    
    return(<div className="greenborder">
        <FahrenheitComponent update={update}></FahrenheitComponent>
        <CelciusComponent temperature={temperature}></CelciusComponent>
    </div>);
    
}

const FahrenheitComponent = (props)=>{
    return (<div className="redborder">
        <input type="text" onChange={props.update} placeholder="Enter temperature in fahrenheit"/>
    </div>);
}

const CelciusComponent= (props) => {
    return <div className="blueborder">Temperature in Celcius:{" "}
        {props.temperature}
    </div>
}