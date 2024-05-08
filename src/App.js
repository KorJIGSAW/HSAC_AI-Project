import { Routes, Route } from 'react-router-dom';
import routes from 'utils/constants/routes';
import CardList from 'components/commons/cardList/cardList';
import CourseList from 'components/commons/CourseList/CourseList';

function App() {
  return (
    <Routes>
      <Route path={routes.minseo} element={<CardList />}></Route>
      <Route path={routes.jeongseon} element={<CourseList />}></Route>
    </Routes>
  );
}

export default App;
