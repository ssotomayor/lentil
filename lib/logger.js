chalk = require('chalk')
module.exports = {
	logMessage: (id, date, msg) => {
		console.log(chalk.whiteBright(`${id} - `) + 
		chalk.yellowBright.bold(`${date}: `) + 
		chalk.whiteBright(`${msg} \n`));
	},
	separator: () => {
		console.log(chalk.whiteBright(`\n======================================================================`)); 
	}
}
