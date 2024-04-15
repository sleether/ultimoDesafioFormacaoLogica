//Primeiro a gente cria uma classe chamada Heroi//
//Dentro dela montamos um constructor que vai agregar os dados do heroi//

class Heroi {
        constructor(nome, hp, tipo) {
            this.nome = nome;
            this.hp = hp;
            this.tipo = tipo;
        }


//Hora de criar o comando de attack//

attack() {
    let attack;

//Agora criaremos o tipo de ataque e o retorno da classe do Heroi de acordo com o ataque//
switch(this.tipo){
    case 'mago':
        attack = 'magia'
        break;
    case 'guerreiro':
        attack ='espada'
        break;
    case 'monge':
        attack = 'artes marciais'
        break;
    case 'ninja':
        attack = 'shuriken'
        break;
    default:
        attack = 'ataque desconhecido';        
}
console.log(`O ${this.nome} , de ${this.hp} de HP, atacou usando ${attack}`);

}
}
//Fechamos os comandos acima com as chaves e agora vamos pra parte legal//

const meuHeroi = new Heroi('PatoDonald o Grande Mago Implacável', 2500,'mago');
meuHeroi.attack();

const outroHeroi = new Heroi('Gibaltrar', 3500, 'guerreiro');
outroHeroi.attack();
