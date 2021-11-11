import moment from 'moment'

export const calRevenueList = (
  paymentList = [],
  user_id = '',
  format = 'MM-DD',
) => {
  if (!Array.isArray(paymentList)) {
    return []
  }
  let newArr = paymentList.reduce((acc, cur) => {
    let key = moment(cur?.pay_time).format(format)
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
    newItems = [
      ...newItems,
      { pay_date: key, pay_amount: Number(sum) / Math.pow(10, 6) },
    ]
    return newItems
  })
  return newItems
}

// Note: Calculate the total Revuenue
export const calTotalRevenue = (paymentList = [], user_id = '') => {
  const tmpRevenue =
    user_id && Array.isArray(paymentList)
      ? (paymentList ?? []).reduce(
          (a, { pay_to, pay_amount }) =>
            a +
            (Number(pay_to) === Number(user_id)
              ? Number(pay_amount ?? 0)
              : 0),
          0,
        )
      : 0
  return tmpRevenue / Math.pow(10, 6)
}

// Note: Calculate the Today Earning
export const calTotalEarning = (paymentList = [], user_id = '') => {
  console.log(paymentList, 'PaymentLIst')
  paymentList = paymentList.filter((payment) => {
    return (
      moment(payment?.pay_time ?? '').format('MM-DD') ===
      moment().format('MM-DD')
    )
  })
  const tmpRevenue =
    user_id && Array.isArray(paymentList)
      ? (paymentList ?? []).reduce(
          (a, { pay_to, pay_amount }) =>
            a +
            (Number(pay_to) === Number(user_id)
              ? Number(pay_amount ?? 0)
              : 0),
          0,
        )
      : 0
  return tmpRevenue / Math.pow(10, 6)
}
