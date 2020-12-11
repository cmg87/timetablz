const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const ScheduleSchema = new Schema({
    date : {type: Date},
    employees: [{name: String, role: String, shift: String, time: String}]
});

const Schedule = mongoose.model("Schedule", ScheduleSchema)

module.exports = Schedule