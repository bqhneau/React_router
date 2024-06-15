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
