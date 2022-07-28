//códigos do ator

let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 22);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeMovimentar())
    yAtor += 3;
  }
}

function podeMovimentar(){
  return yAtor < 366;
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtor();
      somColisao.play();
      if (verificaPontos()){
        meusPontos -= 1;
      }
    } 
  }
}

function verificaPontos(){
  return meusPontos > 0;
}

function voltaAtor(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(meusPontos, width / 6, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtor();
  }
}












