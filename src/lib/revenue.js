import moment from 'moment'

const calRevenueList = (paymentList = [], user_id = '', format = "MM-DD") => {
  console.log(paymentList, "paymentlist")
  let newArr = paymentList.reduce((acc, cur) => {
    let key = moment(cur?.pay_date).format(format);
    if(!acc[key]) {
      acc[key] = []
    }
    acc[key].push(cur);
    return acc
  }, {});
  let newItems = [];
  Object.keys(newArr).forEach(key => {
    const sum = (newArr?.[key]??[]).reduce((acc, cur) => {
      acc = acc + (cur?.pay_from === user_id ? (-1)*Number(cur?.pay_amount??0) : Number(cur?.pay_amount??0));
      return acc;
    },0).toFixed(6) 
    newItems = [...newItems, {pay_date: key, pay_amount: Number(sum)} ];
    return newItems
  }) 
  return newItems
}

// Note: Calculate the total Revuenue
const calTotalRevenue = (paymentList = [], user_id = '') => {
  const tmpRevenue = user_id
    ? (paymentList ?? []).reduce(
        (a, { pay_from, pay_amount }) =>
          a +
          (pay_from === user_id
            ? -1 * Number(pay_amount ?? 0)
            : Number(pay_amount ?? 0)),
        0,
      )
    : 0
  return tmpRevenue
}

// Note: Calculate the total Earning
const calTotalEarning = (paymentList = [], user_id = '') => {
  const tmpRevenue = user_id
    ? (paymentList ?? []).reduce(
        (a, { pay_from, pay_amount }) =>
          a + (pay_from === user_id ? 0 : Number(pay_amount ?? 0)),
        0,
      )
    : 0
  return tmpRevenue
}

const revenue = {
  calTotalRevenue: calTotalRevenue,
  calTotalEarning: calTotalEarning,
  calRevenueList: calRevenueList,
}

export default revenue
