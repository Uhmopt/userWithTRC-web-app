import QRCode from 'qrcode'

export default async function qrCodeGenerator(str = '') {
  
  const generateQR = await  QRCode.toDataURL(str)
    .then((url) => {
      return url;
    })
    .catch((err) => {
      return false;
    })
  return generateQR;
}
