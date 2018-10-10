const CronJob = require('cron').CronJob;

const functionSortWorker = (names) => {

    var sortWorker = new CronJob(
        () => {
            var sortNames = [];
            var sortedNames = sortNames.sort();
            console.log("The names are sorted " + sortedNames);
        }
    ) 
}

module.exports = functionSortWorker;