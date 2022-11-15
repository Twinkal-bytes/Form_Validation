import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import DatePicker from "react-datepicker"

const FormPage =()=>{
const current = new Date().toISOString().split("T")[0]
const{register,handleSubmit,formState:{errors}} = useForm()
const onSubmit = (data)=>console.log(data)
    return(
    <section>
        <div className="register">
            <div className="col-1">
                <div className="col-2">
                    <h2>Sign In</h2>
                    <span>Register and enjoy service</span>
                    <form onSubmit={handleSubmit(onSubmit)} id="form" className="flex flex-col">
                        <input type="text" required placeholder="Enter Your FirstName" name="fname"
                                aria-invalid={errors.name ? "true" : "false"}
                                {...register('fname', { required: true, maxLength: 30 })}
                        />
                        <input type="text" required placeholder="Enter Last Name" name="lname"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register('lname', { required: true, maxLength: 30 })}                   
                        />
                        <input type="email" required placeholder="Enter Valid E-mail"
                         {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                        })}                   
                        />
                        <input type="password" required placeholder="Enter Strong password"
                        
                        aria-invalid={errors.name ? "true" : "false"}

                        
                        />
                        <input type="textarea" required placeholder="Address"/>
                        <input type="date" required placeholder="Enter Your Birthdate" name="birthdate" />
    {/*.. CheckBox code start here............................................. */}
                        <h4>Skills</h4>
                        <label>Java
                        <input type="checkbox" name="value2" value="JS"/>
                        </label>
                        <label>JS
                        <input type="checkbox" name="value3" value="JS"/>
                        </label>
                        <label>React Js
                        <input type="checkbox" name="value3" value="ReactJS"/>
                        </label>                    
                        <input type="submit" />
                    </form>  
                </div>
            </div>
        </div>
    </section>
    )
}
export default FormPage