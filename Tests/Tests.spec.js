describe("Test HTML", () => {
    it("h1 element should say 'Hey! Lets play one game!'", () => {
        let element = document.querySelector(".title").innerText;
        expect(element).to.equal("Hey! Lets play one game!");
    })

    it("should input be empty", () => {
        let element = document.getElementById("min").value;
        expect(element).to.be.empty();
    });

    it("should input be empty", () => {
        let element = document.getElementById("max").value;
        expect(element).to.be.empty();
    });

    it("should input be empty", () => {
        let element = document.getElementById("numTry").value;
        expect(element).to.be.empty();
    });
    it("should input be empty", () => {
        let element = document.getElementById("numTry").value;
        expect(element).to.be.empty();
    });

    it("should set empty to span after click button", () => {
        document.getElementById("try").onclick();
        let element = document.getElementById("result").value;
        expect(element).to.equal();
    });

    it("should set empty to all inputs after click button", () => {
        document.getElementById("res").click();
        let element = document.getElementById("min").value;
        expect(element).to.equal('');
        let element1 = document.getElementById("max").value;
        expect(element).to.equal('');
        let element2 = document.getElementById("numTry").value;
        expect(element).to.equal('');
        let element3 = document.getElementById("countTry").value;
        expect(element).to.equal('');
    });


    it("h2 element should say 'Just choose range! After that will be generated number and all you need it's try to guess it!", () => {
        let element = document.querySelector(".subtitle").innerText;
        expect(element).to.equal("Just choose range! After that will be generated number and all you need it's try to guess it!");
    })

    it("should display error message", () => {
        document.getElementById("try").onclick();
        let element = document.getElementById("result").innerText;
        expect(element).to.equal('');
    });

    it("should check function getRandomNum", () => {
        expect(getRandomNum()).to.be.finite;
    });

})