const user = {
    name: 'Gustavo',
    lastName: 'Gomes Dias'
};


function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name}  ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

// Aqui não se alterou o objeto user e sim se criou um novo contendo tudo que há em user e o lastName.