import Dashboard from './dashboard'
import Head from 'next/head'
import Signin from './signin'
import Layout from '../components/shared/layout/layout'
import { connect, useSelector } from 'react-redux'
import { getAuthToken } from '../redux/features/authSlice'

const Home = () =>  {
  const token = useSelector(getAuthToken)
  return (
    <>
      {
        token && token !== "" ? (
          <Layout>
            <Dashboard/>
          </Layout>
        ): (
          <Signin/>
        )
      }
    </>
  )
}

export default connect((state) => state)(Home)
