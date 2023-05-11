import {useEffect, useState} from "react";
import axios from 'axios';
import Launch from "../launch/Launch";

const Launches = () => {

    let [launches, setLaunches] = useState([]);
    useEffect( () => {
        axios('https://api.spacexdata.com/v3/launches')
            .then(value => value.data)
            .then(launches => {const filtered = launches.filter(item => item.launch_year!="2020");
            setLaunches(filtered)
            })
    }, []);

    return (
        <div>
            {launches.map((value, index) => <Launch launch = {value} key = {index}/>)}
        </div>
    );
};

export default Launches;
