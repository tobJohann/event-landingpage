import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { Plugin } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'

const {
  S3_ACCESS_KEY = 'error',
  S3_SECRET_KEY = 'error',
  S3_REGION = 'error',
  S3_ENDPOINT = 'error',
  S3_BUCKET = 'error',
} = process.env

export const plugins: Plugin[] = [
  payloadCloudPlugin(),
  s3Storage({
    collections: {
      media: true,
    },
    bucket: S3_BUCKET,
    config: {
      credentials: {
        accessKeyId: S3_ACCESS_KEY,
        secretAccessKey: S3_SECRET_KEY,
      },
      region: S3_REGION,
      endpoint: S3_ENDPOINT,

      forcePathStyle: false,
      requestHandler: {
        connectionTimeout: 10 * 1000,
        keepAlive: false,
        maxSockets: Infinity,
      },
    },
  }),
]
