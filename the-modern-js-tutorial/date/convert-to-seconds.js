function getSecondsToday(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now - today)/1000);
}

//or

function getSecondsToday2(){
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds(); 
}

console.log(getSecondsToday());
console.log(getSecondsToday2());