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
