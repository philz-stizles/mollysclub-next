export const showSuccessMessage = (message: string) => (
  <div className="alert alert-primary" role="alert">
    {message}
  </div>
)

export const showErrorMessage = (message: string) => (
  <div className="alert alert-danger" role="alert">
    {message}
  </div>
)
