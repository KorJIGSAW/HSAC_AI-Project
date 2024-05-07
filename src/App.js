import { Routes, Route } from 'react-router-dom';
import Card from 'components/commons/card/card';
import routes from 'utils/constants/routes';

function App() {
  return (
    <Routes>
      <Route path={routes.minseo} element={<Card />}></Route>
    </Routes>
  );
}

export default App;