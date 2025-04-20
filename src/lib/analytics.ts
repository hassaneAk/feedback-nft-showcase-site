
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  app: 'nfts-feedback',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-YOUR_MEASUREMENT_ID'] // Replace with your actual Measurement ID
    })
  ]
})

export default analytics
