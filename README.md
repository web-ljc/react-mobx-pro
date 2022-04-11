# React + Mobx
> 项目使用React技术 + Mobx技术
> Mobx是透明的函数响应式编程，使得状态管理变得简单和可扩展
> 事件Actions 修改 State 更新 Computed Values 触发 Reactions 调用事件


## Mobx 和 Redux 的对比
- redux将数据保存在单一的store中，而mobx将数据保存在分散的多个store中
- redux使用plain object保存数据，需要手动处理变化后的操作，mobx使用observable保存数据，数据变化后自动处理响应的操作
- redux使用的是不可变状态，意味着状态只是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数。mobx中状态是可变的，可以直接对其进行修改
- mobx相对来说比较简单，在其中有很多的抽象，mobx使用的更多是面向对象的思维。redux会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，需要借助一系列的中间件来处理异步和副作用
- mobx中有更多的抽象和封装，所以调用起来复杂，同时结果更难预测。redux提供可以进行时间回溯的开发工具，同时纯函数以及更少的抽象，让调试变得更加容易
```
mobx: 面向对象思维 多个store、observable自动响应变化操作、mobx状态可变，直接修改、更多的抽象和封装，调试复杂结果难以预测

redux：函数式编程思想 单一store， plan object保存数据，手动处理变化后的操作、使用不可变状态，意味着状态只读，使用纯函数修改，返回的是一个新的状态，提供时间回溯的开发工具。
```
## Available Scripts
In the project directory, you can run:
### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`


