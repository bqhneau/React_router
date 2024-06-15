import '../App.css';
import {Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Page1() {
    return (
        <div className="App">
            <h3>Page1</h3>
            <div>
                <Link to={"/page1/son1"}>son1</Link>
                <Link to={"/page1/son2"}>son2</Link>
            </div>
            <div>
                <h4>子页面的位置</h4>
                {/* 用于告诉 路由 子组件显示的位置 */}
                <Outlet/>
            </div>
        </div>
    );
}

export default Page1;
