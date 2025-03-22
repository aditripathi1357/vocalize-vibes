
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

const Signup = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    console.log(values);
    // Here you would handle the signup logic
  };

  return (
    <div className="auth-container">
      {/* AI-related background elements */}
      <div className="ai-bg"></div>
      <div className="ai-grid"></div>
      <div className="ai-circuit"></div>
      
      {/* Fixed gradient overlays for depth */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 relative z-20"
      >
        <Link to="/" className="inline-flex items-center">
          <span className="text-primary text-3xl font-bold mr-1">Speak</span>
          <span className="text-3xl font-light">Verse</span>
          <div className="speech-wave ml-1">
            <div className="speech-wave-bar h-2 animate-wave-1"></div>
            <div className="speech-wave-bar h-3 animate-wave-2"></div>
            <div className="speech-wave-bar h-4 animate-wave-3"></div>
            <div className="speech-wave-bar h-3 animate-wave-4"></div>
            <div className="speech-wave-bar h-2 animate-wave-5"></div>
          </div>
        </Link>
        <h1 className="text-3xl font-bold mt-6 mb-2">Create an account</h1>
        <p className="text-muted-foreground">Sign up to get started with SpeakVerse</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="auth-form relative z-20"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        className="pl-10" 
                        placeholder="John Doe" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        className="pl-10" 
                        placeholder="you@example.com" 
                        type="email" 
                        {...field} 
                      />
                    </div>
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        className="pl-10" 
                        placeholder="••••••••" 
                        type="password" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="text-xs text-muted-foreground mt-2">
              By clicking "Sign up", you agree to our{" "}
              <Link to="#" className="text-primary hover:underline">Terms of Service</Link>{" "}
              and{" "}
              <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
            </div>
            
            <Button type="submit" className="w-full">
              Sign up
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
        
        <div className="auth-divider">
          <span className="auth-divider-text">or</span>
        </div>
        
        <Button variant="outline" className="w-full">
          <Github className="mr-2 h-4 w-4" />
          Continue with Github
        </Button>
        
        <div className="text-center mt-6">
          <span className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
