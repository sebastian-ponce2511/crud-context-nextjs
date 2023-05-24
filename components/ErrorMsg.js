const ErrorMsg = ({ children }) => {
  return (
    <p className="text-red-600 font-bold text-center uppercase py-1 -mt-4 mb-5">
      {children}
    </p>
  )
}
export default ErrorMsg
