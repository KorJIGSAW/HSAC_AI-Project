import { Routes, Route } from 'react-router-dom';
import CardList from 'components/commons/cardList/cardList';
import CalendarList from 'components/commons/calendarList/calendarList';
import routes from 'utils/constants/routes';

function App() {
  return (
    <Routes>
      <Route path={routes.minseo} element={<CardList />}></Route>
      <Route path={routes.jongbeom} element={<CalendarList />}></Route>
    </Routes>
  );
}

export default App;