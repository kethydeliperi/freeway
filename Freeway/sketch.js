function setup() {
    createCanvas(600, 400);
    somTrilha.loop();
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicial();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }
  
  
  
  