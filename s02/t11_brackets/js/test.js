describe("checkBrackets", () => {
    it("case.NULL", function () {
        assert.equal(checkBrackets(null), '-1')
    })
    it("case { (()) }", function () {
        assert.equal(checkBrackets('(())'), '0')
    })
    it("case.Number", function () {
        assert.equal(checkBrackets(333), '0')
    })
    it("case.undefined", function () {
        assert.equal(checkBrackets(undefined), '0')
    })
    it("case { () }", function () {
        assert.equal(checkBrackets('()'), '0');
    });
    it("case { (123) }", function () {
        assert.equal(checkBrackets('(123)'), '0');
    });
    it("case { () ( }", function () {
        assert.equal(checkBrackets('() ('), '0');
    });
    it("case { ()()()()()() }", function () {
        assert.equal(checkBrackets('()()()()()()'), '0');
    });
    it("case { ()()string(string)) }", function () {
        assert.equal(checkBrackets('()()string(string))'), '0');
    });
    it("case { ()()()() }", function () {
        assert.equal(checkBrackets('()()()()'), '0');
    });
    it("case { ()()(good)()() }", function () {
        assert.equal(checkBrackets('()()(good)()()'), '0');
    });
    it("case { (((((((((hey))))))))) }", function () {
        assert.equal(checkBrackets('(((((((((hey)))))))))'), '0');
    });
    it("case { (  ( }", function () {
        assert.equal(checkBrackets('(  ('), '7');
    });
    it("case { (3) (2) (4) }", function () {
        assert.equal(checkBrackets('(3) (2) (4)'), '0');
    });
    it("case { )1( )2( }", function () {
        assert.equal(checkBrackets(')1( )2('), '2');
    });
});