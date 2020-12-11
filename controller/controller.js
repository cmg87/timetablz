const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');
const URI = 'mongodb://localhost:27010/timetablz';


mongoose.connect(URI, {useNewUrlParser: true});
const connection = mongoose.connection;

//test connection
connection.on('error', function (err) {
    console.log('Database Error: ' + err)
});

connection.once('open', function () {
    console.log('Mogno Connection Sucess!')
})

//route to get full schedule
router.get('/API/schedule', async (req, res) => {
    // let dates = req.data.dates;
    let dateStart = new Date('12/2/2020');
    let dateEnd = new Date('12/3/2020');
    // console.log(dates);
    let data = await db.Schedule.find({
        date: {
            $gte: dateStart, //gte greater than or equal to
            $lte: dateEnd //lte less than or equal to
        }
    });
    // console.log(data)
    res.send(data);
})

router.post('/API/editSchedule', (req, res) => {
    let date = new Date('12/3/2020');
    const day = {
        date: date,
        employees: [{name: 'candice', role: "bar", shift: "volume", time: "6:00pm"}, {
            name: 'todd',
            role: "shift leader",
            shift: "mid",
            time: "11:00am"
        }]
    };
    db.Schedule.findOneAndUpdate({
        date: date
    }, day, {new: true})
        .then(() => res.send("schedule updated"))
    // res.send("schedule updated");
});

module.exports = router;


// let date = new Date("12/2/2020")
// const day = {
//     date : date,
//     employees : [{name: 'alice', role:"bar", shift:"volume",time:"6:00pm"},{name: 'bob', role:"shift leader", shift:"mid",time:"11:00am"}]
// }
// db.Schedule.create(day);

