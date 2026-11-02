export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDistinction {
  scenario: string;
  recommendedTitle: string;
  recommendedSlug: string;
  anchorText: string;
}

export interface SpecialistLink {
  title: string;
  slug: string;
  focus: string;
  anchorText: string;
}

export interface EducationalGuideRef {
  title: string;
  category: string;
  summary: string;
  anchorText: string;
  url: string;
}

export interface EngagementStage {
  stageNumber: string;
  title: string;
  description: string;
}

export interface AfterEnquiryStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  primaryKeyword: string;
  metaDescription: string;
  pageIntroduction: string;
  category: 'financial-relationship' | 'crypto-fraud' | 'wallet-access';
  categoryLabel: string;
  subtitle: string;
  heroTagline?: string;
  intendedAudience?: string;
  keyQuestionsAnswered?: string[];
  summary: string;
  overview: string;
  keyProblems: string[];
  warningSigns?: string[];
  scamDistinctionText?: string;
  investigationApproach: string;
  realisticPathways: string[];
  evidenceChecklist: string[];
  deliverables: string[];
  engagementStages?: EngagementStage[];
  costPrinciples?: string;
  realisticExpectations?: string;
  outcomeFactors?: string[];
  afterEnquirySteps?: AfterEnquiryStep[];
  faqs: ServiceFaq[];
  isParentPillar?: boolean;
  parentPillarSlug?: string;
  specialistLinks?: SpecialistLink[];
  distinctions?: ServiceDistinction[];
  relatedGuides?: EducationalGuideRef[];
  disclaimer?: string;
}

