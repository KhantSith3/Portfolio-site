import {
  FaHome,
  FaUserAlt,
  FaRegChartBar,
  FaComment,
  FaThList,
  FaBars,
} from "react-icons/fa";
export const menuItem = [
  {
    path: "/",
    name: "Home",
    icons: <FaHome />,
  },
  {
    path: "/about",
    name: "About",
    icons: <FaUserAlt />,
  },
  {
    path: "/pricing",
    name: "Pricing",
    icons: <FaRegChartBar />,
  },
  {
    path: "/projects",
    name: "Projects",
    icons: <FaComment />,
  },
  {
    path: "/feature",
    name: "Features",
    icons: <FaThList />,
  },
];
