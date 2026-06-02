import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, BarChart3, FileText, Building2, Sparkles } from 'lucide-react';

export default function TopPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">酒</span>
            </div>
            <span className="font-serif text-xl font-bold text-slate-900">酒税法ラーニング</span>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg hover:shadow-lg transition-shadow">
            アプリを試す
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-amber-700 bg-amber-100 px-4 py-2 rounded-full">
                ✨ 酒税法を学ぶなら
              </span>
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight">
              酒税法を体系的に学ぶ
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">オウンドメディア</span>
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
              飲食店、酒販店、製造業まで。酒類の事業に関わる全ての人へ。
              <br />
              基礎から帳簿実務まで、わかりやすく、体系的に解説します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg hover:shadow-xl transition-all flex items-center gap-2">
                学習を始める
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-amber-700 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors">
                アプリについて
              </button>
            </div>
          </div>

          {/* Visual Flow */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute top-20 right-10 w-40 h-40 bg-amber-700/20 rounded-full blur-3xl"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center gap-6 p-8">
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-2xl font-semibold text-slate-900">基礎編</div>
                  <div className="text-sm text-slate-600">酒税法とは？</div>
                </div>
                <div className="text-center text-amber-700 font-bold">↓</div>
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-2xl font-semibold text-slate-900">体系編</div>
                  <div className="text-sm text-slate-600">税制を理解する</div>
                </div>
                <div className="text-center text-amber-700 font-bold">↓</div>
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-2xl font-semibold text-slate-900">帳簿編</div>
                  <div className="text-sm text-slate-600">実務を学ぶ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">4つのステップで学ぶ</h2>
            <p className="text-slate-300 text-lg">初心者から実務担当者まで、段階的に酒税法を理解できます</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '基礎編',
                icon: BookOpen,
                description: '酒税法とは何か、基本概念を学ぶ',
                pages: '5ページ',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: '体系編',
                icon: BarChart3,
                description: '税率、申告義務、改正内容など法律体系を理解',
                pages: '7ページ',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: '帳簿編',
                icon: FileText,
                description: '記載項目、作成方法、デジタル化まで実務ガイド',
                pages: '12ページ',
                color: 'from-amber-500 to-amber-600'
              },
              {
                title: '業態別編',
                icon: Building2,
                description: '飲食店、小売店、製造業など業種別実装ガイド',
                pages: '5ページ',
                color: 'from-rose-500 to-rose-600'
              }
            ].map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  className="group cursor-pointer"
                >
                  <div className="bg-slate-700/50 backdrop-blur hover:bg-slate-600/50 transition-all duration-300 rounded-xl p-6 h-full border border-slate-600 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/20">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{section.description}</p>
                    <div className="text-xs text-slate-400 font-semibold">{section.pages}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">このサイトの特徴</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '体系的な学習',
                description: 'AIO最適化されたQ&A、比較表、ステップガイド。検索AIにも選ばれるコンテンツ品質。'
              },
              {
                title: '帳簿作成に特化',
                description: '酒類帳簿の記載項目から実務ミス対策まで。デジタル化の必要性もわかります。'
              },
              {
                title: '業態別対応',
                description: '飲食店、酒販店、製造業まで。あなたの事業に必要な知識が見つかります。'
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg mb-4 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">帳簿編をプレビュー</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '酒類帳簿とは', icon: '📋' },
              { title: '記載項目の詳細', icon: '✍️' },
              { title: '作成ステップガイド', icon: '📚' },
              { title: 'よくあるミス＆対策', icon: '⚠️' },
              { title: '帳簿管理のコツ', icon: '💡' },
              { title: 'デジタル化のメリット', icon: '💻' }
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-amber-700 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{item.title}</h3>
                <ChevronRight className="w-4 h-4 text-amber-700 mt-3 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl font-bold">帳簿作成をカンタンに</h2>
          <p className="text-xl text-amber-100">
            酒税法の学習と帳簿管理を一気に解決。
            <br />
            デジタル帳簿アプリで、記録の手間を削減します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="group px-8 py-4 bg-white text-amber-900 font-bold rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              無料トライアルを始める
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-amber-700 text-white border border-white rounded-lg hover:bg-amber-600 transition-colors">
              デモを見る
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">よくある質問</h2>
          
          <div className="space-y-4">
            {[
              {
                q: '酒税法は誰に適用されますか？',
                a: '酒類の製造、販売、提供を行う全ての事業者に適用されます。企業規模は問いません。'
              },
              {
                q: '申告期限はいつですか？',
                a: '申告期限は酒類の種類によって異なります。毎月、3ヶ月ごと、年1回の3つのパターンがあります。詳しくは「体系編」をご覧ください。'
              },
              {
                q: '帳簿作成は必須ですか？',
                a: 'はい、申告義務のある事業者は帳簿の作成と保管が法律で義務付けられています。保管期間は7年です。'
              },
              {
                q: 'デジタル帳簿とは何ですか？',
                a: 'Excelやアプリで帳簿を電子管理することです。手書きの紙帳簿より、管理と検索が簡単になります。'
              }
            ].map((faq, idx) => (
              <details key={idx} className="group">
                <summary className="flex cursor-pointer items-center justify-between p-4 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-4 text-slate-700 bg-slate-50 rounded-b-lg">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-amber-700 to-amber-900 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">酒</span>
                </div>
                <span className="font-bold text-white">酒税法ラーニング</span>
              </div>
              <p className="text-sm">酒税法を体系的に学べるオウンドメディア</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">学習コンテンツ</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">基礎編</a></li>
                <li><a href="#" className="hover:text-white transition">体系編</a></li>
                <li><a href="#" className="hover:text-white transition">帳簿編</a></li>
                <li><a href="#" className="hover:text-white transition">業態別編</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">リソース</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition">用語集</a></li>
                <li><a href="#" className="hover:text-white transition">改正情報</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">アプリ</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">料金</a></li>
                <li><a href="#" className="hover:text-white transition">デモ</a></li>
                <li><a href="#" className="hover:text-white transition">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-sm">&copy; 2024 酒税法ラーニング All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
