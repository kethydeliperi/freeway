//Códigos dos carros

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318];
let velicidadeCarros = [2, 2.8, 3.2, 5, 3.3, 2.4];
let comprimentoCarro = 50;
let alturaCarro = 40;

//Carro 1
let velocidadeCarro1 = 2;

//Carro 2
let velocidadeCarro2 = 2.5;

//Carro 3
let velocidadeCarro3 = 3.2;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+ 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
}
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velicidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  if(passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50
}













