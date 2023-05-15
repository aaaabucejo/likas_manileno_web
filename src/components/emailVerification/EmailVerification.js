import axios from "axios";
import React,{useEffect,useState, usePerams, useStyles} from "react";
import {Link} from 'react-router-dom';

export default function EmailVerification(){
    let{ email } = usePerams();
    let{ token } = usePerams();
    const {isValidToken, setIsValidToken} = useState(false);
    const classes = useStyles();

    function verifyEmailToken(email, emailToken){
        console.log('testing function')
        const emailAndToken = {
            email: email,
            emailToken: emailToken,
        }
        axios.post("http://localhost:4000/app/verifyEmailToken", emailAndToken)
        .then(response =>{
            const responseStatus = response.data.status;
            if(responseStatus == 'okay'){
                setIsValidToken(true);
            }
        })
    };

    useEffect(()=>{
        verifyEmailToken(email, token);
    },[])

    return(
        <div>
            {isValidToken ?
                <div className={classes.header}>
                    Email has been verified you now sign in
                    <Link href='../../Logn'>
                        Login
                    </Link>
                </div>    
                :
                <div className={classes.header}>
                    Could not verify Email or token is no longer Valid
                </div>
        }
        </div>
    )
}