import { Routes, Route } from 'react-router-dom';
import routes from 'utils/constants/routes';
import CardList from 'components/commons/cardList/cardList';

function App() {
  return (
    <Routes>
      <Route path={routes.hong}></Route>
      <Route path={routes.minseo} element={<CardList />}></Route>
    </Routes>
  );
}

export default App;
