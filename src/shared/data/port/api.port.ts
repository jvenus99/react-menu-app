import { HttpRequest, HttpResponse } from '@/shared/domain/api'

export interface ApiPort<
  RequestBody = unknown,
  ResponseBody = unknown,
  ResponseHeaders = unknown
> {
  request(
    httpRequest: HttpRequest<RequestBody>
  ): Promise<HttpResponse<ResponseBody, ResponseHeaders>>
}