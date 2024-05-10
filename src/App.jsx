import { Routes, Route } from 'react-router-dom';
import routes from 'utils/constants/routes';
import CardList from 'components/commons/cardList/cardList';
import Main from 'components/commons/mainPage/main';

function App() {
  return (
    <Routes>
      <Route path={routes.Hong} element={<Main />}></Route>
      <Route path={routes.minseo} element={<CardList />}></Route>
    </Routes>
  );
}

export default App;
