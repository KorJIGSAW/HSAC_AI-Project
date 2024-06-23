import { Routes, Route } from 'react-router-dom';
import routes from 'utils/constants/routes';
import CardList from 'components/commons/cardList/cardList';
import Main from 'components/commons/mainPage/main';
import TransPage from 'components/commons/mainPage/TransPage';

function App() {
  return (
    <Routes>
      <Route path={routes.Hong} element={<Main />}></Route>
      <Route path={routes.minseo} element={<CardList />}></Route>
      <Route path="/TransPage" element={<TransPage />} />
    </Routes>
  );
}

export default App;
