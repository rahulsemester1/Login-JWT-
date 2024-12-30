let apiResponse=(res,statusCode,success,message,data=null,error=null)=>{
     return res.status(statusCode).json({
      status:success,
      message:message,
      data:data,
      error:error,
     })
}

export default apiResponse;