import { Routes, Route } from 'react-router-dom';
import routes from 'utils/constants/routes';
import CardList from 'components/commons/cardList/cardList';
import Calendar from 'components/commons/calendar/calendar';

function App() {
  return (
    <Routes>
      <Route path={routes.hong}></Route>
      <Route path={routes.minseo} element={<CardList />}></Route>
      <Route path={routes.jongbeom} element={<Calendar />}></Route>
    </Routes>
  );
}

export default App;
