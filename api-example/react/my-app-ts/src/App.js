/*
 * @Description: enter your description
 * @Date: 2021-08-09 10:57:15
 * @LastEditTime: 2021-08-16 22:49:49
 */
import './App.css';

function App() {
  import('./utils/util.ts')
    .then(res => {
      console.log('res', res, res.add(1, 2));
    })
    .catch(err => {
      console.log('%c error', err);
    });
  return <div className="App">qqqq</div>;
}

export default App;
