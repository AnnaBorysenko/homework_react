import React from 'react'


export default function UsersItem({user, index}) {
    return (<li>
            <strong>{index + 1}</strong>
            {`firstName: ${user.firstName},
          lastName: ${user.lastName},
          fullName: ${user.firstName + ' ' + user.lastName},
          age: ${user.age + 5},
          job: ${user.job}
        `}
        </li>
    )
}