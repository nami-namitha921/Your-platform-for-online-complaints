import SubmitComplaint from "./pages/SubmitComplaint";
import ComplaintStatus from "./pages/ComplaintStatus";
import Chat from "./pages/Chat";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const Protected = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Protected><DashboardHome /></Protected>} />
        <Route path="/submit" element={<Protected><SubmitComplaint /></Protected>} />
        <Route path="/status" element={<Protected><ComplaintStatus /></Protected>} />
        <Route path="/chat" element={<Protected><Chat /></Protected>} />
        <Route path="/feedback" element={<Protected><Feedback /></Protected>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
