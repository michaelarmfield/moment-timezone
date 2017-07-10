var moment = module.exports = require("./moment-timezone");
moment.tz.load(require('!json!./data/packed/latest.json'));