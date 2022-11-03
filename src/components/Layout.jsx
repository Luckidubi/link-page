import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";

export default function Layout(){

    return (
        <>
<div className="main">


<Outlet/>

    <MainFooter/>
</div>
        </>
    )
}