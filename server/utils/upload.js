// It is the middleware to upload image for the function uploadImage in the controller
import multer from 'multer'

const upload = multer({ dest :'uploads'});

export default upload;
