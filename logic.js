var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var pala;
var bola;
//Precarga lo necesario para poder crear escenario y jugadores
function preload(){
game.load.image('star','assets/star.png');
game.load.image('platform','assets/platform.png');
}

//Inicia y crea los objetos deseados. Se necesita precargar lo que se vaya a utilizar
function create(){
game.physics.startSystem(Phaser.Physics.ARCADE);
game.add.sprite(10,10,'star');

//Añadimos la pala
pala=game.add.sprite(game.world.centerX,550,'platform');
pala.anchor.setTo(0.5,0.5);
pala.body.collideWorldsBounds=true;
pala.body.bounce.set(1);
pala.body.immovable=true;
}

//Actualizacion en cada momento del juego (puntuaciones, movimientos,testeo de colision,etc)
function update(){


}