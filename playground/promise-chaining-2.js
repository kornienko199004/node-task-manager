require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('5df9c18f8bedfd2b6cac1f28')
//     .then(task => {
//         console.log(task);
//         return Task.countDocuments({ completed: false });
//     })
//     .then(res => {
//         console.log(res.length);
//     })
//     .catch(e => {
//         console.log(e);
//     });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount('5df9c18f8bedfd2b6cac1f28', false).then((count) => {
  console.log(count);
}).catch((err) => {
  console.log(err);
});
