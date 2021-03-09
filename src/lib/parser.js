import Papa from "papaparse";
import dataLoader from "./dataLoader";

export default function parser (file, changeTableData) {
    Papa.parse(file, {
        complete: function(results) {
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
}