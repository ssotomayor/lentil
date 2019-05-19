#!/usr/bin/env node
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const inquirer = require('./lib/inquirer');
const ConversationService = require('./lib/services/ConversationService');

const run = async (function(){
	const commands = await (inquirer.askCommands());
  ConversationService.readConvo(commands.conversation);
  setTimeout(() => {
    run();  
  }, 1000);
})

run();