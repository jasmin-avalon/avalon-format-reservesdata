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

```json
[
  {
    originalId: 0,
    id: "1-0x541fd749419ca806a8bc7da8ac23d346f2df8b77-0x64eaf7cde96277ed9253b8268dfc85eb2eb0d147",
    underlyingAsset: "0x541fd749419ca806a8bc7da8ac23d346f2df8b77",
    name: "Solv BTC",
    symbol: "SolvBTC",
    decimals: 18,
    baseLTVasCollateral: "0",
    reserveLiquidationThreshold: "8250",
    reserveLiquidationBonus: "10500",
    reserveFactor: "0.1",
    usageAsCollateralEnabled: false,
    borrowingEnabled: true,
    isActive: false,
    isFrozen: true,
    liquidityIndex: "0",
    variableBorrowIndex: "1000000000000000000000000000",
    liquidityRate: "1000000000000000000000000000",
    variableBorrowRate: "0",
    lastUpdateTimestamp: 0,
    aTokenAddress: "0x000000000000000000295bE96E64066972000000",
    variableDebtTokenAddress: "0x0000000000000000000000000000000067230293",
    interestRateStrategyAddress: "0x8C9510db49b00F44e9C358016E95C8103b362bDe",
    availableLiquidity: "777952722801377564504164497216805491018655809812",
    totalScaledVariableDebt: "1419759553703148789118525756107.359898283570611217",
    priceInMarketReferenceCurrency: "355801208160473215146940912090930256332775648777",
    priceOracle: "0x00000000000000000000000000038D7eA4c68000",
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
    totalDebt: "1419759553703148789118525756107.359898283570611217",
    totalVariableDebt: "1419759553703148789118525756107.359898283570611217",
    totalLiquidity: "2197712276504526353622690253324.165389302226421029",
    borrowUsageRatio: "0.64601702819865223044",
    supplyUsageRatio: "0.64601702819865223044",
    formattedReserveLiquidationBonus: "0.05",
    supplyAPY: "1.71828178536097082126",
    variableBorrowAPY: "0",
    formattedAvailableLiquidity: "777952722801377564504164497216.805491018655809812",
    unborrowedLiquidity: "777952722801377564504164497216.805491018655809812",
    formattedBaseLTVasCollateral: "0",
    supplyAPR: "1",
    variableBorrowAPR: "0",
    formattedReserveLiquidationThreshold: "0.825",
    debtCeilingUSD: "50000000000000000000000000",
    isolationModeTotalDebtUSD: "70000000000000000000000000",
    availableDebtCeilingUSD: "-20000000000000000000000000",
    isIsolated: true,
    eModes: [],
    totalLiquidityUSD: "7.81948683169414449065372520783633878183212799754282700662727515325151966599227926012476231e+69",
    availableLiquidityUSD: "-5.04885313598834237979078719102203436444562221017169464883797791572240547304077150676160384e+69",
    totalDebtUSD: "5.05152164504954592890438924786271634136811802753396413675637318357093606391986220419827609e+69",
    totalVariableDebtUSD: "5.05152164504954592890438924786271634136811802753396413675637318357093606391986220419827609e+69",
    formattedPriceInMarketReferenceCurrency: "3558012081604732151469409120909302563327.75648777",
    priceInUSD: "3.55801208160473215146940912090930256332775648777e+39",
    borrowCapUSD: "2.6685090612035491136020568406819769224958173658275e+66",
    supplyCapUSD: "0",
    unbackedUSD: "1.779006040802366075734704560454651281663878243885e+66",
  }, {
    originalId: 1,
    id: "1-0xcc0966d8418d412c599a6421b760a847eb169a8c-0x64eaf7cde96277ed9253b8268dfc85eb2eb0d147",
    underlyingAsset: "0xcc0966d8418d412c599a6421b760a847eb169a8c",
    name: "SolvBTC Babylon",
    symbol: "SolvBTC.BBN",
    decimals: 18,
    baseLTVasCollateral: "0",
    reserveLiquidationThreshold: "8250",
    reserveLiquidationBonus: "10500",
    reserveFactor: "0.1",
    usageAsCollateralEnabled: false,
    borrowingEnabled: true,
    isActive: false,
    isFrozen: true,
    liquidityIndex: "0",
    variableBorrowIndex: "1000000000000000000000000000",
    liquidityRate: "1000000000000000000000000000",
    variableBorrowRate: "0",
    lastUpdateTimestamp: 0,
    aTokenAddress: "0x000000000000000000295bE96E64066972000000",
    variableDebtTokenAddress: "0x0000000000000000000000000000000067230293",
    interestRateStrategyAddress: "0x2e7dc6260112F2d496A9Ff7D0A5CC38B3eaddDba",
    availableLiquidity: "1272585052797089419780949894676963230626864531815",
    totalScaledVariableDebt: "994273572094464506946429085435.159194458933821761",
    priceInMarketReferenceCurrency: "355801208160473215146940912090930256332775648777",
    priceOracle: "0x00000000000000000000000000038D7eA4c68000",
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
    totalDebt: "994273572094464506946429085435.159194458933821761",
    totalVariableDebt: "994273572094464506946429085435.159194458933821761",
    totalLiquidity: "2266858624891553926727378980112.122425085798353576",
    borrowUsageRatio: "0.43861296032170085604",
    supplyUsageRatio: "0.43861296032170085604",
    formattedReserveLiquidationBonus: "0.05",
    supplyAPY: "1.71828178536097082126",
    variableBorrowAPY: "0",
    formattedAvailableLiquidity: "1272585052797089419780949894676.963230626864531815",
    unborrowedLiquidity: "1272585052797089419780949894676.963230626864531815",
    formattedBaseLTVasCollateral: "0",
    supplyAPR: "1",
    variableBorrowAPR: "0",
    formattedReserveLiquidationThreshold: "0.825",
    debtCeilingUSD: "50000000000000000000000000",
    isolationModeTotalDebtUSD: "70000000000000000000000000",
    availableDebtCeilingUSD: "-20000000000000000000000000",
    isIsolated: true,
    eModes: [],
    totalLiquidityUSD: "8.06551037465403847946665886688274938673484466960322515950806016494512487777421322456251838e+69",
    availableLiquidityUSD: "-3.53496887287119483622936122884647873055628420182310327299328446189366223146225437092557631e+69",
    totalDebtUSD: "3.53763738193239838534296328568716070747878001918537276091167972974219282234134506836224856e+69",
    totalVariableDebtUSD: "3.53763738193239838534296328568716070747878001918537276091167972974219282234134506836224856e+69",
    formattedPriceInMarketReferenceCurrency: "3558012081604732151469409120909302563327.75648777",
    priceInUSD: "3.55801208160473215146940912090930256332775648777e+39",
    borrowCapUSD: "2.6685090612035491136020568406819769224958173658275e+66",
    supplyCapUSD: "0",
    unbackedUSD: "1.779006040802366075734704560454651281663878243885e+66",
  }
]
```
