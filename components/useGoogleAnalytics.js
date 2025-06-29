import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Google Analytics 4 Measurement ID - Get this from your GA4 property settings
// You can also set this as an environment variable: NEXT_PUBLIC_GA_MEASUREMENT_ID
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_IDS || 'G-J5GZHCVZ5L'

export const useGoogleAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    // Don't load GA if measurement ID is not set
    if (GA_MEASUREMENT_ID === 'G-J5GZHCVZ5L') {
      console.warn('Google Analytics: Please set your GA4 measurement ID in .env.local file or update the GA_MEASUREMENT_ID constant')
      return
    }

    // Load Google Analytics script
    const loadGA = () => {
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      script.async = true
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID)
      window.gtag = gtag
    }

    // Track page views on route change
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        })
      }
    }

    // Initialize GA if not already loaded
    if (!window.gtag) {
      loadGA()
    }

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Custom event tracking function
  const trackEvent = (action, category, label, value) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  // Track button clicks
  const trackButtonClick = (buttonName, location = 'unknown') => {
    trackEvent('button_click', 'engagement', buttonName, location)
  }

  // Track form submissions
  const trackFormSubmission = (formName) => {
    trackEvent('form_submit', 'engagement', formName)
  }

  // Track external link clicks
  const trackExternalLink = (linkUrl, linkText) => {
    trackEvent('external_link_click', 'engagement', linkText, linkUrl)
  }

  // Track scroll depth
  const trackScrollDepth = (depth) => {
    trackEvent('scroll_depth', 'engagement', depth)
  }

  // Track time on page
  const trackTimeOnPage = (timeInSeconds) => {
    trackEvent('time_on_page', 'engagement', timeInSeconds)
  }

  // Track project views
  const trackProjectView = (projectName) => {
    trackEvent('project_view', 'engagement', projectName)
  }

  // Track contact form interactions
  const trackContactInteraction = (action, method = 'form') => {
    trackEvent('contact_interaction', 'engagement', action, method)
  }

  // Track skill section views
  const trackSkillView = (skillCategory) => {
    trackEvent('skill_view', 'engagement', skillCategory)
  }

  // Track experience section views
  const trackExperienceView = (companyName) => {
    trackEvent('experience_view', 'engagement', companyName)
  }

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackExternalLink,
    trackScrollDepth,
    trackTimeOnPage,
    trackProjectView,
    trackContactInteraction,
    trackSkillView,
    trackExperienceView,
  }
}

export default useGoogleAnalytics 