import moment from 'moment'

class ReveService {
  calRevenueList = (paymentList = [], user_id = '', format = 'MM-DD') => {
    let newArr = paymentList.reduce((acc, cur) => {
      let key = moment(cur?.pay_date).format(format)
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(cur)
      return acc
    }, {})
    let newItems = []
    Object.keys(newArr).forEach((key) => {
      const sum = (newArr?.[key] ?? [])
        .reduce((acc, cur) => {
          acc =
            acc +
            (Number(cur?.pay_from ?? 0) === Number(user_id)
              ? -1 * Number(cur?.pay_amount ?? 0)
              : Number(cur?.pay_amount ?? 0))
          return acc
        }, 0)
        .toFixed(6)
      newItems = [...newItems, { pay_date: key, pay_amount: Number(sum) }]
      return newItems
    })
    return newItems
  }

  // Note: Calculate the total Revuenue
  calTotalRevenue = (paymentList = [], user_id = '') => {
    const tmpRevenue = user_id
      ? (paymentList ?? []).reduce(
          (a, { pay_from, pay_amount }) =>
            a +
            (Number(pay_from) === Number(user_id)
              ? -1 * Number(pay_amount ?? 0)
              : Number(pay_amount ?? 0)),
          0,
        )
      : 0
    return tmpRevenue
  }

  // Note: Calculate the total Earning
  calTotalEarning = (paymentList = [], user_id = '') => {
    const tmpRevenue = user_id
      ? (paymentList ?? []).reduce(
          (a, { pay_from, pay_amount }) =>
            a +
            (Number(pay_from) === Number(user_id)
              ? 0
              : Number(pay_amount ?? 0)),
          0,
        )
      : 0
    return tmpRevenue
  }
}

export default new ReveService()
