import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Layout from '../components/shared/layout/layout'
import Signin from "../pages/auth/signin";
import { wrapper } from "../redux/reduxStore";

const IndexRoute = ({ Component, pageprops, ...props }) => {
  const token = useSelector((state) => state.auth?.token);
  console.log("token", token, "props", props);
  return (
    <>
      {props.auth.token !== "" ? (
        <Layout>
          <Component {...props} {...pageprops} />
        </Layout>
      ) : (
        <p>Your are not login</p>
        // <Signin {...props} />
      )}
    </>
  );
};

export default connect((state) => state)(IndexRoute);
