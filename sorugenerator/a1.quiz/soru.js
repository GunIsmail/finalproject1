function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1. Hello, what ______ your name?", { a: "is", b: "are", c: "am" , d: "be" }, "a"),
    new Soru("Where ______ you ______ ?", { a: "is from", b: "are in ", c: "are is ", d: "are from "}, "d"),
    new Soru("3. What is ______ ? She is a bank manager.", { a: "his job", b: "her job", c: "he job", d: "her job" }, "d"),
    new Soru("4. This ______ my friend. ______ name’s Richard.", { a: "are / His", b: "is / My", c: "is / His", d: "his / His" }, "c"),
    new Soru("5. Hello, what ______ your name?", { a: "is", b: "are", c: "am" , d: "be" }, "a"),
    new Soru("6.Where ______ you ______ ?", { a: "is from", b: "are in ", c: "are is ", d: "are from "}, "d"),
    new Soru("7. What is ______ ? She is a bank manager.", { a: "his job", b: "her job", c: "he job", d: "her job" }, "d"),
    new Soru("8. This ______ my friend. ______ name’s Richard.", { a: "are / His", b: "is / My", c: "is / His", d: "his / His" }, "c"),
    new Soru("9. Hello, what ______ your name?", { a: "is", b: "are", c: "am" , d: "be" }, "a"),
    new Soru("10.Where ______ you ______ ?", { a: "is from", b: "are in ", c: "are is ", d: "are from "}, "d"),
];
