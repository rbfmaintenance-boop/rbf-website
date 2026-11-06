import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, LEGAL_NAME, POLICY_EFFECTIVE } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | RBF Maintenance",
  description: "What RBF Maintenance collects through rbfmaintenance.com, why, and what you can do about it.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" effective={POLICY_EFFECTIVE}>
      <p>
        This policy explains what RBF Maintenance collects through rbfmaintenance.com, why, and what you can do
        about it. &quot;RBF,&quot; &quot;we&quot; and &quot;us&quot; mean {LEGAL_NAME}.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>When you request service:</strong> your company name, your name, phone, email, property address,
          the type of work, urgency, a description and any photos you attach.
        </li>
        <li>
          <strong>When you contact us:</strong> your name, company, email, phone, the service you need and your
          message.
        </li>
        <li>
          <strong>When you apply for a job:</strong> your name, email, the role you&apos;re interested in and what
          you tell us about your experience.
        </li>
        <li>
          <strong>Automatically:</strong> our hosting provider logs basic technical details when you visit, such as
          your IP address, browser type and the pages you view. It uses them to run and protect the site.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your request, schedule and do the work, and follow up</li>
        <li>To review your application and contact you about openings</li>
        <li>To keep the site running and block spam and abuse</li>
      </ul>
      <p>We don&apos;t sell your information. We don&apos;t send marketing emails or texts.</p>

      <h2>Who sees it</h2>
      <p>Form submissions go to our company inbox. Only RBF staff with access to that inbox see them.</p>
      <p>
        Vercel hosts our website. SMTP2GO delivers form submissions to our inbox and keeps a record of each delivery
        for a limited time. Microsoft provides our email. They handle your information only to provide those
        services.
      </p>
      <p>We may share information when the law requires it, or to protect our rights or someone&apos;s safety.</p>

      <h2>Photos you send</h2>
      <p>
        We use them only to understand and price the work. We never post them on our website or social media
        without your written OK.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>Service requests that become a job: kept with that job&apos;s records</li>
        <li>Service requests that don&apos;t: deleted within 1 year</li>
        <li>Job applications: deleted within 1 year</li>
      </ul>
      <p>Our website doesn&apos;t store form submissions. It sends them straight to our inbox.</p>

      <h2>Cookies and tracking</h2>
      <p>
        We don&apos;t use analytics, advertising cookies or other tracking tools. Our site loads its fonts from our
        own server, so no third party sees your visit.
      </p>
      <p>
        Because we don&apos;t track you across websites, we don&apos;t change anything in response to &quot;Do Not
        Track&quot; browser signals.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to see, correct or delete the information you sent us. Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we&apos;ll respond within 30 days.
      </p>

      <h2>Children</h2>
      <p>Our site is for businesses. We don&apos;t knowingly collect information from children under 13.</p>

      <h2>Changes</h2>
      <p>If we change this policy, we&apos;ll post the new version on this page and update the effective date.</p>

      <h2>Contact</h2>
      <p>
        {LEGAL_NAME}
        <br />
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </LegalPage>
  );
}
