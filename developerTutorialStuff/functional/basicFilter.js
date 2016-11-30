function getShortMessages(messages){
	var shortMessages = messages.filter(function(currMessage){
		return currMessage.message.length < 50
	}).map(function(basicObj){
		return basicObj.message
	})
	return shortMessages
}

module.exports = getShortMessages 