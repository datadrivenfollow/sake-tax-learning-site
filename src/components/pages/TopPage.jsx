import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, BookOpen, BarChart3, FileText, Building2, Menu, X } from 'lucide-react';

const catalog = [
  {
    key: 'kiso',
    title: '基礎編',
    color: 'border-blue-500',
    headerBg: 'bg-blue-600',
    tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: BookOpen,
    description: '酒税法の入門知識。免許制度・酒類の分類・義務の概要を学ぶ。',
    count: 4,
    pages: [
      { href: '/kiso/sake-tax', title: '酒税法とは？', desc: '定義・酒類4分類・免許制度の概要' },
      { href: '/kiso/glossary', title: '基本用語集（20語）', desc: '酒税・免許・帳簿に関する重要用語' },
      { href: '/kiso/faq', title: 'よくある質問', desc: '小売店・飲食店からよく寄せられる疑問' },
      { href: '/kiso/why', title: 'なぜ酒税法が大切か', desc: '違反リスクと罰則・知識を持つメリット' },
    ],
  },
  {
    key: 'taikei',
    title: '体系編',
    color: 'border-indigo-500',
    headerBg: 'bg-indigo-700',
    tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: BarChart3,
    description: '税率・申告義務・改正内容など法律の体系を理解する。',
    count: 7,
    pages: [
      { href: '/taikei/tax-types', title: '酒税の種類と税率', desc: '4分類ごとの税率と2026年10月改正' },
      { href: '/taikei/filing-flow', title: '申告義務の判定フロー', desc: '誰が申告義務を負うかを図解で解説' },
      { href: '/taikei/deadlines', title: '申告期限と提出先', desc: '申告期限・提出先・期限超過のペナルティ' },
      { href: '/taikei/reforms', title: '近年の改正のポイント', desc: '2020〜2026年の段階的税率改正を整理' },
      { href: '/taikei/penalties', title: '罰則と対応ケース', desc: '違反種別ごとの罰則一覧と具体的対応例' },
      { href: '/taikei/consumption-tax', title: '酒税と消費税の関係', desc: '二重課税の仕組みと実務上の処理方法' },
      { href: '/taikei/ledger-requirements', title: '帳簿保存要件の概要', desc: '誰が・何を・何年間保存するか' },
    ],
  },
  {
    key: 'chobo',
    title: '帳簿編',
    color: 'border-teal-500',
    headerBg: 'bg-teal-700',
    tagBg: 'bg-teal-50 text-teal-700 border-teal-200',
    icon: FileText,
    description: '実務に直結する帳簿の作り方・管理方法を詳しく解説。',
    count: 8,
    pages: [
      { href: '/chobo/how-to-write', title: '酒類受払帳の書き方（記入例付き）', desc: '仕入れ・払い出しの記入ステップと品目別チートシート' },
      { href: '/chobo/template', title: 'テンプレートの作り方', desc: 'Excel・手書き帳簿の列構成・設定方法を解説' },
      { href: '/chobo/template-download', title: 'テンプレート無料ダウンロード', desc: '即使用可能なExcelテンプレート。メアド登録で配布' },
      { href: '/chobo/method-comparison', title: '紙・Excel・アプリ比較', desc: '費用・手間・リスクで管理方法を比較。移行タイミングの判断基準' },
      { href: '/chobo/obligation-matrix', title: '業種別 義務マトリクス', desc: '製造者・卸売・小売・飲食店ごとに作成・保存すべき書類を一覧化' },
      { href: '/chobo/what-is-ledger', title: '酒類受払帳とは', desc: '法的根拠・酒税帳簿との違い・業種別の義務範囲' },
      { href: '/chobo/required-items', title: '記載すべき項目（詳細）', desc: '小売店・飲食店別の必須記載事項一覧' },
      { href: '/chobo/creation-steps', title: '帳簿作成ステップガイド', desc: '設計→記録→照合→保存の5ステップ' },
      { href: '/chobo/common-mistakes', title: 'よくあるミス＆対策', desc: '税務調査で指摘されやすいポイントと防止策' },
      { href: '/chobo/best-practices', title: '帳簿管理のベストプラクティス', desc: '月次・年次の作業スケジュールと効率化' },
      { href: '/chobo/digitization', title: '帳簿のデジタル化', desc: '電子帳簿の3方式・ツール選定・注意点' },
      { href: '/chobo/audit', title: '帳簿監査への対応', desc: '調査の流れ・準備書類・対応チェックリスト' },
    ],
  },
  {
    key: 'menkyo',
    title: '申請・免許編',
    color: 'border-purple-500',
    headerBg: 'bg-purple-700',
    tagBg: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: BookOpen,
    description: '酒類販売業免許の申請手続き・必要書類・審査期間を実務的に解説。',
    count: 1,
    pages: [
      { href: '/menkyo/retail-license', title: '一般酒類小売業免許の申請ガイド', desc: '必要書類・費用・審査期間・欠格事由・よくある質問' },
    ],
  },
  {
    key: 'gyotai',
    title: '業態別編',
    color: 'border-navy-600',
    headerBg: 'bg-navy-700',
    tagBg: 'bg-navy-50 text-navy-700 border-navy-200',
    icon: Building2,
    description: '酒小売店・飲食店それぞれの義務と実務を業態別にガイド。',
    count: 2,
    pages: [
      { href: '/gyotai/retailer', title: '酒小売店向けガイド', desc: '免許・帳簿・仕入管理・開業フロー' },
      { href: '/gyotai/restaurant', title: '飲食店向けガイド', desc: '提供と販売の違い・テイクアウト対応・深夜営業' },
      { href: '/gyotai/restaurant-takeout', title: '飲食店のテイクアウト販売ガイド', desc: '免許取得の手順・帳簿の分け方・よくある疑問' },
    ],
  },
];

