var AWS = require("aws-sdk");

AWS.config.update({
    region: "ap-northeast-1"
  });
  
var docClient = new AWS.DynamoDB.DocumentClient();

var table = "ironman";

// Update the item, unconditionally,

var params = {
    TableName:table,
    Key:{
        "memberCode": "blackie1019"
    },
    UpdateExpression: "set LastName = :n",
    ExpressionAttributeValues:{
        ":n":"Tsai"
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});