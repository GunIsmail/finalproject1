function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1. How many sisters _____ ?", { a: "do you have", b: "you have", c: "are you have" , d: "do you has" }, "a"),
    new Soru("2. I _____ understand what you are saying.", { a: "no", b: "don't", c: "am not", d: "didn't" }, "b"),
    new Soru("3. What time _____ home last night?", { a: "did you get ", b: "you get", c: "do you get", d: "did you got " }, "a"),
    new Soru("4. Last weekend I _____ some friends and we _____ a meal.", { a: "see /having", b: "saw / have", c: "seeing/had", d: "saw/had" }, "d"),
    new Soru("5. I _____ English food. It’s wonderful!", { a: "am loving", b: "loved", c: "love", d: "loves" }, "c"),
    new Soru("6. How many sisters _____ ?", { a: "do you have", b: "you have", c: "are you have" , d: "do you has" }, "a"),
    new Soru("7. I _____ understand what you are saying.", { a: "no", b: "don't", c: "am not", d: "didn't" }, "b"),
    new Soru("8. What time _____ home last night?", { a: "did you get ", b: "you get", c: "do you get", d: "did you got " }, "a"),
    new Soru("9. Last weekend I _____ some friends and we _____ a meal.", { a: "see /having", b: "saw / have", c: "seeing/had", d: "saw/had" }, "d"),
    new Soru("10. I _____ English food. It’s wonderful!", { a: "am loving", b: "loved", c: "love", d: "loves" }, "c")
];
