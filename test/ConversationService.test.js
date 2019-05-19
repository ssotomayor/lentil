var assert = require('assert');
var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var expect = require('chai').expect;
const ConversationService = require('../lib/services/ConversationService');

let convoFolder;
describe('Get the folders with the conversations', function() {
	it('Should return a non-empty array', function() {
		expect(ConversationService.readFolders()).to.not.be.empty;
		convoFolder = ConversationService.readFolders()[0];
	});
});