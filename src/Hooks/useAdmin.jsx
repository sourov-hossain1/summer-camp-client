import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/users/admin/${user?.email}`)
            // http://localhost:5000
            console.log('is admin response', res)
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;