const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
  console.log('Server is up on port', port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('5e0303048c528742680d0e58');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);
  const user = await User.findById('5e03022400fd292148fe2f49');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

main();
