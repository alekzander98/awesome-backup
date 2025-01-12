//实现一个 scheduler.add方法，模拟一个异步串行队列，最大并发数是2
//2秒后打印1
//5秒打印3
//6秒打印2
//13秒打印4

class Scheduler {
  constructor(){
    this.queue = [];
    this.limit = 2;
    this.current = 0;

  }

  add(task){
    return new Promise((res, rej) => {
      this.queue.push(() => task().then(res));
      
      this.nextTask();
    })
  }

  nextTask() {
    if(this.limit > this.current && !!this.queue.length){
      const task = this.queue.shift();
      this.current++;
      task().then(() => {
        this.current--;
        this.nextTask();
      })
    }
  }
}

const timeout = (time) => new Promise(resolve => {
	setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
 scheduler.add(() =>timeout(time)).then(() =>console.log(order))
}
// 限制同一时刻只能执行2个task
addTask(2000, '1')
addTask(6000, '2')
addTask(3000, '3')
addTask(8000, '4')