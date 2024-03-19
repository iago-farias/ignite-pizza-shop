import { api } from '@/lib/axios'

export interface GetDayOrdersAmountResponse {
  amount: number
  diffFromYersterday: number
}

export async function getDayOrdersAmount(): Promise<GetDayOrdersAmountResponse> {
  const response = await api.get('/metrics/day-orders-amount')

  return response.data
}
