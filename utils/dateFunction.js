const moment = require('moment');
const normalDate = moment().format()
const utcDate = moment().utc()
const unixDate = moment.unix()

module.exports = {
    utcDate, 
    normalDate,
    unixDate
}