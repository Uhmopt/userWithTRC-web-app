import axios from 'axios'
import notification from 'lib/notification'
import moment from 'moment'

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
  const user = JSON.parse(localStorage.getItem('level-store'))?.auth?.user ?? {}
  const amount = Number(neccesary_amount ?? 0) + Number(user?.user_rid ?? 2000)
  console.log(data?.amount, amount)
  const walletAddress =
    JSON.parse(localStorage.getItem('level-store'))?.payment
      ?.superior_wallet_address ?? ''
  if (data?.to !== walletAddress) {
    notification('error', 'Wallet address not matched.')
    return false
  }
  data = {
    ...data,
    from_user_id: user?.user_id ?? 0,
  }
  return data
}
// Note: Get the Const items of user table
export const payTableItems = () => {
  const userItems = [
    {
      label: 'ID',
      key: 'user_rid',
    },
    {
      label: 'E-mail',
      key: 'user_email',
    },
    {
      label: 'Amount',
      key: 'pay_amount',
    },
    {
      label: 'USDT Address',
      key: 'user_wallet_address',
    },
    {
      label: 'Type',
      key: 'pay_level',
    },
    {
      label: 'Application time',
      key: 'pay_register_time',
    },
    {
      label: 'Upgrade time',
      key: 'pay_time',
    },
  ]
  return userItems
}

// Note: Get the Const items of user table
export const upgradeTableItems = () => {
  const upgradeItems = [
    {
      label: 'Applicant ID',
      key: 'user_rid',
    },
    {
      label: 'Type',
      key: 'user_level',
    },
    {
      label: 'Upper layer ID',
      key: 'upper_id',
    },
    {
      label: 'Amount',
      key: 'pay_amount',
    },
    {
      label: 'Upperlayer wallet address',
      key: 'upper_wallet',
    },
    {
      label: 'State',
      key: 'pay_state',
    },
    {
      label: 'Application time',
      key: 'pay_time',
    },
    {
      label: 'Upgrade time',
      key: 'pay_upgrade_time',
    },
    {
      label: 'Operating',
      key: 'operation',
    },
  ]
  return upgradeItems
}

