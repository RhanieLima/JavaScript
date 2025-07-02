// Atividade Const e Let

const nome = 'rhaniel';
const sobrenome =  'lima';
const anoNascimento = 2008;
let idade = 2025 - anoNascimento;
let peso = 63;
const alturaEmMm = 1.70;
let imc;

console.log(nome,sobrenome,'tem', idade, 'anos e pesa', peso,'Kg');

imc = peso/(alturaEmMm*alturaEmMm);

console.log('tem', alturaEmMm, 'e seu IMC é de', imc.toFixed(2));


