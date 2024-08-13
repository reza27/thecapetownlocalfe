"use client";

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - The Cape Town Local</title>
      </Head>
      <div className="p-8 md:p-16 bg-white">
        <h2 className="mt-20 ">Privacy Policy</h2>
        <p className="pb-5">
          The Cape Town Local is committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, disclose, and protect
          your personal information.
        </p>
         <h3>Information We Collect</h3>
        <p className="pb-5">
          We may collect personal information such as your name, email address,
          and contact details when you interact with our website, use our
          services, or communicate with us. We may also collect usage data and
          device information.
        </p>
        <h3>How We Use Your Information</h3>
        <p className="pb-5">
          We use your personal information to provide and improve our services,
          communicate with you, personalize your experience, and protect against
          fraud and abuse.
        </p>
        <h3>Information Sharing</h3>
        <p className="pb-5">
          We may share your personal information with third-party service
          providers who assist us in operating our business and providing
          services to you. We do not sell or rent your personal information to
          third parties for marketing purposes.
        </p>
        <h3>Data Security</h3>
        <p className="pb-5">
          We implement reasonable security measures to protect your personal
          information from unauthorized access, use, disclosure, alteration, or
          destruction.
        </p>
        <h3>Your Rights</h3>
        <p className="pb-5">
          You have the right to access, correct, or delete your personal
          information. To exercise these rights, please contact us at
          info@thecapetownlocal.com
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p className="pb-5">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new privacy policy on this page.
        </p>
        <h3>Contact Us</h3>
        <p className="pb-5">
          If you have any questions about this Privacy Policy, please contact us
          at info@thecapetownlocal.com
        </p>
      </div>
    </>
  );
}
