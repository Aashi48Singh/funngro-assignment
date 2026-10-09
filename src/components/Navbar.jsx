import React from 'react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);
  const isTeen = location.pathname !== '/companies';
  const anchor = (id) => `${isTeen ? '/teen' : '/companies'}#${id}`;

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/teen" className="logo" onClick={close} aria-label="Funngro home">funngro<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/teen" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>For Teens</NavLink>
          <NavLink to="/companies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>For Companies</NavLink>
          <a className="nav-link" href={anchor(isTeen ? 'how-it-works' : 'brand-solutions')}>How It Works</a>
          <a className="nav-link" href="https://www.funngro.com/stories" target="_blank" rel="noreferrer">Success Stories</a>
        </nav>
        <a className="nav-cta" href={isTeen ? 'https://www.funngro.com/teen' : 'https://www.funngro.com/for-brands'} target="_blank" rel="noreferrer">Get Started <ArrowRight size={16} /></a>
        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav className={`mobile-nav ${open ? 'mobile-nav-open' : ''}`} aria-label="Mobile navigation">
        <NavLink to="/teen" onClick={close} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>For Teens</NavLink>
        <NavLink to="/companies" onClick={close} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>For Companies</NavLink>
        <a className="mobile-nav-link" href={anchor(isTeen ? 'how-it-works' : 'brand-solutions')} onClick={close}>How It Works</a>
        <a className="mobile-nav-link" href="https://www.funngro.com/stories" target="_blank" rel="noreferrer" onClick={close}>Success Stories</a>
        <a className="mobile-nav-cta" href={isTeen ? 'https://www.funngro.com/teen' : 'https://www.funngro.com/for-brands'} target="_blank" rel="noreferrer" onClick={close}>Get Started <ArrowRight size={16} /></a>
      </nav>
    </header>
  );
}
