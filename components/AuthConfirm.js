import React from "react";
import { AuthContainer, CredentialBox, ImageBox } from "../styles/layout.style";
import {RiHeartAddFill} from "react-icons/ri"
import { Button } from "../styles/widget.style";
import Link from "next/link";

const AuthConfirm = ({children, ...props }) => (
  <AuthContainer className="w-fit">
    <ImageBox {...props} img={props.img}>
      	<div>{props.bannerTitle}</div>
    </ImageBox>
    <CredentialBox>
		<div className="credentialHeader">
			<RiHeartAddFill className="credentialIcon"/>
			<h2>HMO Platform</h2>
		</div>
		<div className="credentialConfirmation">

				{/* <div style= {{width: "100%"}}> */}
				{/* Circle Image  */}
				<div className="credentialConfirmationCircle">
						{/* <FaEnvelope className="credentialConfirmationCircleIcon"/> */}

						< props.icon className="credentialConfirmationCircleIcon"/>
				</div>
				{/* title */}
						<h3>{props.title}</h3>
				{/* discription */}
				<p className="credentialConfirmationDescription">
						{props.discription}
				</p>
				{/* Button */}
				{
					props.button && 
						<Button
							bg = "#34C38F"
							border = {`1px solid #34c38f`}
							width = {"127"}
							style= {{
								marginTop: 10
							}}
							>Back to Sign in
						</Button>
				}
					
				{/* link */}
					{
						// props.signin && 
						// <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 6~0}}>
						// 	<p style = {{color: COLORS.kblackCom, fontSize: SIZES.body4, fontWeight: "normal"}}>Didn&apos;t recieve an email ? </p>
						// 	<Link 
						// 		href="/"  
						// 	>
						// 		<a
						// 		style = {
						// 				{
						// 				color: COLORS.kprimary,
						// 				fontSize: SIZES.body4,
						// 				fontWeight: "400",
						// 				marginLeft: 10
						// 				}
						// 		}
						// 		>Sign in here
						// 		</a>
						// 	</Link>
						// </div>
					}
				
			{/* </div> */}
		</div>
		<div className="credentialFooter">
			<h3>
			&copy; 2020 HMO Platform
			</h3>
		</div>
    </CredentialBox>
  </AuthContainer>
);

export const HospitalConfirm = ({children, ...props }) => {
	return(
	<CredentialBox>
		<div
			className="credentialWrapper"
		>
			<div className="credentialConfirmation">
				{/* Circle Image  */}
				<div className="credentialConfirmationCircle">
					{/* <FaEnvelope className="credentialConfirmationCircleIcon"/> */}
					<props.icon className="credentialConfirmationCircleIcon"/>
				</div>
				{/* title */}
					<h3>{props.title}</h3>
				{/* discription */}
					<p className="text-center text-normal text-ksecondary text-sm mt-1">
						{props.discription}
					</p>
				{/* Button */}
				{
					props.button && 
						<Button
							bg = "#34C38F"
							border = {`1px solid #34c38f`}
							width = {"200px"}
							style= {{
							marginTop: 25,
							marginBottom: 25
						}}
						>{props.button}
					</Button>
				}
				{/* link */}
				{
					props.signin && 
					<div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20}}>
						<p style = {{color: COLORS.kblackCom, fontSize: SIZES.body4, fontWeight: "normal"}}>Didn&apos;t recieve an email ? </p>
						<Link 
							href="/"  
						>
							<a
							style = {
									{
									color: COLORS.kprimary,
									fontSize: SIZES.body4,
									fontWeight: "400",
									marginLeft: 10
									}
							}
							>Sign in here
							</a>
						</Link>
					</div>
				}
			{/* </div> */}
			
			</div>
			{
				props.resend &&
				<div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 50, width: "100%"}}>
					<p style = {{color: COLORS.kblackCom, fontSize: SIZES.body4}}>Didn&apos;t receive an email ? </p>
					<Link 
						href="/auth/Signup"  
					>                
					<a
						style = {
						{
							color: COLORS.kprimary,
							fontSize: 18,
							fontWeight: "400",
							marginLeft: 10
						}
						}
						>Resend
					</a>
					</Link>
				</div>
			}
			{/* <div className="credentialFooter">
				<h3>
				&copy; 2020 HMO Platform
				</h3>
			</div> */}
		</div>
	</CredentialBox>
	)
}
export default AuthConfirm;
