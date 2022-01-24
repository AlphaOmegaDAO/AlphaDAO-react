export const THE_GRAPH_URL = "http://localhost:8000/subgraphs/name/Factory";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    DAI_ADDRESS: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // duplicate
    PID_ADDRESS: "0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932",
    STAKING_ADDRESS: "0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2",
    STAKING_HELPER_ADDRESS: "0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1",
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SPID_ADDRESS: "0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084",
    OLD_SPID_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a",
    BONDINGCALC_ADDRESS: "0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0x0d722D813601E48b7DAcb2DF9bae282cFd98c6E7",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
  },
  56: {
    DAI_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // duplicate
    BNB_ADDRESS: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    PID_ADDRESS: "0xAC2f8fb059C96C481fAE3f4702Ca324664b79B26",
    STAKING_ADDRESS: "0x86ea26b438e3f724fd42540fc32f61E91B6908B1", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xC757Af07008029AC17135E6D973B0684e95Da532", // Helper contract used for Staking only
    SPID_ADDRESS: "0x02aB0e44666285fB9C0C182fBbd3f16805108462",
    DISTRIBUTOR_ADDRESS: "0x14C822B3c596d6DAb4069EE93fa1DDe389B843d1",
    BONDINGCALC_ADDRESS: "0x855D0eb9CcAFB566dEeBc7089396c5f8af4937C2",
    TREASURY_ADDRESS: "0xc193c5802d0c962418239D610c2bc3dd0aBFb476",
    REDEEM_HELPER_ADDRESS: "0x1a92a5EC7CaF53DA545c785D0Ee1C4A17eEA19e1",
    IDO_ADDRESS:'0x3Ae07374d7C89f608906321444e8AFdED91aDA5E',
    BUSD_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56'
  },
  97: {
    DAI_ADDRESS: "0x2555fD7D40B201F44f7Efa89eF3bc86230f1e44d", // duplicate
    BNB_ADDRESS: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    PID_ADDRESS: "0xfcBBDb030A56c2B9CF4310AB5B93fa345D4Bc08C",
    STAKING_ADDRESS: "0xEbd625F0E857764E0B55FA23308b51bBff33699C", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x974E5E71b98ce7B6b7516f3BDB7051511778400a", // Helper contract used for Staking only
    SPID_ADDRESS: "0x821Aeb0DFa8846A86fFF02c9ea4c3917035C688A",
    DISTRIBUTOR_ADDRESS: "0x61F98A19148eE41e51203E65526F9C6F589CF112",
    BONDINGCALC_ADDRESS: "0x198F1069DcAb6f89464920DBB06D807b1374Fac8",
    TREASURY_ADDRESS: "0x7a37dd99E7d84dA088bc72375f4243F1A3A0E657",
    REDEEM_HELPER_ADDRESS: "0xE8eE0bE2d8BAABf9924d7f1459d9467E4399badB",
    IDO_ADDRESS:'0x3Ae07374d7C89f608906321444e8AFdED91aDA5E',
    BUSD_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56'
  },
};

//OX:0xAC2f8fb059C96C481fAE3f4702Ca324664b79B26
//xOX:0x02aB0e44666285fB9C0C182fBbd3f16805108462
//CALC:0x78b1D3FcD50dBe2781a9F7128643Ed03b36d5e20
//Treasury:0xc193c5802d0c962418239D610c2bc3dd0aBFb476
//Distributor:0x14C822B3c596d6DAb4069EE93fa1DDe389B843d1
//Staking:0x86ea26b438e3f724fd42540fc32f61E91B6908B1
//StakingHelper:0xC757Af07008029AC17135E6D973B0684e95Da532
//StakingWarmup:0x16f6E1ebFf68D3c95212BC8fd352Ac2a6bf56840
//DAO:0xa1980C6EF620D853792cA96b876F0AfDBc1fD374
//Depository:0x8FcdB03855082798be12bEB435ec9aAAeFC77AF1
//RedeemHelper:0x1a92a5EC7CaF53DA545c785D0Ee1C4A17eEA19e1
