import { v4 as uuidv4 } from 'uuid';
import CourseDetails from '../../modules/Courses/pages/CourseDetails';
import CourseList from '../../modules/Courses/pages/CourseList';
import ContentPlayer from '../../modules/Dashboard/pages/ContentPlayer.jsx';
import Dashboard from '../../modules/Dashboard/pages/Dashboard';
import Home from '../../modules/Home/pages/Home';

// const Dashboard = lazy(() => import("../../modules/Dashboard/pages/Dashboard"));

const routes = [
  { id: uuidv4(), path: '/', component: Home },
  { id: uuidv4(), path: '/home', component: Home },
  { id: uuidv4(), path: '/courses', component: CourseList },
  {
    id: uuidv4(),
    path: '/course/:courseName/:courseId',
    component: CourseDetails,
  },
  { id: uuidv4(), path: '/dashboard', component: Dashboard },
  {
    id: uuidv4(),
    path: '/dashboard/:courseName/:userId/:courseId',
    component: ContentPlayer,
  },
];

export default routes;
