import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/teen" className="logo">funngro<span>.</span></Link>
          <p>Connecting young people with brand opportunities and helping brands engage young audiences.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link to="/teen">For Teens</Link>
          <Link to="/companies">For Companies</Link>
          <a href="https://www.funngro.com/stories" target="_blank" rel="noreferrer">Success Stories <ArrowUpRight size={13} /></a>
        </div>
        <div className="footer-links">
          <strong>Official websites</strong>
          <a href="https://www.funngro.com/teen" target="_blank" rel="noreferrer">Funngro for Teens <ArrowUpRight size={13} /></a>
          <a href="https://www.funngro.com/for-brands" target="_blank" rel="noreferrer">Funngro for Brands <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="footer-bottom"><span>Concept website created for a design and SEO assignment.</span><span>Campaign availability, eligibility and payment terms may vary.</span></div>
    </footer>
  );
}
