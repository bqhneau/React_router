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
