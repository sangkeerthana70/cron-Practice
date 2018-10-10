const CronJob = require('cron').CronJob;

const sortNames = (names) => {
    const sortWorker = new CronJob(
        "* * * * *",
        function () {
            this.stop();
            console.log("sorted names : " + names.sort());
        },
        null,
        false,
        "America/New_York"
    );
    sortWorker.start();
}

module.exports = sortNames;