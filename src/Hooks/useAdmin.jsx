import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const token = localStorage.getItem('access-token');
   const {user} = useContext(AuthContext)

   const {data: isAdmin} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async() => {
        const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`
        , {headers:{
            authorization: `bearer ${token}`
        }}
        ) 
        console.log('is admin response', res)
        return res.data?.admin;
    }
   })
   return [isAdmin]
};

export default useAdmin;