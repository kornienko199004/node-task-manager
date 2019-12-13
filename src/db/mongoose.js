const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

const User = mongoose.model('User', {
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});

const me = new User({ name: 'Mike', age: 29 });
me.save()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
