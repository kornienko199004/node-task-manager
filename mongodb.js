// CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

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
        db.collection('tasks').insertMany(
            [
                {
                    description: 'First task',
                    completed: false,
                },
                {
                    description: 'Second task',
                    completed: false,
                },
                {
                    description: 'Third task',
                    completed: false,
                },
            ],
            (error, result) => {
                if (error) {
                    return console.log('Unable to insert task');
                }

                console.log(result.ops);
            }
        );
        // db.collection('users').insertMany([
        //     {
        //         name: 'Jen',
        //         age: 28,
        //     },
        //     {
        //         name: 'Gunter',
        //         age: 27,
        //     }],
        //     (error, result) => {
        //         if (error) {
        //             return console.log('Unable to insert user');
        //         }

        //         console.log(result.ops);
        //     });
        // db.collection("users").insertOne(
        //   {
        //     name: "Aleksey",
        //     age: 29
        //   },
        //   (error, result) => {
        //       if (error) {
        //           return console.log('Unable to insert user');
        //       }

        //       console.log(result.ops);
        //   }
        // );
    }
);
