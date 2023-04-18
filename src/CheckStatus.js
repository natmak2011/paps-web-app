import {useEffect, useState} from "react";
import axios from "axios";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import React  from 'react';

const CheckStatus = () => {

    const [passportNumber, setPassportNumber] = useState('')

    const [isReady, setIsReady] = useState(false)

    useEffect( () => {

        if (isReady === true)

            axios
                .post('http://localhost:8080/api/request/status', {

                    'passport_number': passportNumber,


                })
                .then(response => {
                    console.log(response.data);
                    alert("Your Passport Request Status is successfully!");
                })
                .catch(function (error) {
                    console.error(error);
                    alert("Error happened");
                });


    }, [isReady, passportNumber]);



    return <div >

        <p> Please fill the bellow form to Check Your Passport Request Status. </p>

        <div> <TextField  label="Passport Number" variant="outlined" value={passportNumber} required={true} onChange={(e) => setPassportNumber(e.target.value)} /> </div>

        <div style={{marginTop: '20px'}}>  <Button variant="contained" onClick={() => setIsReady(true)}>Check Status</Button> </div>
    </div>;
}


export default CheckStatus;