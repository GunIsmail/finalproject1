function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1.ARMUT", { a: "BANANA", b: "PEAR"}, "b"),
    new Soru("2.PORTAKAL", { a: "LEMON", b: "ORANGE"}, "b"),
    new Soru("3.MANDALİNA", { a: "TANGERİNE", b: "QUİNCE"}, "a"),
    new Soru("4.ŞEFTALİ", { a: "PEACH", b: "FİG"}, "a"),
    new Soru("4.ŞEFTALİ", { a: "PEACH", b: "FİG"}, "a"),
new Soru("5.KİVİ", { a: "KİWİ", b: "BERRY"}, "a"),
new Soru("6.MISIR", { a: "CORN", b: "CHİLİ"}, "a"),
new Soru("7.ZEYTİN", { a: "OİL", b: "PEA"}, "a"),
new Soru("8.KABAK", { a: "TOMATO", b: "PUMPKİN"}, "b"),
new Soru("9.MEYVE", { a: "VEGETABLES", b: "FRUİTS"}, "b"),



];