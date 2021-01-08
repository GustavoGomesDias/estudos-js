let user = {name: "Jhon"};

let permission1 = {canView: true};
let permission2 = {canEdit: true};

// Copia permission1 e permission2 em user
Object.assign(user, permission1, permission2);
console.log(user);

// Troca Jhon por Peter
Object.assign(user, {name: "Peter"});
console.log(user);