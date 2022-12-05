import BFFDiscover from "@/pages/discover";
import BFFFriend from "@/pages/friend";
import BFFMine from "@/pages/mine";



const routes = [
    {
        path: "/",
        exact: true,
        component: BFFDiscover
    },
    {
        path: "/mine",
        exact: true,
        component: BFFMine
    },
    {
        path: "/friend",
        exact: true,
        component: BFFFriend
    }

];

export default routes;