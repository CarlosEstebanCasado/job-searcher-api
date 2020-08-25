var CronJob = require('cron').CronJob;

//Fetch GitHub jobs
const fetchGithub = require('./tasks/fetch-github');

//Fetch another job platform
//

//Starts the cron job
var job = new CronJob(' * * * * *', fetchGithub, null, true, 'Europe/Madrid');
job.start();