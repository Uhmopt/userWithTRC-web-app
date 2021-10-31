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
  const amount = JSON.parse(sessionStorage.getItem('level-store'))?.payment?.neccesary_amount ?? ''
  const walletAddress = JSON.parse(sessionStorage.getItem('level-store'))?.payment?.superior_wallet_address ?? ''
  const user =  JSON.parse(sessionStorage.getItem('level-store'))?.auth?.user ?? {}
  console.log( amount, walletAddress, user );
  if (data?.from !== user.user_user_wallet_address || data?.to !== user.walletAddress) {
    notification('error', 'Wallet address not matched.')
    return false
  }
  if ( data?.amount < amount ) {
    notification('error', 'USDT amount is not enough')
    return false
  }
  return data
}
