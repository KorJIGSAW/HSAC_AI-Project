import { Routes, Route } from 'react-router-dom';
import Card from 'components/commons/card/card';
import routes from 'utils/constants/routes';
import CardList from 'components/commons/cardList/cardList';

function App() {
  return (
    <Routes>
      <Route path={routes.minseo} element={<Card />}></Route>
      <Route path={routes.minseo1} element={<CardList />}></Route>
    </Routes>
  );
}

export default App;
