import React from 'react'
import UsersItem from "./UsersItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function UsersList (props) {
    return (
        <ul style={styles.ul}>
            { props.users.map( (user, index) => {
                return < UsersItem user={user} key={user.id} index={index}/>
            })}

        </ul>
    )
}