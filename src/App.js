import { Routes, Route } from 'react-router-dom';
import CardList from 'components/commons/cardList/cardList';
import Calendar from 'components/commons/calendar/calendar';
import routes from 'utils/constants/routes';

function App() {
  return (
    <Routes>
      <Route path={routes.minseo} element={<CardList />}></Route>
      <Route path={routes.jongbeom} element={<Calendar />}></Route>
    </Routes>
  );
}

export default App;