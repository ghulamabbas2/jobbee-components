import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./components/layout/NotFound";
import Search from "./components/layout/Search";
import TopicStats from "./components/stats/TopicStats";
import UpdateProfile from "./components/user/UpdateProfile";
import UploadResume from "./components/user/UploadResume";
import NewJob from "./components/job/NewJob";
import UpdateJob from "./components/job/UpdateJob";
import JobDetails from "./components/job/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobdetail" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/search" element={<Search />} />
        <Route path="/stats" element={<TopicStats />} />
        <Route path="/me" element={<UpdateProfile />} />
        <Route path="/upload/resume" element={<UploadResume />} />
        <Route path="/employeer/jobs/new" element={<NewJob />} />
        <Route path="/employeer/jobs/update" element={<UpdateJob />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
