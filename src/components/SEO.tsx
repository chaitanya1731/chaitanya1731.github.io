import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  type?: string
  name?: string
  image?: string
}

export default function SEO({
  title = "Chaitanya Kulkarni - Senior Software Engineer | Cloud & AI Expert",
  description = "Senior Software Engineer specializing in Cloud Computing, AI/ML, and DevOps. 6+ years of experience in building scalable AI systems and cloud-native applications.",
  keywords = [
    "Software Engineer",
    "Cloud Computing",
    "AI Engineer",
    "Machine Learning",
    "DevOps",
    "MLOps",
    "Kubernetes",
    "Cloud Native",
    "AI Architecture",
    "Distributed Systems",
    "Chaitanya Kulkarni",
    "Senior Software Engineer",
    "AI Expert",
    "Cloud Expert",
    "Full Stack Developer"
  ],
  type = "website",
  name = "Chaitanya Kulkarni",
  image = "/images/ck.jpg"
}: SEOProps) {
  const siteUrl = "https://chaitanya1731.github.io"

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={name} />

      {/* OpenGraph meta tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content={name} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      
      {/* Structured Data for Google Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": name,
          "url": siteUrl,
          "image": `${siteUrl}${image}`,
          "sameAs": [
            "https://github.com/chaitanya1731",
            "https://www.linkedin.com/in/iamchaitanyakulkarni/",
            "https://x.com/_twck"
          ],
          "jobTitle": "Senior Software Engineer",
          "description": description,
          "knowsAbout": [
            "Cloud Computing",
            "Artificial Intelligence",
            "Machine Learning",
            "DevOps",
            "MLOps",
            "Kubernetes",
            "Distributed Systems",
            "Software Engineering"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "Your University Name" // Update this with your actual university
          }
        })}
      </script>
    </Helmet>
  )
} 