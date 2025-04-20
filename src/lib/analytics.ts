
import Analytics from 'analytics'

// Import the Google Analytics plugin properly
import googleAnalytics from '@analytics/google-analytics'

// Create our own type for the Google Analytics plugin configuration
type GoogleAnalyticsConfig = {
  measurementIds: string[]
}

const analytics = Analytics({
  app: 'nfts-feedback',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-YOUR_MEASUREMENT_ID'] // Replace with your actual Measurement ID
    })
  ]
})

export default analytics
