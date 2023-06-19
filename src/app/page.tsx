import Description from "./components/description/description";
import Infos from "./components/infos/infos";
import SideMenu from "./components/side-menu/side-menu";

export default function Home() {
  return (
    <main>
      <SideMenu />
      <Infos />
      <div className="straight-line"></div>
      <Description />
    </main>
  )
}
