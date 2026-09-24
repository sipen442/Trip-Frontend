
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import api from '../../api/axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'

const budgetSchema = z.object({
  total: z.coerce.number().min(1, "Must be atleast 1"), //coerce:-convert string into number
  spent: z.coerce.number().optional()
})

const formSchema = z.object({
    title: z.string().min(5, "Must be atleast 5 characters"),
    description: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    destinations: z.array(
      z.string().min(3, "Must be atleast 3 characters")
    ).min(1, "Atleast one destination is required"),
    budget: budgetSchema
}).refine((data)=>{return data.startDate <= data.endDate},{
  message: "Start date must be before end date",
  path: ["startDate"]
})

const TripForm = ({tripDetails}) => {

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: tripDetails ||{
      title: "",
      description: "",
      startDate: new Date().toISOString().split('T')[0],
      endDate:new Date().toISOString().split('T')[0],
      destinations:[''],
      budget:{
        total: '',
        spent: '',

      }

    }
  })

  const{fields,append,remove} = useFieldArray({
    control:form.control,
    name: "destinations",
  });

  const onSubmit = async(data) => {
    console.log(data);
    try {
      const response = await api.post("/trips",data);

      if(response.status ===201){
        toast.success("trip created successfully");
        navigate("/trips");
      }else{
        toast.error("Error creating trip.")
        console.log(response);
      }
    } catch (error) {
      toast.error(error.message||"Error creating trip");
      console.log(error);
    }
  }
  const onEdit = async(data) => {
    console.log(data);
    try {
      const response = await api.patch(`/trips/${tripDetails._id}`,data);

      if(response.status ===200){
        toast.success("trip created successfully");
        navigate("/trips");
      }else{
        toast.error("Error updating trip.")
        console.log(response);
      }
    } catch (error) {
      toast.error(error.message||"Error updatin trip");
      console.log(error);
    }
  }

  

  return (
    
    <form onSubmit={form.handleSubmit(tripDetails? onEdit : onSubmit)}>

    <Card className={"w-2/4 max-auto"}>
        <CardHeader>
            <CardTitle>{tripDetails ? "Edit":"Add"} your Trip</CardTitle>
            <CardDescription>Fill out the details of your next trip</CardDescription>
        </CardHeader>
        <CardContent className={"space-y-4"}>
                        <Controller
  name="title"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Enter your Trip description</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
        placeholder="Trip to Nepal with friends and family"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
                        <Controller
  name="description"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>add your trip  description</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
        placeholder="trip description"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
  <div className="grid grid-cols-2 gap-2">
                        <Controller
  name="startDate"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>enter start date </FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="date"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
                        <Controller
  name="endDate"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>enter end Date </FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="date"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
  </div>

   <div className="grid grid-cols-2 gap-2">
                        <Controller
  name="budget.total"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}> enter your budget of trip  </FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="number"
        placeholder="eg.budget=RS.5000"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
                        <Controller
  name="budget.spent"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}> enter the spent amount of your trip  </FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="number"
        placeholder=" eg.spent=RS.2000"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
    </div>

    <div className="flex items-centre justify-between">
      <h2>Destination</h2>
      <Button type="button" onClick={()=>{append("")}}>Add Destination</Button>

    </div>
    {
    fields.map((item,index)=>{
      return(
        <div className='flex items-end gap-2'>
                         <Controller
  name={`destinations.${index}`}
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>  destination {index + 1} </FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
        placeholder="pokhara,kathmandu etc"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
  /> 
  <Button type="button" varient="outline " onClick={()=>remove(index)}><X/></Button>
  </div>
      )
    })
    }
        </CardContent>
        <CardFooter>
          <Button type='submit'>submit</Button>
        </CardFooter>
    </Card>

    </form>
  )
}

export default TripForm