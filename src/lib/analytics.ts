
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

type GoogleAnalyticsConfig = {
  measurementIds: string[]
}

const analytics = Analytics({
  app: 'nfts-feedback',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-QGGSGZDB0T'] // Using your actual Measurement ID
    })
  ]
})

export default analytics
