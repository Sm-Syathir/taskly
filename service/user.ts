import type { LoginRequest, LoginResponse } from "@/types/user"
import  http  from "@/utils/http"

export const login = async (payload: LoginRequest) => {
  const res = await http.post<LoginResponse>("/user/login", payload)
  return res.data
}

export const register = async (payload: LoginRequest) => {
  const res = await http.post<LoginResponse>("/user/register", payload)
  return res.data
}

