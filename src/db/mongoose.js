const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//     },
//     completed: {
//         type: Boolean,
//     }
// });

// const task = new Task({ description: 'Make homework', completed: false });
// task.save()
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    },
});

const me = new User({ name: 'Mike', age: -1 });
me.save()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
