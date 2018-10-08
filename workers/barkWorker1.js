var CronJob = require('cron').CronJob;
const barkWorker = {
    bw : null,
    start : (num) => { 
        bw = new CronJob(
            '*/' + num +' * * * * *',
            () => {console.log("Barking every " + num + " seconds")},
            null,
            false,
            "America/New_York"
        )
        bw.start();
    },
    stop : () => {
        bw.stop();
    },
    running : () => {
        if (this.bw == null) {
            return false;
        }
        else {
            return this.bw.running;
        }
    }
}
module.exports = barkWorker;