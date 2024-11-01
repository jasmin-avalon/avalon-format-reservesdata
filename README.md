# aave-format-reservesdata


## Important Notice

**Use Ethers V5 instead of Ethers V6.**

## Hot to run

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.30. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Config

- RPC_URL: The RPC URL of the network you want to fetch data from.
- ADDRESSES_CONFIG: The addresses of the contracts you want to fetch data from.
  - LENDING_POOL_ADDRESS_PROVIDER: The address of the lending pool address provider contract.
  - UI_POOL_DATA_PROVIDER: The address of the UI pool data provider contract.

```typescript
const RPC_URL = 'https://rpc.taiko.xyz'

const ADDRESSES_CONFIG = {
	LENDING_POOL_ADDRESS_PROVIDER: '0x64Eaf7cDE96277ed9253b8268DFC85eB2EB0D147', // PoolAddressesProvider
	UI_POOL_DATA_PROVIDER: '0xb961661F5Ca019e232661Bd26686288a6E21d928', // UiPoolDataProviderV3
}
```

## Example Output

```typescript
[
  {
    originalId: 0,
    id: "1-0x15d9f3ab1982b0e5a415451259994ff40369f584-0x61361e89ef2a698347004275a940c31108edf712",
    underlyingAsset: "0x15d9f3ab1982b0e5a415451259994ff40369f584",
    name: "BTCB Token",
    symbol: "BTCB",
    decimals: 18,
    baseLTVasCollateral: "0",
    reserveLiquidationThreshold: "0",
    reserveLiquidationBonus: "0",
    reserveFactor: "0.3",
    usageAsCollateralEnabled: false,
    borrowingEnabled: false,
    isActive: false,
    isFrozen: true,
    liquidityIndex: "0",
    variableBorrowIndex: "1000000000000000000000000000",
    liquidityRate: "1000000000000000000000000000",
    variableBorrowRate: "0",
    lastUpdateTimestamp: 0,
    aTokenAddress: "0x000000000000000000295bE96E64066972000000",
    variableDebtTokenAddress: "0x0000000000000000000000000000000066E1f6Cf",
    interestRateStrategyAddress: "0x05A355DDD04abB41857dD799818c39f2a6c481A2",
    availableLiquidity: "229533482171434553392492396280844602728024510617",
    totalScaledVariableDebt: "921796950740789225946759761739.877591652610023925",
    priceInMarketReferenceCurrency: "927957730802080539146649261781580698635375353295",
    priceOracle: "0x00000000000000000000000000000a3A09a3F6B6",
    variableRateSlope1: "0",
    variableRateSlope2: "0",
    baseVariableBorrowRate: "0",
    optimalUsageRatio: "0",
    isPaused: true,
    debtCeiling: "50000000000000000000000000",
    borrowCap: "750000000000000000000000000",
    supplyCap: "0",
    borrowableInIsolation: false,
    accruedToTreasury: "30000000000000000000000000",
    unbacked: "500000000000000000000000000",
    isolationModeTotalDebt: "70000000000000000000000000",
    debtCeilingDecimals: 0,
    isSiloedBorrowing: true,
    flashLoanEnabled: true,
    virtualAccActive: false,
    virtualUnderlyingBalance: "0",
    totalDebt: "921796950740789225946759761739.877591652610023925",
    totalVariableDebt: "921796950740789225946759761739.877591652610023925",
    totalLiquidity: "1151330432912223779339252158020.722194380634534542",
    borrowUsageRatio: "0.80063631116668836935",
    supplyUsageRatio: "0.80063631116668836935",
    formattedReserveLiquidationBonus: "-1",
    supplyAPY: "1.71828178536097082126",
    variableBorrowAPY: "0",
    formattedAvailableLiquidity: "229533482171434553392492396280.844602728024510617",
    unborrowedLiquidity: "229533482171434553392492396280.844602728024510617",
    formattedBaseLTVasCollateral: "0",
    supplyAPR: "1",
    variableBorrowAPR: "0",
    formattedReserveLiquidationThreshold: "0",
    debtCeilingUSD: "50000000000000000000000000",
    isolationModeTotalDebtUSD: "70000000000000000000000000",
    availableDebtCeilingUSD: "-20000000000000000000000000",
    isIsolated: true,
    eModes: [],
    totalLiquidityUSD: "1.068385975928604201893854879128800434442679821496737320765299698051278822837884801406901131e+70",
    availableLiquidityUSD: "-8.54692638371598423347561816384560177205478079302612741595703291838310883394210617208840653e+69",
    totalDebtUSD: "8.55388606669699983751921803330896362729454610816656033864901211299164234132429036510205278e+69",
    totalVariableDebtUSD: "8.55388606669699983751921803330896362729454610816656033864901211299164234132429036510205278e+69",
    formattedPriceInMarketReferenceCurrency: "9279577308020805391466492617815806986353.75353295",
    priceInUSD: "9.27957730802080539146649261781580698635375353295e+39",
    borrowCapUSD: "6.9596829810156040435998694633618552397653151497125e+66",
    supplyCapUSD: "0",
    unbackedUSD: "4.639788654010402695733246308907903493176876766475e+66",
  }, {
    originalId: 1,
    id: "1-0x0f921c39efd98809fe6d20a88a4357454578987a-0x61361e89ef2a698347004275a940c31108edf712",
    underlyingAsset: "0x0f921c39efd98809fe6d20a88a4357454578987a",
    name: "Merlin BTC",
    symbol: "M-BTC",
    decimals: 18,
    baseLTVasCollateral: "0",
    reserveLiquidationThreshold: "0",
    reserveLiquidationBonus: "0",
    reserveFactor: "0.3",
    usageAsCollateralEnabled: false,
    borrowingEnabled: false,
    isActive: false,
    isFrozen: true,
    liquidityIndex: "0",
    variableBorrowIndex: "1000000000000000000000000000",
    liquidityRate: "1000000000000000000000000000",
    variableBorrowRate: "0",
    lastUpdateTimestamp: 0,
    aTokenAddress: "0x000000000000000000295bE96E64066972000000",
    variableDebtTokenAddress: "0x0000000000000000000000000000000066e1f676",
    interestRateStrategyAddress: "0x5e5914a018D7ee9C93c6727E5c7e5aEEBEa1FBC6",
    availableLiquidity: "280805792195661178136500382387634691968631034113",
    totalScaledVariableDebt: "671733539153353891568303153103.253286748398033963",
    priceInMarketReferenceCurrency: "927957730802080539146649261781580698635375353295",
    priceOracle: "0x00000000000000000000000000000A4806de2143",
    variableRateSlope1: "0",
    variableRateSlope2: "0",
    baseVariableBorrowRate: "0",
    optimalUsageRatio: "0",
    isPaused: true,
    debtCeiling: "50000000000000000000000000",
    borrowCap: "750000000000000000000000000",
    supplyCap: "0",
    borrowableInIsolation: false,
    accruedToTreasury: "30000000000000000000000000",
    unbacked: "500000000000000000000000000",
    isolationModeTotalDebt: "70000000000000000000000000",
    debtCeilingDecimals: 0,
    isSiloedBorrowing: true,
    flashLoanEnabled: true,
    virtualAccActive: false,
    virtualUnderlyingBalance: "0",
    totalDebt: "671733539153353891568303153103.253286748398033963",
    totalVariableDebt: "671733539153353891568303153103.253286748398033963",
    totalLiquidity: "952539331349015069704803535490.887978717029068076",
    borrowUsageRatio: "0.7052029423310263684",
    supplyUsageRatio: "0.70520294233102636839",
    formattedReserveLiquidationBonus: "-1",
    supplyAPY: "1.71828178536097082126",
    variableBorrowAPY: "0",
    formattedAvailableLiquidity: "280805792195661178136500382387.634691968631034113",
    unborrowedLiquidity: "280805792195661178136500382387.634691968631034113",
    formattedBaseLTVasCollateral: "0",
    supplyAPR: "1",
    variableBorrowAPR: "0",
    formattedReserveLiquidationThreshold: "0",
    debtCeilingUSD: "50000000000000000000000000",
    isolationModeTotalDebtUSD: "70000000000000000000000000",
    availableDebtCeilingUSD: "-20000000000000000000000000",
    isIsolated: true,
    eModes: [],
    totalLiquidityUSD: "8.83916236418363122265868052878303784173689086519384145279506410679416836079730382009573106e+69",
    availableLiquidityUSD: "-6.22644362398295237949037667596821221116820294906597332503274398664922619053044169477159909e+69",
    totalDebtUSD: "6.23340330696396798353397654543157406640796826420640624772472318125775969791262588778524534e+69",
    totalVariableDebtUSD: "6.23340330696396798353397654543157406640796826420640624772472318125775969791262588778524534e+69",
    formattedPriceInMarketReferenceCurrency: "9279577308020805391466492617815806986353.75353295",
    priceInUSD: "9.27957730802080539146649261781580698635375353295e+39",
    borrowCapUSD: "6.9596829810156040435998694633618552397653151497125e+66",
    supplyCapUSD: "0",
    unbackedUSD: "4.639788654010402695733246308907903493176876766475e+66",
  }
]
```
