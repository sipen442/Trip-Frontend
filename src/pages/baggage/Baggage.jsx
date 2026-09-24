import React, { useEffect, useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { EllipsisVertical, Plus } from 'lucide-react'
import api from '../../api/axios'
import { toast } from 'sonner'
import { formatDate } from '../../lib/utils'


 const baggage = () => {

    const [trips,setTrips] = useState([]);
    const [dependancy,setDependancy] = useState(0);

    useEffect(()=>{

        const fetchTrips = async () =>{
            try {
                const response  = await api.get("/trips");
                setTrips(response.data);
            } catch (error) {
                toast.error("some error occured while fetching trips ");
                console.log(error);
            }
        }
        fetchTrips();
    },[dependancy]);

    const onDelete = async(tripId) =>{
        try {
            const response = await api.delete(`/trips/${tripId}`);
            if(response.status ===200){
                    toast.success("trip deleted successfully");

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
            <CardHeader  className={'border-b'}>
                <CardTitle>select a trip to view baggage </CardTitle>
                <CardDescription>
                    click view baggage button to show baggages of this trip 
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-3 gap-6'>

                    {
                        trips.length ==0 ?
                        <div className="text-3xl font-semibold text-center py-20">
                            you do not have any trips to show .create a new trip to show 
                        </div>
                        :
                        trips.map((trip)=>{
                            return(

                                <Card key={trip._id}>
                        <CardHeader  className={'border-b'}>
                            <CardTitle>{trip.CardTitle}</CardTitle>
                            <CardDescription>{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</CardDescription>
                           
                        </CardHeader>
                        <CardContent>
                            <p>RS.{trip.budget.total}</p>
                            <p>Rs.{trip.budget.spent}</p>
                            <p>Destinations :{trip.destinations.join(",")}</p>
                        </CardContent>
                        <CardFooter>
                            <a className="w-full" href={`/baggage/${trip._id}`}>
                            <Button className="w-full" >View Baggage</Button>
                            </a>
                        </CardFooter>
                    </Card>

                            )
                        })
                    
                    }
                </div>
            </CardContent>

            <CardFooter>
                <p className='text-gray-500' >Total trips : {trips.length}</p>
            </CardFooter>
                    

            </Card>
    </div>
  )
}

export default baggage
