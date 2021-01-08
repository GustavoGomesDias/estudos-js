// Se o valor for menor que 10, ele coloca um 0 na frente
const formatTimeUnits = units => units
  .map(unit => unit < 10 ? `0${unit}` : unit)

// Passa a hora, minuto e segundos em formato de array
const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return [hours, minutes, seconds]
}

// Formata a str no formato hora:minuto:segundo
// templete tá vindo como h:m:s
// split tira os ":" fica h m s
// map passa cada hora:minuto:segundo formatado para join
//join junto tudo em uma string só, ficando, por exemplo, 14:20:20
const getFormattedTime = template => {
  const [hours, minutes, seconds] = getTime()
  const formattedTime = formatTimeUnits([hours, minutes, seconds])

  return template
    .split(':')
    .map((_, index) => formattedTime[index])
    .join(':')
}

class Clock {
  constructor ({ template }) {
    this.template = template
  }

  // Render é responsável por renderizar a hora no formato hora:minuto:segundo
  // Ela invoca a função anterior
  render () {
    const formattedTime = getFormattedTime(this.template)
    console.log(formattedTime);
  }

  // Start é o método que inicia tudo
  start () {
    // Convenciona 1 segundo = 1000 milisegundos (que é isso mesmop, obviamente)
    const oneSecond = 1000

    // Renderiza para essa class
    this.render()
    // 
    this.timer = setInterval(() => this.render(), oneSecond)
  }

  stop () {
    clearInterval(this.timer)
  }
}

class ExtendedClock extends Clock {
  constructor (options) {
    super(options)
    
    const { precision = 1000 } = options
    this.precision = precision
  }

  start () {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}

const clock = new ExtendedClock({ template: 'h:m:s', precision: 1000 })

console.log(clock.start());
