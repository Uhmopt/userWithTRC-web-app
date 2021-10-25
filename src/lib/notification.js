import toastr from 'toastr'

const notification = function (
  warning = 'error',
  text = 'Username or password is incorrect!',
) {
  toastr.options = {
    positionClass: 'toast-top-full-width',
    showMethod: "fadeIn",
    hideDuration: 300,
    timeOut: 60000,
  }
  toastr.clear()
  switch (warning) {
    case 'success':
      setTimeout(() => toastr.success(text), 300)
      break
    case 'info':
      setTimeout(() => toastr.info(text), 300)
      break
    case 'error':
      setTimeout(() => toastr.error(text), 300)
      break
    default:
      setTimeout(() => toastr.warning(text), 300)
  }
  setTimeout(() => toastr.clear(), 6000)
}

export default notification
