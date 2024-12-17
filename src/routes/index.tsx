import {createBrowserRouter, NonIndexRouteObject} from "react-router";
import {TemplateLayout} from "@/layouts/TemplateLayout.tsx";
import {NotFoundPage} from "@/pages/NotFoundPage/NotFoundPage.tsx";
import {IndexPage} from "@/pages/IndexPage/IndexPage.tsx";

const listRoutes: NonIndexRouteObject[] = [
    {
        id: "main",
        path: "/",
        element: <TemplateLayout/>,
        children: [
            {
                index: true,
                element: <IndexPage/>,
            },
        ]
    },
    {
        id: "notFound",
        path: "*",
        element: <NotFoundPage/>
    }
];

export const Router = createBrowserRouter(listRoutes, {
    basename: "/",
    window,
});

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => Router.dispose());
}