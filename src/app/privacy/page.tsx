"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: April 15, 2025</p>
        
        <div className="prose max-w-none">
          <p>
            At Pawfect Pet Shop, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2>1. Important Information and Who We Are</h2>
          <p>
            This privacy policy aims to give you information on how Pawfect Pet Shop collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up for our newsletter, purchase a product or service, or take part in a promotion.
          </p>
          <p>
            Pawfect Pet Shop is the controller and responsible for your personal data (collectively referred to as "Pawfect Pet Shop", "we", "us" or "our" in this privacy policy).
          </p>
          
          <h2>2. The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
          </p>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes payment card details.</li>
            <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>
          
          <h2>3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
          <p>
            Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
          </p>
          
          <h2>4. Purposes for Which We Will Use Your Personal Data</h2>
          <p>
            We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.
          </p>
          <table className="min-w-full border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Purpose/Activity</th>
                <th className="border border-gray-300 p-2 text-left">Type of data</th>
                <th className="border border-gray-300 p-2 text-left">Lawful basis for processing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">To register you as a new customer</td>
                <td className="border border-gray-300 p-2">(a) Identity<br />(b) Contact</td>
                <td className="border border-gray-300 p-2">Performance of a contract with you</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">To process and deliver your order</td>
                <td className="border border-gray-300 p-2">
                  (a) Identity<br />
                  (b) Contact<br />
                  (c) Financial<br />
                  (d) Transaction<br />
                  (e) Marketing and Communications
                </td>
                <td className="border border-gray-300 p-2">
                  (a) Performance of a contract with you<br />
                  (b) Necessary for our legitimate interests (to recover debts due to us)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">To manage our relationship with you</td>
                <td className="border border-gray-300 p-2">
                  (a) Identity<br />
                  (b) Contact<br />
                  (c) Profile<br />
                  (d) Marketing and Communications
                </td>
                <td className="border border-gray-300 p-2">
                  (a) Performance of a contract with you<br />
                  (b) Necessary to comply with a legal obligation<br />
                  (c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)
                </td>
              </tr>
            </tbody>
          </table>
          
          <h2>5. Disclosures of Your Personal Data</h2>
          <p>
            We may share your personal data with the parties set out below for the purposes set out in the table above.
          </p>
          <ul>
            <li>Internal Third Parties: Other companies in the Pawfect Pet Shop Group.</li>
            <li>External Third Parties: Service providers acting as processors who provide IT and system administration services.</li>
            <li>Professional advisers including lawyers, bankers, auditors and insurers.</li>
            <li>Tax authorities, regulators and other authorities.</li>
          </ul>
          <p>
            We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
          </p>
          
          <h2>6. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
          </p>
          <p>
            We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
          </p>
          
          <h2>7. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
          </p>
          
          <h2>8. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
          </p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          <p>
            If you wish to exercise any of the rights set out above, please contact us.
          </p>
          
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>
          <p>
            We will let you know via email and/or a prominent notice on our website, prior to the change becoming effective and update the "last updated" date at the top of this privacy policy.
          </p>
          <p>
            You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p>
            Email: privacy@pawfectpetshop.com<br />
            Postal address: 123 Main Street, Petville, CA 12345, USA
          </p>
        </div>
      </div>
    </div>
  );
}