export interface ServiceCategory {
  id: 'financial-relationship' | 'crypto-fraud' | 'wallet-access';
  title: string;
  headline: string;
  badge: string;
  description: string;
  services: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'financial-relationship',
    title: 'Category A — Financial & Relationship Scams',
    headline: 'Traditional Investments, Payments & Social Engineering Fraud',
    badge: 'Category A',
    description: 'Specialist investigations into authorized push payment deceptions, bogus offshore brokers, fraudulent loan fees, and emotionally coercive confidence schemes.',
    services: [
      {
        slug: 'investment-scam-recovery',
        title: 'Investment Scam Recovery',
        shortTitle: 'Investment Scams',
        seoTitle: 'Investment Scam Recovery | Restiturecore',
        primaryKeyword: 'investment scam recovery',
        metaDescription: 'Lost money to an unregulated broker, clone firm or fake trading platform? Learn how investment scam recovery works, the evidence required, and realistic next steps.',
        pageIntroduction: 'If you have lost capital to an unregulated broker, cloned asset management firm, or fictitious trading dashboard, understanding how investment scam recovery operates is essential. Restiturecore evaluates your transaction records, identifies merchant and banking endpoints, and assesses realistic next steps without false guarantees.',
        category: 'financial-relationship',
        categoryLabel: 'Financial & Relationship Scams',
        subtitle: 'Unregulated offshore brokers, cloned asset managers, and fictitious yield platforms.',
        heroTagline: 'Understand your options after losing money to a fraudulent investment.',
        intendedAudience: 'Individual retail investors, corporate entities, and private wealth clients who deposited capital with unregulated offshore brokerages, cloned wealth management firms, or algorithmic trading portals that subsequently locked withdrawals.',
        keyQuestionsAnswered: [
          'Can capital transferred to an offshore or unregulated broker be traced?',
          'What banking and payment gateway evidence is needed to lodge an effective dispute?',
          'Are secondary fee demands (e.g. "capital gains clearance" or "release tax") ever legitimate?',
          'What legal and regulatory pathways exist when a fraudulent broker stops responding?'
        ],
        summary: 'Investigation into fraudulent investment schemes, unverified wealth managers, and deceptive trading platforms that lock client deposits.',
        overview: 'Investment scams typically operate through convincing professional fronts: cloned websites of regulated brokerages, fictitious algorithmic trading dashboards showing impossible gains, and high-pressure telemarketing. When investors attempt to liquidate their capital, perpetrators manufacture demands for "exit taxes," "capital gains clearances," or "anti-money laundering fees" before severing communication.',
        keyProblems: [
          'Deposits diverted to offshore shell companies or personal mule accounts',
          'Fabricated trading dashboards that display artificial profits but block withdrawals',
          'Demands for secondary advance fees or bogus taxes to release account funds',
          'Impersonation of established Financial Conduct Authority (FCA) or SEC regulated entities'
        ],
        warningSigns: [
          'Unsolicited contact via cold calls, social media ads, or messaging apps offering guaranteed market-beating returns',
          'Cloned corporate names, false licensing claims (e.g., claiming bogus FCA, SEC, or CySEC registration)',
          'Trading dashboards showing steady exponential growth, but blocking capital withdrawal requests',
          'Demands for secondary advance fees, insurance deposits, or "tax clearance" before any withdrawal is processed'
        ],
        scamDistinctionText: 'Unlike unauthorized account takeovers or phishing exploits, investment scams involve voluntary transfers made under fraudulent pretenses. The fraudster controls a convincing institutional front—such as a proprietary trading dashboard or cloned brokerage license—making the primary investigative task auditing merchant gateways, receiving mule accounts, and corporate infrastructure.',
        investigationApproach: 'We audit payment corridors, map merchant accounts and acquiring banks utilized by the fraudulent platform, review corporate registrations across multiple jurisdictions, and trace funds through banking intermediaries to establish where funds were deposited.',
        realisticPathways: [
          'Direct banking dispute and chargeback compilation for credit card / bank wire transactions',
          'Identification of receiving institutions with potential Anti-Money Laundering (AML) control failures',
          'Evidentiary reporting submission to relevant national financial regulators and law enforcement'
        ],
        evidenceChecklist: [
          'Broker registration emails, contracts, and terms of service',
          'Bank transaction receipts, wire confirmation slips, or credit card statements',
          'Complete copies of all email correspondence, chat logs (WhatsApp, Telegram), and call logs',
          'Screenshots of the account dashboard, transaction history, and rejected withdrawal requests'
        ],
        deliverables: [
          'Corporate & Entity Infrastructure Audit',
          'Merchant & Receiving Account Trace Report',
          'Banking Dispute & Law Enforcement Briefing Package'
        ],
        distinctions: [
          {
            scenario: 'Were you manipulated into authorizing a direct bank transfer under false pretenses or impersonation?',
            recommendedTitle: 'Bank Transfer & APP Scam Recovery',
            recommendedSlug: 'bank-transfer-and-app-scam-recovery',
            anchorText: 'Explore Bank Transfer & APP Scam Recovery'
          },
          {
            scenario: 'Did the investment involve cryptocurrency yields, fake liquidity staking, or algorithmic DeFi bots?',
            recommendedTitle: 'Crypto Investment Scam Recovery',
            recommendedSlug: 'crypto-investment-scam-recovery',
            anchorText: 'Explore Crypto Investment Scam Recovery'
          },
          {
            scenario: 'Were you groomed over months by a romantic interest before being introduced to the investment?',
            recommendedTitle: 'Romance Scam Recovery',
            recommendedSlug: 'romance-scam-recovery',
            anchorText: 'Explore Romance Scam Recovery'
          }
        ],
        relatedGuides: [
          {
            title: 'Warning Signs of a Secondary Recovery Scam',
            category: 'Protection Guide',
            summary: 'Learn how to recognize fraudulent "hack-back" promises, advance recovery taxes, and impersonators targeting investment fraud victims.',
            anchorText: 'Read Secondary Recovery Scam Warning Guide',
            url: '/resources#secondary-recovery-scams'
          }
        ],
        faqs: [
          {
            question: 'Can money lost to an offshore broker always be recovered?',
            answer: 'No. Anyone promising guaranteed recovery from unregulated offshore brokers is not being truthful. Viable recovery depends on whether funds touched regulated payment gateways, whether acquiring banks failed basic AML screening, or if recipient accounts can still be identified and frozen.'
          },
          {
            question: 'Should I pay the tax or clearance fee demanded to release my funds?',
            answer: 'Never send additional funds. Demands for "capital gains tax," "insurance," or "AML verification fees" to unlock withdrawals are standard secondary extortion tactics used by investment scammers.'
          },
          {
            question: 'What documentation do I need to begin an investment scam assessment?',
            answer: 'Deposit bank statements, transaction IDs, copies of contracts or broker agreements, and all communication records (emails, WhatsApp, Telegram) with account managers.'
          }
        ]
      },
      {
        slug: 'romance-scam-recovery',
        title: 'Romance Scam Recovery',
        shortTitle: 'Romance Scams',
        seoTitle: 'Romance Scam Recovery | Restiturecore',
        primaryKeyword: 'romance scam recovery',
        metaDescription: 'Been deceived by an online relationship and lost money? Understand the evidence that may help assess your case and the possible next steps.',
        pageIntroduction: 'Been deceived by an online relationship and lost money? Romance scam recovery requires decoupling the emotional narrative from the physical digital paper trail. Learn what evidence may help assess your case, how financial endpoints are identified, and the realistic options available.',
        category: 'financial-relationship',
        categoryLabel: 'Financial & Relationship Scams',
        subtitle: 'Confidence fraud and coercive emotional manipulation leading to financial transfers.',
        heroTagline: 'Understand your options after transferring money to an online relationship or confidence scheme.',
        intendedAudience: 'Individuals who formed an online relationship or friendship and were subsequently manipulated into transferring personal savings, taking out loans, or purchasing assets on behalf of a counterfeit identity.',
        keyQuestionsAnswered: [
          'How can investigators trace funds sent under emotional coercion to an unverified individual?',
          'What electronic records and chat histories must be preserved to prove deceptive intent?',
          'Can sending or receiving banks be held accountable for failing to spot anomalous transfer patterns?',
          'How can financial destinations be unmasked when the individual used stolen photos and burner profiles?'
        ],
        summary: 'Compassionate, confidential investigation for victims coerced into transferring money or assets to deceptive online acquaintances.',
        overview: 'Romance fraud involves sophisticated psychological manipulation over months. Perpetrators establish strong emotional bonds, simulate genuine relationships, and systematically introduce fabricated personal crises or lucrative business opportunities requiring urgent financial transfers.',
        keyProblems: [
          'Gradual emotional grooming resulting in multiple emergency financial transfers',
          'Use of stolen identities, synthetic profile photos, and VPN proxies',
          'Fabricated medical crises, customs fees, travel issues, or golden business ventures',
          'Shame or hesitation from the victim that delays immediate forensic intervention'
        ],
        warningSigns: [
          'Rapid declaration of strong emotional feelings combined with repeated excuses for avoiding video calls or in-person meetings',
          'Escalating personal emergencies requiring urgent financial transfers (e.g., medical crises, customs fees, frozen inheritance)',
          'Requests to send funds via peer-to-peer wire services, money transfer apps, or newly opened secondary accounts',
          'Coercion to keep the financial assistance secret from family members, friends, or banking personnel'
        ],
        scamDistinctionText: 'Unlike cold investment fraud or impersonation scams, romance fraud operates on deep emotional intimacy and prolonged psychological conditioning. Because the victim voluntarily authorized the payments believing they were helping a loved one, the investigation focuses on unmasking the money mule network, tracing intermediary beneficiary accounts, and examining whether sending banks fulfilled their anti-fraud duty of care.',
        investigationApproach: 'We decouple the personal emotional narrative from the physical digital paper trail. Our investigators extract metadata from digital interactions, identify communications origins, map mule accounts, and document the financial destinations without judgment.',
        realisticPathways: [
          'Freezing recipient accounts where rapid reporting alerts the receiving financial institutions',
          'Submission of cross-jurisdictional evidence to specialized cybercrime and fraud divisions',
          'Civil discovery support to identify the true owners of intermediary mule accounts'
        ],
        evidenceChecklist: [
          'Complete archive of chat conversations (WhatsApp, Messenger, Telegram, dating apps)',
          'Bank transfer confirmations, money service business receipts (e.g., Western Union, Wise)',
          'Any cryptocurrency wallet addresses or wire instructions provided by the individual',
          'Profile links, phone numbers, and email headers used by the counterparty'
        ],
        deliverables: [
          'Counterparty Digital Identity & Location Analysis',
          'Comprehensive Financial Endpoint Mapping',
          'Law Enforcement & Legal Counsel Evidence Dossier'
        ],
        distinctions: [
          {
            scenario: 'Did the relationship guide you into buying crypto to deposit onto a fake trading platform (Sha Zhu Pan)?',
            recommendedTitle: 'Pig Butchering Crypto Scam Recovery',
            recommendedSlug: 'pig-butchering-crypto-scam-recovery',
            anchorText: 'Explore Pig Butchering Crypto Scam Recovery'
          },
          {
            scenario: 'Did you send direct domestic or international bank wires to mule accounts?',
            recommendedTitle: 'Bank Transfer & APP Scam Recovery',
            recommendedSlug: 'bank-transfer-and-app-scam-recovery',
            anchorText: 'Explore Bank Transfer & APP Scam Recovery'
          }
        ],
        relatedGuides: [
          {
            title: 'Warning Signs of a Secondary Recovery Scam',
            category: 'Protection Guide',
            summary: 'Be aware of secondary operators claiming they have retrieved romance fraud losses in exchange for upfront clearance fees.',
            anchorText: 'Review Secondary Scam Warning Signs',
            url: '/resources#secondary-recovery-scams'
          }
        ],
        faqs: [
          {
            question: 'How do investigators trace a romance scammer who used fake identities?',
            answer: 'While photos and social profiles are usually stolen, scammers leave electronic trails: bank accounts belonging to intermediary money mules, cryptocurrency deposit addresses, and phone or server infrastructure.'
          },
          {
            question: 'Is my case kept completely confidential?',
            answer: 'Yes. All romance fraud consultations and evidence reviews are handled under strict confidentiality. We treat every client with complete empathy, discretion, and respect.'
          },
          {
            question: 'Can I recover funds sent through money transfer apps or wires?',
            answer: 'Possibilities depend on how quickly beneficiary accounts were reported, whether receiving banks observed appropriate anti-fraud protocols, and whether mule networks can be legally compelled to disclose identities.'
          }
        ]
      },
      {
        slug: 'bank-transfer-and-app-scam-recovery',
        title: 'Bank Transfer & APP Scam Recovery',
        shortTitle: 'Bank Transfer & APP Scams',
        seoTitle: 'Bank Transfer & APP Scam Recovery | Restiturecore',
        primaryKeyword: 'bank transfer scam recovery',
        metaDescription: 'Sent money to a scammer by bank transfer? Learn about APP fraud, the records to preserve and the potential routes for reviewing your circumstances.',
        pageIntroduction: 'Sent money to a scammer by bank transfer? In Authorized Push Payment (APP) fraud, swift action and proper documentation are vital. Learn about APP fraud mechanics, the banking records to preserve, and the potential regulatory and dispute routes for reviewing your circumstances.',
        category: 'financial-relationship',
        categoryLabel: 'Financial & Relationship Scams',
        subtitle: 'Authorized Push Payment (APP) fraud, impersonation, and safe account deception.',
        heroTagline: 'Understand your options after being manipulated into authorizing a fraudulent bank transfer.',
        intendedAudience: 'Individuals and businesses tricked into authorizing direct bank payments (wires, Faster Payments, Fedwire, SEPA) to criminal-controlled beneficiary accounts under safe-account, invoice redirection, or bank impersonation pretexts.',
        keyQuestionsAnswered: [
          'What immediate actions must be taken to initiate a formal bank payment recall?',
          'How do Confirmation of Payee (CoP) failures and regulatory reimbursement codes (e.g., CRM/PSR) apply to your case?',
          'What evidence demonstrates that you exercised reasonable care and did not act with gross negligence?',
          'How can ombudsman escalations be pursued if your bank issues an initial refund denial?'
        ],
        summary: 'Forensic evaluation and dispute packaging for individuals and businesses manipulated into making direct bank wire transfers.',
        overview: 'Authorized Push Payment (APP) scams deceive victims into authorizing transfers directly to criminal-controlled bank accounts. Common variants include bank staff impersonation, police fraud department impersonation, invoice redirection fraud, and "safe account" scams where victims are panicked into moving funds.',
        keyProblems: [
          'Instant payments that settle within seconds across commercial clearing systems',
          'Rapid dispersion of stolen capital across multiple tiered money mule accounts',
          'Initial refusal by sending banks to reimburse based on customer authorization',
          'High sophistication in telephone number spoofing and authentic banking security terminology'
        ],
        warningSigns: [
          'Urgent telephone calls from individuals claiming to be your bank\'s fraud department, the police, or tax authorities',
          'Instructions to immediately move your funds to a "safe account" or "holding vault" while an internal breach is resolved',
          'Spoofed caller ID numbers matching your bank\'s official telephone number on the back of your card',
          'Sudden email notifications from an established vendor or contractor requesting that payment be sent to revised account details'
        ],
        scamDistinctionText: 'APP fraud differs from unauthorized bank fraud because the genuine account holder physically executes the transaction. As a result, commercial banks initially attempt to deny liability. Recovery and reimbursement pathways rely on demonstrating systemic compliance failures by both the sending and receiving institutions, including neglected warning flags, Confirmation of Payee discrepancies, and inadequate mule account controls.',
        investigationApproach: 'We assess the entire transaction timeline, review the security warnings displayed by the sending bank, verify whether receiving institutions violated Know Your Customer (KYC) or Confirmation of Payee obligations, and prepare comprehensive regulatory complaints.',
        realisticPathways: [
          'Formal bank dispute appeals under relevant regulatory frameworks (e.g., UK CRM Code / PSR rules)',
          'Escalation to statutory financial ombudsman services for adjudication',
          'Identification of secondary receiving banks where funds may remain frozen'
        ],
        evidenceChecklist: [
          'Full bank statements showing debited amounts, dates, times, and exact references',
          'Details of any warnings shown in the banking application prior to confirmation',
          'Call records proving caller ID spoofing or fraudulent telephone contact',
          'Initial dispute correspondence and denial letters from the sending bank'
        ],
        deliverables: [
          'Timeline & Confirmation of Payee Audit',
          'Bank Compliance & Duty of Care Failure Analysis',
          'Formal Ombudsman / Regulatory Dispute Dossier'
        ],
        distinctions: [
          {
            scenario: 'Did you transfer money to buy cryptocurrency on an exchange before sending it to a third party?',
            recommendedTitle: 'Crypto Scam Recovery',
            recommendedSlug: 'crypto-scam-recovery',
            anchorText: 'Explore Crypto Scam Recovery'
          },
          {
            scenario: 'Were you paying advance insurance or processing fees for a fake loan offer?',
            recommendedTitle: 'Loan Scam Recovery',
            recommendedSlug: 'loan-scam-recovery',
            anchorText: 'Explore Loan Scam Recovery'
          }
        ],
        relatedGuides: [
          {
            title: 'What to Do After a Bank Transfer Scam (APP Fraud)',
            category: 'Action Guide',
            summary: 'Immediate critical steps with your sending bank, recall requests, freezing recipient beneficiary accounts, and regulatory ombudsman deadlines.',
            anchorText: 'Read Bank Transfer Scam Action Guide',
            url: '/resources#bank-transfer-scams'
          }
        ],
        faqs: [
          {
            question: 'Why did my bank refuse to refund my bank transfer scam?',
            answer: 'Banks frequently deny initial claims on the basis that the customer "authorized" the payment. However, regulatory frameworks in many jurisdictions obligate banks to identify suspicious behavior, implement effective Confirmation of Payee checks, and protect vulnerable customers.'
          },
          {
            question: 'What is the Contingent Reimbursement Model (CRM) / PSR framework?',
            answer: 'These are regulatory standards (notably in the UK and expanding globally) that hold sending and receiving financial institutions accountable for reimbursing victims of APP fraud unless gross negligence is proven.'
          },
          {
            question: 'What immediate steps should I take if I sent money to a fraudulent account?',
            answer: 'Notify your sending bank immediately to request an urgent payment recall, request that the receiving bank freeze beneficiary accounts, and report the incident to national fraud reporting desks (e.g., Action Fraud, IC3).'
          }
        ]
      },
      {
        slug: 'loan-scam-recovery',
        title: 'Loan Scam Recovery',
        shortTitle: 'Loan Scams',
        seoTitle: 'Loan Scam Recovery | Restiturecore',
        primaryKeyword: 'loan scam recovery',
        metaDescription: 'Paid advance fees, insurance, or collateral for a fake loan offer? Understand corporate lender verification, payment trail audits, and banking recall processes.',
        pageIntroduction: 'Paid upfront fees, insurance premiums, or collateral for an approved loan that never arrived? Our loan scam recovery evaluations review lender corporate legitimacy, trace payment intermediary accounts, and document the transaction trail for formal recall and regulatory action.',
        category: 'financial-relationship',
        categoryLabel: 'Financial & Relationship Scams',
        subtitle: 'Advance-fee loan schemes, fake credit offers, and sham collateral demands.',
        heroTagline: 'Understand your options after paying upfront fees for a loan or credit line that was never disbursed.',
        intendedAudience: 'Consumers, entrepreneurs, and businesses seeking personal financing, debt consolidation, or business liquidity who paid upfront "processing fees," "insurance," or "collateral" to an illegitimate lender.',
        keyQuestionsAnswered: [
          'Why do legitimate, regulated lenders never demand upfront fees via gift cards, wire transfers, or crypto?',
          'Can beneficiary accounts used to collect advance fees be frozen before funds are layered?',
          'What documentation is needed to file formal complaints with consumer protection bureaus and financial regulators?',
          'What are the practical prospects of recovering advance fees from cloned lending firms?'
        ],
        summary: 'Investigation into predatory loan fraud where individuals pay upfront fees, insurance, or collateral for credit lines that never materialize.',
        overview: 'Advance-fee loan scams prey on individuals or businesses seeking credit. Perpetrators guarantee approval regardless of credit score, but demand upfront "processing fees," "insurance deposits," or "first installment advances." Once received, further fees are demanded under various pretexts until the victim stops paying.',
        keyProblems: [
          'Upfront fees paid via bank transfer, prepaid cards, or digital currencies',
          'Fake lender identities spoofing legitimate registered financial institutions',
          'Fabricated loan approval certificates and counterfeit financial contracts',
          'Continuous extortion for additional release fees, taxes, or AML clearance'
        ],
        warningSigns: [
          'Guaranteed loan approvals without any credit checks, income verification, or financial underwriting',
          'Demands for upfront fees for "loan processing," "originator insurance," "pre-approval collateral," or "notary stamps"',
          'Pressure to make fee payments via instant peer-to-peer apps, cryptocurrency, or wire transfer to personal accounts',
          'The purported lender operates exclusively via mobile messaging, Gmail/Outlook domains, or recently registered websites'
        ],
        scamDistinctionText: 'Loan fraud is characterized by advance-fee extortion targeting individuals in urgent need of capital. Unlike investment schemes where the victim expects speculative trading gains, loan scam victims seek legitimate debt financing. The investigation centers on corporate registration audits, domain hosting telemetry, and tracing the money mule accounts used to collect upfront processing fees.',
        investigationApproach: 'We verify the corporate legitimacy of the purported lender, trace payment processors and beneficiary bank accounts used to accept advance fees, and document identity theft or domain spoofing utilized by the criminal group.',
        realisticPathways: [
          'Rapid recall requests with receiving institutions before funds are completely layered',
          'Evidence submission for coordinated takedowns of fraudulent loan domains',
          'Documentation for chargebacks where credit/debit card rails were utilized'
        ],
        evidenceChecklist: [
          'Loan application documents, approval letters, and fee schedules',
          'Bank or card payment receipts detailing recipient details and transaction references',
          'All communication records from loan representatives and underwriters',
          'Domain URLs and advertising sources where the loan was initially discovered'
        ],
        deliverables: [
          'Lender Entity & Domain Verification Report',
          'Advance Fee Transaction Trail Audit',
          'Banking Recall & Regulatory Submission Package'
        ],
        distinctions: [
          {
            scenario: 'Did you make the transfer from your domestic bank account believing it was a legitimate credit provider?',
            recommendedTitle: 'Bank Transfer & APP Scam Recovery',
            recommendedSlug: 'bank-transfer-and-app-scam-recovery',
            anchorText: 'Explore Bank Transfer & APP Scam Recovery'
          }
        ],
        faqs: [
          {
            question: 'Is it legal for a legitimate lender to require upfront fees before releasing a loan?',
            answer: 'In most developed jurisdictions (including the US, UK, and EU), regulated lenders do not require borrowers to pay upfront processing fees or insurance via untraceable payment methods before disbursing funds.'
          },
          {
            question: 'Can advance fees sent via bank wire be recovered?',
            answer: 'If reported swiftly, beneficiary bank accounts can be flagged for fraud, and formal recall notices can be lodged against the money mule account that received the deposit.'
          },
          {
            question: 'What if the loan company used a real company’s name and license number?',
            answer: 'This is a "clone firm" scam. We verify company register filings with regulatory databases to demonstrate to banks and authorities that you were deceived by an unauthorized impersonator.'
          }
        ]
      }
    ]
  },
  {
    id: 'crypto-fraud',
    title: 'Category B — Cryptocurrency Scam Recovery',
    headline: 'Crypto Investment Fraud, Fraudulent Platforms & On-Chain Manipulation',
    badge: 'Category B',
    description: 'Specialist blockchain forensic tracing for stolen digital assets across EVM chains, Bitcoin, Solana, and TRON. We map transaction flows to centralized exchanges for freezing petitions.',
    services: [
      {
        slug: 'crypto-scam-recovery',
        title: 'Specialist Crypto Scam Recovery',
        shortTitle: 'Crypto Scams (Parent Pillar)',
        seoTitle: 'Crypto Scam Recovery | Restiturecore',
        primaryKeyword: 'crypto scam recovery',
        metaDescription: 'Lost cryptocurrency to fraudulent schemes or unauthorized transfers? Explore how blockchain tracing, exchange attribution, and evidence packaging support case assessments.',
        pageIntroduction: 'Lost cryptocurrency to fraudulent schemes, deceptive platforms, or unauthorized transfers? Crypto scam recovery serves as our central pillar for digital asset investigations. We employ on-chain forensics to trace stolen assets across blockchains and identify cash-out nodes at regulated centralized exchanges where freezing notices can be served.',
        category: 'crypto-fraud',
        categoryLabel: 'Cryptocurrency Scam Recovery',
        subtitle: 'The authoritative parent portal for blockchain tracing across all specialist crypto fraud types.',
        heroTagline: 'Understand your options after losing digital assets to fraudulent crypto schemes or unauthorized transfers.',
        intendedAudience: 'Digital asset holders, institutional investors, and Web3 participants who lost Bitcoin, Ethereum, stablecoins, or other tokens to fraudulent investment platforms, rogue exchanges, phishing contracts, or social engineering.',
        keyQuestionsAnswered: [
          'How does blockchain forensic tracing locate stolen cryptocurrency across mixers and bridges?',
          'How do regulated centralized exchanges cooperate with freezing requests and subpoenas?',
          'What is the critical difference between on-chain tracing and legal asset recovery?',
          'Which specialist Restiturecore crypto desk matches the specific mechanics of your loss?'
        ],
        summary: 'End-to-end blockchain tracing to locate stolen cryptocurrency across decentralized protocols, mixers, and centralized exchange cash-out nodes.',
        overview: 'Decentralized cryptocurrency transactions are immutable—no private investigator or company has the technical ability to reverse a confirmed blockchain transaction. However, public ledgers provide an unbroken record. Through advanced cluster heuristics and cross-chain tracking, we trace the flow of stolen assets until they reach regulated Virtual Asset Service Providers (VASPs).',
        warningSigns: [
          'Unsolicited investment opportunities promising guaranteed fixed daily, weekly, or monthly APY in cryptocurrency',
          'Platforms demanding additional crypto deposits to unlock withdrawals or cover fabricated "AML clearance fees"',
          'Smart contract signatures requesting unlimited token approvals or blind "Permit" authorization',
          'Unregulated exchanges refusing withdrawals and demanding "VIP security upgrades" to release account balances'
        ],
        scamDistinctionText: 'As Restiturecore\'s parent cryptocurrency pillar, this desk provides broad blockchain intelligence across all digital asset fraud types. It focuses on cryptographic transaction tracing, cluster attribution, and bridge traversal to identify regulated virtual asset off-ramps, serving as the foundational investigative framework for our specialist crypto desks.',
        isParentPillar: true,
        specialistLinks: [
          {
            title: 'Crypto Investment Scam Recovery',
            slug: 'crypto-investment-scam-recovery',
            focus: 'Fake trading platforms, fabricated returns, simulated trading bots, and deposits made into fraudulent yield schemes.',
            anchorText: 'Explore Crypto Investment Scam Recovery'
          },
          {
            title: 'Fake Crypto Exchange Scam Recovery',
            slug: 'fake-crypto-exchange-scam-recovery',
            focus: 'Fraudulent exchange domains, withdrawal restrictions, fabricated order books, and demands for secondary clearance taxes.',
            anchorText: 'Explore Fake Crypto Exchange Scam Recovery'
          },
          {
            title: 'Crypto Phishing Scam Recovery',
            slug: 'crypto-phishing-scam-recovery',
            focus: 'Malicious links, fake Web3 wallet interfaces, compromised credentials, and unauthorized Permit2 drainer transactions.',
            anchorText: 'Explore Crypto Phishing Scam Recovery'
          },
          {
            title: 'Pig Butchering Crypto Scam Recovery',
            slug: 'pig-butchering-crypto-scam-recovery',
            focus: 'Transnational grooming syndicates, prolonged social engineering, fraudulent investment portals, and escalating deposits.',
            anchorText: 'Explore Pig Butchering Crypto Scam Recovery'
          },
          {
            title: 'Crypto Romance Scam Recovery',
            slug: 'crypto-romance-scam-recovery',
            focus: 'Romantic manipulation directing victims to purchase crypto on legitimate exchanges and send it to syndicate wallets.',
            anchorText: 'Explore Crypto Romance Scam Recovery'
          },
          {
            title: 'Crypto Pump and Dump Scam Recovery',
            slug: 'crypto-pump-and-dump-scam-recovery',
            focus: 'Coordinated token manipulation, developer liquidity rug pulls, honeypot contracts, and insider wallet extraction.',
            anchorText: 'Explore Crypto Pump and Dump Scam Recovery'
          },
          {
            title: 'Crypto Wallet Recovery Services',
            slug: 'wallet-recovery',
            focus: 'Non-scam technical access recovery for forgotten passwords, corrupted keystores, and partial seed phrases.',
            anchorText: 'Explore Crypto Wallet Recovery Services'
          }
        ],
        keyProblems: [
          'Funds transferred across multiple intermediate hops and cross-chain bridges',
          'Perpetrators attempting obfuscation through mixers (e.g., Tornado Cash, Railgun)',
          'Confusion over which jurisdiction or law enforcement agency has authority',
          'Victims being targeted by secondary "hack-back" scammers promising instant recovery'
        ],
        investigationApproach: 'Our analysts employ institutional-grade forensic toolkits to trace funds across Bitcoin, Ethereum, Tron, BNB Chain, and Solana. We attribute unhosted clusters to known centralized exchange deposit addresses and identify the ultimate gateway accounts.',
        realisticPathways: [
          'Issuance of formal Law Enforcement / Exchange Freezing Notices to centralized VASPs',
          'Subpoena and civil disclosure orders to compel exchange KYC records',
          'Coordination with cybercrime units to seize funds upon arrival at regulated endpoints'
        ],
        evidenceChecklist: [
          'Transaction Hashes (TXIDs) for every outgoing transfer from your personal wallet/exchange',
          'Sender and recipient wallet addresses (public keys)',
          'Timestamps and asset quantities (e.g., 2.5 BTC, 15,000 USDT TRC-20)',
          'Platform URLs, support contact details, and initial deposit instructions'
        ],
        deliverables: [
          'Visual Cryptographic Flow Diagram',
          'Exchange Attribution & VASP Identification Report',
          'Law Enforcement & Judicial Subpoena Package'
        ],
        relatedGuides: [
          {
            title: 'How to Correctly Document a Crypto Scam for Investigation',
            category: 'Evidence Guide',
            summary: 'Learn why TXIDs, receiving addresses, and unedited logs are vital for blockchain tracing.',
            anchorText: 'Read Crypto Scam Evidence Documentation Guide',
            url: '/resources#documenting-crypto-scams'
          },
          {
            title: 'Warning Signs of a Secondary Recovery Scam',
            category: 'Protection Guide',
            summary: 'How to identify fraudulent "hack-back" promises and advance recovery fees targeting crypto victims.',
            anchorText: 'Read Secondary Recovery Scam Warnings',
            url: '/resources#secondary-recovery-scams'
          }
        ],
        faqs: [
          {
            question: 'Can blockchain transactions actually be reversed?',
            answer: 'No. Blockchain transactions are immutable. No company or ethical investigator can reverse a blockchain transfer directly. Recovery is achieved by following the trail to regulated centralized exchanges where legal and law enforcement freezing mechanisms can be applied.'
          },
          {
            question: 'What is a secondary crypto recovery scam?',
            answer: 'Scammers frequently target previous fraud victims, claiming they have "hacked back" the stolen funds or found the coins in a recovery pool, demanding upfront taxes or fees. Restiturecore warns clients never to pay fees to unverified recovery agents.'
          },
          {
            question: 'What are TXIDs and why are they required?',
            answer: 'A Transaction Hash (TXID) is a unique cryptographic identifier for each blockchain transfer. Without TXIDs, it is impossible to trace on-chain movement or attribute wallet addresses.'
          }
        ]
      },
      {
        slug: 'crypto-investment-scam-recovery',
        title: 'Crypto Investment Scam Recovery',
        shortTitle: 'Crypto Investment Scams',
        seoTitle: 'Crypto Investment Scam Recovery | Restiturecore',
        primaryKeyword: 'crypto investment scam recovery',
        metaDescription: 'Lost cryptocurrency through a fraudulent investment scheme? Learn how transaction analysis, evidence review and potential recovery options may apply to your case.',
        pageIntroduction: 'Lost cryptocurrency through a fraudulent investment scheme, fake liquidity mining pool, or counterfeit staking platform? Crypto Investment Scam Recovery focuses specifically on fake trading platforms, fabricated returns, investment dashboards, and cryptocurrency deposits made into fraudulent yield schemes.',
        parentPillarSlug: 'crypto-scam-recovery',
        category: 'crypto-fraud',
        categoryLabel: 'Cryptocurrency Scam Recovery',
        subtitle: 'Fake trading platforms, fabricated returns, investment dashboards, and fraudulent yield pools.',
        heroTagline: 'Understand your options after depositing cryptocurrency into a fraudulent yield platform or fake trading bot.',
        intendedAudience: 'Investors who transferred crypto assets into automated yield bots, algorithmic trading pools, liquidity mining protocols, or cloud mining contracts that fabricated returns and blocked capital withdrawals.',
        keyQuestionsAnswered: [
          'How do scammers manipulate simulated trading dashboards to display artificial profits?',
          'Where do on-chain deposits actually route when sent to an investment platform contract?',
          'What exchange subpoenas and legal orders can be used to unmask the operators cashing out stolen tokens?',
          'Why must you never pay secondary "liquidity fees" or "tax clearance" to unlock your account?'
        ],
        summary: 'Investigating fraudulent decentralized finance protocols, fake liquidity pools, and algorithmic trading platforms that trap crypto deposits.',
        overview: 'Crypto investment scams lure victims with promises of high passive income, automated arbitrage bots, or liquidity mining. The platforms allow initial small withdrawals to build false trust, then freeze capital when larger deposits arrive, fabricating requirements for "liquidity injections" or "tax payments."',
        keyProblems: [
          'Smart contract functions designed to prevent token transfers or withdrawals (honeypots)',
          'Artificial web dashboards showing simulated returns disconnected from actual blockchain activity',
          'Approval phishing that grants the fraudulent contract unlimited spending rights over your wallet',
          'Exit scams where project operators drain pool liquidity and abandon social channels'
        ],
        warningSigns: [
          'Automated trading interfaces displaying consistent, flawless daily profits regardless of market volatility',
          'Tiered investment structures promising higher percentage returns for depositing additional cryptocurrency',
          'Withdrawal buttons that trigger error codes, "maintenance" messages, or automated customer service demands for fees',
          'Pressure from platform "mentors" or "account managers" to deposit life savings before a supposed market window closes'
        ],
        scamDistinctionText: 'Crypto investment scams differ from exchange cloning because the victim believes they are participating in an active yield-generating or trading strategy. The platform uses custom scripts to simulate trades on a web interface while immediately routing deposited assets to private syndicates on-chain. Investigations focus on smart contract decompilation, liquidity drainage tracking, and centralized exchange cash-out attribution.',
        investigationApproach: 'We decompile and audit smart contract permissions, analyze deployer addresses, trace liquidity pool drain transactions, and track the flow of stolen cryptocurrency to fiat on-ramps and off-ramps.',
        realisticPathways: [
          'Revocation of ongoing token approvals to prevent further unauthorized wallet draining',
          'Tracing of pooled funds through decentralized swaps to identify centralized exchange deposits',
          'Formal evidence filing with international crypto fraud task forces'
        ],
        evidenceChecklist: [
          'Smart contract addresses interacted with and approval transaction hashes',
          'All deposit transaction hashes (TXIDs) and receiving addresses',
          'Promotional materials, whitepapers, or investment tier tables provided',
          'Screenshots of the investment dashboard and withdrawal failure messages'
        ],
        deliverables: [
          'Smart Contract Vulnerability & Exploit Audit',
          'Liquidity Drainage Traversal Mapping',
          'Centralized Exchange Node Attribution Dossier'
        ],
        distinctions: [
          {
            scenario: 'Was the platform masquerading as a major crypto exchange demanding withdrawal fees or taxes?',
            recommendedTitle: 'Fake Crypto Exchange Scam Recovery',
            recommendedSlug: 'fake-crypto-exchange-scam-recovery',
            anchorText: 'Explore Fake Crypto Exchange Scam Recovery'
          },
          {
            scenario: 'Were you groomed over weeks or months by an online connection or mentor?',
            recommendedTitle: 'Pig Butchering Crypto Scam Recovery',
            recommendedSlug: 'pig-butchering-crypto-scam-recovery',
            anchorText: 'Explore Pig Butchering Crypto Scam Recovery'
          },
          {
            scenario: 'Was your wallet drained without an investment agreement via a malicious Permit signature?',
            recommendedTitle: 'Crypto Phishing Scam Recovery',
            recommendedSlug: 'crypto-phishing-scam-recovery',
            anchorText: 'Explore Crypto Phishing Scam Recovery'
          }
        ],
        relatedGuides: [
          {
            title: 'How to Correctly Document a Crypto Scam for Investigation',
            category: 'Evidence Guide',
            summary: 'Preserve your deposit TXIDs, dashboard screenshots, and smart contract addresses before the platform disappears.',
            anchorText: 'Review Crypto Evidence Checklist',
            url: '/resources#documenting-crypto-scams'
          }
        ],
        faqs: [
          {
            question: 'How do fake staking and liquidity mining pools steal funds?',
            answer: 'They trick users into approving a smart contract permission (e.g. `setApprovalForAll` or high token allowance) that enables the contract deployer to drain the connected wallet balance at any time.'
          },
          {
            question: 'Is my remaining wallet balance safe?',
            answer: 'Not if you signed an unlimited token approval. You should immediately revoke all active approvals using tools like Revoke.cash or transfer your remaining assets to a freshly generated hardware wallet.'
          },
          {
            question: 'Can pooled assets laundered through DEXs still be tracked?',
            answer: 'Yes. Decentralized exchanges record every swap on public ledgers. Our analysts follow the swapped tokens through liquidity pools until they consolidate into centralized exchange deposit addresses.'
          }
        ]
      },
      {
        slug: 'fake-crypto-exchange-scam-recovery',
        title: 'Fake Crypto Exchange Scam Recovery',
        shortTitle: 'Fake Crypto Exchanges',
        seoTitle: 'Fake Crypto Exchange Scam Recovery | Restiturecore',
        primaryKeyword: 'fake crypto exchange scam recovery',
        metaDescription: 'Deposited funds into a cloned or fake crypto exchange demanding withdrawal fees? Discover how on-chain tracing and platform infrastructure audits evaluate your case.',
        pageIntroduction: 'Deposited funds into a fraudulent exchange platform masquerading as a legitimate marketplace? Fake Crypto Exchange Scam Recovery focuses specifically on fraudulent exchanges, withdrawal restrictions, fabricated account balances, and demands for additional clearance fees.',
        parentPillarSlug: 'crypto-scam-recovery',
        category: 'crypto-fraud',
        categoryLabel: 'Cryptocurrency Scam Recovery',
        subtitle: 'Fraudulent exchange domains, withdrawal restrictions, fabricated order books, and fee extortion.',
        heroTagline: 'Understand your options after depositing funds into a fraudulent crypto exchange demanding withdrawal fees.',
        intendedAudience: 'Crypto traders and retail buyers who deposited assets into an unverified or cloned crypto exchange interface that displays fabricated balances and denies withdrawal requests.',
        keyQuestionsAnswered: [
          'Why do fraudulent exchanges demand 10%–30% in secondary fees before releasing user withdrawals?',
          'How do investigators prove that an exchange interface is a synthetic facade rather than a real market?',
          'Can domain registrars, hosting providers, and law enforcement freeze exchange-connected wallets?',
          'What on-chain evidence is needed to attribute fake exchange deposit addresses to criminal laundering clusters?'
        ],
        summary: 'Investigation into fraudulent websites posing as legitimate crypto exchanges that simulate trades while diverting real deposits to scammer wallets.',
        overview: 'Fake crypto exchanges use cloned interfaces resembling established brands. They simulate active order books and profitable trades. However, deposits never reach an actual exchange wallet; instead, they go straight to perpetrator private wallets. When withdrawal is attempted, the user is told they must pay 10–30% in "clearance taxes" or "AML audit fees."',
        keyProblems: [
          'Victims believe they have high balances on an exchange when no funds actually exist there',
          'Secondary extortion through repeated demands for withdrawal fees, security deposits, and taxes',
          'Disposable domains hosted behind bulletproof reverse proxies',
          'Complete loss of access once the victim refuses to send additional funds'
        ],
        warningSigns: [
          'An exchange platform recommended exclusively by an online acquaintance, social media contact, or unknown link',
          'Demands for advance "VIP verification," "anti-money laundering clearance fees," or "withdrawal taxes" paid in crypto',
          'Customer service representatives who communicate exclusively via Telegram, WhatsApp, or embedded live chat widgets',
          'Exchange domains registered within the last 6–12 months with hidden WHOIS records and cloned branding'
        ],
        scamDistinctionText: 'Fake exchange scams differ from decentralized protocol exploits because they mimic the full infrastructure of a centralized spot or futures exchange. The order books, market tickers, and balances are completely simulated client-side. Real crypto deposits are swept directly to the operators unhosted addresses rather than hot/cold exchange reserves.',
        investigationApproach: 'We uncover the underlying on-chain destination of all deposited assets, determine the cluster identity of the receiver, extract domain hosting and SSL certificate telemetry, and assemble evidence proving the platform is a counterfeit facade.',
        realisticPathways: [
          'Freezing notices sent to centralized exchanges where the operators wash stolen funds',
          'Domain registrar and hosting abuse complaints to trigger takedowns and preserve server logs',
          'Inclusion in global threat intelligence blacklists (Chainalysis, TRM, Elliptic)'
        ],
        evidenceChecklist: [
          'The exact URL and IP of the fake exchange',
          'All deposit wallet addresses provided by the platform',
          'Transaction IDs (TXIDs) corresponding to every deposit',
          'Transcripts of conversations with "customer service" or "account managers"'
        ],
        deliverables: [
          'Domain Telemetry & Infrastructure Intelligence',
          'True Blockchain Destination & Clustering Report',
          'Formal Law Enforcement Evidence Presentation'
        ],
        distinctions: [
          {
            scenario: 'Did you deposit into an automated trading bot, cloud mining scheme, or liquidity pool instead?',
            recommendedTitle: 'Crypto Investment Scam Recovery',
            recommendedSlug: 'crypto-investment-scam-recovery',
            anchorText: 'Explore Crypto Investment Scam Recovery'
          },
          {
            scenario: 'Was your wallet drained without creating an account via an unauthorized Web3 signature?',
            recommendedTitle: 'Crypto Phishing Scam Recovery',
            recommendedSlug: 'crypto-phishing-scam-recovery',
            anchorText: 'Explore Crypto Phishing Scam Recovery'
          }
        ],
        relatedGuides: [
          {
            title: 'Warning Signs of a Secondary Recovery Scam',
            category: 'Protection Guide',
            summary: 'Learn why demands for "withdrawal taxes" or "clearance fees" from support teams are fraudulent.',
            anchorText: 'Review Secondary Extortion Warning Signs',
            url: '/resources#secondary-recovery-scams'
          }
        ],
        faqs: [
          {
            question: 'Why does the exchange customer service demand a 20% tax before releasing my profit?',
            answer: 'This is a synthetic platform scam. The profits on your screen are simulated numbers created by the website script. Paying the fee will not release any money; it simply increases your total loss.'
          },
          {
            question: 'How do you prove that an exchange is fake?',
            answer: 'We inspect the blockchain transactions: on legitimate exchanges, deposits go into dedicated deposit sweeping systems. On fake platforms, deposits go directly into private unhosted scammer wallets or get laundered immediately.'
          },
          {
            question: 'Can the domain registrar help freeze the platform?',
            answer: 'Yes. As part of our investigation, we compile domain infrastructure evidence for registrar and hosting abuse takedowns to preserve evidence before servers are deleted.'
          }
        ]
      },
      {
        slug: 'crypto-phishing-scam-recovery',
        title: 'Crypto Phishing Scam Recovery',
        shortTitle: 'Crypto Phishing',
        seoTitle: 'Crypto Phishing Scam Recovery | Restiturecore',
        primaryKeyword: 'crypto phishing scam recovery',
        metaDescription: 'Wallet drained by a malicious smart contract, permit signature or phishing site? Understand wallet triage, signature audits, and cross-chain tracking options.',
        pageIntroduction: 'Had your cryptocurrency wallet drained after clicking a link or signing a prompt? Crypto Phishing Scam Recovery focuses on malicious links, fake wallet interfaces, compromised credentials, and unauthorized transactions executed through drainer contracts.',
        parentPillarSlug: 'crypto-scam-recovery',
        category: 'crypto-fraud',
        categoryLabel: 'Cryptocurrency Scam Recovery',
        subtitle: 'Malicious links, fake wallet interfaces, compromised credentials, and unauthorized drainer signatures.',
        heroTagline: 'Understand your options after your crypto wallet was drained by a malicious link, permit signature, or fake dApp.',
        intendedAudience: 'Web3 wallet users (MetaMask, Phantom, Trust Wallet, Ledger, Trezor) who experienced an unauthorized asset drain after signing a transaction prompt, interacting with an airdrop link, or entering credentials on a spoofed portal.',
        keyQuestionsAnswered: [
          'How do modern Permit2 and ERC-20 approval drainers sweep tokens without obtaining your private seed phrase?',
          'Can drained digital assets be traced when swept through cross-chain bridges and decentralized mixers?',
          'What immediate steps must you take to secure any remaining tokens or secondary linked wallets?',
          'How do investigators build evidence files for centralized exchanges where drainer syndicates liquidate assets?'
        ],
        summary: 'Forensic response to unauthorized wallet drains caused by phishing links, fake Discord bots, malicious dApps, and permit signatures.',
        overview: 'Crypto phishing typically tricks victims into signing an off-chain signature (such as `eth_sign`, `Permit`, or `setApprovalForAll`) on a spoofed dApp or fake airdrop website. Once signed, an automated sweeper or drainer script instantly transfers tokens and NFTs to an illicit aggregation wallet.',
        keyProblems: [
          'Wallet drained within seconds without revealing the seed phrase or password',
          'Remaining assets or future incoming tokens vulnerable to automated sweeper bots',
          'Funds rapidly bridged across multiple networks (Ethereum, Arbitrum, BSC, Solana)',
          'Difficulty in tracing through decentralized cross-chain bridge contracts'
        ],
        warningSigns: [
          'Sudden unannounced airdrop announcements or token claim notifications on Discord, Telegram, or Twitter/X',
          'Wallet prompts asking for "Permit", "SetApprovalForAll", or "Sign Message" on an unfamiliar or newly visited website',
          'Instantaneous, unauthorized outgoing transfers of all liquid tokens, stablecoins, and valuable NFTs',
          'Repeated draining of any new tokens sent to the compromised wallet address (indicative of a sweeper bot)'
        ],
        scamDistinctionText: 'Crypto phishing is purely technical and non-consensual: unlike investment scams where the user voluntarily sends crypto, phishing victims are deceived into signing a malicious smart contract allowance that gives the drainer script permission to transfer assets autonomously. The response demands immediate on-chain triage, allowance revocation, and tracking of automated sweeper contracts.',
        investigationApproach: 'We audit the malicious transaction signature to identify the drainer protocol used (e.g., Inferno, Angel, Pink), identify Sweeper bot triggers, trace assets across bridge protocols, and map downstream consolidation addresses.',
        realisticPathways: [
          'Immediate wallet triage: revoking token allowances and securing remaining tokens',
          'Tracing bridged assets to centralized exchange off-ramps',
          'Coordination with bridge operators and security teams for blacklisting'
        ],
        evidenceChecklist: [
          'Compromised wallet address and all unauthorized outgoing transaction hashes',
          'URL of the website or dApp where the signature was signed',
          'Browser history timestamp around the time of the drain',
          'Any Discord, Twitter/X, or Telegram messages that provided the malicious link'
        ],
        deliverables: [
          'Malicious Signature & Permit Analysis',
          'Cross-Chain Bridge Traversal Dossier',
          'Target Exchange Deposit Attribution Report'
        ],
        distinctions: [
          {
            scenario: 'Did you voluntarily transfer cryptocurrency expecting investment profits or trading returns?',
            recommendedTitle: 'Crypto Investment Scam Recovery',
            recommendedSlug: 'crypto-investment-scam-recovery',
            anchorText: 'Explore Crypto Investment Scam Recovery'
          },
          {
            scenario: 'Did you simply forget your password or lose access to your self-custody wallet?',
            recommendedTitle: 'Crypto Wallet Recovery Services',
            recommendedSlug: 'wallet-recovery',
            anchorText: 'Explore Crypto Wallet Recovery Services'
          }
        ],
        relatedGuides: [
          {
            title: 'How to Correctly Document a Crypto Scam for Investigation',
            category: 'Evidence Guide',
            summary: 'Identify the exact unauthorized transaction hashes and the malicious smart contract address involved.',
            anchorText: 'Read On-Chain Documentation Protocol',
            url: '/resources#documenting-crypto-scams'
          }
        ],
        faqs: [
          {
            question: 'How did my wallet get drained if I never shared my seed phrase?',
            answer: 'Modern crypto drainers use "Permit" and "ERC-20 Approval" signatures. By signing the prompt in your wallet extension, you gave the malicious contract permission to transfer tokens directly without needing your password or seed phrase.'
          },
          {
            question: 'Can I still use my compromised wallet address?',
            answer: 'No. Once a wallet has signed malicious approval transactions or had its private keys compromised, it must be considered permanently unsafe. You should abandon the address and generate a new wallet.'
          },
          {
            question: 'Can bridged tokens be traced across different blockchains?',
            answer: 'Yes. When assets are bridged (e.g. from Ethereum to Arbitrum or Tron), bridge lock and mint events occur on public ledgers. We trace across both sides of the bridge.'
          }
        ]
      },
      {
        slug: 'crypto-pump-and-dump-scam-recovery',
        title: 'Crypto Pump and Dump Scam Recovery',
        shortTitle: 'Pump & Dump Schemes',
        seoTitle: 'Crypto Pump and Dump Scam Recovery | Restiturecore',
        primaryKeyword: 'crypto pump and dump scam',
        metaDescription: 'Victim of a coordinated crypto pump and dump or developer rug pull? Discover how tokenomics audits and developer wallet de-anonymization support fraud investigations.',
        pageIntroduction: 'Suffered catastrophic losses in a coordinated crypto pump and dump scheme or developer liquidity rug pull? This specialist desk focuses on coordinated token manipulation, developer liquidity rug pulls, honeypot contracts, and insider wallet profit extraction.',
        parentPillarSlug: 'crypto-scam-recovery',
        category: 'crypto-fraud',
        categoryLabel: 'Cryptocurrency Scam Recovery',
        subtitle: 'Coordinated token manipulation, developer rug pulls, honeypot contracts, and insider dumps.',
        heroTagline: 'Understand your options after suffering severe losses to a token manipulation scheme or developer rug pull.',
        intendedAudience: 'Traders and token holders who purchased low-market-cap tokens, meme coins, or algorithmic assets promoted by coordinated groups or influencers before the creators abruptly pulled liquidity or dumped tokens.',
        keyQuestionsAnswered: [
          'How does on-chain tokenomics analysis uncover hidden developer wallets and pre-allocated token reserves?',
          'Can honeypot smart contracts that prevent token selling be analyzed to prove intentional fraud?',
          'How do blockchain investigators trace deployment gas back to KYC-verified exchange deposit accounts?',
          'What regulatory and civil litigation remedies exist for victims of coordinated market manipulation?'
        ],
        summary: 'Investigation into artificially inflated meme coins, deceptive Telegram trading groups, and insider token dumps.',
        overview: 'Pump-and-dump schemes involve organizers accumulating an obscure or newly minted token, hyping it through coordinated social channels (Telegram, Discord, Twitter/X) to attract retail buyers, and then abruptly selling their massive holdings at the peak. The token crashes to zero, leaving buyers with unsellable assets.',
        keyProblems: [
          'Severe liquidity removal (rug pull) making it impossible to swap tokens back to ETH/SOL/USDT',
          'Hidden developer wallet allocations distributed across dozens of disguised addresses',
          'Honeypot code preventing any addresses other than whitelisted wallets from selling',
          'Anonymous creators operating behind burner Telegram and Twitter accounts'
        ],
        warningSigns: [
          'High-pressure promotional calls in closed Telegram groups or Discord channels claiming "guaranteed 100x" pumps',
          'Tokens with heavily concentrated supply held by a small cluster of interconnected wallets created moments before launch',
          'Inability to sell acquired tokens on decentralized exchanges due to smart contract error messages (honeypot logic)',
          'Sudden removal of the primary liquidity pool pair (e.g. ETH/token or SOL/token) by the developer deployer address'
        ],
        scamDistinctionText: 'Pump-and-dump schemes and rug pulls exploit market mechanics and smart contract architecture rather than private wallet theft. The victim legitimately acquires the token on a decentralized exchange, but the asset is rendered worthless by market manipulation, insider selling, or code-level sale restrictions. Investigation centers on developer wallet clustering and deployer gas lineage.',
        investigationApproach: 'We conduct on-chain tokenomics audits, analyze early liquidity provision and removal transactions, de-anonymize developer wallet clusters, and follow the profits as they are routed to centralized exchanges.',
        realisticPathways: [
          'Identifying developer cash-out transactions at centralized exchanges subject to KYC',
          'Building class-action evidence dossiers for collective victim submissions',
          'Submitting market manipulation reports to financial regulators and exchange compliance teams'
        ],
        evidenceChecklist: [
          'Token contract address and swap transaction hashes (Uniswap, Raydium, PancakeSwap)',
          'Telegram or Discord group links where the signal or token was promoted',
          'Dates, times, and exact purchase amounts',
          'Screenshots of promotional claims, developer promises, and subsequent bans from the group'
        ],
        deliverables: [
          'Tokenomics & Developer Wallet Cluster Audit',
          'Liquidity Extraction & Profit Flow Mapping',
          'Exchange Cash-Out Node Identification Brief'
        ],
        distinctions: [
          {
            scenario: 'Were you depositing funds onto a hosted platform or bot offering fixed daily returns?',
            recommendedTitle: 'Crypto Investment Scam Recovery',
            recommendedSlug: 'crypto-investment-scam-recovery',
            anchorText: 'Explore Crypto Investment Scam Recovery'
          }
        ],
        faqs: [
          {
            question: 'What is a "honeypot" token in crypto?',
            answer: 'A honeypot is a malicious token contract programmed so that anyone can buy tokens, but only the creator or whitelisted addresses can sell them. When buyers try to swap back, the transaction fails.'
          },
          {
            question: 'How do investigators identify anonymous token creators?',
            answer: 'Developers must fund their deployment wallets with gas (ETH or SOL). We trace where the original deployment gas came from, which frequently connects back to a personal exchange deposit address or KYC-verified account.'
          },
          {
            question: 'Can I get my money back from an unsellable token?',
            answer: 'If the liquidity was completely drained, the token itself cannot be swapped. Recovery requires holding the identified organizers legally accountable through exchange account freezes or law enforcement prosecution.'
          }
        ]
      },
      {
        slug: 'crypto-romance-scam-recovery',
        title: 'Crypto Romance Scam Recovery',
        shortTitle: 'Crypto Romance Scams',
        seoTitle: 'Crypto Romance Scam Recovery | Restiturecore',
        primaryKeyword: 'crypto romance scam',
        metaDescription: 'Directed to purchase cryptocurrency by an online romantic connection? Learn how fiat on-ramp linkage, blockchain tracking, and syndicate evidence files work.',
        pageIntroduction: 'Convinced to purchase and transfer cryptocurrency by an online romantic partner or deceptive mentor? Crypto Romance Scam Recovery focuses on intimate social engineering combined with directed cryptocurrency transfers via legitimate exchange on-ramps.',
        parentPillarSlug: 'crypto-scam-recovery',
        category: 'crypto-fraud',
        categoryLabel: 'Cryptocurrency Scam Recovery',
        subtitle: 'Intimate social manipulation directing cryptocurrency purchases toward fraudulent syndicate destinations.',
        heroTagline: 'Understand your options after being directed to buy and transfer cryptocurrency by an online romantic partner.',
        intendedAudience: 'Individuals who formed an online relationship or friendship and were guided step-by-step to purchase cryptocurrency on legitimate exchanges and send it to private addresses or deceptive mining pools.',
        keyQuestionsAnswered: [
          'Why do romantic scammers coach victims to purchase USDT or BTC on regulated exchanges before transferring off-platform?',
          'How do investigators trace funds from your initial fiat-to-crypto purchase through intermediate wallets to cash-out points?',
          'What records from dating apps, messaging services, and exchanges are essential for a complete forensic dossier?',
          'Can centralized exchanges freeze destination accounts linked to romance fraud syndicates?'
        ],
        summary: 'Investigating financial fraud where romantic manipulation was utilized to coerce victims into buying and transferring digital assets.',
        overview: 'Crypto romance fraud blends interpersonal manipulation with modern blockchain technology. The perpetrator establishes an online relationship, feigns financial independence through crypto trading, and offers to "mentor" the victim by directing them to purchase crypto and deposit it onto fraudulent platforms.',
        keyProblems: [
          'Victims guided step-by-step through legitimate exchanges (Coinbase, Kraken) to illicit destinations',
          'Emotional resistance to accepting that the relationship was an elaborate financial scheme',
          'Multi-stage transfers making the blockchain trail complex and fragmented',
          'Significant financial losses compounded by emotional distress'
        ],
        warningSigns: [
          'An online connection who claims to be wealthy, successful in crypto trading, or possesses insider financial knowledge',
          'Patience and gradual grooming over weeks before any mention of cryptocurrency or investments is introduced',
          'Detailed instructions on how to bypass bank fraud questions and purchase cryptocurrency on Coinbase, Kraken, or Binance',
          'Severe emotional guilt-tripping or withdrawal threats if you express reluctance to deposit additional funds'
        ],
        scamDistinctionText: 'Crypto romance scams fuse emotional grooming with digital asset technology. Unlike traditional romance scams where money is sent via bank wire or gift cards, perpetrators leverage the victim\'s own verified crypto exchange accounts to bypass traditional bank chargeback and recall protections. Forensic tracing connects the fiat purchase trail to on-chain syndicate aggregators.',
        investigationApproach: 'We link the fiat purchase history on legitimate exchanges to the destination blockchain transactions, unravel the chain of intermediate wallets, and identify the syndicates wallet infrastructure behind the deceptive persona.',
        realisticPathways: [
          'Rapid freezing requests if funds have recently hit partner centralized exchanges',
          'Compilation of cross-border cybercrime reporting packages',
          'Collaboration with law enforcement specialized romance fraud task forces'
        ],
        evidenceChecklist: [
          'All communication records from dating or social media platforms',
          'Legitimate crypto exchange withdrawal records showing TXIDs and recipient addresses',
          'Screenshots of the fraudulent trading interface shown by the romantic partner',
          'Any wallet addresses, phone numbers, or photos shared by the individual'
        ],
        deliverables: [
          'Fiat-to-Crypto On-Ramp Linkage Analysis',
          'Syndicate Wallet Flow & Attribution Report',
          'Formal Multi-Jurisdictional Reporting Package'
        ],
        distinctions: [
          {
            scenario: 'Was the relationship part of a high-pressure, multi-stage compound grooming operation with escalating fake balances?',
            recommendedTitle: 'Pig Butchering Crypto Scam Recovery',
            recommendedSlug: 'pig-butchering-crypto-scam-recovery',
            anchorText: 'Explore Pig Butchering Crypto Scam Recovery'
          },
          {
            scenario: 'Were the transfers made via domestic or international bank wires rather than cryptocurrency?',
            recommendedTitle: 'Romance Scam Recovery',
            recommendedSlug: 'romance-scam-recovery',
            anchorText: 'Explore Traditional Romance Scam Recovery'
          }
        ],
        faqs: [
          {
            question: 'Why did the scammer instruct me to buy crypto on a legitimate exchange like Coinbase first?',
            answer: 'Legitimate exchanges serve as the easiest on-ramp to convert bank funds into digital assets. Once in cryptocurrency form, the funds can be moved anywhere in the world outside traditional banking recall rules.'
          },
          {
            question: 'Can the romantic partner’s true identity be uncovered?',
            answer: 'The photos used are almost always stolen from models or influencers. However, the destination wallet infrastructure connects to organized money laundering rings whose cash-out nodes can be tracked.'
          },
          {
            question: 'What is the first step in assessing a crypto romance fraud case?',
            answer: 'Compile all transaction hashes (TXIDs) from your exchange withdrawals and save complete chat history exports before the scammer deletes their profile.'
          }
        ]
      },
      {
        slug: 'pig-butchering-crypto-scam-recovery',
        title: 'Pig Butchering Crypto Scam Recovery',
        shortTitle: 'Pig-Butchering (Sha Zhu Pan)',
        seoTitle: 'Pig Butchering Scam Recovery | Restiturecore',
        primaryKeyword: 'pig butchering crypto scam',
        metaDescription: 'Targeted by a multi-stage pig butchering investment scam (Sha Zhu Pan)? Learn how international syndicate cluster tracking and law enforcement reporting dossiers assist victims.',
        pageIntroduction: 'Targeted by a multi-stage pig butchering scam (Sha Zhu Pan)? This specialist desk focuses specifically on prolonged trust-building, relationship or social engineering, fraudulent investment platforms, and escalating deposits organized by transnational syndicates.',
        parentPillarSlug: 'crypto-scam-recovery',
        category: 'crypto-fraud',
        categoryLabel: 'Cryptocurrency Scam Recovery',
        subtitle: 'Industrial-scale grooming syndicates operating fraudulent platforms with escalating deposits.',
        heroTagline: 'Understand your options after falling victim to an industrial-scale pig butchering investment syndicate (Sha Zhu Pan).',
        intendedAudience: 'Victims of organized transnational fraud compounds who were systematically groomed over weeks or months, shown simulated trading profits on custom apps, and coerced into depositing large sums of capital.',
        keyQuestionsAnswered: [
          'How do industrial scam compound networks operate and where do intermediate mule wallets aggregate funds?',
          'How do specialized cybercrime task forces (FBI IC3, US Secret Service, Europol) utilize Restiturecore forensic dossiers?',
          'What are the critical steps to protect your remaining assets, credit, and personal identity after the syndicate strikes?',
          'Why do pig-butchering rings demand secondary "tax payments" or "anti-money laundering guarantees" when you try to withdraw?'
        ],
        summary: 'Specialized forensic tracing targeting large-scale transnational grooming operations and organized scam compounds.',
        overview: 'Pig-butchering (Sha Zhu Pan) scams are organized industrial operations, often run out of compounds in Southeast Asia. Fraudsters spend weeks or months "fattening" the victim with emotional connection and small simulated profits on fake gold or crypto trading portals, before "butchering" them with requests for life-savings deposits and bogus release taxes.',
        keyProblems: [
          'Huge financial losses, often including remortgages and high-interest personal loans',
          'Industrial-scale laundering through OTC brokers, nested exchanges, and Asian banking channels',
          'Continuous extortion with threats of account liquidation or regulatory reporting',
          'Syndicates using sophisticated rotating wallet clusters to disperse funds hourly'
        ],
        warningSigns: [
          'Initial contact via an unsolicited WhatsApp, SMS, or LinkedIn message pretending to be a "wrong number" or casual acquaintance',
          'Long-term grooming involving daily lifestyle photos, voice notes, and simulated emotional or professional intimacy',
          'Introduction to a proprietary web trading portal or custom iOS/Android app distributed via TestFlight or direct APK download',
          'Demands for enormous sums to pay "customs clearances," "VIP liquidity quotas," or "foreign tax assessments" when requesting a withdrawal'
        ],
        scamDistinctionText: 'Pig-butchering (Sha Zhu Pan) is an industrialized, multi-tier criminal enterprise, distinct from opportunistic individual fraud. The operational complexity involves professional call center operators, scripted psychology, custom mobile apps, and institutional money laundering through Over-The-Counter (OTC) crypto brokers. Our investigation leverages syndicate cluster databases to match stolen funds to known compound operations.',
        investigationApproach: 'We apply advanced clustering algorithms to match stolen funds against known pig-butchering syndicate clusters documented by international law enforcement and intelligence databases. We trace the assets through nested services to identifying nodes.',
        realisticPathways: [
          'Immediate notifications to major crypto exchanges known to host syndicate cash-out accounts',
          'Submission of standardized dossiers to national cybercrime agencies (FBI IC3, Europol, UK NCA)',
          'Coordination with civil litigation counsel for asset preservation orders'
        ],
        evidenceChecklist: [
          'Comprehensive log of all transactions: Dates, amounts, currencies, and TXIDs',
          'Details of the fake trading platform (URLs, domain names, mobile app installation profiles)',
          'All communications with the handler and "customer support" staff',
          'Proof of any loans or bank transfers made to acquire the cryptocurrency'
        ],
        deliverables: [
          'Syndicate Cluster Matching & Blockchain Dossier',
          'VASP & OTC Broker Cash-Out Identification',
          'Standardized Law Enforcement Evidence Package'
        ],
        distinctions: [
          {
            scenario: 'Did you discover the platform through an online advertisement or trading group without personal grooming?',
            recommendedTitle: 'Crypto Investment Scam Recovery',
            recommendedSlug: 'crypto-investment-scam-recovery',
            anchorText: 'Explore Crypto Investment Scam Recovery'
          },
          {
            scenario: 'Is the platform threatening to freeze your funds unless you pay a 15–30% clearance tax?',
            recommendedTitle: 'Fake Crypto Exchange Scam Recovery',
            recommendedSlug: 'fake-crypto-exchange-scam-recovery',
            anchorText: 'Explore Fake Crypto Exchange Scam Recovery'
          }
        ],
        relatedGuides: [
          {
            title: 'How to Correctly Document a Crypto Scam for Investigation',
            category: 'Evidence Guide',
            summary: 'Essential procedures for saving blockchain TXIDs, chat threads, and platform logs before the syndicate shuts down access.',
            anchorText: 'View Pig-Butchering Evidence Guidelines',
            url: '/resources#documenting-crypto-scams'
          }
        ],
        faqs: [
          {
            question: 'Why are these scams called "Pig Butchering" (Sha Zhu Pan)?',
            answer: 'The term originates from Southeast Asian syndicates who describe the victim as a "pig" that is groomed and fattened with emotional intimacy and small simulated trading gains before being "butchered" for maximum financial extraction.'
          },
          {
            question: 'Can law enforcement act on pig-butchering cases?',
            answer: 'Yes. Major international cybercrime agencies (including the US Secret Service, FBI, and INTERPOL) prioritize pig-butchering syndicates and have seized hundreds of millions from connected exchange accounts when victims provide detailed on-chain tracing.'
          },
          {
            question: 'Should I keep communicating with the scammer while investigating?',
            answer: 'Do not alert the scammer that you suspect fraud or are working with investigators, as they may delete accounts and move funds immediately. Cease sending money under all circumstances.'
          }
        ]
      }
    ]
  },
  {
    id: 'wallet-access',
    title: 'Category C — Wallet Access & Recovery',
    headline: 'Cryptographic Key & Password Access Assistance',
    badge: 'Category C',
    description: 'A distinct non-scam technical service dedicated to lawful owners who have lost access to their own self-custody wallets due to forgotten passwords, corrupted files, or partial seed phrases.',
    services: [
      {
        slug: 'wallet-recovery',
        title: 'Self-Custody Wallet Access & Key Recovery',
        shortTitle: 'Wallet Access Recovery',
        seoTitle: 'Crypto Wallet Recovery Services | Restiturecore',
        primaryKeyword: 'crypto wallet recovery',
        metaDescription: 'Locked out of your crypto wallet? Learn about password permutation recovery, corrupted keystore extraction, and realistic cryptographic limitations.',
        pageIntroduction: 'Unable to access your own self-custody cryptocurrency wallet due to a forgotten password, mistranscribed seed phrase word, or damaged keystore file? Our crypto wallet recovery services use dedicated offline permutation computing while upholding strict cryptographic realities and transparent feasibility boundaries.',
        category: 'wallet-access',
        categoryLabel: 'Wallet Access & Recovery',
        subtitle: 'Technical assistance for forgotten passwords, corrupted keystores, and partial seed phrases.',
        heroTagline: 'Explore technical password permutation and keystore recovery options for lost wallet access.',
        intendedAudience: 'Lawful cryptocurrency owners who have lost access to their private keys, hardware devices, or software wallets due to forgotten passwords, corrupted storage drives, or partial seed phrases.',
        keyQuestionsAnswered: [
          'Can a completely lost seed phrase with zero known words be recovered? (No: mathematical entropy makes unknown 24-word phrases uncrackable).',
          'How does air-gapped password permutation work when you remember portions or patterns of your password?',
          'How can BIP-39 checksum mathematics reconstruct 1 or 2 missing or mistranscribed seed words?',
          'How is client privacy and asset security guaranteed throughout the computational recovery process?'
        ],
        summary: 'Specialized computational recovery for lawful wallet owners unable to access their private keys, hardware devices, or software wallets.',
        overview: 'Wallet recovery is fundamentally distinct from scam recovery. In a scam, assets were unlawfully transferred to a third party. In wallet access loss, the cryptocurrency remains untouched on the blockchain, but the legitimate owner cannot access it due to a forgotten password, mistranscribed seed phrase, or damaged storage media.',
        keyProblems: [
          'Forgotten complex passwords protecting software keystores (e.g., Bitcoin Core wallet.dat, MetaMask JSON, Keystore files)',
          'Seed phrases with 1 or 2 mistranscribed, misplaced, or illegible words',
          'Corrupted or damaged legacy hard drives, USB drives, or paper backup fragments',
          'Unopened legacy pre-sale wallets (e.g., 2014 Ethereum Presale wallet files)'
        ],
        warningSigns: [
          'Corrupted wallet.dat or JSON keystore file headers failing integrity checks',
          'Forgotten secondary passphrase or password variation attempts resulting in decryption errors',
          '12- or 24-word seed phrase where 1 or 2 words are illegible or fail BIP-39 checksum verification',
          'Physical storage drive degradation preventing standard filesystem read access'
        ],
        scamDistinctionText: 'Wallet recovery is strictly a technical access service, completely distinct from fraud and theft investigations. In scam recovery, assets were unlawfully transferred to a third-party criminal wallet. In wallet access recovery, your assets remain safe and unspent on the blockchain, but access is blocked by forgotten cryptographic credentials. Restiturecore applies offline high-performance computing to recover credentials for lawful owners.',
        investigationApproach: 'We utilize dedicated high-performance offline computing clusters running specialized permutation and dictionary analysis. We build customized password masks based on the owners recollections of patterns, characters, and dates. All decryption work is performed in air-gapped, isolated environments with strict cryptographic chain-of-custody protocols.',
        realisticPathways: [
          'Brute-force permutation when the client can provide probable password structures and known fragments',
          'Mathematical reconstruction of 1 to 2 missing seed phrase words using BIP-39 checksum validation',
          'Extraction of encrypted private key data from partially corrupted physical storage drives'
        ],
        evidenceChecklist: [
          'The encrypted wallet file (e.g., wallet.dat, UTC/JSON file) or hardware device',
          'List of password guesses, typical character patterns, significant dates, and length estimates',
          'The partial seed phrase indicating which word positions are uncertain or missing',
          'Proof of original ownership (e.g., original transaction history, receipt of purchase, exchange transfers)'
        ],
        deliverables: [
          'Cryptographic Feasibility & Complexity Assessment',
          'Air-Gapped Permutation & Decryption Processing',
          'Secure Key Re-Establishment & Asset Migration Protocol'
        ],
        distinctions: [
          {
            scenario: 'Were your funds stolen or transferred out of your wallet without your authorization by a phishing link or malicious approval?',
            recommendedTitle: 'Crypto Phishing Scam Recovery',
            recommendedSlug: 'crypto-phishing-scam-recovery',
            anchorText: 'Explore Crypto Phishing Scam Recovery'
          },
          {
            scenario: 'Did you deposit your cryptocurrency into an investment scheme or trading website?',
            recommendedTitle: 'Crypto Investment Scam Recovery',
            recommendedSlug: 'crypto-investment-scam-recovery',
            anchorText: 'Explore Crypto Investment Scam Recovery'
          }
        ],
        disclaimer: 'CRITICAL BOUNDARY & CRYPTOGRAPHIC LIMITATIONS: Modern cryptography (such as AES-256 or SHA-256) cannot be brute-forced without partial knowledge. Restiturecore cannot magically recover a completely lost 12- or 24-word seed phrase where no words or hints are known. We only handle cases where encrypted files exist or where partial seed phrase material is available with sufficient constraints. We will never ask you to send functional unencrypted private keys.',
        faqs: [
          {
            question: 'Can you recover a completely lost 12 or 24-word seed phrase with zero words known?',
            answer: 'No. The mathematical entropy of an unknown 24-word BIP-39 phrase (2^256 combinations) exceeds the computational capacity of all computers on Earth combined. We can only assist if you have partial phrases with 1 to 2 missing or mistranscribed words.'
          },
          {
            question: 'What if I remember parts of my password but not the exact string?',
            answer: 'This is the most common and successful recovery scenario. By analyzing your character patterns, common password variations, capitalization rules, and special symbols, our high-performance offline clusters can test billions of permutations against your encrypted keystore file.'
          },
          {
            question: 'How do you ensure my funds are safe during decryption testing?',
            answer: 'All recovery tests run on air-gapped servers disconnected from the internet. Once the password or key is recovered, we assist you in migrating your funds to a newly generated, secure cold wallet.'
          }
        ]
      }
    ]
  }
];

