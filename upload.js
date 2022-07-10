var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')
const crypto = require('crypto')
aws.config.update({
    accessKeyId:process.env.ACCESS_KEY,
    secretAccessKey:process.env.ACCESS_SECRET,
    region:process.env.REGION
})
var upload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    bucket: process.env.BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
        crypto.randomBytes(16,(err,hash)=>{
            const fileName = `${hash.toString('hex')}${file.originalname}`
            cb(null,fileName)
        })
    }
  })
})

module.exports = upload