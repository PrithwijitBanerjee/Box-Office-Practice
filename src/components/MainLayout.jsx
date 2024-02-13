import { Outlet } from "react-router-dom"
import AppTitle from "./AppTitle"
import Navs from "./Navs"

const MainLayout = () => {
  return (
        <>
           <AppTitle title='Box Office App' subTitle='Are you looking for a movie or an actor?'/>
           <Navs />
            <Outlet />
        </>
  )
}

export default MainLayout