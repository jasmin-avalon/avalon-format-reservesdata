import { UiPoolDataProvider, ChainId } from '@aave/contract-helpers'
import { formatReserves } from '@aave/math-utils'
import dayjs from 'dayjs'

// Use Ethers V5!!!
import { ethers } from 'ethers'

// Taiko RPC URL
const RPC_URL = 'https://rpc.ankr.com/klaytn'
const ADDRESSES_CONFIG = {
	LENDING_POOL_ADDRESS_PROVIDER: '0x61361E89EF2A698347004275A940c31108edf712', // PoolAddressesProvider
	UI_POOL_DATA_PROVIDER: '0xB2A64a0640bd22277de5Bec18f23164EE5dD4928', // UiPoolDataProviderV3
}

// Taiko RPC provider
const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

// Taiko UiPoolDataProvider contract
const poolDataProviderContract = new UiPoolDataProvider({
	uiPoolDataProviderAddress: ADDRESSES_CONFIG.UI_POOL_DATA_PROVIDER,
	provider: provider,
	chainId: ChainId.mainnet,
})

/**
 * Fetches reserves data from the Aave protocol using UiPoolDataProvider contract
 * @dev This function retrieves humanized reserves data from the protocol
 * @param lendingPoolAddressProvider The address of the lending pool address provider contract
 * @returns Raw reserves data containing reservesData and baseCurrencyData
 */
async function fetchContractData(lendingPoolAddressProvider: string) {
	const reserves = await poolDataProviderContract.getReservesHumanized({
		lendingPoolAddressProvider,
	})
	return reserves
}

/**
 * Formats the reserves data from the Aave protocol into a more usable format
 * @dev This function takes raw reserves data and formats it using @aave/math-utils
 * @param reserves The raw reserves data from the protocol containing reservesData and baseCurrencyData
 * @returns Formatted reserves data with calculated fields like APY, liquidity, etc.
 */
async function formatReservesData(reserves: any) {
	// Extract reserves array and base currency data from input
	const reservesArray = reserves.reservesData
	const baseCurrencyData = reserves.baseCurrencyData

	// Get current timestamp for calculations
	const currentTimestamp = dayjs().unix()

	/*
		@param `reserves` Input from [Fetching Protocol Data](#fetching-protocol-data), `reserves.reservesArray`
		@param `currentTimestamp` Current UNIX timestamp in seconds
		@param `marketReferencePriceInUsd` Input from [Fetching Protocol Data](#fetching-protocol-data), `reserves.baseCurrencyData.marketReferencePriceInUsd`
		@param `marketReferenceCurrencyDecimals` Input from [Fetching Protocol Data](#fetching-protocol-data), `reserves.baseCurrencyData.marketReferenceCurrencyDecimals`
	*/
	const formattedPoolReserves = formatReserves({
		reserves: reservesArray,
		currentTimestamp,
		marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
		marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
	})

	return formattedPoolReserves
}

async function main() {
	const reserves = await fetchContractData(ADDRESSES_CONFIG.LENDING_POOL_ADDRESS_PROVIDER)
	const formattedReserves = await formatReservesData(reserves)

	console.log('>> DEBUG: formattedReserves')
	console.log(formattedReserves)
}

main()
