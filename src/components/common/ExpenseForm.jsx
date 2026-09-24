import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Field, FieldLabel } from '../ui/field'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

 

const formSchema = z.object({
    name: z.string().min(3,"must be atleast three characters "),
    amount: z.coerce.number().min(1,"must be at least one digit")
})

const ExpenseForm = ({trip}) => {
    const form = useForm({
        resolver : zodResolver(formSchema),
        defaultValues:{
            name:"",
            amount:"",
        }
    });
    const onSubmit =async(data)=>{
     const budget = {
        ...trip.budget,
        expenses: [
            ...trip.budget.expenses,
            {
                name: name.data,
                amount:amount.data
            }
        ]
     }
     try {
        const response = await api.patch(`/trip/${_id}`,budget);
        if (response.status=== 200){
            toast.success("expenses added successufully");
            window.location.reload();
        }
     } catch (error) {
      toast.error(error.message || "Error while adding expenses");
      console.log(error)  
     }
    }
  return (
   <form onSubmit={form.handleSubmit(onsubmit )}>
    <Card>
        <CardHeader>
            <CardTitle>Add Expenses</CardTitle>
            <CardDescription>Enter name and amount of the expenses</CardDescription>
       </CardHeader>
       <CardContent>
        
                              <Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter Expenses Name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
        placeholder="RS.1000"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
                              <Controller
  name="amount"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter Expenses Amount</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="number"
        placeholder="RS.1000"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
        </CardContent>
        <CardFooter>
            <Button type="submit">Submit</Button>
        </CardFooter>

    </Card>
   </form>
  )
}

export default ExpenseForm