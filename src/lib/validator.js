import {states} from "./shortStates";

function validateFullName(name) {
    return name.split(' ').length === 2;
}

function validatePhone(phone) {
    if (phone.length === 12 && phone.startsWith('+1')) {
        return true;
    }
}

function validateEmail(email) {
    return email.match(/\w*\@\w*\.\w*/gm);
}

function validateAge(age) {
    return Math.round(age) >= 21;
}

function validateExperience(age, experience) {
    return ((age - 21) >= experience) && experience >= 0;
}

function validateYearlyIncome(yearlyIncome) {
    return yearlyIncome <= 1000000 && yearlyIncome >= 0
}

function validateHasChildren(hasChildren) {
    hasChildren = hasChildren.trim();
    return hasChildren === 'TRUE' || hasChildren === 'FALSE';
}

function validateLicenseStates(licenseStates) {
    let allStates = licenseStates.split('|');
    const shortStateNames = Object.values(states);

    return allStates.every((state) => {
        return shortStateNames.find((name) => {
            return name === state;
        });
    });
}

function validateExpirationDate(expirationDate) {
    const isValidFormat = expirationDate.match(/(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})/gm);
    const isValidDate = Date.now() < new Date(expirationDate).getTime();
    return isValidDate && isValidFormat;
}

function validateLicenseNumber(licenseNumber) {
    return licenseNumber.match(/\w{6}/gm);
}

/**
 * Function for validate data
 * @param users
 * @returns {*}
 */
export function validate(users) {
    return users.map((user) => {
        return {
            id: {
                value: user.id,
                isValid: true
            },
            fullName: {
                value: user.fullName,
                isValid: validateFullName(user.fullName)
            },
            phone: {
                value: user.phone,
                isValid: validatePhone(user.phone)
            },
            email: {
                value: user.email,
                isValid: validateEmail(user.email)
            },
            age: {
                value: user.age,
                isValid: validateAge(user.age)
            },
            experience: {
                value: user.experience,
                isValid: validateExperience(user.age, user.experience)
            },
            yearlyIncome: {
                value: user.yearlyIncome,
                isValid: validateYearlyIncome(user.yearlyIncome)
            },
            hasChildren: {
                value: user.hasChildren,
                isValid: validateHasChildren(user.hasChildren)
            },
            licenseStates: {
                value: user.licenseStates,
                isValid: validateLicenseStates(user.licenseStates)
            },
            expirationDate: {
                value: user.expirationDate,
                isValid: validateExpirationDate(user.expirationDate)
            },
            licenseNumber: {
                value: user.licenseNumber,
                isValid: validateLicenseNumber(user.licenseNumber)
            },
            duplicate: {
                value: user.duplicate,
                isValid: true
            }
        }
    })
}