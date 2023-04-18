import {useEffect, useState} from "react";
import axios from "axios";
import {TextField} from "@mui/material";
import DatePickerJs from "./DatePcker";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import React from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";


function generateRandom() {
    let length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    let i = 0, n = charset.length;
    for (; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

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
                .post('http://localhost:8080/api/watchlists', {
                    // Data to be sent to the server
                    'court_name': courtName,
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
                    alert("Watchlist Created successfully!");
                })
                .catch(function (error) {
                    console.error(error);
                    alert("Error happened");
                });


    }, [isReady, courtName, firstName, middleName, lastName, dateOfBirth, courtNumber, creationUser,modificationUser,passportNumber, watchlistAction]);

    const [listAllWatchlist, setListAllWatchlist] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8080/api/watchlists`)
            .then((response) => setListAllWatchlist(response.data))
            .catch((error) => console.log(error));

    }, []);


    const columns: GridColDef[] = [

        {field: 'watchlist_id', headerName: 'ID', width: 30, sortable: false,},
        {field: 'court_name', headerName: 'Court Name', width: 150, sortable: false,},
        {field: 'court_number', headerName: 'Court Number', width: 150},
        {field: 'watchlist_action', headerName: 'Action To Take', width: 150},
        {field: 'watchlist_status', headerName: 'Status', width: 80},
        {field: 'creation_date', headerName: 'Date created', width: 230},
        {field: 'first_name', headerName: 'First Name', width: 150},
        {field: 'middle_name', headerName: 'Middle Name', width: 150},
        {field: 'last_name', headerName: 'Last Name', width: 150},
        {field: 'date_of_birth', headerName: 'Birth Date', width: 150},
        {field: 'passport_number', headerName: 'Passport Number', width: 150},

        //{field: 'modification_date', headerName: 'Date Modified', width: 150},
       // {field: 'creation_user', headerName: 'Creation User', width: 150},
       // {field: 'modification_user', headerName: 'Modification User', width: 150},


    ];

    return (
        <div >

            <p> Please fill the bellow form to insert Watchlist. </p>

            <TextField  label="Court Name" variant="outlined" value={courtName} required={true}  onChange={(e) => setCourtName(e.target.value)}/> &nbsp;&nbsp;
            <TextField  label="First Name" variant="outlined" value={firstName} required={true}  onChange={(e) => setFirstName(e.target.value)}/> &nbsp;&nbsp;
             <TextField  label="Middle Name" variant="outlined" value={middleName} required={true} onChange={(e) => setMiddleName(e.target.value)} /> &nbsp;&nbsp;
             <TextField  label="Last Name" variant="outlined" value={lastName} required={true} onChange={(e) => setLastName(e.target.value)} />&nbsp;&nbsp;
             <TextField label="Court Number" variant="outlined" value={courtNumber} required={true} onChange={(e) => setCourtNumber(e.target.value)} /> &nbsp;&nbsp;
             <TextField label="Creation User" variant="outlined" value={creationUser} required={true} onChange={(e) => setCreationUser(e.target.value)} /> &nbsp;&nbsp;
            <TextField label="Modification User" variant="outlined" value={modificationUser} required={true} onChange={(e) => setModificationUser(e.target.value)} /> &nbsp;&nbsp;
            <TextField  label="Passport Number" variant="outlined" value={passportNumber} required={true} onChange={(e) => setPassportNumber(e.target.value)} /> &nbsp;&nbsp;
            <TextField label="Watchlist Action" variant="outlined" value={watchlistAction} required={true} onChange={(e) => setWatchlistAction(e.target.value)} /> &nbsp;&nbsp;
            <DatePickerJs label="Date of Birth"  defaultValue={dayjs('2022-04-17')} value={dateOfBirth} required={true} onChange={(e) => setDateOfBirth(e.target.value)}/> &nbsp;&nbsp;


            <div align={'center'} style={{marginTop: '20px'}}> <Button variant="contained" onClick={() => setIsReady(true)}>Create Watchlist</Button> </div>


            <div style={{height: 400, width: '100%', marginTop: '30px'}}>
                <DataGrid
                    columns={columns}
                    rows={listAllWatchlist}
                    pageSize={1}
                    rowsPerPageOptions={[1]}
                    checkboxSelection
                    getRowId={(row: any) =>  generateRandom()}

                />

        </div>

        </div>



);
}

//export default ListWatchlist;
export default CreateWatchlist;


