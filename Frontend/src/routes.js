import Main from "./pages/Main";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const Routing = [
  { path: "/", element: Main },
  { path: "/contacts", element: Contacts },
  { path: "/Shop", element: Shop },

  { path: "*", element: NotFound },
];

export default Routing;