export const ALL_SERVICES: ServiceItem[] = SERVICE_CATEGORIES.flatMap(cat => cat.services);

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const service = ALL_SERVICES.find(s => s.slug === slug);
  if (!service) return undefined;

  // Enrich with 7-section template defaults tailored to each service
  const heroTagline = service.heroTagline || `Understand your options after losing money to ${service.shortTitle.toLowerCase()}.`;
  
  const intendedAudience = service.intendedAudience || (
    service.category === 'wallet-access'
      ? 'Lawful cryptocurrency owners who have lost access to their private keys, hardware devices, or software wallets due to forgotten passwords, corrupted files, or partial recovery phrases.'
      : `Individuals and businesses who have experienced financial loss through ${service.title.toLowerCase()} and require specialist forensic investigation, evidence compilation, and recovery pathway evaluation.`
  );

  const keyQuestionsAnswered = service.keyQuestionsAnswered || [
    `How does this specific fraud operation function and where were my assets directed?`,
    `Which transaction records, communications, and digital proofs must be preserved immediately?`,
    `What realistic investigative, banking, or regulatory recovery pathways exist for this case?`,
    `What are the engagement stages, fee principles, and limitations involved?`
  ];

  const warningSigns = service.warningSigns || service.keyProblems;

  const scamDistinctionText = service.scamDistinctionText || (
    service.category === 'wallet-access'
      ? 'Wallet recovery is fundamentally distinct from scam recovery. In a scam, assets were unlawfully transferred to a third party. In wallet access loss, the cryptocurrency remains untouched on the blockchain, but the legitimate owner cannot access it due to a forgotten password or damaged key material.'
      : `Unlike generic fraud, ${service.title} employs specific operational hallmarks that dictate a tailored forensic response. Recognizing these nuances ensures that evidence is gathered according to the precise standards required by the relevant receiving banks, exchanges, or law enforcement agencies.`
  );

  const engagementStages: EngagementStage[] = service.engagementStages || [
    {
      stageNumber: '01',
      title: 'Confidential Assessment & Feasibility Audit',
      description: 'We evaluate the counterparty, payment rails, on-chain flows, and evidence integrity to determine whether viable investigative or recovery channels exist.'
    },
    {
      stageNumber: '02',
      title: 'Forensic Evidence Compilation & Node Mapping',
      description: 'Our analysts trace fund movements, map intermediary beneficiary and exchange deposit addresses, and uncover platform infrastructure ownership.'
    },
    {
      stageNumber: '03',
      title: 'Formal Reporting & Freezing Submission',
      description: 'We prepare verified evidentiary dossiers, formal banking recall complaints, or VASP freezing packages for law enforcement and legal counsel.'
    }
  ];

  const costPrinciples = service.costPrinciples || 
    'Restiturecore operates with transparent, scope-based fee principles. Following your confidential initial assessment, we provide an itemized breakdown of required investigative hours and deliverables before any formal engagement begins. We never charge surprise clearance fees, withdrawal taxes, or percentage commissions on theoretical recoveries.';

  const realisticExpectations = service.realisticExpectations ||
    'Restiturecore does not make guaranteed recovery claims. Recovery is contingent on whether funds touched regulated financial institutions, whether anti-money laundering controls were violated, and whether legal orders can freeze assets before off-ramping.';

  const outcomeFactors = service.outcomeFactors || [
    'Time elapsed between the fraudulent transfer and initiating formal investigation',
    'Whether receiving beneficiary accounts or centralized exchange wallets remain active and funded',
    'Regulatory jurisdiction and compliance posture of the receiving financial entities',
    'Quality and completeness of preserved communication logs, contracts, and transaction receipts'
  ];

  const afterEnquirySteps: AfterEnquiryStep[] = service.afterEnquirySteps || [
    {
      stepNumber: '01',
      title: '256-Bit Encrypted Transmission',
      description: 'Your submitted incident narrative and records are encrypted and routed directly to our senior fraud desk.'
    },
    {
      stepNumber: '02',
      title: 'Case Officer Review Within 24 Hours',
      description: 'A dedicated investigator reviews the transaction rails, counterparty infrastructure, and evidence feasibility.'
    },
    {
      stepNumber: '03',
      title: 'Transparent Options Briefing',
      description: 'You receive an objective feasibility review outlining technical viability, recommended next steps, and zero high-pressure sales tactics.'
    }
  ];

  return {
    ...service,
    heroTagline,
    intendedAudience,
    keyQuestionsAnswered,
    warningSigns,
    scamDistinctionText,
    engagementStages,
    costPrinciples,
    realisticExpectations,
    outcomeFactors,
    afterEnquirySteps
  };
}
