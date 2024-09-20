import appInfo from '@/lib/appInfo';
import { Footer } from '@/app/(marketing)/_components/footer';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';

export default function TermsOfServicePage() {
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
            <TermsOfService />
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

const TermsOfService = () => {
  return (
    <div className={Styling.container}>
      <h1 className={Styling.h1}>{appInfo.name} Terms of Service</h1>
      <p className={Styling.p}>Last updated: August 24, 2024</p>

      <p className={Styling.p}>
        Welcome to {appInfo.name}. These Terms of Service govern your use of our
        services. By accessing or using our services, you agree to be bound by
        these terms.
      </p>

      <h2 className={Styling.h2}>Acceptance of Terms</h2>
      <p className={Styling.p}>
        By using our services, you confirm that you accept these Terms and that
        you agree to comply with them.
      </p>

      <h2 className={Styling.h2}>Changes to Terms</h2>
      <p className={Styling.p}>
        We may revise these Terms from time to time. The most current version
        will always be posted on our website.
      </p>

      <h2 className={Styling.h2}>User Responsibilities</h2>
      <p className={Styling.p}>
        You are responsible for your use of our services and for any content you
        provide.
      </p>

      <h2 className={Styling.h2}>Limitation of Liability</h2>
      <p className={Styling.p}>
        Our liability is limited to the maximum extent permitted by law. We are
        not liable for any indirect or consequential damages.
      </p>

      <h2 className={Styling.h2}>Governing Law</h2>
      <p className={Styling.p}>
        These Terms are governed by the laws of the jurisdiction in which we
        operate.
      </p>

      <h2 className={Styling.h2}>Contact Us</h2>
      <p className={Styling.p}>
        If you have any questions about these Terms, please contact us at:{' '}
        {appInfo.email}
      </p>
    </div>
  );
};
