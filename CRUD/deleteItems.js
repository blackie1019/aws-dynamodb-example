var AWS = require("aws-sdk");

AWS.config.update({
    region: "ap-northeast-1"
  });
  
var docClient = new AWS.DynamoDB.DocumentClient();

var table = "ironman";

var params = {
    TableName:table,
    Key:{
        "memberCode": "David1013"
    }
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
});