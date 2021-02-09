import moment from "moment";

const getDiff = async (time1, time2, format = "second") => {
  let diff = time1.diff(time2);

  switch (format) {
    case "second":
      diff = diff / 1000;
      break;
    case "minute":
      diff = diff / 1000 / 60;
      break;
    case "hour":
      diff = diff / 1000 / 3600;
      break;
    case "day":
      diff = diff / 1000 / 3600 / 24;
      break;
    default:
      break;
  }

  return Math.abs(diff);
};

const main = async () => {
  const now = moment("2021-02-09 11:46:00");

  const time1 = moment("2021-02-09 13:46:00");
  console.log(await getDiff(now, time1, "hour"));
};

main();
