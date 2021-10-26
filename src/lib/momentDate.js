import moment from "moment";

const timestampToDate = (time='') => {
  const resDate = time ? moment.unix(time).format("YYYY-MM-DD") : moment.unix().format("YYYY-MM-DD");
  return resDate;
}

const momentDate = {
  timestampToDate: timestampToDate
}

export default momentDate


