import React from 'react';
import styles from './terms.module.css';
import { SITE_CONFIG } from '@/configs/site-config';

export const metadata = {
    title: 'Terms and Conditions | Next Apps',
    description: 'Please read our terms and conditions carefully before using Next App services.',
};

const TermsPage = () => {
    return (
        <main className={styles.termsContainer}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Terms and Conditions</h1>
                </div>
            </section>

            <div className={styles.contentWrapper}>
                <section className={styles.section}>
                    <p>
                        Please read these Terms and Conditions carefully before using the Next Apps website, mobile applications, or any of the digital services offered by Next Apps. By accessing or using our services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to any part of these Terms, you must not use our services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>1</span> About Next Apps</h2>
                    <p>
                        Next Apps is a full-service digital product studio headquartered in the United States, with development operations in Pakistan. We design, build, and deploy mobile applications, web platforms, e-commerce solutions, game development products, blockchain applications, AR/VR experiences, and custom software for businesses and entrepreneurs worldwide. References to “Next Apps,” “we,” “us,” or “our” throughout these Terms refer to Next Apps and its affiliated teams across both operating regions.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>2</span> Acceptance of Terms</h2>
                    <p>
                        By visiting our website at nextappsinc.com, submitting an inquiry through our contact forms, engaging Next Apps for any service, or using any product built and delivered by Next Apps, you agree to these Terms and Conditions in full. These Terms apply to all visitors, clients, prospects, and users who interact with Next Apps in any capacity.
                    </p>
                    <p>
                        Next Apps reserves the right to update, revise, or replace any part of these Terms at any time. We will notify existing clients of material changes through email or a notice on our website. Your continued use of our services after any revision constitutes acceptance of the updated Terms.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>3</span> Services Offered</h2>
                    <p>Next Apps provides the following categories of digital services to clients globally:</p>
                    <ul>
                        <li>Mobile Application Development — iOS, Android, Flutter, and React Native</li>
                        <li>E-Commerce Development — custom storefronts, marketplaces, and retail platforms</li>
                        <li>Game Development — mobile games, Unity experiences, and interactive entertainment</li>
                        <li>Web Development — SaaS platforms, web applications, and full-stack solutions</li>
                        <li>Custom Software Development — internal tools, workflow automation, and system integrations</li>
                        <li>Blockchain App Development — decentralized applications, smart contracts, and Web3 platforms</li>
                        <li>AR/VR App Development — augmented and virtual reality applications for mobile and enterprise</li>
                    </ul>
                    <p>
                        The specific scope, deliverables, timeline, and pricing for any engagement are governed by the individual project agreement, Statement of Work (SOW), or service contract entered into between Next Apps and the client. In the event of any conflict between these Terms and a specific project agreement, the project agreement takes precedence for matters covered therein.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>4</span> Client Responsibilities</h2>
                    <h3>4.1 Accurate Information</h3>
                    <p>
                        You agree to provide accurate, complete, and current information during the project discovery, briefing, and development process. Providing false, misleading, or incomplete project information may result in delays, additional costs, or termination of the engagement.
                    </p>
                    <h3>4.2 Timely Feedback and Approvals</h3>
                    <p>
                        Project timelines are dependent on receiving timely feedback, approvals, and required assets from the client. Next Apps is not responsible for delays in project delivery that result from delays in client-side feedback, content provision, or decision-making. Any delay on the client side that extends the project timeline beyond the originally agreed schedule may result in revised timeline estimates and, where applicable, additional fees.
                    </p>
                    <h3>4.3 Intellectual Property Ownership</h3>
                    <p>
                        You confirm that you hold all necessary rights, licenses, and permissions for any content, brand assets, third-party materials, or proprietary data you provide to Next Apps for use in your project. You indemnify Next Apps against any claims, losses, or damages arising from your use of materials you did not have the legal right to provide.
                    </p>
                    <h3>4.4 Lawful Use</h3>
                    <p>
                        You agree that you will not use any service, application, or digital product delivered by Next Apps for any purpose that is unlawful, harmful, fraudulent, or in violation of any applicable law or regulation in your jurisdiction or the jurisdictions in which your product operates.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>5</span> Payments, Invoicing, and Refunds</h2>
                    <h3>5.1 Payment Schedule</h3>
                    <p>
                        Payment terms for all Next Apps engagements are defined in the individual project agreement or proposal. Standard engagements require an advance payment to begin work, with subsequent milestone-based payments as defined in the project scope. All prices are quoted in US Dollars (USD) unless otherwise agreed in writing.
                    </p>
                    <h3>5.2 Late Payments</h3>
                    <p>
                        Invoices not paid within the agreed payment terms may result in a pause of active development work until payment is received. Next Apps reserves the right to charge interest on overdue balances at a rate of 1.5% per month, or the maximum rate permitted by applicable law, whichever is lower.
                    </p>
                    <h3>5.3 Refund Policy</h3>
                    <p>
                        Due to the custom nature of digital product development, Next Apps does not offer refunds on work already completed and approved by the client. In cases where a project is terminated before completion by the client, the client is responsible for payment of all work completed up to the point of termination, as well as any committed resource costs incurred by Next Apps in preparation for upcoming work. Specific refund or cancellation provisions may be defined in the individual project agreement.
                    </p>
                    <h3>5.4 Currency and Taxes</h3>
                    <p>
                        Clients are responsible for any taxes, duties, or levies applicable in their jurisdiction on payments made to Next Apps. Next Apps is not responsible for withholding or remitting taxes on behalf of clients in jurisdictions outside the United States.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>6</span> Intellectual Property Rights</h2>
                    <h3>6.1 Client Ownership of Deliverables</h3>
                    <p>
                        Upon receipt of full payment for an engagement, Next Apps assigns to the client full ownership of all custom-developed code, design assets, and deliverables created specifically for that client under the project agreement, unless otherwise specified in writing. This assignment does not include third-party components, open-source libraries, proprietary frameworks, or pre-existing Next Apps tools and methodologies incorporated into the deliverables.
                    </p>
                    <h3>6.2 Next Apps Retained Rights</h3>
                    <p>
                        Next Apps retains ownership of all methodologies, processes, frameworks, internal tools, and pre-existing intellectual property used in the delivery of services. The client receives a license to use these components as incorporated in their delivered product but does not receive ownership of the underlying Next Apps tooling.
                    </p>
                    <h3>6.3 Portfolio and Case Study Rights</h3>
                    <p>
                        Next Apps reserves the right to reference client projects, describe the services provided, and display general project information in its portfolio, case studies, and marketing materials unless the client has explicitly requested confidentiality in writing prior to project commencement. Next Apps will not disclose confidential business logic, proprietary data, or sensitive client information in any public-facing content.
                    </p>
                    <h3>6.4 Third-Party Licenses</h3>
                    <p>
                        Some deliverables may incorporate third-party software, libraries, plugins, or frameworks subject to their own licensing terms. The client is responsible for reviewing and complying with any applicable third-party license requirements in their use of the delivered product.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>7</span> Confidentiality</h2>
                    <p>
                        Both parties agree to maintain the confidentiality of any non-public, proprietary, or sensitive information shared during the course of an engagement. This obligation applies throughout the duration of the project and for a period of three years following its conclusion, unless a separate Non-Disclosure Agreement (NDA) specifying different terms has been executed between the parties.
                    </p>
                    <p>
                        Next Apps will not share client project details, business strategy, proprietary data, or technical specifications with any third party without the client’s written consent, except where required by applicable law, court order, or regulatory obligation.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>8</span> Warranties and Disclaimers</h2>
                    <h3>8.1 Service Quality Commitment</h3>
                    <p>
                        Next Apps commits to delivering services with professional skill and care, consistent with industry standards for digital product development. We maintain a post-launch support period as defined in each project agreement, during which we address defects or issues arising directly from our development work at no additional charge.
                    </p>
                    <h3>8.2 No Guarantee of Outcomes</h3>
                    <p>
                        Next Apps does not warrant or guarantee specific business outcomes, revenue results, user acquisition numbers, app store rankings, or commercial performance of any delivered product. The success of a digital product depends on numerous factors outside Next Apps’ control, including market conditions, user behaviour, competition, marketing investment, and operational decisions made by the client after delivery.
                    </p>
                    <h3>8.3 Third-Party Platform Dependency</h3>
                    <p>
                        Certain deliverables depend on third-party platforms, APIs, app stores, cloud services, or operating systems that are outside Next Apps’ control. Next Apps is not responsible for disruptions, policy changes, or performance degradation caused by third-party platforms after a product has been delivered and accepted.
                    </p>
                    <h3>8.4 Limitation of Liability</h3>
                    <p>
                        To the maximum extent permitted by applicable law, Next Apps’ total liability to any client for any claim arising from or related to these Terms or any engagement shall not exceed the total fees paid by the client to Next Apps for the specific project giving rise to the claim in the twelve months preceding the claim. Next Apps shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to loss of revenue, loss of data, or loss of business opportunity, even if advised of the possibility of such damages.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>9</span> Dispute Resolution</h2>
                    <h3>9.1 Good-Faith Resolution</h3>
                    <p>
                        In the event of any dispute, claim, or disagreement arising from or related to these Terms or any Next Apps engagement, both parties agree to first attempt to resolve the matter through good-faith direct negotiation within 30 days of the dispute being raised in writing.
                    </p>
                    <h3>9.2 Governing Law</h3>
                    <p>
                        These Terms and any disputes arising from them shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Clients engaging from outside the United States agree that Delaware law governs their relationship with Next Apps for the purposes of these Terms.
                    </p>
                    <h3>9.3 Arbitration</h3>
                    <p>
                        If direct negotiation does not resolve the dispute within 30 days, both parties agree to submit the matter to binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. Arbitration shall be conducted in English. The arbitrator’s decision shall be final and binding on both parties.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>10</span> Termination</h2>
                    <p>
                        Either party may terminate an engagement by providing written notice to the other party as defined in the relevant project agreement. Upon termination, the client is responsible for payment of all fees for work completed up to the date of termination. Next Apps will provide all completed deliverables and work-in-progress materials to the client within a reasonable timeframe following settlement of any outstanding balance.
                    </p>
                    <p>
                        Next Apps reserves the right to terminate any engagement immediately, without notice, if the client engages in conduct that is illegal, harmful, or in material breach of these Terms.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>11</span> Force Majeure</h2>
                    <p>
                        Next Apps shall not be held liable for any delay or failure in performance resulting from causes beyond our reasonable control, including but not limited to natural disasters, civil unrest, government actions, pandemics, internet or infrastructure failures, or any other event that constitutes force majeure. In such circumstances, Next Apps will notify the client promptly and use reasonable efforts to resume services as soon as practicable.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>12</span> Entire Agreement</h2>
                    <p>
                        These Terms and Conditions, together with any executed project agreement, SOW, or service contract, constitute the entire agreement between Next Apps and the client with respect to the subject matter herein, and supersede all prior communications, representations, or agreements, whether written or oral.
                    </p>
                </section>

                <section className={styles.contactInfo}>
                    <h2>Contact Us</h2>
                    <p>If you have questions about these Terms and Conditions, please contact Next Apps at:</p>
                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <h4>Email</h4>
                            <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
                        </div>
                        <div className={styles.contactItem}>
                            <h4>Phone</h4>
                            <a href={`tel:${SITE_CONFIG.contact.phone}`}>{SITE_CONFIG.contact.phone}</a>
                        </div>
                        <div className={styles.contactItem}>
                            <h4>Website</h4>
                            <a href="https://nextappsinc.com/" target="_blank" rel="noopener noreferrer">www.nextappsinc.com</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default TermsPage;
