import React from "react";
import './App.css';
import {useRef, useState} from "react";
import Table from "../Table/Table";
import parser from "../../lib/parser";
import ModalWindow from "../Modal Window/ModalWindow";

function App (){
    const inputFile = useRef(null);
    const [tableData, changeTableData] = useState(null);
    const [textError, changeTextError] = useState('');
    const onButtonClick = () => {
        inputFile.current.click();
    };

    return (
        <div>
            <input type='file' id='file'
                   onChange={(event)=>{
                       let file = event.target.files[0];
                       parser(file, changeTableData, changeTextError);
                   }}
                   ref={inputFile}
                   style={{display: 'none'}}
            />
            <button className="app-btn" onClick={onButtonClick}>Import Users</button>
            {tableData ? <Table usersInfo={tableData.allUsers}
                                captions={tableData.captions}/> :
                null}
            <ModalWindow
                isOpen={textError !== ''}
                onClose={() => changeTextError('')}
            >
                {textError}
            </ModalWindow>
        </div>
    );
}

export default App;