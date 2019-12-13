// CRUD

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database');
        }

        console.log('Connected correctly!');
        const db = client.db(databaseName);
        db.collection('tasks')
            .deleteOne({
                completed: true,
            })
            .then(res => {
                console.log(res.deletedCount);
            })
            .catch(err => {
                console.log(err);
            });
    }
);
