import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Field, FieldLabel } from '../ui/field'
import { Button } from '../ui/button'

 

const formSchema = z.object({
   collaborators:z.array(z.string().email()
).min(1,"must contain one item ")
})

const InviteForm = ({trip}) => {
    const form = useForm({
        resolver : zodResolver(formSchema),
        defaultValues:{
            collaborators:"",
        }
    });

    const {fields,append,remove}=useFieldArray({
        control: form.control,
        name: "collaborators"

    })


    const onSubmit =async(data)=>{
     
     
     
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
        <cardheader>
            <CardTitle>Add Expenses</CardTitle>
            <CardDescription>Enter name and amount of the expenses</CardDescription>
            <CardAction>
                <Button type ="button" onclick={()=>{append("")}}>Add email</Button>
            </CardAction>
        </cardheader>
        <CardContent>
            {
                fields.map((field,index)=>{

                    return(

                          <Controller
  name={`collaborators.$(index)`}
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="email"
        placeholder="abcd@gmail.com"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
                    )
                })
            }
        </CardContent>
        <CardFooter>
            <Button type="submit">Submit</Button>
        </CardFooter>

    </Card>
   </form>
  )
}

export default InviteForm