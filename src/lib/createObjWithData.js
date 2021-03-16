export default function createObjWithData(allInfo,CAPTIONS,rowSize,allUsers) {
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
}