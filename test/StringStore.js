const StringStore = artifacts.require('../contracts/StringStore.sol');

contract(StringStore, accounts => {
    it("should store the string 'Hey there!'", async () => {
        const stringStore = await StringStore.deployed();

        // set myString to Hey there
        await stringStore.set("Hey there!", { from: accounts[0] });
        // get myString from public variable getter
        const storedString = await stringStore.myString.call();

        assert.equal(storedString, "Hey there!", "The string was not stored.");
    });
});