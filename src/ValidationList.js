import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import axios from "axios";
import {GridColDef} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
//import {API_BASE_URL} from "./constants";


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

function ListValidation() {

    const [allValidation, setAllValidation] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8080/api/request/validation`)
            .then((response) => setAllValidation(response.data))
            .catch((error) => console.log(error));

    }, []);

    const columns: GridColDef[] = [

        {field: 'request_id', headerName: 'Request ID', width: 100, sortable: false,},
        //{field: 'watchlist_id', headerName: 'Watchlist ID', width: 100, sortable: false,},
        {field: 'first_name', headerName: 'First Name', width: 150},
        {field: 'middle_name', headerName: 'Middle Name', width: 150},
        {field: 'last_name', headerName: 'Last Name', width: 150},
        {field: 'date_of_birth', headerName: 'Birth Date', width: 150},
        {field: 'passport_number', headerName: 'Passport Number', width: 150},
        {field: 'email_address', headerName: 'Email', width: 200},
        {field: 'payment', headerName: 'Payment', width: 150},
        {field: 'watchlist', headerName: 'Watchlist', width: 150}

    ];

    return (

        <div style={{height: 400, width: '100%', marginTop: '30px'}}>
            <DataGrid
                columns={columns}
                rows={allValidation}
                pageSize={1}
                rowsPerPageOptions={[1]}
                checkboxSelection
                getRowId={(row: any) =>  generateRandom()}
                          />

            <div align={'center'} style={{marginTop: '20px',}}>
             <Button variant="contained" onClick={() => (true)}>Approve</Button> &nbsp;&nbsp;&nbsp;
             <Button variant="contained" onClick={() => (true)}>Reject</Button> </div>


        </div>




    );



}

export default ListValidation;