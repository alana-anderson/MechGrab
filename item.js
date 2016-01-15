// Selling items
var sellingItem = function(title, author, domain, url, created, comments) {
	this.title = title;
	this.author = author;
	this.domain = domain;
	this.url = url;
	this.created = created;
	this.comments = comments;

	this.hurry = function() {
		if (this.comments < 2){
		    console.log('Get there first!');
		}
	}
}

module.exports = sellingItem;