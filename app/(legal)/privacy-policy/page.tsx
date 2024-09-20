import appInfo from '@/lib/appInfo';
import { Footer } from '@/app/(marketing)/_components/footer';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <main className="max-w-4xl mx-auto my-10 overflow-hidden">
        <div className="flex p-4 justify-left mb-4">
          <Button variant="link">
            <a
              href="/"
              className="font-medium hover:underline flex items-center"
            >
              <Icon icon="mdi:arrow-left" className="w-4 h-4 mr-2" />
              Back Home
            </a>
          </Button>
        </div>
        <div className="p-6">
          <pre className="whitespace-pre-wrap">
            <PrivacyPolicy />
          </pre>
        </div>
        <Footer />
      </main>
    </div>
  );
}

const Styling = {
  container: 'prose max-w-none font-sans ',
  h1: 'text-2xl font-bold mt-4 mb-2',
  h2: 'text-xl font-bold mt-4 mb-2',
  p: 'mb-2',
  ul: 'list-disc pl-8 mb-2',
};

const PrivacyPolicy = () => {
  return (
    <div className={Styling.container}>
      <h1 className={Styling.h1}>{appInfo.name} Privacy Policy</h1>
      <p className={Styling.p}>Last updated: August 24, 2024</p>

      <p className={Styling.p}>
        Thank you for choosing to be part of our community at {appInfo.name}
        &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;. We
        are committed to protecting your personal information and your right to
        privacy. If you have any questions or concerns about this privacy
        policy, or our practices with regards to your personal information,
        please contact us at {appInfo.email}.
      </p>

      <h2 className={Styling.h2}>Information We Collect</h2>
      <p className={Styling.p}>
        When you visit our websites, including {appInfo.name}, use our browser
        extension, and utilize our services, we collect the following
        information:
      </p>
      <ul className={Styling.ul}>
        <li>
          <strong>Personal Information:</strong> We collect your name and email
          address when you sign up for our services. We use Clerk for
          authentication, which may collect additional information as per their
          privacy policy.
        </li>
        <li>
          <strong>Usage Information:</strong> We collect information about the
          web pages you save, including URLs and any notes or intents you
          provide.
        </li>
        <li>
          <strong>Browser Information:</strong> Our extension collects
          information about your current tab and its URL when you choose to save
          a page.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> We also collect web cookies
          to enhance your experience on our Site and extension.
        </li>
        <li>
          <strong>Analytics Information:</strong> We use PostHog to track and
          analyze user interactions with our services. This includes tracking
          events such as category creation, link saving, and page views. The
          data collected is used to improve our services and provide a better
          user experience.
        </li>
      </ul>

      <h2 className={Styling.h2}>Use of Your Information</h2>
      <p className={Styling.p}>
        We use the information we collect from you for the following purposes:
      </p>
      <ul className={Styling.ul}>
        <li>
          To provide and maintain our service, including saving and organizing
          your bookmarks.
        </li>
        <li>To authenticate you and manage your account.</li>
        <li>
          To improve and personalize your experience with our extension and
          website.
        </li>
        <li>
          To communicate with you about your account and provide customer
          support.
        </li>
        <li>
          To analyze user interactions and improve our services using analytics
          tools like PostHog.
        </li>
      </ul>

      <h2 className={Styling.h2}>Sharing Your Information</h2>
      <p className={Styling.p}>
        Your information is not shared with any third parties, except as
        necessary to provide our services. We use Clerk for authentication and
        may use other service providers to help us deliver our services. These
        service providers are bound by confidentiality agreements and are not
        allowed to use your personal information for any other purposes.
      </p>

      <h2 className={Styling.h2}>Data Security</h2>
      <p className={Styling.p}>
        We take the security of your data seriously. We implement
        industry-standard security measures to protect your personal information
        from unauthorized access, alteration, disclosure, or destruction.
        However, no method of transmission over the Internet or method of
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2 className={Styling.h2}>Your Rights</h2>
      <p className={Styling.p}>
        You have the right to access, correct, or delete your personal
        information. You can manage most of your data through your account
        settings. If you need additional assistance, please contact us at the
        email address provided below.
      </p>

      <h2 className={Styling.h2}>Children&apos;s Privacy</h2>
      <p className={Styling.p}>
        Our services do not address anyone under the age of 13, and we do not
        knowingly collect personal information from children.
      </p>

      <h2 className={Styling.h2}>Changes to Our Privacy Policy</h2>
      <p className={Styling.p}>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the &quot;Last updated&quot; date. We will also inform you via
        email.
      </p>
      <h2 className={Styling.h2}>Contact Us</h2>
      <p className={Styling.p}>
        If you have any questions about this Privacy Policy, you can contact us
        at: {appInfo.email}
      </p>
    </div>
  );
};
