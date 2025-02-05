import { Routes, Route } from 'react-router-dom';
import Bank from '../bank/Bank';
import Pay from '../pay/Pay';

function App() {
  return (
    <div className="relative w-[375px] h-[100%] flex flex-col mx-auto">

      <Routes>
        <Route
          path='/'
          element={
            <Bank />
          } />

        <Route
          path='/pay2u'
          element={
            <Pay />
          } />
      </Routes>

    </div>
  );
}

export default App;
