import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, LEGAL_NAME, POLICY_EFFECTIVE } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Use | RBF Maintenance",
  description: "The terms for using rbfmaintenance.com.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" effective={POLICY_EFFECTIVE}>
      <p>
        These terms cover your use of rbfmaintenance.com, run by {LEGAL_NAME} (&quot;RBF,&quot; &quot;we&quot; and
        &quot;us&quot;). By using the site, you agree to them.
      </p>

      <h2>What the site is for</h2>
      <p>
        The site describes our services and lets you contact us. It isn&apos;t an offer. Scope, price and schedule
        are set only in a written proposal or agreement with us.
      </p>

      <h2>Requests and emergencies</h2>
      <p>
        Sending a form doesn&apos;t create a contract or guarantee service. If anyone is in danger, such as a gas
        leak, fire or electrical hazard, call 911 first.
      </p>

      <h2>What you send us</h2>
      <p>
        Only send information and photos you have the right to share. You allow us to use them to review, price and
        do the work. Our <Link href="/privacy">Privacy Policy</Link> explains how we handle them.
      </p>

      <h2>Our content</h2>
      <p>
        The text, logos and images on this site belong to RBF or are used with permission. Don&apos;t copy them
        without our written OK.
      </p>

      <h2>No guarantees</h2>
      <p>
        We work to keep the site accurate and available, but we provide it &quot;as is&quot; and don&apos;t
        guarantee it will be error-free or always online.
      </p>

      <h2>Limits on liability</h2>
      <p>
        To the extent the law allows, RBF isn&apos;t liable for damages from using this site. Work we perform is
        covered by the terms of your proposal or service agreement, not these terms.
      </p>

      <h2>Governing law</h2>
      <p>Illinois law governs these terms.</p>

      <h2>Changes</h2>
      <p>We may update these terms. The effective date above shows the latest version.</p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
