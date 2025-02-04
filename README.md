# react-router V6 

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

## 3、感受 react 全局插件 使用方式
```
    1、与 vue 不同 ，react 中没有 vue.use 的方法
    2、使用时，都是遵循 `谁使用，包裹谁` 的原则
```

## 4、嵌套路由 与 outLet
```
    1、在当前 Route 组件下，在嵌套 Route 组件
    2、使用 outLet 组件 在当前组件 注明 路由出口
    3、在 当前组件 中 写路由链接 实现点击跳转
```
### 4.1 重新配置路由规则
```js
// 引入子组件
import Son1 from './pages/page1Son/Son1';
import Son2 from './pages/page1Son/Son2';

<Route path='/page1' Component={Page1}>
    <Route path='son1' element={<Son1></Son1>}></Route>
    <Route path='son2' element={<Son2></Son2>}></Route>
</Route>
```
### 4.2 使用 outLet 组件
```js
import { Outlet } from 'react-router-dom';

<div>
    <h4>子页面的位置</h4>
    {/* 用于告诉 路由 子组件显示的位置 */}
    <Outlet/>
</div>
```
### 4.3 实现点击跳转
```js
import {Link} from 'react-router-dom';

<div>
    <Link to={"/page1/son1"}>son1</Link>
    <Link to={"/page1/son2"}>son2</Link>
</div>
```

## 5、动态路由 与 路由传参
```
    1、动态路由就是配置路由时，路由规则的 path 是不固定的，往往携带着一些参数
    2、react中常见的路由参数有以下几种
        (1) params 参数 --类似于 get 请求
            V5  this.props.match.params
            V6  useParams
        (2) query 参数 -- 类似于 get 请求
            V5  this.props.location.search
            V6  useSearchParams
        (3) location信息 / state 参数  -- 参数通过 state 属性 传递(类似于 post 请求)
            V5  this.props.location.state
            V6  useLocation
```
### 5.1 params 参数
```js
    1、路由链接(携带参数)：
        <NavLink to={"/page2/3"}>Page2</NavLink>
    2、注册路由(声明接收)--加占位符：
        <Route path='/page2/:id' element={<Page2></Page2>}></Route>
    3、接收参数：
        V5 this.props.match.params
        V6 const parms = useParams()
```
```js
import '../App.css';
import {useParams} from 'react-router-dom';

function Page2() {
    // 接收 params 参数
    const parms = useParams()
    return (
        <div className="App">
            <h3>Page2</h3>
            <p>携带的params参数：{ parms.id}</p>
        </div>
    );
}

export default Page2;
```

### 5.2 query 参数
```js
    1、路由链接(携带参数)：
        <Link to={"/page3?name='张三'&age=18"}>Page3</Link>
    2、注册路由(声明接收)--无需变动：
        <Route path="/page3" element={<Page3></Page3>}></Route>
    3、接收参数：
        V5 this.props.location.search
        V6 const [query,setQuery] = useSearchParams()
```
```js
import '../App.css';
import {useSearchParams} from 'react-router-dom'

function Page3() {
    const [query,setQuery] = useSearchParams()
    return (
        <div className="App">
            <h3>Page3</h3>
            {/* 1、query.get 获取参数 */}
            <p>接收到的query参数：name:{query.get('name')} age:{query.get('age')}</p>
            {/* 2、setQuery 修改参数 是替换 不是追加 */}
            <button onClick={()=>{setQuery({name:'李四',age:'19'})}}>修改query参数</button>
        </div>
    );
}

export default Page3;
```

### 5.3 state 参数
```js
【V5】
    1、路由链接(携带参数)：
        <Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
    2、注册路由(无需声明，正常注册即可)：
        <Route path="/demo/test" component={Test}/>
    3、接收参数：
        this.props.location.state
    4、备注：刷新也可以保留住参数
【V6】
    1、路由链接(携带参数)：
        <Link to={"/page4?name='张三'&age=18"} state={{ name: '赵六', age:'20'}}>Page4</Link>
    2、注册路由(无需声明，正常注册即可)：
        <Route path={'/page4'} element={<Page4></Page4>}></Route>
    3、接收参数：
        const { state, search} = useLocation()
    4、备注：刷新也可以保留住参数
```
```js
import '../App.css';
import { useLocation } from 'react-router-dom'
import query from 'querystring'

function Page4() {
    const { state, search} = useLocation()
    return (
        <div className="App">
            <h3>Page4</h3>
            <p>接收的state参数：name:{state.name}age{state.age}</p>
            <p>
                也可以从这里取query参数：
                {/* 这里取到的参数为字符串 需要借助第三方库解析成对象 然后取值 */}
                name:{query.parse(search).name}
                age:{query.parse(search).age}
            </p>
        </div>
    );
}

export default Page4;
```

