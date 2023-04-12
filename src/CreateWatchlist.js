import {useEffect, useState} from "react";
import axios from "axios";
import {TextField} from "@mui/material";
import DatePickerJs from "./DatePcker";
import dayjs from "dayjs";
import Button from "@mui/material/Button";

const CreateWatchlist = () => {

    const [courtName, setCourtName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('1980-03-03')
    const [courtNumber, setCourtNumber] = useState('')
    const [creationUser, setCreationUser] = useState('')
    const [modificationUser, setModificationUser] = useState('')
    const [passportNumber, setPassportNumber] = useState('')
    const [watchlistAction, setWatchlistAction] = useState('')


    const [isReady, setIsReady] = useState(false)

    useEffect( () => {

        if (isReady === true)

            axios
                .post('http://localhost:8080/api/watchlist', {
                    // Data to be sent to the server
                    'Court Name': courtName,
                    'first_name': firstName,
                    'middle_name': middleName,
                    'last_name': lastName,
                    'date_of_birth': dateOfBirth,
                    'court_number': courtNumber,
                    'creation_user': creationUser,
                    'modification_user': modificationUser,
                    'passport_number': passportNumber,
                    'watchlist_action': watchlistAction,



                })
                .then(response => {
                    console.log(response.data);
                    alert("Request Created successfully!");
                })
                .catch(function (error) {
                    console.error(error);
                    alert("Error happened");
                });


    }, [isReady, courtName, firstName, middleName, lastName, dateOfBirth, courtNumber, creationUser,modificationUser,passportNumber, watchlistAction]);



    return  <div >

            <p> Please fill the bellow form to insert Watchlist. </p>

            <div> <TextField  label="Court Name" variant="standard" value={courtName} required={true}  onChange={(e) => setCourtName(e.target.value)}/> </div>
            <div> <TextField  label="First Name" variant="standard" value={firstName} required={true}  onChange={(e) => setFirstName(e.target.value)}/> </div>
            <div> <TextField  label="Middle Name" variant="standard" value={middleName} required={true} onChange={(e) => setMiddleName(e.target.value)} /> </div>
            <div> <TextField  label="Last Name" variant="standard" value={lastName} required={true} onChange={(e) => setLastName(e.target.value)} /> </div>
            <div> <DatePickerJs label="Date of Birth"  defaultValue={dayjs('2022-04-17')} value={dateOfBirth} required={true} onChange={(e) => setDateOfBirth(e.target.value)}/> </div>
            <div> <TextField label="Court Number" variant="standard" value={courtNumber} required={true} onChange={(e) => setCourtNumber(e.target.value)} /> </div>
            <div> <TextField label="Creation User" variant="standard" value={creationUser} required={true} onChange={(e) => setCreationUser(e.target.value)} /> </div>
            <div> <TextField label="Modification User" variant="standard" value={modificationUser} required={true} onChange={(e) => setModificationUser(e.target.value)} /> </div>
            <div> <TextField  label="Passport Number" variant="standard" value={passportNumber} required={true} onChange={(e) => setPassportNumber(e.target.value)} /> </div>
            <div> <TextField label="Watchlist Action" variant="standard" value={watchlistAction} required={true} onChange={(e) => setWatchlistAction(e.target.value)} /> </div>

            <div style={{marginTop: '20px'}}> <Button variant="contained" onClick={() => setIsReady(true)}>Create Watchlist</Button> </div>

        </div>

}

export default CreateWatchlist;