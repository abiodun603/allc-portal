import React from 'react'
import { useForm } from 'react-hook-form';
import { SigninContainer } from '../styles/signin.style'
import {connect, useDispatch, useSelector} from "react-redux"
import { fetchAsyncAuth } from '../redux/features/authSlice';
import Image from 'next/image';
// image
import ImgSrc from "../assets/image/banner.png"
import Logo from "../assets/image/logo.png"
// icon
import {IoEyeSharp} from "react-icons/io5"


const Signin = (props) => {

  const dispatch = useDispatch();
  const { handleSubmit, errors, formState, register } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const load = { email: data.email, password: data.password };
    dispatch(fetchAsyncAuth(load));
  };

  return (
    <SigninContainer image={ImgSrc}>
      <div className='absolute top-10 left-10'>
        <Image src={Logo} alt="" className='absolute' />
      </div>
      <div className='signin__container'>
        <div className="login">
          <p >Welcome Back</p>
          <h2 className='mb-6'>Please login to your account</h2>

          {/* form */}
          <form className="form flex flex-col space-y-6"  onSubmit={handleSubmit(onSubmit)}>
            <p className="field">
              <input 
                type="email" 
                name="email" 
                placeholder="Email address" 
                required = {true}
                {...register("email", { required: true })}
              />
              {/* <i class="fa fa-user"></i> */}
            </p>

            <p className="field position">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                required = {true}
                autoComplete=''
                {...register("password", { required: true })}
              />
              <IoEyeSharp className='absolute top-5 right-5' />
            </p>

            <p className="submit">
              <input type="submit" name="sent" value="Sumbit" className='cursor-pointer'/>
            </p>
          </form>
        </div>
      </div>
    </SigninContainer>
  )
}

export default connect((state) => state)(Signin);
