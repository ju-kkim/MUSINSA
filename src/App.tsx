import { GoodsProvider } from './components/store/goods';
import Header from './layout/Header';
import MainContents from './layout/MainContents';

function App() {
  return (
    <div className="App">
      <GoodsProvider>
        <Header />
        <MainContents />
      </GoodsProvider>
    </div>
  );
}

export default App;
