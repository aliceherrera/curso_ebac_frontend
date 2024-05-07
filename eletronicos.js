function DispositivoMovel(tipo) {
    this.tipo = tipo;
}

function Smartphone(tipo, nome, tela, memoria, camera) {
DispositivoMovel.call(this, tipo);
    this.nome = nome;
    this.tela = tela;
    this.memoria = memoria;
    this.camera = camera;
}

function Notebook(tipo, nome, tela, gpu, peso) {
    DispositivoMovel.call(this, tipo);
    this.nome = nome;
    this.tela = tela;
    this.gpu = gpu;
    this.peso = peso;
}

const galaxyBook4 = new Notebook("Notebook", "Galaxy Book 4", 16, "RTX 4070", "1.86 kg");
const iphone15Pro = new Smartphone ("Smartphone", "iPhone 15 Pro", 6.1, "256 GB", "48 MP");
const galaxyS24plus = new Smartphone("Smartphone", "Galaxy S24+", 6.7, "512 GB", "50 MP");

console.log(galaxyBook4);
console.log(iphone15Pro);
console.log(galaxyS24plus);