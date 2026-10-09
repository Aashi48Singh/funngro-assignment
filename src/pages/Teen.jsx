import React from 'react';
import { useState } from 'react';
import {
  ArrowRight, CheckCircle2, ChevronDown, ClipboardCheck, FlaskConical,
  Gift, Megaphone, MessageSquareText, PenTool, Search, ShieldCheck,
  Smartphone, Star, TrendingUp, Wallet, Sparkles, Users, BriefcaseBusiness
} from 'lucide-react';

const steps = [
  { n: '01', label: 'GET STARTED', title: 'Sign Up', text: 'Download the Funngro app and create your profile by following the current registration instructions.', icon: Smartphone },
  { n: '02', label: 'FIND OPPORTUNITIES', title: 'Choose a Campaign', text: 'Explore available content creation, brand promotion, referral, sampling, survey and app-related campaigns.', icon: Search },
  { n: '03', label: 'COMPLETE THE TASK', title: 'Do the Work', text: 'Read the campaign requirements carefully, complete the requested activity and submit the required work or proof.', icon: ClipboardCheck },
  { n: '04', label: 'PAYMENT', title: 'Receive Eligible Earnings', text: 'After the work is reviewed and approved, payment follows the campaign conditions and applicable platform terms.', icon: Wallet },
];
const categories = [
  { label: 'CREATIVE SKILLS', title: 'Content Creation', text: 'Create engaging social media posts, photos, videos, reels and other content according to a brand campaign brief.', icon: PenTool },
  { label: 'MARKETING', title: 'Brand Promotion', text: 'Explore promotional campaigns and activities that help brands connect with relevant young audiences.', icon: Megaphone },
  { label: 'COMMUNITY', title: 'Referral Opportunities', text: 'Participate in eligible referral campaigns and help others discover products and services under the stated rules.', icon: Gift },
  { label: 'YOUR OPINION MATTERS', title: 'Surveys & Feedback', text: 'Share your opinions through available surveys and feedback activities created by participating brands.', icon: MessageSquareText },
  { label: 'DIGITAL SKILLS', title: 'App Testing', text: 'Explore eligible app-related tasks and share feedback that may help brands improve digital experiences.', icon: FlaskConical },
  { label: 'BRAND EXPERIENCES', title: 'Sampling Campaigns', text: 'Discover product sampling and brand engagement campaigns when available and when you meet their requirements.', icon: Star },
];
const faqs = [
  { q: 'What is Funngro?', a: 'Funngro connects young people with opportunities to participate in brand projects. Depending on availability, campaigns may include content creation, brand promotion, referrals, surveys, sampling and app-related activities.' },
  { q: 'How can students earn money online with Funngro?', a: 'Review the official registration process, explore campaigns you are eligible for and read each campaign brief. Complete the required work and submit it as instructed. Payment depends on the campaign terms, review and approval.' },
  { q: 'Do I need professional work experience?', a: 'Requirements vary by campaign. Some opportunities may be suitable for beginners, while others may require specific skills, content formats or experience. Read each brief before participating.' },
  { q: 'How do payments work?', a: 'Payment eligibility, approval requirements, timing and payment methods depend on the applicable campaign conditions and current platform terms. Check these details before starting a task.' },
  { q: 'What types of opportunities are available?', a: 'Depending on current availability, opportunities may include content creation, brand promotion, referral activities, surveys, product sampling and app-related tasks. Campaigns may vary by user.' },
  { q: 'Are earnings guaranteed?', a: 'No. Earnings are not guaranteed. Opportunities, eligibility, work approval and payment depend on individual campaign requirements and applicable terms. Review all conditions before participating.' },
];

function SectionHeader({ eyebrow, title, description }) {
  return <div className="section-header"><span className="section-eyebrow">{eyebrow}</span><h2 className="section-heading">{title}</h2><p className="section-description">{description}</p></div>;
}

