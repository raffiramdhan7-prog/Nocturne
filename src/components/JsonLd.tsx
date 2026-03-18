/**
 * JSON-LD Component for SEO Structured Data
 * Tells Google that Nocturne Indonesia is a Professional Service provider.
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nocturne Indonesia",
    "image": "https://nocturne.id/logo.png", // Replace with actual logo URL if available
    "description": "Nocturne Indonesia adalah agensi creative engineering. Kami melayani jasa pembuatan website, app building, dan AI engineering.",
    "url": "https://nocturne.id", // Replace with actual domain
    "telephone": "+6281352920853",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "serviceType": "Web Design and Development",
    "areaServed": "Indonesia"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
