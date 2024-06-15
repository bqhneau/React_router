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
