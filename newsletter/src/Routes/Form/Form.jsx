import img from '../../assets/images/illustration-sign-up-desktop.svg'
import imgRes from '../../assets/images/illustration-sign-up-mobile.svg'
import list from '../../assets/images/icon-list.svg'
import './Form.css'
import { useState } from 'react'
import validator from 'validator';
import Success from '../Sucess/Success'
import { Link } from 'react-router-dom'

const Form = () => {
    const [input, setInput] = useState("")
    const [validar, setValidar] = useState(true)
    const [active, setActive]= useState(false)

    const checks = ["Product discovery and building what matters", "Measuring to ensure updates are a success", "And much more!"]

    const onChange = (event) => {
        setInput(event.target.value)
    }

    const onClick = () =>{
        let valid = validator.isEmail(input)
        if(valid === true){
            setActive(true)
        }else{
            setValidar(false)
        }
    }

    return(
        <>
        { active ? 
            (
            <Success input = {input}/> 
            )
            : 
            (
            <div className='Form'>
                <div className='containerForm'>
                    <div className='contInfo'>
                        <h1 className='title'>Stay updated!</h1>
                        <p className='desc'>Join 60,000+ product managers receiving monthly updates on:</p>
                        <div className='contLista'>
                            {checks.map((item) =>(
                                <div className='Lista'>
                                    <img src={list} alt="" />
                                    <p className='desc text'>{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className='contEmail'>
                            <div className='contValid'>
                                <p className='textEmail'>Email address</p>
                                {validar === false && 
                                    <p className='textEmailNoValid'>Valid email required</p>
                                }
                            </div>
                            <input type="email" placeholder="email@company.com" className={validar ? `input` : `noValido`} onChange={onChange} value={input} />
                            <input type="submit" className='button textButton' onClick={onClick} value="Subscribe to monthly newsletter" />  
                        </div>
                    </div>
                    <div className='contImg'>
                        <img className='img' src={img} alt="" />
                        <img className='imgRes' src={imgRes} alt="" />
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}

export default Form
