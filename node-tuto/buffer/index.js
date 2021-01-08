const buf = Buffer.from('Hey!');

console.log(buf[0]); // 72 = H ===> Guarda como unicode

console.log(buf.toString()); // Hey! => Passa pra string

for(const item of buf){
  console.log(item) // 72 101 121 33
}

const buff = Buffer.alloc(4);

buff.write("Hey!"); // write => Grava no buffer

console.log(buff.toString());

buff[1] = 111; // 111 = o no unicode

console.log(buff.toString());

const buffer = Buffer.from('Hey!');
let copy = Buffer.alloc(4);

copy.copy(buffer); // Copia o buffer para copy
console.log(copy.toString()); // WTF? NÃO TÁ COPIANDO =/
