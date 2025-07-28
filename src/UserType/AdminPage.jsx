import { Outlet } from "react-router-dom"

export const AdminPage = () => {
    return (
    <>
     <h1>Welcome to the Admin Dashboard</h1>
     
   <Outlet/>
    </>
    )
}