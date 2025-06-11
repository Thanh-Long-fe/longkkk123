// src/api/requestService.ts

import axiosInstance from "./client"

export const createRequest = (params: {
  accountHolderName: string
  bankName: string
  accountNumber: string
  orderCode: string
  amount: number
  userId: string
  status?: 'pending' | 'approved' | 'rejected'
}) => {
  return axiosInstance.post('/requests', params)
}

export const getAllRequests = () => {
  return axiosInstance.get('/requests')
}

export const getRequestById = (id: string) => {
  return axiosInstance.get(`/requests/${id}`)
}

export const updateRequestStatus = (id: string, status: 'pending' | 'approved' | 'rejected') => {
  return axiosInstance.patch(`/requests/${id}/status`, { status })
}

export const deleteRequest = (id: string) => {
  return axiosInstance.delete(`/requests/${id}`)
}
