var http = require('http');
var util = require('util');
var sellingItem = require('./item');

var subModule = "mechmarket";
var sellingList = []; // declare array

// get updated list : limted to recent 10
function getSellingList() {
	// get json url
  	var url = "http://www.reddit.com/r/" + subModule + "/new.json?limit=10?sort=new&restrict_sr=on&q=flair%3ASelling";

  	var request = http.get(url, function(res) {
  		// initialize json
    	var json = '';
    	res.on('data', function(chunk) {
      		json += chunk;
    	});

    	res.on('end', function() {
    		// parse json subreddit response 
      		var subResponse = JSON.parse(json);
      		subResponse.data.children.forEach(function(child) {
        // check if belongs to mechmarket selling
				if(child.data.domain === 'self.mechmarket' && child.data.link_flair_text === 'Selling') {
					var title = child.data.title,
						author = child.data.author,
						domain = child.data.domain,
						url = child.data.url,
						created =  util.format(child.data.created),
						comments = child.data.num_comments;
					
					// push new item into array 
					var item = new sellingItem(title, author, domain, url, created, comments);
					sellingList.push(item);
	  				// check console.log(item);
				}
      		});
    	})
  	});
 	request.on('error', function(err) {
    	console.log(err);
  	});
}

// invoke reddit json response
getSellingList();
// send selling list
module.exports = {sellingList: sellingList}
