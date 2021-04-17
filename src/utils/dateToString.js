import Moment from "moment";
export function dateToString(date) {
  if (!date) {
    return "";
  }
  Moment.locale("jp");
  return Moment(date.toDate().toString()).format("YYYY年MM月");
}
