import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function Reforms() {
  return (
    <ContentLayout
      section="taikei"
      title="近年の改正のポイント（2020〜2026年）"
      description="2020年度税制改正から始まったビール類・醸造酒類の段階的税率見直しを、小売店・飲食店の視点でわかりやすく解説します。"
      breadcrumb={[{ label: '体系編', href: '/taikei/tax-types' }, { label: '近年の改正のポイント' }]}
    >
      <Section title="改正の背景と目的">
        <p className="text-slate-700 leading-relaxed mb-4">
          2020年度（令和2年度）税制改正により、ビール類（ビール・発泡酒・新ジャンル）および醸造酒類（清酒・果実酒など）の酒税率を段階的に見直すことが決定されました。
        </p>
        <p className="text-slate-700 leading-relaxed mb-5">
          改正の主な目的は、同じような酒類でも製造方法の違いによって税率が大きく異なるという「不公平感」の解消です。特にビールと新ジャンルの税率差は大きく、消費者の購買行動（安い新ジャンルへのシフト）に影響を与えていたとされています。
        </p>
        <div className="bg-navy-50 border-l-4 border-navy-700 rounded-r-lg p-5">
          <div className="font-bold text-navy-800 mb-2">改正の2本柱</div>
          <div className="text-sm text-slate-700 space-y-2">
            <div>① <strong>ビール類の税率統一</strong>：ビール・発泡酒・新ジャンルを2026年10月までに同一税率に</div>
            <div>② <strong>醸造酒類の税率整理</strong>：清酒・果実酒などの税率を2023年10月までに整理・統一</div>
          </div>
        </div>
      </Section>

      <Section title="ビール類の税率改正スケジュール">
        <div className="space-y-4 mb-5">
          {[
            {
              period: '改正前（〜2020年9月）',
              color: 'bg-slate-100 border-slate-300',
              headerColor: 'text-slate-600',
              items: [
                { type: 'ビール', rate: '高い（約220,000円/kl）' },
                { type: '発泡酒（25%未満）', rate: '中程度（約100,000円/kl）' },
                { type: '新ジャンル', rate: '低い（約80,000円/kl）' },
              ],
              note: '税率差が大きく、消費者が安い新ジャンルへシフト',
            },
            {
              period: '第1段階：2020年10月〜2023年9月',
              color: 'bg-blue-50 border-blue-300',
              headerColor: 'text-blue-700',
              items: [
                { type: 'ビール', rate: '引下げ（約200,000円/kl）' },
                { type: '発泡酒', rate: '変更なし' },
                { type: '新ジャンル', rate: '引上げ（約108,000円/kl）' },
              ],
              note: '税率差を縮小。新ジャンルの実質値上がりが起きた段階',
            },
            {
              period: '第2段階：2023年10月〜2026年9月',
              color: 'bg-indigo-50 border-indigo-300',
              headerColor: 'text-indigo-700',
              items: [
                { type: 'ビール', rate: 'さらに引下げ（約181,000円/kl）' },
                { type: '発泡酒', rate: '種類により変動' },
                { type: '新ジャンル', rate: '変更なし（約108,000円/kl）' },
              ],
              note: '現在（2026年6月）はこの段階が適用中',
            },
            {
              period: '第3段階（最終）：2026年10月〜',
              color: 'bg-amber-50 border-amber-400',
              headerColor: 'text-amber-700',
              items: [
                { type: 'ビール', rate: '約155,000円/kl（統一税率）' },
                { type: '発泡酒', rate: '約155,000円/kl（統一税率）' },
                { type: '新ジャンル', rate: '約155,000円/kl（統一税率）' },
              ],
              note: 'ビール・発泡酒・新ジャンルが同一税率に統一される',
            },
          ].map((stage, i) => (
            <div key={i} className={`rounded-xl p-5 border ${stage.color}`}>
              <div className={`font-bold mb-3 ${stage.headerColor}`}>{stage.period}</div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {stage.items.map((item, j) => (
                  <div key={j} className="bg-white rounded-lg p-3 text-center border border-white/80">
                    <div className="text-xs text-slate-500 mb-1">{item.type}</div>
                    <div className="text-xs font-semibold text-slate-800">{item.rate}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-600 italic">→ {stage.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500">※ 税率額は参考値。正確な値は国税庁資料でご確認ください。</p>
      </Section>

      <Section title="醸造酒類（清酒・果実酒）の改正">
        <p className="text-slate-700 leading-relaxed mb-5">
          清酒・果実酒・その他の醸造酒についても、2020年〜2023年にかけて税率の整理が行われました。2023年10月に統一が完了しています。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">種類</th>
                <th className="text-right px-4 py-3">改正前</th>
                <th className="text-right px-4 py-3">2020年10月〜</th>
                <th className="text-right px-4 py-3 rounded-tr-lg">2023年10月〜（現在）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '清酒（日本酒）', before: '120,000円/kl', mid: '110,000円/kl', now: '110,000円/kl' },
                { type: '果実酒（ワイン）', before: '80,000円/kl', mid: '80,000円/kl', now: '90,000円/kl' },
                { type: 'その他醸造酒', before: '各種', mid: '各種', now: '統一・整理済み' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-right text-slate-500 font-mono text-xs">{r.before}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-right font-mono text-xs">{r.mid}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-right font-bold text-navy-700 font-mono text-xs">{r.now}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">※ 参考値。正確な数値は国税庁資料でご確認ください。</p>
      </Section>

      <Section title="小売店・飲食店への影響">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: '仕入コストへの影響',
              body: '2026年10月の改正でビールの仕入価格は下がり、新ジャンルは上がる見込みです。仕入れる酒類の構成によっては、コスト増減が生じます。',
              tag: '仕入管理',
              color: 'border-navy-200',
            },
            {
              title: '価格設定の見直し',
              body: 'ビールの値下げにより販売価格の調整機会が生まれますが、新ジャンルは値上がりするため、メニュー価格の見直しが必要になる可能性があります。',
              tag: '価格戦略',
              color: 'border-blue-200',
            },
            {
              title: '消費者の購買行動変化',
              body: '税率統一により、ビールと新ジャンルの価格差が縮まります。新ジャンルを好んでいた消費者がビールに回帰する可能性があります。',
              tag: '商品戦略',
              color: 'border-indigo-200',
            },
            {
              title: '帳簿への影響なし',
              body: '税率改正は帳簿の記載方法や保存義務には影響しません。ただし改正後の仕入伝票には新税率が反映されるため、価格変動の確認は必要です。',
              tag: '帳簿管理',
              color: 'border-green-200',
            },
          ].map((item, i) => (
            <div key={i} className={`bg-white rounded-xl p-5 border ${item.color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-navy-100 text-navy-700 font-bold px-2 py-1 rounded">{item.tag}</span>
                <div className="font-bold text-slate-900 text-sm">{item.title}</div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
