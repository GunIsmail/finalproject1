function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1. Sue and Geoff _____ a shop.", { a: "Work", b: "Study", c: "run" , d: "runs" }, "c"),
    new Soru("2. This kind of shop _____ a milk bar.", { a: "is called", b: "called", c: "is calling", d: "is beingc alled" }, "a"),
    new Soru("3. Most days the shop _____ at 10.00 p.m.", { a: "sells", b: "opened", c: "closes", d: "run" }, "c"),
    new Soru("4. They _____ camping any more.", { a: "go", b: "doesn't go", c: "don't go", d: "have gone" }, "c"),
    new Soru("5. Ursula _____ four brothers and sisters.", { a: "have", b: "has", c: "haven't", d: "having" }, "b"), 
    new Soru("6. It _____ her fifteen minutes _____ to school.", { a: "took / go", b: "has taken / walk", c: "takes / walk", d: "takes / to walk" }, "d"),
    new Soru("7. Ursula _____ four brothers and sisters.", { a: "have", b: "has", c: "haven't", d: "having" }, "b"), 
    new Soru("8. I _____ lunch in the university canteen. ", { a: "eats", b: "have", c: "drink", d: "has" }, "b"),
    new Soru("9. I _____ extra money teaching computer studies.", { a: "earn", b: "earns", c: "win", d: "buy" }, "a"),
    new Soru("10. I _____ the traffic in Bangkok.", { a: "play", b: "have", c: "hate", d: "has" }, "c"),

];