// Tá errado, eu acho!

const movie = {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    starringRole: 'Tom Hanks',
}


function getSummary(){
    return `${this.title} foi dirigido por ${this.director} e tem ${this.starringRole} no papel principal.`;
}

const f = getSummary.bind(movie);

console.log(f());