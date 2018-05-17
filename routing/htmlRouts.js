// required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
    // console.log('Enter htmlRoutes.js');
    	
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/test.html'));
	});
	
	app.get('/volunteer', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/volunteerpage.html'));
    });
    
    app.get('/organization', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/organization.html'));
	});
};