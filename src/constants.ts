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

  56: {
    DAI_ADDRESS:"0xe9e7cea3dedca5984780bafc599bd69add087d56",
    BNB_ADDRESS:"0xE983E95FF678672186a0e3055A2a4F7d628e90Da",
    PID_ADDRESS:"0x1945698b32CBDB5684A28Ad507608205eB1a95cB",
    STAKING_ADDRESS:"0xb361f9b6301686E921f655d00eb87571F5C3FBde",
    STAKING_HELPER_ADDRESS:"0x61172aE0CcB744F9921a84FE89Fadb249daE347f",
    SPID_ADDRESS:"0xE0ff59608aF41aeA10888F73D0D1c1439B105E05",
    DISTRIBUTOR_ADDRESS:"0x222011bbfd6268Ae0AE1878c23119218857609a7",
    BONDINGCALC_ADDRESS:"0x1878941257c86b196d4474c49054dc70168b452e",
    TREASURY_ADDRESS:"0x98193f806CD04baB7dbaaB5a693FFdEA8F26cE17",
    REDEEM_HELPER_ADDRESS:"0xF5057a9aE697f1CC4c70952C1d6D170512634844",
    BUSD_ADDRESS:"0xe9e7cea3dedca5984780bafc599bd69add087d56",
    USDT_ADDRESS:"0x55d398326f99059ff775485246999027b3197955",
    USDC_ADDRESS: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    LP_ADDRESS: "0x753df31cffd20341d0134cb5e3d9364c26a52137",
    USDC_BOND: "0xb82aD62d801BFd4A318A475580E820150a71E72d",
    BUSD_BOND: "0x9660B3647688cB47d1eF9a079C8db82c27aD1d17",
    USDT_BOND: "0x6B09Af0fb73b31D9eE57CdaEd213B62D294e1307",
    LP_BOND:"0xf94327b27ed4FF516EB40e1E914e2B59AA5c6416"
    //STAKING_WARMUP: "0xcb67892b244c9CcF6B3616305463A3782049Aa17"
  },

  97: {
    //012922-test-final
    DAI_ADDRESS: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee", // duplicate
    BNB_ADDRESS: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    PID_ADDRESS: "0x8976655C7A049AB6FcFC9123897AdDe13Ebef908",
    STAKING_ADDRESS: "0x5D0204BCbBC7ce6e9A3F5694b7f31120666BE116", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x62454C755A27F51D751eB3ac52A7bCb1C5c65f5b", // Helper contract used for Staking only
    SPID_ADDRESS: "0xd511A857348b0aBe9abdCC638d410325cad45603",
    DISTRIBUTOR_ADDRESS: "0x33e2b80B750d09b7905BF077A44ccf3AbCd06Ea1",
    BONDINGCALC_ADDRESS: "0x17D939f4668cd3b3A81e15F242e9365E30C2475F",
    TREASURY_ADDRESS: "0xEE9bff006841C4A561De13A0180bd4f682EEaBA7",
    REDEEM_HELPER_ADDRESS: "0xcc96C6785FF37D90A04EBfeB52F48b5376b7a812",
    BUSD_ADDRESS:'0xE5f34eD0833529972883f91f18fBa4c22A1990a7',
    USDT_ADDRESS: '0x428F8d3118df077954BA6419c4d8afbE3a5031Ad',
    USDC_ADDRESS: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    LP_ADDRESS: "0x753df31cffd20341d0134cb5e3d9364c26a52137",
    USDC_BOND: "0x5c8a8BCC6DAa292Fb56C1BE5b111358786BBC5Da",
    BUSD_BOND: "0x48c7A72198eA09e64CAEf65D808d762721C0bABA",
    USDT_BOND: "0xed0c1FfD2097F832707DbA60594Ce510b5211cC4",
    LP_BOND:"0xf94327b27ed4FF516EB40e1E914e2B59AA5c6416"

},
};





