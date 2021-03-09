import {validate} from "./validator";
import {normalizer} from "./normaliser";

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
    for (let i = 1; i < allInfo.length; ++i) {
        const userInfoArr = allInfo[i];
        if (userInfoArr && userInfoArr.length === rowSize) {
            const userInfoObject = {};

            CAPTIONS.forEach((caption, index) => {
                if (caption === 'yearlyIncome') {
                    userInfoArr[index] = Number(userInfoArr[index]).toFixed(2);
                    userInfoObject[caption] = userInfoArr[index];
                } else if ((caption === 'fullName' || caption === 'email' || caption === 'phone') &&
                    (userInfoArr[index] === 'undefined' || userInfoArr[index] === '')) {
                    alert('Not valid data');
                    return;
                } else {
                    userInfoObject[caption] = userInfoArr[index];
                }
            });
            userInfoObject.id = i;
            userInfoObject.duplicate = '';

            allUsers.push(userInfoObject);
        }
    }
    // Finding duplicates
    allUsers.forEach((currentUser) => {
        const foundDuplicate = allUsers.find((user) => {
            return currentUser.id !== user.id &&
                (currentUser.phone === user.phone || currentUser.email.toLowerCase() === user.email.toLowerCase());
        });
        if (foundDuplicate) {
            currentUser.duplicate = foundDuplicate.id
        }
    })

    return {
        captions,
        allUsers: validate(normalizer(allUsers))
    };
}

export default dataLoader;