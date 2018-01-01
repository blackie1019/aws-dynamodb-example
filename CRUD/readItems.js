var AWS = require("aws-sdk");

AWS.config.update({
    region: "ap-northeast-1"
  });
  
var docClient = new AWS.DynamoDB.DocumentClient();

var table = "ironman";

var params = {
    TableName: table,
    Key:{
        "memberCode": "blackie1019"
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});