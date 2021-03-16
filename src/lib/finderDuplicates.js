export default function findDuplicate(allUsers) {
    allUsers.forEach((currentUser) => {
        const foundDuplicate = allUsers.find((user) => {
            return currentUser.id !== user.id &&
                (currentUser.phone === user.phone || currentUser.email.toLowerCase() === user.email.toLowerCase());
        });
        if (foundDuplicate) {
            currentUser.duplicate = foundDuplicate.id
        }
    })
}