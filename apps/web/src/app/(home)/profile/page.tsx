import All from "@/components/profilecomp/All"
import SideBarProf from "@/components/profilecomp/SideBar"

const Profile = () => {
  return (
    <div className="flex max-w-7xl mx-auto">
      <SideBarProf/>
      <All/>
    </div>
  )
}

export default Profile
