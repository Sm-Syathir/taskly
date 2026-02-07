"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import {usePasswordToggle} from "@/hooks/EyePassword"
import Image from "next/image"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
   const password = usePasswordToggle()
   const confirmPassword = usePasswordToggle()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-orange-300/30 to-orange-400/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-l from-orange-200/30 to-orange-300/20 rounded-full blur-3xl -z-10"
      />

      <Card className="border-orange-100 shadow-xl overflow-hidden">
        <CardHeader className="pb-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="flex flex-col items-center gap-3"
          >
            <div>
              <CardTitle className="text-center text-2xl">Sign In</CardTitle>
              <CardDescription className="text-center">
                Welcome back to Taskly. Sign in to continue.
              </CardDescription>
            </div>
          </motion.div>
        </CardHeader>
        <CardContent>

          <form>
            <FieldGroup>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Field>
                  <FieldLabel htmlFor="email" className="text-sm font-medium text-gray-700">Email</FieldLabel>
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
                transition={{ duration: 0.3, delay: 0.3 }}
              >
        <Field>
  <div className="flex items-center">
    <FieldLabel
      htmlFor="password"
      className="text-sm font-medium text-gray-700"
    >
      Password
    </FieldLabel>

    <motion.a
      href="#"
      className="ml-auto text-xs underline-offset-4 hover:underline"
    >
      Forgot your password?
    </motion.a>
  </div>

  <div className="relative">
    <Input
      id="password"
      type={password.visible ? "text" : "password"}
      placeholder="Enter your password"
      required
      className="pr-10 border-orange-200 focus:border-orange-500 focus:ring-orange-500/20"
    />

    <button
      type="button"
      onClick={password.toggleVisibility}
      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-orange-100"
    >
      <Image
        src={
          password.visible
            ? "/img/eye.png"
            : "/img/close_eye.png"
        }
        alt="Toggle password visibility"
        width={18}
        height={18}
      />
    </button>
  </div>
</Field>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Field>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md shadow-orange-200 mb-4"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: [0, 2, 0] }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-2"
                      >
                        Sign In
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

              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-orange-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
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
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Sign in with Google
                    </Button>
                  </motion.div>
                  <FieldDescription className="text-center pt-6">
                    Don&apos;t have an account?{" "}
                    <motion.a 
                      href="/signup" 
                      className="text-orange-600 hover:text-orange-700 font-medium relative inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      Sign up
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
        </CardContent>
      </Card>
    </motion.div>
  )
}