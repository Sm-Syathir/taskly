"use client"
import Image from "next/image"
import {
    cn
} from "@/lib/utils"
import {
    Button
} from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import {
    Input
} from "@/components/ui/input"
import {
    motion
} from "framer-motion"
import {
    usePasswordToggle
} from "@/hooks/EyePassword"
export function SignupForm({
    className,
    ...props
}: React.ComponentProps < "form" > ) {
    const password = usePasswordToggle()
    const confirmPassword = usePasswordToggle()
    return (<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >

      <div className="flex flex-col items-center gap-2 mb-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.1
          }}
          className="mb-4"
        > </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-2xl font-bold"
        >
          Sign Up to Taskly
        </motion.h1>
      </div>

      <form className={cn("flex flex-col gap-6 bg-white rounded-xl p-8 shadow-xl border border-orange-100", className)} {...props}>
        <FieldGroup>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name" 
                required 
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500/20"
              />
            </Field>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="border-orange-200 focus:border-orange-500 focus:ring-orange-500/20"
              />
            </Field>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >

    <Field>
  <FieldLabel htmlFor="password">Password</FieldLabel>
  <div className="relative">
    <Input
      id="password"
      type={password.InputType}
      placeholder="Enter your password"
      required
      className="pr-10 border-orange-200 focus:border-orange-500 focus:ring-orange-500/20"
    />
    <button
  type="button"
  onClick={password.toggleVisibility}
  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
>
  <Image
    src={
      password.visible
        ? "/img/eye.png"
        : "/img/close_eye.png"
    }
    alt="Toggle password visibility"
    width={20}
    height={20}
  />
</button>
  </div>
</Field>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
           
    <Field>
  <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
  <div className="relative">
    <Input
      id="confirm-password"
      type={confirmPassword.InputType}
      placeholder="Confirm your password"
      required
      className="pr-10 border-orange-200 focus:border-orange-500 focus:ring-orange-500/20"
    />
    <button
  type="button"
  onClick={confirmPassword.toggleVisibility}
  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
>
  <Image
    src={
      confirmPassword.visible
        ? "/img/eye.png"
        : "/img/close_eye.png"
    }
    alt="Toggle password visibility"
    width={20}
    height={20}
  />
</button>
  </div>
</Field>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Field>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md shadow-orange-200"
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: [0, 2, 0] }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2"
                  >
                    Create Account
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </motion.span>
                </Button>
              </motion.div>
            </Field>
          </motion.div>

          <FieldSeparator>Or continue with</FieldSeparator>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <Field>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  type="button" 
                  className="w-full border-orange-200 hover:bg-orange-50 hover:border-orange-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      fill="currentColor"
                    />
                  </svg>
                  Sign up with GitHub
                </Button>
              </motion.div>
              <FieldDescription className="text-center pt-4">
                Already have an account?{" "}
                <motion.a 
                  href="/signin" 
                  className="text-orange-600 hover:text-orange-700 font-medium relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  Sign in
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </FieldDescription>
            </Field>
          </motion.div>
        </FieldGroup>
      </form>
    </motion.div>)
}