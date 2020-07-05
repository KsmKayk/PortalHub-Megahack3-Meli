require("dotenv").config();
const bcrypt = require("bcrypt");
const Airtable = require('airtable');
const saltRounds = 10

let AirApi = process.env.airtableapikey;
const baseUser = new Airtable({ apiKey: AirApi }).base('applyzD2lWXnyGHWs');
const baseCourier = new Airtable({ apiKey: AirApi }).base('app9NtenQvUwVgU5d');

async function airtableGet(Email) {
  return new Promise((accept, reject) => {
    baseUser("Users")
      .select({
        view: "Grid view",
        filterByFormula:`email = "${Email}"`
      })
      .firstPage(function (err, records) {
        if (err) {
          return reject(err);
        }
        let air = [];
        records.forEach(function (record) {
          air.push(record.fields);
        });
        return accept(air);
      });
  });
}

module.exports = {
  async store(req, res) {
    const {Email, Password} = req.body
    const recorded = await airtableGet(Email)

      async function checkPassword(recordedPassword, password) {
      return new Promise((accept, reject) => {
        bcrypt.compare(password, recordedPassword, function(err, result) {
          return accept(result)
        })
      })
    }

    if(recorded != []) {
      const recordedPassword = recorded[0].Password
      let login = await checkPassword(recordedPassword, Password)
      if(login === true) {
        res.json(login)
      }
      if(login === false) {
        res.json(login)
      }
    }
    
  }
}