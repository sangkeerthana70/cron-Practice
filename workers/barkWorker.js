var CronJob = require('cron').CronJob;

    var barkWorker = null;

    const controlBarkWorker = (num = 5,operation) => {
        console.log("num = " + num + "; operation = " + operation);

        if (operation == 'start') {
            barkWorker = new CronJob(
                "*/" + num + "  * * * * *",
                function() {
                    console.log("barkWorker starting every "+ num + " seconds");
                },
                null,
                false,
                "America/New_York"
            );
            barkWorker.start();
        }

        if (operation == 'stop') {
            barkWorker.stop();
        }

        if (operation == 'status') {
            if (barkWorker == null) {
                return false;
            }
            else {
                return barkWorker.running;
            }
        }
    }

module.exports = controlBarkWorker;
