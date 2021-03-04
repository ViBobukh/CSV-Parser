import React from "react";

import './App.css';
import {useRef, useState} from "react";
import Papa from "papaparse";
import Table from "../Table/Table";
import tableMaker from "../../TableMaker/tableMaker";

function App (){
    const inputFile = useRef(null);
    const [InfoAboutUsers, changeInfoAboutUsers] = useState(null)
    const onButtonClick = () => {
        inputFile.current.click();
    };

    const parser = (file) => {
        Papa.parse(file, {
            complete: function(results) {
                console.log("Finished:", results.data);
                changeInfoAboutUsers(results.data);
            }
        });
    };

    return (
        <div className="body">
            <input type='file' id='file'
                   onChange={(event)=>{
                       let file = event.target.files[0];
                       parser(file);
                   }}
                   ref={inputFile}
                   style={{display: 'none'}}
            />
            <button className="app-btn" onClick={onButtonClick}>Import Users</button>
            <Table usersInfo={InfoAboutUsers ? InfoAboutUsers : []}/>
        </div>
    );
}

export default App;