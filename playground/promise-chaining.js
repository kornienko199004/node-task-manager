require('../src/db/mongoose');

const User = require('../src/models/user');

// User.findByIdAndUpdate('5df331e4e9382e466c8a2e2a', { age: 1 })
//     .then(user => {
//         console.log(user);
//         return User.countDocuments({ age: 1 });
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(e => {
//         console.log(e);
    // });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
};

updateAgeAndCount('5df331e4e9382e466c8a2e2a', 2).then((count) => {
    console.log(count);
}).catch((err) => {
    console.log(err);
});