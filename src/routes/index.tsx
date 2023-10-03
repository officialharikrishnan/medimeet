import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../components/Dashboard/Layout'
import ListDepartments from '../pages/Department'
import ListDoctors from '../pages/Doctor'
function Router() {
    const element = useRoutes([

      {
          element: <Layout/>,
          path: '/',
          children: [
            {
              element: <div>Dashboard</div>,
              path:'/'
            },
            {
              element: <ListDepartments/>,
              path: '/view-department',
            },
            {
              element: <ListDoctors/>,
              path: '/view-doctors',
            },
          ]
      },
    ])
  return (
    <div> 
        {element}

    </div>
  )
}

export default Router