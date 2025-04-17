"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-pet-primary flex items-center hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: April 15, 2025</p>
        
        <div className="prose max-w-none">
          <p>
            Welcome to Pawfect Pet Shop. These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>
          
          <h2>1. Introduction</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Pawfect Pet Shop's website if you do not accept all of the terms and conditions stated on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
          </p>
          
          <h2>2. License</h2>
          <p>
            Unless otherwise stated, Pawfect Pet Shop and/or its licensors own the intellectual property rights for all material on Pawfect Pet Shop. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>Redistribute content from Pawfect Pet Shop (unless content is specifically made for redistribution)</li>
          </ul>
          
          <h2>3. User Comments</h2>
          <p>
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. Pawfect Pet Shop does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Pawfect Pet Shop, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.
          </p>
          <p>You are responsible for:</p>
          <ul>
            <li>Ensuring that any Comments you post comply with applicable laws and regulations</li>
            <li>Ensuring that any Comments you post do not infringe any third-party rights</li>
          </ul>
          <p>
            Pawfect Pet Shop reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions.
          </p>
          
          <h2>4. Hyperlinking to our Content</h2>
          <p>
            The following organizations may link to our website without prior written approval:
          </p>
          <ul>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses; and</li>
            <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our website.</li>
          </ul>
          
          <h2>5. Reservation of Rights</h2>
          <p>
            We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our website. You agree to immediately remove all links to our website upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our website, you agree to be bound to and abide by these linking terms and conditions.
          </p>
          
          <h2>6. Products and Services</h2>
          <p>
            All products and services featured on our website are subject to availability. We reserve the right to discontinue any product or service at any time. Prices for our products are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the product or service.
          </p>
          <p>
            We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the service will be corrected.
          </p>
          
          <h2>7. Accuracy of Information</h2>
          <p>
            We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
          </p>
          
          <h2>8. Modifications to the Service and Prices</h2>
          <p>
            Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
          </p>
          
          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
          
          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
          </p>
          
          <h2>11. Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us at info@pawfectpetshop.com.
          </p>
        </div>
      </div>
    </div>
  );
}
