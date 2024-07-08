import ToolsList from "../components/ToolsList/ToolsList";
import EmotionStatePage from "../pages/EmotionStatePage/EmotionStatePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ToolsPage from "../pages/ToolsPage/ToolsPage";

const routes = [
  {
    route: "site landing",
    path: "/",
    component: HomePage,
  },
  {
    route: "emotions landing",
    path: "/emotions",
    component: EmotionStatePage,
  },
  {
    route: "tools landing",
    path: "/tools",
    component: ToolsPage,
  },
  {
    route: "global tools list",
    path: "/all-tools",
    component: ToolsList,
  },
  {
    route: "grounding list",
    path: "/grounding",
    component: ToolsList,
  },
  {
    route: "uplifting list",
    path: "/uplifting",
    component: ToolsList,
  },
  {
    route: "login & signup",
    path: "/login",
    component: LoginPage,
  },
  {
    route: "error",
    path: "*",
    component: ErrorPage,
  },
];

export default routes;