function HowItWorks() {
  return <section className="how-it-works-section" id="how-it-works"><div className="section-container">
    <SectionHeader eyebrow="HOW IT WORKS" title="Start exploring opportunities in simple steps." description="Learn how the Funngro process works, from creating a profile and choosing a brand campaign to completing the requirements and receiving eligible payments." />
    <div className="steps-grid">{steps.map(({ n, label, title, text, icon: Icon }) => <article className="step-card" key={n}><div className="step-number">{n}</div><div className="step-icon"><Icon /></div><span className="eyebrow">{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    <div className="process-highlights"><div><CheckCircle2 /><span>Real brand opportunities</span></div><div><CheckCircle2 /><span>Flexible campaign options</span></div><div><CheckCircle2 /><span>Understand the terms before starting</span></div></div>
  </div></section>;
}

function Categories() {
  return <section className="earning-section" id="earning-categories"><div className="section-container">
    <SectionHeader eyebrow="EXPLORE CATEGORIES" title="Discover different ways to work with brands." description="Explore online opportunities for students and young people across creative, promotional and digital activities. Availability and eligibility depend on individual campaigns." />
    <div className="earning-grid">{categories.map(({ label, title, text, icon: Icon }) => <article className="earning-card" key={title}><div className="earning-card-icon"><Icon /></div><span className="eyebrow">{label}</span><h3>{title}</h3><p>{text}</p><a className="card-link" href="https://www.funngro.com/teen" target="_blank" rel="noreferrer">Explore Funngro <ArrowRight /></a></article>)}</div>
  </div></section>;
}

function Learning() {
  const benefits = [
    { title: 'Explore your interests', text: 'Discover creative, promotional and digital activities through available campaigns.', icon: Search },
    { title: 'Build practical experience', text: 'Follow briefs, meet requirements and practise delivering work for a real campaign.', icon: TrendingUp },
    { title: 'Understand campaign terms', text: 'Review eligibility, deliverables, verification and payment conditions before participating.', icon: ShieldCheck },
  ];
  return <section className="benefits-section" id="learn-by-participating"><div className="section-container benefits-layout">
    <div className="benefits-content"><span className="section-eyebrow">LEARN BY PARTICIPATING</span><h2>Turn your interests into practical experience.</h2><p>Brand campaigns can help young people explore different activities, practise communication and creativity, and learn how real campaign requirements work.</p>
      <div className="benefits-list">{benefits.map(({ title, text, icon: Icon }) => <div className="benefit-item" key={title}><div className="benefit-check"><Icon /></div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      <a className="primary-button" href="https://www.funngro.com/teen" target="_blank" rel="noreferrer">Learn more about Funngro <ArrowRight /></a>
    </div>
    <div className="benefits-visual"><div className="benefits-visual-card"><div className="dashboard-brand"><div className="dashboard-brand-icon"><BriefcaseBusiness /></div><div><strong>Explore & Learn</strong><span>Make every brief count</span></div></div><h3>Build skills step by step</h3><p>Understand the task, follow the brief and learn from each eligible campaign you participate in.</p>{benefits.map((b, i) => <div className="benefit-mini-row" key={b.title}><span className="mini-number">0{i + 1}</span><div><strong>{b.title}</strong><small>Learn through participation</small></div></div>)}</div></div>
  </div></section>;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return <section className="faq-section" id="faq"><div className="faq-container">
    <SectionHeader eyebrow="FREQUENTLY ASKED QUESTIONS" title="Questions about online earning with Funngro?" description="Read answers to common questions about brand campaigns, student opportunities and how the process works." />
    <div className="faq-list">{faqs.map(({ q, a }, i) => <article className="faq-item" key={q}><h3 className="faq-question-heading"><button className="faq-question" type="button" aria-expanded={openIndex === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpenIndex(openIndex === i ? -1 : i)}><span>{q}</span><ChevronDown className={openIndex === i ? 'chevron-open' : ''} /></button></h3>{openIndex === i && <div className="faq-answer" id={`faq-answer-${i}`}><p>{a}</p></div>}</article>)}</div>
    <p className="faq-disclaimer">For the latest eligibility, payment and platform details, check the official Funngro website and applicable terms.</p>
  </div></section>;
}

function FinalCTA() {
  return <section className="final-cta-section" id="get-started"><div className="final-cta-content"><span className="section-eyebrow">YOUR NEXT OPPORTUNITY STARTS HERE</span><h2>Ready to explore brand opportunities?</h2><p>Discover available campaigns and find out which opportunities match your interests and eligibility.</p><a className="primary-button" href="https://www.funngro.com/teen" target="_blank" rel="noreferrer">Get Started with Funngro <ArrowRight /></a><span className="final-cta-note">Review campaign requirements and terms before participating.</span></div></section>;
}

export default function Teen() {
  return <div className="teen-page">
    <section className="teen-hero"><div className="hero-container"><div className="hero-content"><span className="hero-badge"><Sparkles /> REAL BRAND PROJECTS. PRACTICAL EXPERIENCE.</span><h1>Make your ideas count. <span>Explore what you can do.</span></h1><p className="hero-description">Discover brand campaigns and creative activities designed for young people. Explore opportunities that match your interests, learn by doing and understand each campaign before you begin.</p><div className="hero-buttons"><a className="primary-button" href="https://www.funngro.com/teen" target="_blank" rel="noreferrer">Explore Teen Opportunities <ArrowRight /></a><a className="secondary-button" href="#how-it-works">See How It Works <ArrowRight /></a></div><div className="hero-trust"><span><CheckCircle2 /> Campaign requirements explained</span><span><ShieldCheck /> Eligibility varies by campaign</span></div></div>
      <div className="hero-visual"><div className="hero-glow" /><div className="opportunity-panel"><div className="dashboard-topbar"><div className="dashboard-brand"><div className="dashboard-brand-icon"><Sparkles /></div><div><strong>Explore opportunities</strong><span>Find activities that fit you</span></div></div><span className="dashboard-label">DISCOVER</span></div><div className="dashboard-heading"><h2>What interests you?</h2><p>Explore different types of brand campaigns.</p></div><div className="opportunity-list">{categories.slice(0, 4).map(({ title, text, icon: Icon }) => <a className="opportunity-item" href="https://www.funngro.com/teen" target="_blank" rel="noreferrer" key={title}><div className="opportunity-icon"><Icon /></div><div className="opportunity-info"><strong>{title}</strong><span>{text.split('.')[0]}.</span></div><ArrowRight className="opportunity-arrow" size={17} /></a>)}</div><div className="opportunity-footer"><div className="footer-stat"><div className="footer-stat-icon"><Users /></div><div><strong>Learn by doing</strong><span>Build practical skills</span></div></div><div className="footer-divider"/><div className="footer-stat"><div className="footer-stat-icon"><ShieldCheck /></div><div><strong>Check the brief</strong><span>Know the requirements</span></div></div></div></div></div>
    </div></section>
    <section className="stats-section"><div className="stats-container"><div className="stat-item"><div className="stat-number">70 Lakh<span>+</span></div><div className="stat-label">Young Indians reached*</div></div><div className="stat-item"><div className="stat-number">5,000<span>+</span></div><div className="stat-label">Brands*</div></div><div className="stat-item"><div className="stat-number">1,000<span>+</span></div><div className="stat-label">Live projects*</div></div><div className="stat-item"><div className="stat-number">12<span>+</span></div><div className="stat-label">Work categories*</div></div></div><p className="stats-note">*Figures shown as reported on Funngro's public website; verify current figures on the official website before final submission.</p></section>
    <HowItWorks /><Categories /><Learning /><FAQ /><FinalCTA />
  </div>;
}
