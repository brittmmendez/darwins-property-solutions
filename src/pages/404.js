import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import home from "../images/home.svg";
import Header from "../components/header";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      
      <Header title="DAWRINS PROPERTY SOLUTIONS"/>
      <h2 className="bg-yellow-400 text-2xl font-bold text-center inline-block my-8 p-3">
          Page Not Found...
        </h2>
      <div>
        <img
          alt="house icon"
          className="block mx-auto w-1/2"
          src={home}
        />
      </div>
    </Layout>
  );
}

export default NotFoundPage;
