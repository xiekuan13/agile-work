const anagrams = require("../anagrams")

describe("anagrams", ()=> {

    it("should return [] when input is empty string", ()=> {
        expect(anagrams()).toEqual([]);
    })

    it("should return [a] when input is a", ()=> {
        expect(anagrams("a")).toEqual(["a"]);
    })

    it("should return [ab,ba] when input is ab", ()=> {
        expect(anagrams("ab")).toEqual(["ab","ba"]);
    })

    it("should return [abc,acb,bac,bca,cab,cba] when input is abc", ()=> {
        expect(anagrams("abc")).toEqual(["abc","acb","bac","bca","cab","cba"]);
    })
})