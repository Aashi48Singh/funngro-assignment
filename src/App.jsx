
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Teen from './pages/Teen.jsx';
import Companies from './pages/Companies.jsx';

function RouteSEO() {
  const location = useLocation();
  useEffect(() => {
    const teen = location.pathname !== '/companies';
    const title = teen
      ? 'Funngro for Teens | Explore Brand Campaign Opportunities'
      : 'Funngro for Companies | Connect with Young Audiences';
    const description = teen
      ? 'Explore brand campaigns, content creation, referrals, surveys and other opportunities for young people with Funngro. Eligibility and availability vary by campaign.'
      : 'Discover how Funngro can help brands engage young audiences through campaigns, content, sampling, surveys, app testing and more.';
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${teen ? '/teen' : '/companies'}`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <RouteSEO />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/teen" replace />} />
          <Route path="/teen" element={<Teen />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<Navigate to="/teen" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
