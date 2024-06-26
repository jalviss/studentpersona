import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './view/home_page/HomePage';
import DashboardPage from './view/dashboard_page/DashboardPage';
import GpaPerformancePage from './view/gpa_performance_page/GpaPerformancePage';
import Login from './view/login/Login';
import Attendance from './view/attendance_page/Attendance';

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/my-attendance' element={<Attendance />} />
        <Route path='/gpa-performance' element={<GpaPerformancePage />} />
      </Routes>
    </>
  );
}

export default App;
