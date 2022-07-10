require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name reflect noise home hunt gloom swallow gift'; 
let testAccounts = [
"0x07e23c4466740dc49f82c3f3ce74a80a08532f4d0801a20aa64a8c393bdc34ce",
"0xcb8bad00c6191652c3515e9ec2f205a35093941ee93f1ccc904de2fadefa91a2",
"0xbef9f84ac95b3d45f01e781eeb8895067161cd3749bb00efbf0a92ad22cc02fd",
"0x5ae3b484c6e638514371532de306820cb6640058bebb0a8abd6014a4e72d8c92",
"0x11839f9fb54b19f7ae94ed5536ca7006a0689e90c3a62414490b54840b71f93e",
"0xb2a0343ade21be87c106e503a6afd6fcba891ff0d0aadb97bcc7a3b44f348f35",
"0xf0ea7f2725f42aaf7d43723be15c196c46106be22f493884cf142b2e5fecaaf7",
"0x7a48f747c8d50b582ce662c8ed261a4de9d3fe156c50e5351a0cd4d9b43a1c02",
"0x656f08e6b2987ea39dbb513db3c9716206cc59a242a32efe05eff2b24fe8cf9b",
"0xd7df058cb350a23b4d723f8109133845f659bcd672d9c994429703c9a4ee82b0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

