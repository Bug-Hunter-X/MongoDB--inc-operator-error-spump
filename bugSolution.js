```javascript
//Correct usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{field: 1}});
```