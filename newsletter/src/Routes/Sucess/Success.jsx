import { Link } from "react-router-dom"
import './Success.css'
import success from '../../assets/images/icon-success.svg'
import { useState } from "react"
import Form from "../Form/Form"

const Success = ({input}) => {
    const [noActive, setNoActive] = useState(false)

    const handleDismiss = () => {
        setNoActive(true);
    };

    return(
        <>
        {noActive ?
            (
                <Form />
            )
            :
            (
            <div className="Success">
                <div className="containerSuccess">
                    <img src={success} className="checkMobile" alt="" />
                    <h2 className="titleSuccess">Thanks for subscribing!</h2>
                    <p className="descSuccess">
                        A confirmation email has been sent to <strong> {input} </strong>
                        Please open it and click the button inside to confirm your subscription.
                    </p>
                    <button className="buttonSuccess" onClick={handleDismiss}><p className="textButtonSuccess">Dismiss message</p></button>
                </div>
            </div>
            )
        }
        </>
    )
}

export default Success