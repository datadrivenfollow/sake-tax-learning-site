import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { sectionNav } from '../../data/navigation';

export default function ContentLayout({ title, description, lastUpdated = '2026年6月', breadcrumb = [], section = 'kiso', children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const nav = sectionNav[section];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>{title} | 酒税法ラーニング</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:title" content={`${title} | 酒税法ラーニング`} />
        {description && <meta property="og:description" content={description} />}
      </Helmet>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white border-b border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-navy-700 to-navy-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">酒</span>
            </div>
            <span className="font-serif text-xl font-bold text-slate-900">酒税法ラーニング</span>
          </Link>
          <Link to="/#learning" className="px-6 py-2 bg-gradient-to-r from-navy-700 to-navy-900 text-white rounded-lg hover:shadow-lg transition-shadow text-sm font-semibold">
            学習コンテンツ
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-[73px] bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-1 text-sm text-slate-500 flex-wrap">
            <Link to="/" className="hover:text-navy-700 transition">ホーム</Link>
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5" />
                {item.href ? (
                  <Link to={item.href} className="hover:text-navy-700 transition">{item.label}</Link>
                ) : (
                  <span className="text-slate-900 font-medium">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex gap-12">

          {/* Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="bg-navy-50 rounded-xl p-4 border border-navy-100">
                <div className="text-sm font-bold text-navy-800 mb-4 pb-3 border-b border-navy-200">
                  {nav.title}
                </div>
                <ul className="space-y-1">
                  {nav.links.map(link => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all leading-snug ${
                          location.pathname === link.href
                            ? 'bg-navy-700 text-white font-semibold'
                            : 'text-navy-700 hover:bg-navy-100'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="mb-10">
              <div className="text-sm text-navy-600 font-semibold mb-2 tracking-wide">{nav.title}</div>
              <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4 leading-tight">{title}</h1>
              {description && (
                <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
              )}
              <div className="flex items-center gap-3 mt-5 text-sm text-slate-400">
                <span>更新日: {lastUpdated}</span>
                <span>|</span>
                <span>2026年6月時点の法令に基づく</span>
              </div>
            </div>
            <div>{children}</div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-900 text-slate-300 py-10 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-navy-700 border border-white/20 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">酒</span>
            </div>
            <span className="font-bold text-white">酒税法ラーニング</span>
          </Link>
          <p className="text-sm">&copy; 2026 酒税法ラーニング All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
