var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "ironman";

var params = {
    TableName:table,
    Item:{
        "memberCode": "John1010",
        "firstName": "John",
        "LastName": "Wu"
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});