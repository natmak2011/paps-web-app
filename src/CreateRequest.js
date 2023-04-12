import {useEffect, useState} from "react";
import axios from "axios";
import {TextField} from "@mui/material";
import DatePickerJs from "./DatePcker";
import dayjs from "dayjs";
import Button from "@mui/material/Button";

const CreateRequest = () => {


    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('1980-03-03')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [passportNumber, setPassportNumber] = useState('')

    const [isReady, setIsReady] = useState(false)

    useEffect( () => {

        if (isReady === true)

            axios
                .post('http://localhost:8080/api/request', {
                    // Data to be sent to the server
                    'first_name': firstName,
                    'middle_name': middleName,
                    'last_name': lastName,
                    'date_of_birth': dateOfBirth,
                    'phone_number': phoneNumber,
                    'email_address': email,
                    'passport_number': passportNumber,


                })
                .then(response => {
                    console.log(response.data);
                    alert("Request Created successfully!");
                })
                .catch(function (error) {
                    console.error(error);
                    alert("Error happened ${error}");
                });


    }, [isReady, firstName, middleName, lastName, dateOfBirth, phoneNumber, email,passportNumber]);



    return (
        <div >

            <p> Please fill the bellow form to request for replacement passport. </p>

            <div> <TextField  label="First Name" variant="standard" value={firstName} required={true}  onChange={(e) => setFirstName(e.target.value)}/> </div>
            <div> <TextField  label="Middle Name" variant="standard" value={middleName} required={true} onChange={(e) => setMiddleName(e.target.value)} /> </div>
            <div> <TextField  label="Last Name" variant="standard" value={lastName} required={true} onChange={(e) => setLastName(e.target.value)} /> </div>
            <div> <DatePickerJs label="Date of Birth"  defaultValue={dayjs('2022-04-17')} value={dateOfBirth} required={true} onChange={(e) => setDateOfBirth(e.target.value)}/> </div>
            <div> <TextField label="Phone Number" variant="standard" value={phoneNumber} required={true} onChange={(e) => setPhoneNumber(e.target.value)} /> </div>
            <div> <TextField label="Email" variant="standard" value={email} required={true} onChange={(e) => setEmail(e.target.value)} /> </div>
            <div> <TextField  label="Passport Number" variant="standard" value={passportNumber} required={true} onChange={(e) => setPassportNumber(e.target.value)} /> </div>

            <div style={{marginTop: '20px'}}> <Button variant="contained" onClick={() => setIsReady(true)}>Create Request</Button> </div>

        </div>
    );
}

export default CreateRequest;