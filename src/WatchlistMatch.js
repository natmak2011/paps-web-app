import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import axios from "axios";
import {GridColDef} from "@mui/x-data-grid";
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

function ListWatchlistMatch() {

    const [allWatchlist, setAllWatchlist] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8080/api/watchlist/matches`)
            .then((response) => setAllWatchlist(response.data))
            .catch((error) => console.log(error));

    }, []);

    const columns: GridColDef[] = [
        {field: 'request_id', headerName: 'Request ID', width: 100, sortable: false,},
        {field: 'watchlist_id', headerName: 'Watchlist ID', width: 100, sortable: false,},
        {field: 'applicant_fn', headerName: 'Applicant F_name', width: 150},
        {field: 'applicant_mn', headerName: 'Applicant M_name', width: 150},
        {field: 'applicant_ln', headerName: 'Applicant L_name', width: 150},
        {field: 'candidate_fn', headerName: 'Candidate F_name', width: 150},
        {field: 'candidate_mn', headerName: 'Candidate M_name', width: 150},
        {field: 'candidate_ln', headerName: 'Candidate L_name', width: 150},

    ];

    return (
        <div style={{height: 400, width: '100%', marginTop: '30px'}}>
            <DataGrid
                columns={columns}
                rows={allWatchlist}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                getRowId={(row: any) =>  generateRandom()}

            />
        </div>
    );
}

export default ListWatchlistMatch;