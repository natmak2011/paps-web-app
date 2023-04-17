
import './App.css';
import React  from 'react';
import Header from "./Header";
import CreateRequest from "./CreateRequest";
import CreateWatchlist  from "./CreateWatchlist";
import {Route, Routes} from "react-router-dom";
import WatchlistMatch from "./WatchlistMatch";

const App = () => {

    return (
       <>
        <Header/>

<Routes>
                  <Route path="/" element={<CreateRequest/>}/>
                  <Route path="/request" element={<CreateRequest/>}/>
                  <Route path="/watchlist" element={<CreateWatchlist/>}/>
                  <Route path="/watchlist/matches" element={<WatchlistMatch/>}/>

</Routes>
        </>


    )


}

export default App;
