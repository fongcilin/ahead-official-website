import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'security policy',
};

export default function SecurityPolicyPage() {
  return (
    <main className="flex flex-col items-center px-4 py-20">
      <div className="max-w-4xl w-full bg-white/80 rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent">
          Information Security Policy
        </h1>
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/mark-of-trust-certified-ISOIEC-27001-information-security-management-black-logo-En-GB-1019.png"
            alt="ISO 27001 Certified by BSI"
            className="w-64 mb-4"
          />
            <p className="text-center text-base font-medium">
            AHEAD Medicine has obtained ISO/IEC 27001 certification from BSI under certificate number <strong>IS825167</strong>
            </p>
        </div>
        <blockquote className="border-l-4 border-orange-400 bg-orange-50 p-6 mb-8 rounded-lg shadow-sm">
          <p className="italic text-lg mb-4 text-gray-800">
            At AHEAD Medicine, we understand that biomedical organizations handle extraordinarily sensitive research data that forms the backbone of medical breakthroughs. Our ISO 27001 certification demonstrates our unwavering commitment to data protection excellence, enabling us to deploy enterprise-grade security frameworks specifically designed for the unique challenges of scientific research environments.
          </p>
          <p className="italic text-lg mb-4 text-gray-800">
            Biomedical organizations partnering with AHEAD Medicine benefit from our comprehensive digital ecosystem, where they can seamlessly collaborate, analyze, and manage proprietary research assets while maintaining the highest standards of data integrity and regulatory compliance. Our platform empowers research teams to accelerate discovery timelines without compromising on security protocols.
          </p>
          <footer className="text-right font-semibold text-gray-700">
            – Andrea Wang, CEO at AHEAD Medicine
          </footer>
        </blockquote>
        <p className="mb-6 text-justify leading-relaxed">
          AHEAD Medicine is committed to maintaining the information security of its operational environment and serving our customers with integrity. Beyond implementing fundamental and necessary information security control measures, we place emphasis on ensuring that all data and processing activities are securely protected. Our company will strengthen information security management and continuously enhance the <strong>confidentiality</strong>, <strong>integrity</strong>, and <strong>availability</strong> of critical personal and transactional data, effectively implementing information security management practices to improve our service quality.
        </p>
        <p className="mb-4 font-semibold">Our Information Security Statement is as follows:</p>
        <ol className="list-decimal pl-8 space-y-5 text-justify text-lg">
          <li>
            An appropriate organizational structure will be established to execute information security management operations, ensuring compliance with relevant laws and regulations and maintaining the normal operation of the information security management system (ISMS).
          </li>
          <li>
            Job assignments will consider functional segregation, with clear delineation of job responsibilities to prevent unauthorized modification or misuse of information or services.
          </li>
          <li>
            All personnel who use company information for providing information services or executing project work are responsible and obligated to protect the company&apos;s information assets they obtain or use, preventing unauthorized access, alteration, destruction, or improper disclosure.
          </li>
          <li>
            All personnel are obligated to protect customer data, including transactional and basic information. Accessing, using, disclosing, or informing unrelated colleagues, vendors, or other customers of such information without authorization is strictly prohibited.
          </li>
          <li>
            The physical security of the computer information environment should be strengthened, including access control for server rooms, air conditioning, uninterruptible power supplies, etc., to prevent unauthorized access, damage, or accidental disasters that may impact normal business operations.
          </li>
          <li>
            All personnel must not privately connect external networks with the company&apos;s internal network. Necessary security measures should be implemented to protect both internal and external networks.
          </li>
          <li>
            Security controls should be considered at the initial stages of system development. For outsourced development, control and contractual information security requirements must be strengthened. System development, modification, and implementation must comply with information security management standards.
          </li>
          <li>
            All personnel should remain vigilant and report any occurrence or suspicion of security incidents, vulnerabilities, or non-compliance with the ISMS implementation standards and management procedures, following the established reporting procedures.
          </li>
          <li>
            Business continuity plans should be developed according to business needs and tested regularly to ensure their applicability.
          </li>
          <li>
            The information security organisation shall establish information security objectives based on the information security policy and organisational responsibilities, with review and approval by the Information Security Committee before implementation.
          </li>
          <li>
            The information security objectives should address <strong>confidentiality</strong>, <strong>integrity</strong>, and <strong>availability</strong>, reflecting the requirements derived from the information security policy.
          </li>
          <li>
            This policy shall be reviewed at least once a year by the highest authority of the company&apos;s information security organisation to ensure alignment with the latest developments in relevant laws, technology, and business operations, thereby ensuring the effectiveness of information security practices.
          </li>
          <li>
            Any matters not covered by this policy shall be handled in accordance with relevant laws and company regulations.
          </li>
          <li>
            This policy shall be implemented upon the approval of the company&apos;s Chief Information Security Officer (CISO); any amendments shall follow the same process.
          </li>
        </ol>
      </div>
    </main>
  );
}