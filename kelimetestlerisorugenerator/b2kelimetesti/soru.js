function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1 - Balina", { a: "whale", b: "goldfish"}, "a"),
    new Soru("2 - Yunus Balığı", { a: "canary", b: "dolphin"}, "b"),
    new Soru("3 - Fare", { a: "Mouse", b: "Tiger"}, "a"),
    new Soru("4 - Tavşan", { a: "Rabbit", b: "Pig"}, "a"),
    new Soru("5 - Kaplumbağa", { a: "Iguana", b: "Turtle"}, "b")
];