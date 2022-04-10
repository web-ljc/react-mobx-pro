# MOBX
## 装饰器
> 装饰器是一个对类进行处理的函数
### 基本语法
```
@fn  // 类的装饰器
@fn2(10)
@fn3
class MyClass {
  @fn4 message = 'hi'
}
function fn(target){
  target.foo = 'bar'
}
<!-- 动态传参 -->
function fn2(val) {
  return function(target) {
    target.count = val
  }
}
console.info(MyClass.foo) => 'bar'
console.info(MyClass.count) => 10

<!-- 类的实例添加属性 -->
function fn3(target) {
  target.prototype.foo = 'test'
}
console.info(new MyClass().foo)

function fn4(target, name, descriptor) {
  console.info(target) // 目标类的.protoype
  console.info(name) // 被修饰的类成员的名称
  console.info(descriptor) // 被修饰的类的成员的描述对象
  descriptor.writable = false
}
const obj = new MyClass()
console.info(obj.message)
```