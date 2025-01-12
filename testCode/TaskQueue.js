// task()
//   .add(() => { console.log('task1'); })
//   .wait(2000)
//   .add(() => { console.log('task2'); })
//   .start()

class TaskQueue {


  constructor() {
    this.tasks = [];
  }

  // 添加任务
  add(task) {
    this.tasks.push(() => {
      return new Promise((resolve, reject) => {
        task();
        resolve();
      })
    })
    return this;
  }

  wait(time) {
    this.tasks.push(() => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
      })
    })
    return this;
  }

  start() {
    let promise = Promise.resolve()
    this.tasks.forEach(task => {
      promise = promise.then(() => task())
    })
    return promise
  }

}

let taskQueue = new TaskQueue();

taskQueue.add(() => { console.log('task1'); })
.wait(2000)
.add(() => { console.log('task2'); })
.start()