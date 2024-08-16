import AdminNavigation from "../components/admin/AdminNavigation";



export const metadata = {
    title: "Eco Shopping - Admin",
    description: "Eco Shopping, admin dashboard",
  };

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
       <div>
        <AdminNavigation />
        {children}
       </div>
     );
}
 
export default AdminLayout