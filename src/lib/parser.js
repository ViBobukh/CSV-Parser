import Papa from "papaparse";
import dataLoader from "./dataLoader";

export default function parser (file, changeTableData, changeTextError) {
    Papa.parse(file, {
        complete: function(results) {
            if(results.errors.length){
                changeTextError('File format incorrect, please chose .csv file');
            }
            const data = dataLoader(results.data);
            if(data) {
                changeTableData(data);
            } else {
                changeTextError('Data incorrect, please correct data');
            }
        }
    })
}