"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
 email: z.string().email({
  message: "Please enter a valid email address.",
 }),
 password: z.string().min(6, {
  message: "Password must be at least 6 characters.",
 }),
 rememberMe: z.boolean(),
});

type FormSchema = z.infer<typeof formSchema>;

function LoginForm({ className }: { className?: string }) {
 const navigate = useNavigate();

 const [showPassword, setShowPassword] = useState(false);

 const form = useForm<FormSchema>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   email: "admin@jobfinitygroup.com",
   password: "password123",
   rememberMe: false,
  },
 });

 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
 };

 const onSubmit = (values: FormSchema) => {
  console.log(values);
 };

 return (
  <div className={cn("space-y-6", className)}>
   <div className="space-y-2">
    <h1 className="font-light h1">Welcome Back!</h1>
    <p className="font-light text-muted-dark">Please login to your account.</p>
   </div>

   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
     <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
       <FormItem>
        <FormLabel className="text-foreground text-sm font-medium">Email</FormLabel>
        <FormControl>
         <Input {...field} type="email" className="h-14 px-[22px]" />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
       <FormItem>
        <FormLabel className="text-foreground text-sm font-medium">Password</FormLabel>
        <FormControl>
         <div className="relative">
          <Input {...field} type={showPassword ? "text" : "password"} className="h-14 px-[22px] pr-10" />
          <Button
           type="button"
           variant="ghost"
           size="sm"
           className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
           onClick={togglePasswordVisibility}
          >
           {showPassword ? (
            <EyeOff className="text-muted-foreground !size-5 text-primary-foreground" />
           ) : (
            <Eye className="text-muted-foreground !size-5 text-primary-foreground" />
           )}
          </Button>
         </div>
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />

     <div className="flex items-center justify-between">
      <FormField
       control={form.control}
       name="rememberMe"
       render={({ field }) => (
        <FormItem className="flex items-center space-x-2">
         <FormControl>
          <Switch checked={field.value} onCheckedChange={field.onChange} />
         </FormControl>
         <FormLabel className="!my-0 cursor-pointer text-sm text-muted-dark">Remember me</FormLabel>
        </FormItem>
       )}
      />
      {/* <Button
       variant="link"
       className="text-muted-foreground hover:text-foreground px-0 text-sm"
       type="button"
      >
       Forget Password?
      </Button> */}
     </div>

     <Button
      type="submit"
      className="mt-6 h-12 w-full bg-slate-900 text-slate-50 hover:bg-slate-900/90"
      onClick={() => navigate("/dashboard")}
     >
      Sign In
     </Button>
    </form>
   </Form>
  </div>
 );
}

export default LoginForm;
