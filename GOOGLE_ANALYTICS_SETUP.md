# Google Analytics Setup Guide

This guide will help you set up Google Analytics 4 (GA4) for your Next.js portfolio website.

## Prerequisites

1. A Google Analytics account
2. A GA4 property set up for your website

## Step 1: Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your GA4 property
3. Go to **Admin** → **Data Streams**
4. Click on your web stream
5. Copy the **Measurement ID** (format: G-XXXXXXXXXX)

## Step 2: Configure Environment Variables

Create a `.env.local` file in your project root and add your GA4 measurement ID:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual measurement ID.

## Step 3: Verify Installation

1. Start your development server: `npm run dev`
2. Open your website in a browser
3. Open Developer Tools (F12)
4. Go to the **Network** tab
5. Look for requests to `googletagmanager.com`
6. Check the **Console** for any Google Analytics related messages

## Step 4: Test Tracking

The following events are automatically tracked:

- **Page Views**: Every page navigation
- **Route Changes**: When users navigate between pages

## Step 5: Custom Event Tracking

You can track custom events in your components using the `useGoogleAnalytics` hook:

```jsx
import { useGoogleAnalytics } from '../components/useGoogleAnalytics'

function MyComponent() {
  const { 
    trackButtonClick, 
    trackFormSubmission, 
    trackExternalLink,
    trackProjectView 
  } = useGoogleAnalytics()

  const handleButtonClick = () => {
    trackButtonClick('contact_button', 'hero_section')
    // Your button logic here
  }

  const handleFormSubmit = () => {
    trackFormSubmission('contact_form')
    // Your form submission logic here
  }

  const handleExternalLink = () => {
    trackExternalLink('https://github.com/navneet9971', 'GitHub Profile')
    // Your link logic here
  }

  const handleProjectClick = (projectName) => {
    trackProjectView(projectName)
    // Your project view logic here
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Contact Me</button>
      <form onSubmit={handleFormSubmit}>
        {/* form fields */}
      </form>
      <a href="https://github.com/navneet9971" onClick={handleExternalLink}>
        GitHub
      </a>
    </div>
  )
}
```

## Available Tracking Functions

- `trackEvent(action, category, label, value)` - Custom event tracking
- `trackButtonClick(buttonName, location)` - Track button clicks
- `trackFormSubmission(formName)` - Track form submissions
- `trackExternalLink(linkUrl, linkText)` - Track external link clicks
- `trackScrollDepth(depth)` - Track scroll depth
- `trackTimeOnPage(timeInSeconds)` - Track time spent on page
- `trackProjectView(projectName)` - Track project views
- `trackContactInteraction(action, method)` - Track contact interactions
- `trackSkillView(skillCategory)` - Track skill section views
- `trackExperienceView(companyName)` - Track experience section views

## Step 6: Production Deployment

When deploying to production:

1. **Vercel**: Add the environment variable in your Vercel project settings
2. **Netlify**: Add the environment variable in your Netlify site settings
3. **Other platforms**: Add the environment variable according to your platform's documentation

## Step 7: Verify Production Tracking

1. Deploy your website
2. Visit your live website
3. Check Google Analytics Real-Time reports to see if data is being collected
4. Test various interactions to ensure custom events are tracking

## Troubleshooting

### No data appearing in Google Analytics

1. Check that your measurement ID is correct
2. Verify the environment variable is set correctly
3. Check browser console for any errors
4. Ensure you're not blocking analytics with ad blockers

### Events not tracking

1. Verify the `useGoogleAnalytics` hook is imported and used
2. Check that tracking functions are called correctly
3. Look for console errors related to `gtag`

### Development vs Production

- Analytics will work in both development and production
- Use the same measurement ID for both environments
- Consider creating separate GA4 properties for development and production if needed

## Privacy Considerations

- Ensure your privacy policy mentions Google Analytics usage
- Consider implementing cookie consent if serving EU users
- Review Google Analytics data retention settings
- Consider implementing IP anonymization

## Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Analytics Integration](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Google Tag Manager](https://tagmanager.google.com/) (Alternative to direct GA4 implementation) 