const navLinks = [
  { label: '基礎編', href: '#kiso' },
  { label: '体系編', href: '#taikei' },
  { label: '帳簿編', href: '#chobo' },
  { label: '業態別編', href: '#gyotai' },
];

export default function TopPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>酒税法ラーニング｜酒類受払帳の書き方・テンプレート・免許申請まで</title>
        <meta name="description" content="酒類受払帳の書き方・記入例・Excelテンプレート・一般酒類小売業免許の申請ガイドまで。酒小売店・飲食店の実務をサポートする情報サイト。2026年6月時点の法令に基づく。" />
        <meta property="og:title" content="酒税法ラーニング｜小売店・飲食店の酒類実務サポートサイト" />
        <meta property="og:description" content="酒類受払帳の書き方・テンプレート・免許申請まで。小売店・飲食店向けの酒税法実務情報。" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 bg-white transition-all duration-200 ${isScrolled ? 'shadow-sm border-b border-slate-200' : 'border-b border-slate-100'}`}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 bg-navy-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">酒</span>
            </div>
            <span className="font-serif font-bold text-slate-900 text-base">酒税法ラーニング</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm text-slate-600 hover:text-navy-800 hover:bg-navy-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/resources/reform-history"
              className="ml-2 px-4 py-1.5 text-sm text-slate-600 hover:text-navy-800 hover:bg-navy-50 rounded-lg transition-colors font-medium"
            >
              改正履歴
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-navy-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-6 py-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm text-slate-700 hover:text-navy-800 font-medium border-b border-slate-50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/resources/reform-history"
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-slate-700 hover:text-navy-800 font-medium"
            >
              改正履歴
            </Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="pt-14 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-navy-700 bg-navy-50 border border-navy-200 px-3 py-1.5 rounded-full mb-5">
                酒小売店・飲食店の方へ
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-snug mb-4">
                酒税法を体系的に学べる<br />学習サイト
              </h1>
              <p className="text-slate-600 leading-relaxed">
                酒類の販売・提供に関わる事業者向けに、酒税法の基礎から帳簿実務まで体系的に解説します。小売店・飲食店のどちらの業態にも対応した実務情報を無料で学べます。
              </p>
              <div className="flex items-center gap-4 mt-5 text-xs text-slate-400">
                <span>2026年6月時点の法令に基づく</span>
                <span>|</span>
                <span>全20ページ</span>
                <span>|</span>
                <span>無料</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 md:w-56 flex-shrink-0">
              {[
                { num: '4', label: 'セクション' },
                { num: '20', label: 'ページ' },
                { num: '2026', label: '年6月法令基準' },
                { num: '無料', label: '全コンテンツ' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-2xl text-navy-800">{stat.num}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Learning path overview */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-xs font-bold text-slate-400 tracking-widest mb-5 uppercase">学習の流れ</div>
          <div className="flex flex-col md:flex-row gap-3">
            {catalog.map((section, i) => {
              const Icon = section.icon;
              return (
                <React.Fragment key={section.key}>
                  <a
                    href={`#${section.key}`}
                    className="flex-1 bg-white border border-slate-200 rounded-xl p-4 hover:border-navy-300 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 ${section.headerBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{section.title}</div>
                        <div className="text-xs text-slate-500">{section.count}ページ</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">{section.description}</p>
                  </a>
                  {i < catalog.length - 1 && (
                    <div className="hidden md:flex items-center text-slate-300 font-bold text-lg">→</div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content catalog */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {catalog.map(section => {
            const Icon = section.icon;
            return (
              <section key={section.key} id={section.key}>
                {/* Section header */}
                <div className={`flex items-center gap-4 pb-4 border-b-2 ${section.color} mb-6`}>
                  <div className={`w-9 h-9 ${section.headerBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-slate-900">{section.title}</h2>
                    <p className="text-sm text-slate-500">{section.description}</p>
                  </div>
                  <span className={`ml-auto text-xs font-bold px-2.5 py-1 rounded-full border ${section.tagBg}`}>
                    {section.count}ページ
                  </span>
                </div>

                {/* Article grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.pages.map((page, idx) => (
                    <Link
                      key={idx}
                      to={page.href}
                      className="group flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-900 group-hover:text-navy-800 transition-colors text-sm leading-snug mb-1">
                          {page.title}
                        </div>
                        <div className="text-xs text-slate-500 leading-relaxed">{page.desc}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-navy-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Resources */}
          <section id="resources">
            <div className="flex items-center gap-4 pb-4 border-b-2 border-slate-300 mb-6">
              <h2 className="font-serif text-xl font-bold text-slate-900">リソース</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/resources/reform-history', title: '改正履歴', desc: '酒税法・関連法令の主な改正を年表で整理' },
                { href: '/kiso/glossary', title: '用語集（20語）', desc: '酒税・免許・帳簿に関する重要用語の解説' },
                { href: '/kiso/faq', title: 'よくある質問', desc: '小売店・飲食店からよく寄せられる疑問' },
              ].map((page, idx) => (
                <Link
                  key={idx}
                  to={page.href}
                  className="group flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 group-hover:text-navy-800 transition-colors text-sm leading-snug mb-1">
                      {page.title}
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed">{page.desc}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-navy-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Disclaimer band */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-slate-500">
          本サイトのコンテンツは2026年6月時点の法令情報に基づいており、一般的な情報提供を目的としています。個別の申請・申告・法的判断については、所轄税務署または税理士にご相談ください。
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-900 text-slate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Sitemap grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-navy-700 border border-white/20 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">酒</span>
                </div>
                <span className="font-bold text-white text-sm">酒税法ラーニング</span>
              </Link>
              <p className="text-xs leading-relaxed text-slate-400">
                酒類事業者のための法令学習サイト。小売店・飲食店向けの実務情報を無料で提供。
              </p>
              <div className="mt-4 text-xs space-y-1 text-slate-400">
                <a href="#" className="block hover:text-white transition">このサイトについて</a>
                <a href="#" className="block hover:text-white transition">免責事項</a>
                <a href="#" className="block hover:text-white transition">お問い合わせ</a>
              </div>
            </div>

            {/* 基礎編 */}
            <div>
              <div className="text-white font-bold text-sm mb-3">基礎編</div>
              <ul className="space-y-2">
                {catalog[0].pages.map(p => (
                  <li key={p.href}>
                    <Link to={p.href} className="text-xs hover:text-white transition leading-relaxed block">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 体系編 */}
            <div>
              <div className="text-white font-bold text-sm mb-3">体系編</div>
              <ul className="space-y-2">
                {catalog[1].pages.map(p => (
                  <li key={p.href}>
                    <Link to={p.href} className="text-xs hover:text-white transition leading-relaxed block">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 帳簿編 */}
            <div>
              <div className="text-white font-bold text-sm mb-3">帳簿編</div>
              <ul className="space-y-2">
                {catalog[2].pages.map(p => (
                  <li key={p.href}>
                    <Link to={p.href} className="text-xs hover:text-white transition leading-relaxed block">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 業態別 + リソース */}
            <div>
              <div className="text-white font-bold text-sm mb-3">業態別編</div>
              <ul className="space-y-2 mb-5">
                {catalog[3].pages.map(p => (
                  <li key={p.href}>
                    <Link to={p.href} className="text-xs hover:text-white transition leading-relaxed block">{p.title}</Link>
                  </li>
                ))}
              </ul>
              <div className="text-white font-bold text-sm mb-3">リソース</div>
              <ul className="space-y-2">
                <li><Link to="/resources/reform-history" className="text-xs hover:text-white transition block">改正履歴</Link></li>
                <li><Link to="/kiso/glossary" className="text-xs hover:text-white transition block">用語集</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-700 pt-6 text-center text-xs">
            &copy; 2026 酒税法ラーニング All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
