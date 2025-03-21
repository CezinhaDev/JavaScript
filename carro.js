function Carro(cor, ano, modelo, popular) {
    this.cor = cor;
    this.ano = ano;
    this.modelo = modelo;
    this.popular = popular;
}

const x = new Carro('preto', '2004', 'hb20', true);

console.log(x);
