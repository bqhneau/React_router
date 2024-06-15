import './App.css';
import { Routes, Route } from 'react-router-dom';
// 引入路由组件
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

// 引入路由链接
import { NavLink, Link } from 'react-router-dom';

// 引入子组件
import Son1 from './pages/page1Son/Son1';
import Son2 from './pages/page1Son/Son2';

function App() {
  return (
    <div className="App">
      <h2>路由的基本使用</h2>
      <div style={{ display: 'flex', justifyContent:'center'}}>
        {/* 1、NavLink 选中后自带 active 类 添加样式即可使用 */}
        <NavLink to={"/page1"}>Page1</NavLink>
        <NavLink to={"/page2/3"}>Page2</NavLink>
        {/* 2、普通的链接 */}
        <Link to={"/page3?name='张三'&age=18"}>Page3</Link>
        <Link to={"/page4?name='张三'&age=18"} state={{ name: '赵六', age:'20'}}>Page4</Link>
      </div>
      <Routes>
        {/* path 这里 不要写成 './' */}
        {/* 写法一： Component 里面直接写组件名 */}
        <Route path='/page1' Component={Page1}>
          <Route path='son1' element={<Son1></Son1>}></Route>
          <Route path='son2' element={<Son2></Son2>}></Route>
        </Route>
        {/* 写法二：element 里面写组件 */}
        <Route path='/page2/:id' element={<Page2></Page2>}></Route>
        <Route path="/page3" element={<Page3></Page3>}></Route>
        {/* path 这里 可以写成 字符串 也可以用{}包裹 */}
        <Route path={'/page4'} element={<Page4></Page4>}></Route>
      </Routes>
    </div>
  );
}

export default App;
