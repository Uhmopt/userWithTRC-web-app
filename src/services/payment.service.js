import axios from 'axios'

class RevenueService {
  // Note: Get transaction information by hash code
  getTransInfo = async (hash = '') => {
    if (!hash) {
      return false
    }
    var config = {
      method: 'get',
      url: 'https://apilist.tronscan.org/api/transaction-info?hash=' + hash,
      headers: {},
    }
    await axios(config)
      .then(function (response) {
        const data = response?.data ?? {}
        if (Object.keys(data).length === 0) {
          return false
        }
        const transInfo = {
          confirmed: data?.confirmed ?? false,
          result: data?.contractRet ?? 'Failed',
          amount:
            Number(data?.tokenTransferInfo?.amount_str ?? 0) /
            Math.pow(10, data?.tokenTransferInfo?.decimals ?? 6),
          from: data?.tokenTransferInfo?.from_address ?? '',
          to: data?.tokenTransferInfo?.to_address ?? '',
          symbol: data?.tokenTransferInfo?.symbol ?? 'USDT',
        }
        console.log(transInfo, 'Transaction Infomation')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

}

export default new RevenueService()
