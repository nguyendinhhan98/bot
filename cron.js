const cron = require("node-cron");
const http = require("./http.js");
const constants = require("./const.js");
const request = require("request");

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function getQuotes() {
  return new Promise((resolve, reject) => {
    request.get(
      {
        url: "https://api.api-ninjas.com/v1/quotes?category=" + randomElement(constants.categories),
        headers: {
          "X-Api-Key": "eVZVp4dSdHP2ciEwvThvSw==yPNQX8og3IqgjHHs",
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        else if (response.statusCode != 200) reject(response.statusCode);
        else resolve('"' + JSON.parse(body)[0].quote + '" - ' + JSON.parse(body)[0].author);
      }
    );
  });
}

function isWeekend () {
  const today = new Date();
  return today.getDay() === 5
}

const setSchedule = () => isWeekend() ? "15 16 * * 1-5" : "15 17 * * 1-5"

const logworkReportTaskFrontEnd = cron.schedule(setSchedule(), async () => {
  //an nhau front-end
  let payloadFrontEnd = {
    message: `@all \n------------------------------ **I'M A BOT-NO REPLY!**---------------------------------\n${isWeekend ? 'NAY CUỐI TUẦN RỒI ' : ''}MỌI NGƯỜI ƠI, XIN HÃY :alphabet-white-l: :alphabet-white-o: :alphabet-white-g: :alphabet-white-w: :alphabet-white-o: :alphabet-white-r: :alphabet-white-k: ĐỂ BẢO VỆ 10.000 VNĐ TRONG TÚI CỦA MỖI CHÚNG TA NHÉ :alphabet-white-exclamation: \n-------------------------------------------------------------------------------------------------------------------------------------------\n> ${await getQuotes()}`,
    channel_id: "bouia7opdbfifc6jraotmtteqa",
    user_id: "xtpdp43bmbd5ucmj85uhordbbr",
  };
  await http.post("posts", payloadFrontEnd).then(async (res) => {
    for (const emoji of constants.emojiUIT) {
      let payload = {
        emoji_name: emoji,
        post_id: res.data.id,
        user_id: "xtpdp43bmbd5ucmj85uhordbbr",
      };
      await http.post("reactions", payload);
    }
  });
});

logworkReportTaskFrontEnd.start();

// async function postReactions() {
//   for (const emoji of constants.emoji) {
//     let payload = {
//       emoji_name: emoji,
//       post_id: "sjfsq6mzxiyjfpn5bw49z6p67a",
//       user_id: "xtpdp43bmbd5ucmj85uhordbbr",
//     };
//     await http.post("reactions", payload);
//   }
// }

// postReactions()


// https://chat.runsystem.vn/api/v4/emoji?page=0&per_page=51&sort=name
// https://chat.runsystem.vn/api/v4/emoji/search term: ""

// async function getEmoji(emoji) {
//   await http.post("emoji/search", {
//     term: emoji,
//   }).then((res) => {
//     let newData = []
//     newData = res.data.map((el) => el.name)
//     console.log(111, newData);
//   })
// }

// getEmoji("parrot")
