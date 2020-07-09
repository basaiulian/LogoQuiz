import React from 'react'
import {createDrawerNavigation, createAppContainer} from './react-navigation'

class Home extends React.Component{

}

class Profile extends React.Component{

}

const navigator = createDrawerNavigation(
    {
        Home,
        Profile
    },
    {
        drawerPosition: 'right',
        drawerWidth: 200,
        drawerBackgroundColor: 'gray'
    }
)

export default createAppContainer(navigator);