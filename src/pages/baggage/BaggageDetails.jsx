import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/axios';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { SquarePen, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from '../../components/ui/input';
import { toast } from 'sonner';

const BaggageDetails = () => {
    const { id } = useParams();
    const [baggage,setBaggages] = useState([]);
    const [dependancy,setDependancy] = useState(0);

    useEffect(()=>{
        const fetchBaggages = async () =>{
            try {
                const response = await api.get(`/${id}/baggages`)
                setBaggages(response.data);
            } catch (error) {
                tost.error(error.message || "error while fetchinf trips ")
            }
        }
        fetchBaggages();
    },[dependancy])

    const addBaggage =async ()=>{
       const name = document.getElementById('baggageInput')
    try {
      const response = await api.post(`/${id}/baggages`,{name: name.value});

      if(response.status ===201){
        toast.success("new Baggage is added successfully");
       
      }else{
        toast.error("Error while adding baggages.");
        name.value = "";
       setDependancy(dependancy +1)
      }
    } catch (error) {
      toast.error(error.message||"Error while adding baggage");
      console.log(error);
    }
  }
  const onDelete = async(baggageId) =>{
        try {
            const response = await api.delete(`/${id}/baggages/${baggageId}`);
            if(response.status ===200){
                    toast.success("baggages deleted successfully");

                    setDependancy(dependancy + 1);
                    
                  }else{
                    toast.error("Error while deleting trip.")
                    console.log(response);
                  }

            
        } catch (error) {
            toast.error(error.message||"Error while deleting trip.");
                  console.log(error);
            
        }
    }
  const onCheck = async(baggageId) =>{
        try {
            const response = await api.patch(`/${id}/baggages/${baggageId}`,{completed:!completed});
            if(response.status ===200){
                    toast.success("baggages packed successfully");

                    setDependancy(dependancy + 1);
                    
                  }else{
                    toast.error("Error while deleting trip.")
                    console.log(response);
                  }

            
        } catch (error) {
            toast.error(error.message||"Error while deleting trip.");
                  console.log(error);
            
        }
    }
    
  return (
    <div className='px-20 py-24'>
        <Card>
            <CardHeader className={"border-b"}>
                <CardTitle>see baggage for this trip</CardTitle>
                <CardDescription>View and manage baggages </CardDescription>
                <CardAction>
                    <Dialog>
  <DialogTrigger ><Button>Add Baggage</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Baggage</DialogTitle>
      <DialogDescription>
       provide the name of item you want to pack for this trip.
      </DialogDescription>
    </DialogHeader>
    <div>
        <label htmlFor='baggageInput' className='mb-2'>Name of item</label>
        <Input type="text" placeholder="medicine" id="baggageInput"/>
    </div>

    <Button onClick={addBaggage}className={"w-full"}>Submit</Button>
  </DialogContent>
</Dialog>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  {
                    baggage.length == 0
                    ?
                    <div className='text-xl font-semibold'>No,baggage to show ,create one first .</div>
                    :
                    baggage.map((item)=>{
                      return (
                        <div className={`border rounded p-4 flex items-center justify-between ${item.completed ?"bg-green-100":"bg-red-100"} `}>
                        <div className='flex items-centre gap-4'>
                        <Checkbox onCheckChange={()=>{onCheck(item._id,item.completed)}} checked={item.completed}/>
                            <p>{item.name}</p>
                            </div>
                        
                    <div className='spaxe-x-1 '>
                       <Button varient ="outline" size="icon"><SquarePen /></Button> 
                       <Button onClick={()=>{onDelete(item._id)}} varient ="outline" size="icon"><Trash2 className='text-red-700'/></Button> 
                    </div>
                     </div>
                      )
                    })
                  }
                    

                </div>
            </CardContent>
            <CardFooter>
                <p>Total Baggages:{baggage.length}</p>
            </CardFooter>
        </Card>
    </div>
  )

}


export default BaggageDetails