import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import *as z from 'zod'
import { Controller,  useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { toast } from 'sonner'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const formSchema = z.object({
email:z.string().email().min(8,"email is to short ").trim(),
password:z.string().min(8,"password must be at least 8 characters").trim(),
})

const Login = () => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();
const form=useForm({
  resolver:zodResolver(formSchema),
  defaultValues:{
    email:"",
    password:"",
  },
})

const onSubmit=async (data)=>{
  console.log(data);
  try {
     const response = await api.post("/auth/login",data);
      if(response.status ===200){
        toast.success("Account created successfully");
        onLogin(response.data.token,data);
        navigate("/dashboard");
      }else{
        toast.error(response.message || "login failed")
      }
  } catch (error) {
     toast.error(error.message || "some error occured");
      console.log(error.message);
  }
}

  return (
      <div className='w-full h-dvh pt-30 bg-emerald-900'>
        <div className='w-1/2 mx-auto bg-white  rounded-lg grid grid-cols-2 h-60dvh'>
    <div className='w-full overflow-hidden'>
<img src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="wanderwise login page" />
    </div>
    <div>
      <form  className="h-full"onSubmit={form.handleSubmit(onSubmit)}>
      <Card className={"h-full mx-auto flex flex-col justify-evenly border-0"}>
        <CardHeader>
          <CardTitle>Login to wanderwise</CardTitle>
          <CardDescription>Enter your email and password to continue .</CardDescription>
          <CardAction>
            <img src="/wanderwiseLogo.png" alt="wanderwise logo" className='w-12' />
          </CardAction>
           </CardHeader>
          <CardContent className={"space-y-4"}>
           
            <Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="email"
        placeholder="abc@gmail.com"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
  <Controller
    
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="Password"
        placeholder="********"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  />
            
   
          </CardContent>
          <CardFooter>
            <Button className={"w-full"} type="submit">Login</Button>
          </CardFooter>
       
        </Card>

      
     </form>
    </div>
    </div>
   </div> 
  )
}

export default Login