const process = require('child_process');
var schedule = require('node-schedule');

schedule.scheduleJob('*/15 * * * *', function() {
	console.log('Testing start…');
	process.exec('cypress run');
	process.exec('npm run jest --coverage');
	console.log('Testing done !');
});
