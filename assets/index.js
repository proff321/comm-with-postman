export default {
    "images": {
        "profilePic": require('./images/me.jpg'),
        "postmanLogo": require('./images/pm-logo-horiz.svg'),
        "jmeterLogo": require('./images/jmeter-logo.svg'),
	"meWithSanFranHeart": require('./images/me-san-fran-heart.jpg'),
	"postconDoor": require('./images/postcon-door.jpg')
    },
    "code": {
    	"curlExample": require('raw-loader!./code/curl.example'),
    	"changeSettleExample": require("raw-loader!./code/postman-test-settle.example"),
    	"postmanTestExample": require('raw-loader!./code/postman-test.example')
    },
    "screenShots": {
    	"postman": {
	    "empty": require('./screen-shots/empty-postman-workspace.png'),
	    "envVars": require('./screen-shots/empty-env-vars.png'),
	    "callouts": {
	    	"viewInWeb": require('./screen-shots/postman-callout-view-in-web.png')
	    },
	    "setup": {
	    	"addExample": require('./screen-shots/setup/add-example.png'),
	    	"addHeader": require('./screen-shots/setup/add-header.png'),
	    	"addCollection": require('./screen-shots/setup/create-collection.png'),
	    	"addRequest": require('./screen-shots/setup/create-request.png'),
	    	"addWorkspace": require('./screen-shots/setup/create-workspace.png'),
	    },
	    "mocking": {
	    	"createServer": require('./screen-shots/mocking/create-server.png'),
	    	"mocksList": require('./screen-shots/mocking/mocks-list.png')
	    },
	    "contracts": {
	    	"createCollection": require('./screen-shots/contracts/create-collection.png'),
	    	"createRequest": require('./screen-shots/contracts/create-request.png'),
	    	"addTests": require('./screen-shots/contracts/add-tests.png'),
	    	"testSuccess": require('./screen-shots/contracts/test-success.png'),
	    }
	}
    }
}
