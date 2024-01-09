function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1 - Leave (Terk Etmek)", { a: "LEFT", b: "LEAVED"}, "a"),
    new Soru("2 - Ride (Sürmek)", { a: "RIDED", b: "RODE"}, "b"),
    new Soru("3 - Read (Okumak)", { a: "READ", b: "READED"}, "a"),
    new Soru("4 - Speak (Konuşmak)", { a: "SPOKE", b: "SPEAKED"}, "a"),
    new Soru("5 - Move (Hareket Etmek)", { a: "MOVT", b: "MOVED"}, "b"),
new Soru("6 - Try (Denemek)", { a: "TRIED", b: "TRY"}, "a"),
new Soru("7 - Buy (Satın Almak)", { a: "BOUGHT", b: "BUYED"}, "a"),
new Soru("8 - Choose (Seçmek)", { a: "CHOOSEN", b: "CHOSE"}, "b"),
new Soru("9 - Show (Göstermek)", { a: "SHOWN", b: "SHOW"}, "b"),
new Soru("10 - Forgive (Affetmek)", { a: "FORGAVE", b: "FORGIVEN"}, "a"),



];