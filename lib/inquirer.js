const inquirer = require('inquirer');
const await = require('asyncawait/await');
const fs = require('fs');
const ConversationService = require('./services/ConversationService')

module.exports = {
	askCommands: () => {
		const questions = [
			{
				name: 'conversation',
				type: 'list',
				message: 'Choose Conversation:',
				choices: ConversationService.readFolders(),
			},
		];
		return inquirer.prompt(questions);
	},
}
