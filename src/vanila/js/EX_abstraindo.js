/*
-produto para uma loja
-carrinho de compras para a loja
-comida para sistema de cardapio
-personagem para jogo de rpg
-carro para sistema de aluguel de carros
-usuario para rede social
-video para serviço de streaming
-aluno para isstema de gestão escolar
-encomenda para sistema de frete
-banda para serviço de streaming de musicas
-pedido para sistema de delivere
-agendamento pra sistema de dentista
-coneçao de banco de dados para biblioteca de manipulação de dados
-mensagem do zapzap
-inventario de personagem para jogo de rpg
-grupo de rede social
-player de video
-busca do google
-notificação do face

*/

class Produto {
    constructor() {
        this.title;
        this.stock;
        this.listAll = [];
        this.weight;
        this.price;
        this.description;
        this.location;
        this.fabricante;
        this.garantia;
        this.image;
    }
    Cupom() {
        console.log('aplicando cupom no preço com desconto')
    }
    Discount() {
        console.log('aplicando disconto no preço')
    }
    Frete() {
        console.log('calculando o frete')
    }
    TaNaGarantia() {
        console.log('checando se o produto ta nagarantia')
    }
    Refound() {
        console.log('processando a devolução')
    }
    Buy() {
        console.log('finalizando a compra')
    }


}

class CarrinhoDeCompras {
    constructor() {
        this.amount;
        this.totalPrice;
        this.produtos = [];

    }
    AddNoCarrinho() {
        console.log('adicionando no carrinho de compras')
    }
    RemoveDoCarrinho() {
        console.log('removendo do carinho de compras')
    }
    Buy() {
        console.log('finalizando a compra')
    }
    Cupom() {
        console.log('aplicando cupom no preço com desconto')
    }
    Discount() {
        console.log('aplicando disconto no preço')
    }
    Frete() {
        console.log('calculando o frete')
    }
}
class ComidaParaCatalogo {
    constructor() {
        this.title;
        this.price;
        this.ingredientes = [];
        this.image;
        this.available;
        this.coockingTime;

    }
    Buy() {
        console.log('finalizando a compra')
    }
    Cupom() {
        console.log('aplicando cupom no preço com desconto')
    }
    Discount() {
        console.log('aplicando disconto no preço')
    }
    Time() {
        console.log('tempo estimado para o prato ser concluido')
    }
}
class CharacterToRPG {
    constructor() {
        this.name;
        this.gender;
        this.appearance = {};
        this.equip = [];
        this.money = 0;
        this.stats = {};
        this.skill = [];
        this.inventario = [];
        this.background;
        this.lvl;
        this.progress = [];
    }
    Move() {
        console.log('se movimentando')
    }
    Quests() {
        console.log('listando td as quests')
    }
    collect() {
        console.log('coletando materiais')
    }
    lvlUp() {
        console.log('alterando stats')
    }
    xpGain() {
        console.log('calculando xp ganho')
    }
    useSkill() {
        console.log('usando skill')
    }
    loot() {
        console.log('pegando os drops')
    }
    questProgress() {
        console.log('faznedo progresso da quest')
    }
}