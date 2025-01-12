// 防抖
function debounce(fn, delay){
  let timer = null;
  return (...args) => {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function a(){

  this.num = 0;
  this.add = function(){
    console.log(this.num)
    this.num += 1;
    console.log(this.num)
  }
  
}

let b = new a();

window.addEventListener('click', debounce(() => {
  b.add()
}, 3000))