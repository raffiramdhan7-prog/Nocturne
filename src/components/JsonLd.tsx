/**
 * JSON-LD Component for SEO Structured Data
 * Tells Google that Nocturne Indonesia is a Professional Service provider.
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Nocturne Indonesia",
    "image": "https://nocturneindonesia.com/logo.png",
    "description": "Nocturne Indonesia adalah agensi creative engineering. Kami melayani jasa pembuatan website, app building, dan AI engineering.",
    "url": "https://nocturneindonesia.com",

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
