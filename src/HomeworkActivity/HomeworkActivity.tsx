import { useEffect, useState } from "react";

export default function Activity(): JSX.Element{
    const[info, setInfo] = useState({
        "activity": '',
        "type": '',
        "participants": '',
        "price": '',
        "link": '',
        "key": '',
        "accessibility": ''
    });
    const serviceUrl:string='https://www.boredapi.com/api/activity';

    function setData():void {
        fetch(serviceUrl)
        .then((result:Response) => result.json())
        .then((resultObj)=>{
           setInfo(resultObj)
        }
        ) 
    } 

    useEffect(()=>{setData()},[]);


    return(
        <div>
            <h1>Data from server</h1>
            <p>Activity: {info.activity}</p>
            <p>Type: {info.type}</p>
            <p>Participants: {info.participants}</p>
            <p>Price: {info.price}</p>
            <p>Link: {info.link}</p>
            <p>Key: {info.key}</p>
            <p>Accessibility: {info.accessibility}</p>
        </div>
    );
}
