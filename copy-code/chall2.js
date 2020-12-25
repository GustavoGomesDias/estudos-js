// Tá errado, eu acho!

const movie = {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    starringRole: 'Tom Hanks',
    getSummary(){
        return `${this.title} foi dirigido por ${this.director} e tem ${this.starringRole} no papel principal.`;
    }
}




console.log(movie.getSummary());