import {validate} from "./validator";
import {normalizer} from "./normaliser";
import findDuplicate from "./finderDuplicates";
import createObjWithData from "./createObjWithData";

/**
 * Array with all caption
 * @type {string[]}
 */
const CAPTIONS = ['fullName', 'phone', 'email', 'age', 'experience', 'yearlyIncome',
    'hasChildren', 'licenseStates', 'expirationDate', 'licenseNumber', 'id', 'duplicate'];

/**
 * Function for data treatment
 * @param allInfo
 * @returns {{allUsers, captions: {}}}
 */
function dataLoader(allInfo) {
    const captions = {};
    const allUsers = [];
    const rowSize = allInfo[0].length;

    //add id and duplicate
    CAPTIONS.forEach((caption, index) => {
        if (caption === 'id') {
            captions.id = 'Id';
        } else if (caption === 'duplicate') {
            captions.duplicate = 'Duplicate';
        } else {
            captions[caption] = allInfo[0][index].trim();
        }
    })

    // create object with data
    createObjWithData(allInfo, CAPTIONS, rowSize, allUsers);

    // Finding duplicates
    findDuplicate(allUsers);

    return {
        captions,
        allUsers: validate(normalizer(allUsers))
    };
}

export default dataLoader;