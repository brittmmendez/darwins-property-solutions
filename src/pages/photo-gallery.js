import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
          <p className="mb-8 leading-loose">
            Here is an example of a form built using the official Tailwind CSS Custom Forms  plugin.{` `}
          </p>
      </section>
    </Layout>
  );
}

export default ContactPage;
