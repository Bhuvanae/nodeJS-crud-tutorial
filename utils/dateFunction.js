const moment = require('moment');
const normalDate = moment().format()
const utcDate = moment().utc()

module.exports = {
    utcDate, 
    normalDate
}