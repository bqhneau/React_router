# react 路由

## 1、React-router 的三个版本  
```
    1、React-router 服务端使用
    2、React-router-dom 浏览器端使用
    3、React-router-native React-native 混合开发使用
```

## 2、基本使用
```
    基本使用步骤如下：
      1、选择路由模式 history/hash 包裹在想要使用路由的组件外面
          包裹的好处是灵活，谁用包裹谁
      2、使用 Routes 组件 --- 路由出口
      3、使用 Route 组件 --- 写在 Routes 里面(用来包裹具体路由规则)
      4、使用 NavLink/Link 组件 --- 路由链接
```
### 2.1 选择路由模式
```js
    // 1、用哪包哪
    <BrowserRouter>
      <App />
    </BrowserRouter>
    // 2、用谁包谁
    <HashRouter>
      <App />
    </HashRouter>
```

### 2.2 定义路由组件
```
    在 src 新建文件夹 pages 里面用来放 路由组件
```
```js
import '../App.css';

function Page1() {
    return (
        <div className="App">
            <h3>Page1</h3>
        </div>
    );
}

export default Page1;
```


### 2.3 路由出口以及配置路由规则
```js
import './App.css';
// 1、引入路由组件 以及 Routes, Route
import {Routes, Route} from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

function App() {
  return (
    <div className="App">
      <h2>路由的基本使用</h2>
      {/* 2、注明路由出口 配置路由规则 */}
      <Routes>
        {/* path 这里 不要写成 './' */}
        {/* 写法一： Component 里面直接写组件名 */}
        <Route path='/page1' Component={Page1}></Route>
        {/* 写法二：element 里面写组件 */}
        <Route path='/page2' element={<Page2></Page2>}></Route>
        <Route path='/page3' element={<Page3></Page3>}></Route>
        {/* path 这里 可以写成 字符串 也可以用{}包裹 */}
        <Route path={'/page4'} element={<Page4></Page4>}></Route>
      </Routes>
    </div>
  );
}

export default App;
```

### 2.4 声明路由链接
```
    1、NavLink 自带 active 类, 使用时需要在样式文件中添加 active 类
    2、Link 普通的链接
```
```js
// 引入
import {NavLink,Link} from 'react-router-dom';

// 使用 路由链接
<div style={{ display: 'flex', justifyContent:'center'}}>
    {/* 1、NavLink 选中后自带 active 类 添加样式即可使用 */}
    <NavLink to={"/page1"}>Page1</NavLink>
    <NavLink to={"/page2"}>Page2</NavLink>
    {/* 2、普通的链接 */}
    <Link to={"/page3"}>Page3</Link>
    <Link to={"/page4"}>Page4</Link>
</div>

// 添加 active 类
.active{
  background-color: #61dafb;
  border-radius: 20%;
}
```