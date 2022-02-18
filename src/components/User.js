/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';

/* ~ ~ ~ ~ ~ { Import Components } ~ ~ ~ ~ ~ */
import Spinner from '../components/Spinner';

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
const User = ({ retrieve, setAlert, SetType, loading, user }) => {
    /* - - - - - < Use Browser URL to Load Resource - - - - - */
    const { params } = useMatch('/:login');
    const { login } = params;

    /* - - - - - < Handle GitHub User Retrieval /> - - - - - */
    useEffect(() => {
        retrieve(login)
    }, []);

    /* - - - - - < Destructure from the User Object /> - - - - - */
    const { 
        name,
        avatar_url,
        location,
        bio,
        blog,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
     } = user;

    /* - - - - - < Display Spinner if Loading /> - - - - - */
    if (loading) {
        /* - - - - - < Return Spinner /> - - - - - */
        return <Spinner />
    } else {
        /* - - - - - < Return JSX Markup /> - - - - - */
        return (
            <div>
                {user.login}
            </div>
        )
    }
}

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default User;