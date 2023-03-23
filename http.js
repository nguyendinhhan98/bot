const axios = require("axios");
// const axiosRetry = require("axios-retry");
const http = axios.create({
  baseURL: "https://chat.runsystem.vn/api/v4/",
  timeout: 5000*6,
  headers: {
    "content-type": "text/plain;charset=UTF-8",
    "x-csrf-token": "a69bmqnfr7de5gqqfsmp3rp6ca",
    authority: "chat.runsystem.vn",
    accept: "*/*",
    "x-requested-with": "XMLHttpRequest",
    origin: "chat.runsystem.vn",
    refer: "chat.runsystem.vn",
    cookie:
      "rl_anonymous_id=%2265a6f871-bed1-4495-8feb-bb7de02be626%22; rl_user_id=%22%22; route=1680656574.776.2342.434647|3102a158d3c9caefdd094ed096691afb; MMAUTHTOKEN=q7eewawpajb5uetrxbmsjrob4y; MMUSERID=xtpdp43bmbd5ucmj85uhordbbr; MMCSRF=a69bmqnfr7de5gqqfsmp3rp6ca"
  },
});

// axiosRetry(http, {
//   retries: 3, // số lần retry tối đa
//   retryDelay: (retryCount) => {
//     return retryCount * 5000; // thời gian chờ giữa các lần retry (đơn vị: milliseconds)
//   },
//   retryCondition: (error) => {
//     return (
//       error.code === "ECONNABORTED" || // retry nếu timeout
//       error.response.status >= 500
//     ); // retry nếu lỗi server
//   },
// });


module.exports = http