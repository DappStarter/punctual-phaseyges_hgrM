require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind artist gesture open furnace solution'; 
let testAccounts = [
"0xb3828d800c867499a40d323c9b75ecf13cf0955c1a4bd03ecb9de4eecd758532",
"0x7d1e7a97da023a99d44f6109c04ab8fca921414a8b278202124002385e81f092",
"0x4b59e99509d3d7d1588f7219f0202a86bc8aac98dc0c49c9f7ddbcf0e2283226",
"0x11cd5c6c558d82d50d409c55b0807913945dfac51521e814c0baeabcd9eaab03",
"0x161788805fd416e7f83295692b4f11e28774fd3f8ae772177363ea5036d28fd6",
"0x79b2b5db25dd9d47b69926686919a0c584a1c75f003513d47dbab0520fd02c36",
"0xf49120f1ee011b4a6a3be336c9551bb7d04e9ac41ec45d6e99d95205d66f2eb9",
"0x22b9d65df16de1e7794a188fb69331d8cb0b87b998d83ba8c00bbd9cacd32119",
"0x0d0eb35ad8a48b0595ad19940aa87aaca000ef8c0475fb970016fe24c8333aa3",
"0x7bb4b97b07009a0fe68c0145d946c2e34dd97b787ce7765ecf0b9b931a23d05e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


