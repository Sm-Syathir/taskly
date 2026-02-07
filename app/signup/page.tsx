import { SignupForm } from "@/components/signup-form"

export default function Page() {
  return (
    <div className="min-h-svh w-full bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-orange-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-orange-100/20 to-orange-200/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-300/10 to-orange-400/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}