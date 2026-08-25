import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const Login = () => {
  return (
    <div>
       <Card className={"w-1/4 mx-auto mt-30"}>
       <CardHeader className={"border-b-3"}>
        <CardTitle>Login to Wanderwise </CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
       </CardHeader>
       <CardContent className={"space-y-4"}>
        <div>
          <Label className={"mb-2"}>Enter your email</Label>
          <Input type={"email"} placeholder="abc@ mail.com"/>
        </div>
        <div>
          <Label className={"mb-2"}>Enter your password</Label>
          <Input type={"password"} placeholder="******"/>
        </div>
       </CardContent>
       <CardFooter>
        <Button className={"w-full"}>Login</Button>
       </CardFooter>
       </Card>
    </div>
  )
}

export default Login