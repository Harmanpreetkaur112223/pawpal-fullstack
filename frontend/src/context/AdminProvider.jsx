import React , {createContext , useContext, useState } from 'react'

export const AdminDataContext = createContext()


function AdminProvider({children}) {
    const [admin , setIsAdmin] = useState(true)
  return (
<AdminDataContext.Provider value = {{admin , setIsAdmin}}>
{children}
</AdminDataContext.Provider>
)
}

export function useAdmin() {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

export default AdminProvider