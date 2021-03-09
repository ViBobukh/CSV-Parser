import React from "react";

import './App.css';
import {useRef, useState} from "react";
import Papa from "papaparse";
import Table from "../Table/Table";
import dataLoader from "../../lib/dataLoader";
import parser from "../../lib/parser";

function App (){
    const inputFile = useRef(null);
    const [tableData, changeTableData] = useState(null);
    const onButtonClick = () => {
        inputFile.current.click();
    };


    return (
        <div>
            <input type='file' id='file'
                   onChange={(event)=>{
                       let file = event.target.files[0];
                       parser(file, changeTableData);
                   }}
                   ref={inputFile}
                   style={{display: 'none'}}
            />
            <button className="app-btn" onClick={onButtonClick}>Import Users</button>
            {tableData ? <Table usersInfo={tableData.allUsers ? tableData.allUsers : null}
                                captions={tableData.captions ? tableData.captions : null}/> :
                null}

        </div>
    );
}

export default App;