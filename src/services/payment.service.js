import axios from 'axios'
import moment from 'moment'
import notification from 'lib/notification'

// Note: Get transaction information by hash code
export const getTransInfo = async (hash = '') => {
	if (!hash) {
		return false
	}
	var config = {
		method: 'get',
		url: 'https://apilist.tronscan.org/api/transaction-info?hash=' + hash,
		headers: {},
	}
	return await axios(config)
		.then(function (response) {
			console.log(response)
			const data = response?.data ?? {}
			if (Object.keys(data).length === 0) {
				return false
			}
			const tmpData = {
				confirmed: data?.confirmed ?? false,
				result: data?.contractRet ?? 'Failed',
				amount: Number(data?.tokenTransferInfo?.amount_str ?? 0),
				from: data?.tokenTransferInfo?.from_address ?? '',
				to: data?.tokenTransferInfo?.to_address ?? '',
				symbol: data?.tokenTransferInfo?.symbol ?? '',
				timestamp: data?.timestamp ?? moment.unix(),
				hash: data?.hash ?? moment.unix(),
			}
			const transInfo = checkHashInfo(tmpData)
			return transInfo
		})
		.catch(function (error) {
			console.log(error)
		})
}
// Note: Check hash information that's result, confirmation, amount and so on
export const checkHashInfo = (data) => {
	
	const neccesary_amount =
		JSON.parse(localStorage.getItem('level-store'))?.payment
			?.neccesary_amount ?? ''
	const user =
		JSON.parse(localStorage.getItem('level-store'))?.auth?.user ?? {}
	const amount =
		Number(neccesary_amount ?? 0) + Number(user?.user_rid ?? 2000)
	console.log( data?.amount , amount )
	const walletAddress =
		JSON.parse(localStorage.getItem('level-store'))?.payment
			?.superior_wallet_address ?? ''
	if (data?.to !== walletAddress) {
		notification('error', 'Wallet address not matched.')
		return false
	}
	if (data?.amount !== amount) {
		notification('error', 'USDT amount is not correct!')
		return false
	}
	data = {
		...data,
		from_user_id: user?.user_id ?? 0
	}
	return data
}
