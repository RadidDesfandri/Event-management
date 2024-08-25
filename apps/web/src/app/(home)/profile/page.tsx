import All from "@/components/profilecomp/All"
import SideBarProf from "@/components/profilecomp/SideBar"
import Top from "@/components/profilecomp/Top"

const Profile = () => {
  return (
    <div className="flex max-w-7xl mx-auto">
      <SideBarProf/>
      <All/>
    </div>
  )
}

export default Profile
