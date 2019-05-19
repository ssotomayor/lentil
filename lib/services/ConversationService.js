'use strict';
const fs = require('fs');
const logger = require('../logger');
const constants = require('../../constants');

exports.readFolders = () => {
	const folders = fs.readdirSync('./lib/data/');
	return folders;
}

exports.readFiles = (dirname, onFileContent, onError) => {
	fs.readdir(dirname, function(err, filenames) {
		if (err) {
			onError(err);
			return;
		}
		filenames.forEach(function(filename) {
			fs.readFile(dirname + filename, 'utf-8', function(err, content) {
				if (err) {
					onError(err);
					return;
				}
				onFileContent(filename, content);
			});
		});
	});
}

const getDate = (ts) => {
	let date = new Date(ts * 1000);
	let hours = date.getHours();
	let minutes = "0" + date.getMinutes();
	let seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

function findUppercase(msg){
	let uppercaseIsNewLineStr = '';
	for(var i = 0; i < msg.length; i++){
		if(msg[i].match(/[A-Z]/) !== null) {
			if(i !== 0) {
				uppercaseIsNewLineStr = msg.substr(0, i) + '\n' + msg.substr(i);
			}
		}
	}
	return uppercaseIsNewLineStr;
}

exports.readConvo = (conversationFolder) => {
	const data = {};
	this.readFiles(`${constants.DATA_FOLDER}/${conversationFolder}/`, function(filename, content) {
		data[filename] = JSON.parse(content);
		let msg = data[filename].message.trim();
		let date = getDate(data[filename].start_time);
		let userId = data[filename].user_id;
		
		logger.logMessage(userId, date, findUppercase(msg));
	}, function(err) {
		throw err;
	});
}
