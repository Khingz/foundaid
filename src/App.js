import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ComingSoon from "./pages/ComingSoon";
import VolunteerPage from "./pages/Volunteer";
import { ScrollManager, ScrollToTop } from "./utils/scrollUtils";
import DonatePage from "./pages/Donate";
import NewsAndEvents from "./pages/News&Eevents";
import AdminLayout from "./components/AdminLayout";
import MainLayout from "./components/MainLayout";
import AdminDashboard from "./pages/Admin/Dashboard";
import Register from "./pages/Auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailSubscribers from "./pages/Admin/EmailSubscribers";

function App() {
	return (
		<div className="min-h-screen m-0 p-0 overflow-x-hidden box-border scroll-smooth font-primary-font text-[#333]">
			<Router>
				<ScrollToTop />
				<ScrollManager />
				<ToastContainer />

				<Routes>
					{/* Main app routes */}
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<AboutUs />} />
						<Route path="contact" element={<ContactUs />} />
						<Route path="career" element={<ComingSoon />} />
						<Route path="media" element={<ComingSoon />} />
						<Route path="news-events" element={<NewsAndEvents />} />
						<Route path="volunteer" element={<VolunteerPage />} />
						<Route path="donate" element={<DonatePage />} />
					</Route>

					{/* Public admin login route (shouldn't be accessible if logged in) */}
					<Route element={<PublicRoute />}>
						<Route path="/admin/login" element={<Login />} />
						<Route path="/admin/register" element={<Register />} />
					</Route>

					{/* Protected admin routes (only accessible if logged in) */}
					<Route element={<ProtectedRoute />}>
						<Route path="/admin/" element={<AdminLayout />}>
							<Route index element={<Navigate to="/admin/dashboard" />} />
							<Route path="dashboard" element={<AdminDashboard />} />
							<Route path="email-subscribers" element={<EmailSubscribers />} />
							<Route path="users" element={<ComingSoon />} />
							<Route path="*" element={<ComingSoon/>} />
						</Route>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>

				{/* Footer is now inside MainLayout and won't show on admin pages */}
			</Router>
		</div>
	);
}

export default App;