## 6、重定向
```
【V5】
    1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
    2.具体编码：
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Redirect to="/about"/>
        </Switch>
【V6】
    使用 Navigate 组件
        <Navigate to='/login'></Navigate>
```

## 7、编程式路由导航
```
【V5】
    借助【this.prosp.history】对象上的API对操作路由跳转、前进、后退
        -this.prosp.history.push()
        -this.prosp.history.replace()
        -this.prosp.history.goBack()
        -this.prosp.history.goForward()
        -this.prosp.history.go()
【V6】
    1、使用 useNavigate 创建跳转方法 ，然后跳转
    2、如何传参
        parms/query 参数 直接写在路径上
        state 参数 写在 第二个参数上
```
【案例】实现从page2 跳转到 page1 并携带 state参数
```js
// page2
import '../App.css';
import {useParams, useNavigate} from 'react-router-dom';

function Page2() {
    // 接收 params 参数
    const parms = useParams()

    // 编程式路由
    const nav = useNavigate()
    return (
        <div className="App">
            <h3>Page2</h3>
            <p>携带的params参数：{parms.id}</p>
            <button onClick={() => {
                nav('/page1', {
                    state: { demo: "测试编程式路由导航" }
                })
            }}>跳转到page1</button>
        </div>
    );
}

export default Page2;

// page1
import '../App.css';
import {Link} from 'react-router-dom';
import { Outlet,useLocation } from 'react-router-dom';

function Page1() {
    const { state } = useLocation()
    console.log(state);
    return (
        <div className="App">
            <h3>Page1</h3>
            <div>
                <Link to={"/page1/son1"}>son1</Link>
                <Link to={"/page1/son2"}>son2</Link>
            </div>
            <div>
                <h4>子页面的位置</h4>
                <p>
                    从page2携带过来的参数
                    class:{state.demo}
                </p>
                {/* 用于告诉 路由 子组件显示的位置 */}
                <Outlet/>
            </div>
        </div>
    );
}

export default Page1;
```

## 8、路由懒加载
```
    1、lazy Suspence 实际上是 react 的函数/组件 用的时候将内容包一下
    2、react 其他函数 使用规则亦是如此
    3、主要目的是用的组件才导入，对大型项目【打包】友好
```
```js
// 1、路由表中引入方式变为 lazy
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(()=>import('../pages/Login'))

// 2、使用路由组件的页面 展示时 引入 Suspence（组件）搭配使用
import {Suspense} from 'react'

<Suspense>
    <App/>
</Suspense>
```

## 9、路由表的使用
```
    1、路由表 就是在外部再次创建一个数组文件 将配置信息填入
    2、借助 useRoutes 根据路由表 渲染 路由出口  
```
### 9.1 配置路由表
```js
// route.js
import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom"
 
export default [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        // 路由的重定向 当访问某个路径时  替换成另外一个路径
        path: "/",
        element: <Navigate to={"about"} />
    },
]
```
### 9.2 借助 useRoutes 根据路由表 渲染 路由出口
```js
import { Link, useRoutes } from "react-router-dom"
import routes from "./routes"

function App() {
  // 1、借助 useRoutes 根据路由表 渲染 路由出口 -- element
  let element = useRoutes(routes)

  return (
    <div>
      <h1>我是App组件</h1>
      <div>
        <Link to={"/home"}>首页</Link>
        <Link to={"/about"}>关于</Link>
      </div>
      <hr />
      <div>
        {/* 2、路由表 渲染的 路由出口 */}
        {element}
      </div>
    </div>
  )
}

export default App
```js
