import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import *as z from 'zod'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Field, FieldError, FieldLabel } from '../components/ui/field';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import api from '../api/axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const formSchema= z.object({
    name:z.string().min(5,"Name must be at list 5 characters").trim(),
    email:z.string().email().min(8,"Email is to short").trim(),
    password:z.string().min(8,"must be atleast 8 characters").trim(),
    confirmPassword: z.string().min(8,"must be atleast 8 characters").trim(),
}).refine((data) => data.password === data.confirmPassword,{
    message: "password do not match ",
    path:["confirmPassword"]

});

const Register = () => {
  const navigate = useNavigate();

     const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password:"",
      confirmPassword:"",
    },
  })

  const onSubmit = async (data) => {
    console.log(data);
// destructuring :confirmpassword is removed from the group,and name email password is grouped;
    const {confirmPassword, ...newData } = data;

// always use tyr catch block while sending data in the backend;
//inside post(end point ,data-you want to send);

    try {
      const response = await api.post("/auth/register",newData);
      if(response.status ===201){
        toast.success("Account created successfully");
        navigate("/Login")
      }else{
        toast.error(response.message || "Registration failed")
      }
      
    } catch (error) {
      toast.error(error.message || "some error occured");
      console.log(error.message);
    }
  }
  return (
     <form onSubmit={form.handleSubmit(onSubmit)}>
      <Card className={"w-1/4 mx-auto mt-20"}>
        <CardHeader>
          <CardTitle>Register to wanderwise</CardTitle>
          <CardDescription>Enter your credentials to continue .</CardDescription>
          <CardAction>
            <img src="/wanderwiseLogo.png" alt="wanderwise logo" className='w-12' />
          </CardAction>
           </CardHeader>
          <CardContent className={"space-y-4"}>
            <Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your name </FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
        placeholder="ram kumar"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
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
            <Controller
  name="confirmPassword"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>confirm your password</FieldLabel>
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
            <Button type="submit">Register</Button>
          </CardFooter>
       
        </Card>

      
     </form>
  )
}

export default Register
