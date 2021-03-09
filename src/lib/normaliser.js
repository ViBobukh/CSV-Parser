import {states} from "./shortStates";

// function for change data
export function normalizer(users) {
    return users.map((user) => {
        return {
            id: user.id,
            fullName: user.fullName,
            phone: changePhone(user.phone),
            email: user.email,
            age: user.age,
            experience: user.experience,
            yearlyIncome: user.yearlyIncome,
            hasChildren: changeHasChildren(user.hasChildren),
            licenseStates: changeLicenseStates(user.licenseStates),
            expirationDate: user.expirationDate,
            licenseNumber: user.licenseNumber,
            duplicate: user.duplicate
        }
    })
}

function changePhone(phone) {
    phone = phone.trim();
    if (phone.startsWith('1')) {
        return `+${phone}`;
    } else if (phone.length === 10) {
        return `+1${phone}`;
    } else {
        return phone;
    }
}

function changeHasChildren(hasChildren) {
    if (hasChildren === '') {
        hasChildren = 'FALSE'
    }
    return hasChildren;
}

function changeLicenseStates(licenseStates) {
    let allStates = licenseStates.split('|');

    allStates = allStates.map((state) => {
        const shortName = states[state];
        return shortName || state;
    });

    return allStates.join('|');
}