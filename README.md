#Set Up
Follow [this](https://truffleframework.com/tutorials/getting-started-with-drizzle-and-react)

`npm install -g truffle`
`npm install -g ganache-cli` (for a local blockchain)

#Running
in root directory:
run `ganache-cli -b 3` to generate a new blockchain listening on port 8545
`truffle compile` to compile contracts
`truffle migrate` to migrate them to the blockchain

in client directory:
run `npm start`

