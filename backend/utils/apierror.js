class CustomError extends Error {
    constructor(statusCode,message="something wrong",errors=[]) {
      super(message);
      this.statusCode = statusCode
      this.message=message
      this.errors=errors
      this.success=false
    }
  }
  
  export default CustomError
