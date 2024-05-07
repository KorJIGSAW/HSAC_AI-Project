import { Routes, Route } from 'react-router-dom';
import Card from 'components/commons/card/card';
import Calendar from 'components/commons/calendar/calendar';
import routes from 'utils/constants/routes';

function App() {
  return (
    <Routes>
      <Route path={routes.minseo} element={<Card />}></Route>
      <Route path={routes.jongbeom} element={<Calendar />}></Route>
    </Routes>
  );
}

export default App;