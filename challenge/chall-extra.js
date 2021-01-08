const formatTimeUnits = units => units
  .map(unit => unit < 10 ? `0${unit}` : unit);

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return [hours, minutes, seconds];
}

const getFormattedTime = template => {
    const [hours, minutes, seconds] = getTime();
    const formattedTime = formatTimeUnits([hours, minutes, seconds]);

    // O split tirea o : do templete que passarmos como parametro
    // join => "hours:minutes:seconds"
    return template
        .split(':')
        .map((_, index) => formattedTime[index])
        .join(':');
}

setInterval(() => {
  document.getElementById("teste").innerHTML = `${getFormattedTime('h:m:s')}`;
}, 1000);
