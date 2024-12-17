import {FC} from "react";
import {Outlet} from "react-router";

export const TemplateLayout: FC = () => {
    return <>
        <main>
            <h1>TemplateLayout</h1>
            <Outlet/>
        </main>
    </>
}