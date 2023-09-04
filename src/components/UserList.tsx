import React from "react";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";


export const UserList : React.FC = () => {
    const {users, error, loading} = useTypedSelector( state => state.user) //typed hook
    return (
        <div></div>
        );
};