function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1 - Sıfır (0)", { a: "ZERO", b: "ONE"}, "a"),
    new Soru("2 - İki (2)", { a: "TWO", b: "ONE"}, "a"),
    new Soru("3 - Altı (6)", { a: "TWELVE", b: "SİX"}, "b"),
    new Soru("4 - Dokuz (9)", { a: "FOUR", b: "NİNE"}, "b"),
    new Soru("5 - Beş (5)", { a: "MOVT", b: "MOVED"}, "b"),
];