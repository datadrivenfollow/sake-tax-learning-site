import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

const events = [
  {
    year: '2026年10月',
    label: '予定',
    color: 'bg-amber-500',
    title: 'ビール類税率統一（第3段階・最終）',
    body: 'ビール・発泡酒・その他の発泡性酒類（新ジャンル）の税率が約155,000円/klに統一。2020年から続いた段階的改正の完了。',
    important: true,
  },
  {
    year: '2023年10月',
    label: '実施',
    color: 'bg-navy-600',
    title: 'ビール類税率変更（第2段階）・清酒・果実酒等の税率統一',
    body: 'ビール税率を181,000円/klに引下げ。清酒・果実酒等の税率を整理・統一。',
    important: false,
  },
  {
    year: '2023年1月',
    label: '施行',
    color: 'bg-indigo-600',
    title: '電子帳簿保存法 改正・電子取引の電子データ保存義務化（猶予終了）',
    body: '電子的に受け取った請求書・領収書（PDF等）の紙出力保存が原則廃止。電子データのまま保存が義務化された（中小企業等への猶予措置終了）。',
    important: false,
  },
  {
    year: '2022年1月',
    label: '施行',
    color: 'bg-blue-600',
    title: '電子帳簿保存法 改正施行',
    body: '電子帳簿の保存要件が緩和。承認制が廃止され、要件を満たせば自由に電子帳簿保存が可能に。',
    important: false,
  },
  {
    year: '2020年10月',
    label: '実施',
    color: 'bg-navy-600',
    title: 'ビール類・醸造酒類 税率改正（第1段階）',
    body: 'ビール税率を200,000円/klに引下げ、新ジャンルを108,000円/klに引上げ。清酒・果実酒の税率も段階的に変更開始。',
    important: false,
  },
  {
    year: '2019年10月',
    label: '実施',
    color: 'bg-slate-500',
    title: '消費税率10%への引上げ・軽減税率制度の導入',
    body: '消費税率が8%から10%に。食料品は8%の軽減税率が適用されたが、アルコール飲料（酒類）は標準税率10%が適用されることが明確化。',
    important: false,
  },
  {
    year: '2018年4月',
    label: '改正',
    color: 'bg-slate-500',
    title: '酒類販売管理研修の制度整備',
    body: '酒類販売管理者の選任義務・研修の定期受講について制度の見直しが行われた。',
    important: false,
  },
  {
    year: '1953年（昭和28年）',
    label: '制定',
    color: 'bg-slate-400',
    title: '酒税法の制定',
    body: '現行の酒税法が制定される。戦前から続く酒税制度を整理・法体系化。製造者による申告納税方式と免許制度の基礎が確立。',
    important: false,
  },
];

export default function ReformHistory() {
  return (
    <ContentLayout
      section="resources"
      title="改正履歴"
      description="酒税法・関連法令の主要な改正を時系列で整理しています。2026年6月時点の情報です。"
      breadcrumb={[{ label: 'リソース', href: '/resources/reform-history' }, { label: '改正履歴' }]}
    >
      <Section title="酒税法・関連法令の主な改正年表">
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          <div className="space-y-6">
            {events.map((ev, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className="w-32 flex-shrink-0 text-right pr-4 pt-1">
                  <div className="text-sm font-bold text-slate-800">{ev.year}</div>
                  <div className={`text-xs px-2 py-0.5 rounded inline-block mt-0.5 text-white ${ev.color}`}>{ev.label}</div>
                </div>
                <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 z-10 ${ev.color} ${ev.important ? 'ring-4 ring-amber-200' : ''}`}></div>
                <div className={`flex-1 rounded-xl p-4 border mb-2 ${ev.important ? 'bg-amber-50 border-amber-300' : 'bg-white border-slate-200'}`}>
                  <div className="font-bold text-slate-900 mb-1 text-sm">{ev.title}</div>
                  <p className="text-sm text-slate-700 leading-relaxed">{ev.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="2026年10月改正の詳細（予定）">
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5">
          <div className="font-bold text-amber-800 mb-4">ビール類税率統一（第3段階）の主な変更点</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-amber-700 text-white">
                  <th className="text-left px-4 py-2 rounded-tl-lg">酒類の種類</th>
                  <th className="text-right px-4 py-2">〜2026年9月</th>
                  <th className="text-right px-4 py-2 rounded-tr-lg">2026年10月〜</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'ビール', before: '約181,000円/kl', after: '約155,000円/kl', dir: '引下げ' },
                  { type: '発泡酒（麦芽25%以上）', before: '約134,250円/kl', after: '約155,000円/kl', dir: '引上げ' },
                  { type: '発泡酒（麦芽25%未満）', before: '約100,000円/kl', after: '約155,000円/kl', dir: '引上げ' },
                  { type: 'その他発泡性酒類（新ジャンル）', before: '約108,000円/kl', after: '約155,000円/kl', dir: '引上げ' },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'}>
                    <td className="px-4 py-2 border-b border-amber-100 font-medium">{r.type}</td>
                    <td className="px-4 py-2 border-b border-amber-100 text-right font-mono text-slate-600">{r.before}</td>
                    <td className="px-4 py-2 border-b border-amber-100 text-right">
                      <div className="font-mono font-bold text-amber-800">{r.after}</div>
                      <div className="text-xs text-slate-500">{r.dir}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 税率は参考値。正確な数値は国税庁資料でご確認ください。</p>
        </div>
      </Section>

      <Section title="最新の法令を確認する方法">
        <div className="space-y-3">
          {[
            { source: '国税庁ウェブサイト（www.nta.go.jp）', desc: '酒税法の条文・税率・申告様式・Q&Aが掲載。「酒税」で検索するとアクセスできる。' },
            { source: '所轄税務署', desc: '管轄の税務署の酒類担当窓口で、個別の疑問点について相談できる。' },
            { source: '国税庁タックスアンサー（No.5750等）', desc: '酒税の概要をわかりやすく解説したページ。税率表も掲載されている。' },
            { source: 'e-Gov法令検索（elaws.e-gov.go.jp）', desc: '酒税法の最新条文をオンラインで確認できる。' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex gap-3">
              <div className="w-6 h-6 bg-navy-700 text-white rounded text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1">{item.source}</div>
                <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
