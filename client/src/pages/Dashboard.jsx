import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/admin/DashSidebar";
import DashProfile from "../components/admin/DashProfile";
import DashAddProject from "../components/admin/DashAddProject";
import DashContact from "../components/admin/DashContact";

const Dashboard = () => {
  //const dispatch = useDispatch();
  //const { currentUser, loading, error, accessToken } = useSelector(
  //  (state) => state.user
  //); // Access accessToken from the Redux store

  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen pt-14 dark:bg-gray-900 flex flex-col md:flex-row">
      <div className="md:w-56 mt-2">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/*Add product*/}
      {tab === 'addproject' && <DashAddProject />}
      {/*All Contacts*/}
      {tab === 'allContact' && <DashContact />}
    </div>
  );
};

export default Dashboard;
