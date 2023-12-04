import { Response } from "express";

type TSuccessResponse = (res: Response, data: any, message: string) => void;
type TErrorResponse = (res: Response, statusCode: number, message: string) => void;

// this is alternative custom handler for sending same structure data to client for successful responses
const SuccessResponse: TSuccessResponse = (res, data, message) => {
  res.send({ success: true, message, data });
};

// this is alternative custom handler for sending same structure data to client for error response
const ErrorResponse:TErrorResponse = (res, statusCode, message)=>{
  res.send({ success: false, message,error:{
    code:statusCode,
    description: message,
  } });
}
// Custom throw Error
class AppError {
  message: string;
  status: number;
  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
  }
}



export { ErrorResponse, SuccessResponse,AppError };



