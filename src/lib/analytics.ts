
import Analytics from 'analytics'

// Create our own type for the Google Analytics plugin
// since the package doesn't provide proper TypeScript types
type GoogleAnalyticsConfig = {
  measurementIds: string[]
}

// Define a simple type-safe wrapper around the GA plugin
const googleAnalyticsPlugin = (config: GoogleAnalyticsConfig) => {
  // Use dynamic import to avoid TypeScript errors
  // This is safe because we know the package exists in dependencies
  const googleAnalytics = require('@analytics/google-analytics').default
  return googleAnalytics(config)
}

const analytics = Analytics({
  app: 'nfts-feedback',
  plugins: [
    googleAnalyticsPlugin({
      measurementIds: ['G-YOUR_MEASUREMENT_ID'] // Replace with your actual Measurement ID
    })
  ]
})

export default analytics
