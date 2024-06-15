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
