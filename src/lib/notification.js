import toastr from 'toastr'

const notification = function ({
  warning = 'failed',
  text = 'Username or password is incorrect!',
}) {
  toastr.options = {
    positionClass: 'toast-bottom-full-width',
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
}

export default notification