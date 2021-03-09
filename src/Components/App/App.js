import React from "react";

import './App.css';
import {useRef, useState} from "react";
import Papa from "papaparse";
import Table from "../Table/Table";
import dataLoader from "../../lib/dataLoader";

function App (){
    const inputFile = useRef(null);
    const [tableData, changeTableData] = useState(null);
    const onButtonClick = () => {
        inputFile.current.click();
    };

    const parser = (file) => {
        Papa.parse(file, {
            complete: function(results) {
                console.log(results)
                if(results.errors.length){
                    alert('Chose file .csv');
                    return;
                }
                const data = dataLoader(results.data);
                if(data) {
                    changeTableData(data);
                } else {
                    alert('Error');
                }
            }
        })
    };

    return (
        <div>
            <input type='file' id='file'
                   onChange={(event)=>{
                       let file = event.target.files[0];
                       parser(file);
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