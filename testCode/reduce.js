/** * 
 * 题目1： 解析Cookie字符串转化为对象 * 输入：'foo=bar; equation=E%3Dmc%5E2' * 输出：{ foo: 'bar', equation: 'E=mc^2' } * 测试: parseCookie('foo=bar; equation=E%3Dmc%5E2') */ 

function parseCookie(str) {

  // foo=bar; equation=E%3Dmc%5E2
  return str.split('; ').reduce((prev, item) => {
    const [key, value] = item.trim().split('=');
    prev[decodeURIComponent(key)] = decodeURIComponent(value);
    return prev;
  }, {})

} 
console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));
/** * 题目2： 找出对象中符合要求的项 * 输入： 原始对象：{ a: 1, b: '2', c: 3 }， 筛选条件：x => typeof x === 'string' * 输出：{ 'b': '2' } * 测试: pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'string') */ 

// obj: { a: 1, b: '2', c: 3 }
// fn: x => typeof x === 'string'
function pickBy(obj, fn) { 

  return Object.entries(obj).reduce((prev, item) => {
    const [ key, value ] = item;
    if(fn(value)){
      prev[key] = value;
    }
    return prev;
  }, {}) 

}
console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'string'));
/** * 题目3：合并多个对象 * 输入：{ a: [1,2,3], b: { name: 'b'} }, { a: [4], b: { age: 18 } } * 输出：{ a: [1,2,3,4], b:{name:'b', age: 18}} * 测试: merge({ a: [1,2,3], b: { name: 'b'} }, { a: [4], b: { age: 18 } }) */ 

function merge(obj1, obj2) {

  const objArr = [obj1, obj2];

  return objArr.reduce((prev, obj) => {
    for(const key in obj){
      if(!!obj[key]&&Array.isArray(obj[key])){
        prev[key] = (prev[key]||[]).concat(obj[key]);
      }else if(!!obj[key]&&typeof  obj[key]=== 'object'){
        prev[key] = { ...(prev[key]||{}), ...obj[key] };
      }else{
        prev[key] = obj[key];
      }
    }
    return prev;
  }, {})

}
console.log(merge({ a: [1,2,3], b: { name: 'b'} }, { a: [4], b: { age: 18 } }));