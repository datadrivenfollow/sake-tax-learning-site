import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function Deadlines() {
  return (
    <ContentLayout
      section="taikei"
      title="申告期限と提出先"
      description="酒税の申告期限・納付期限・提出先を整理します。主に製造者向けの情報ですが、小売店・飲食店も基礎知識として把握しておきましょう。"
      breadcrumb={[{ label: '体系編', href: '/taikei/tax-types' }, { label: '申告期限と提出先' }]}
    >
      <Section title="申告義務者と申告の種類">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒税の申告義務者は酒類製造者（メーカー）です。酒類の移出（製造場からの出荷）に応じて申告・納付を行います。申告期限は主に「月次申告」ですが、規模や条件によって「年次申告」「四半期申告」が認められる場合もあります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">申告の種類</th>
                <th className="text-left px-4 py-3">対象</th>
                <th className="text-left px-4 py-3">申告・納付期限</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">備考</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '月次申告（原則）', target: '一般の酒類製造者', deadline: '移出した月の翌月末日', note: '最も一般的な申告方式' },
                { type: '年次申告', target: '小規模製造者など', deadline: '毎年3月末日（前年分）', note: '要件を満たす場合に適用' },
                { type: '四半期申告', target: '一定の条件を満たす製造者', deadline: '各四半期末の翌月末日', note: '承認を受けた場合' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200">{r.target}</td>
                  <td className="px-4 py-3 border-b border-slate-200 font-mono text-navy-700">{r.deadline}</td>
                  <td className="px-4 py-3 text-slate-500 border-b border-slate-200 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">※ 詳細な適用要件は国税庁・所轄税務署にご確認ください。</p>
      </Section>

      <Section title="月次申告のスケジュール例">
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-5">
          <div className="text-sm font-bold text-slate-500 mb-5 text-center">図：月次申告の流れ（例：1月分）</div>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
            {[
              { label: '1月', sub: '酒類を移出（出荷）', color: 'bg-navy-100 text-navy-800 border-navy-200' },
              { arrow: true },
              { label: '2月末日', sub: '申告書提出・酒税納付', color: 'bg-red-100 text-red-800 border-red-200 font-bold' },
            ].map((item, i) =>
              item.arrow ? (
                <div key={i} className="text-navy-400 font-bold text-2xl">→</div>
              ) : (
                <div key={i} className={`rounded-lg px-6 py-4 text-center border ${item.color} min-w-[140px]`}>
                  <div className="font-bold text-sm">{item.label}</div>
                  <div className="text-xs mt-1 opacity-80">{item.sub}</div>
                </div>
              )
            )}
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">移出月の翌月末日が申告・納付期限（末日が休日の場合は翌営業日）</p>
        </div>
      </Section>

      <Section title="申告書の提出先">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">提出先</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">内容</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dest: '所轄税務署', content: '製造場の所在地を管轄する税務署。申告書の提出・税額の納付をここで行う。' },
                { dest: 'e-Tax（電子申告）', content: '国税庁が提供するオンライン申告システム。書面申告に代えて電子申告が可能。推奨されている。' },
                { dest: '国税庁ウェブサイト', content: '申告書の様式・記載例・Q&Aを公開。最新版を使用すること。' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200 whitespace-nowrap">{r.dest}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="期限を過ぎた場合のペナルティ">
        <div className="space-y-3">
          {[
            { type: '延滞税', desc: '法定納期限の翌日から完納日まで、日割りで課される附帯税。税率は年によって変動（法定利率に連動）。', severity: 'medium' },
            { type: '無申告加算税', desc: '期限内に申告をしなかった場合、本税の15〜20%相当が加算される。税務調査で発覚した場合はさらに加重される。', severity: 'high' },
            { type: '過少申告加算税', desc: '申告内容が実際より少なかった場合、不足税額の10%相当が課される。', severity: 'medium' },
            { type: '刑事罰（逋脱犯）', desc: '故意に酒税を免れようとした場合、10年以下の懲役または1,000万円以下の罰金が科される可能性がある。', severity: 'high' },
          ].map((item, i) => (
            <div key={i} className={`rounded-lg p-4 border flex gap-3 ${item.severity === 'high' ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'}`}>
              <div className={`text-xs font-bold px-2 py-1 rounded self-start mt-0.5 whitespace-nowrap ${item.severity === 'high' ? 'bg-red-200 text-red-800' : 'bg-orange-200 text-orange-800'}`}>{item.type}</div>
              <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="小売店・飲食店が知っておくべきこと">
        <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            酒小売店・飲食店は原則として酒税の申告義務はありませんが、以下の点は把握しておきましょう。
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-navy-600 font-bold mt-0.5">•</span>
              <span><strong>仕入先（メーカー・卸）が適切に申告しているか確認は不要</strong>ですが、仕入伝票・領収書は帳簿とともに5年間保存してください。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy-600 font-bold mt-0.5">•</span>
              <span><strong>自社製造（どぶろく・梅酒など）を販売する場合</strong>は製造者として申告義務が発生します。要注意です。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy-600 font-bold mt-0.5">•</span>
              <span><strong>2026年10月の税率改正</strong>でビール類の仕入価格が変動します。価格設定の見直しを検討しましょう。</span>
            </li>
          </ul>
        </div>
      </Section>
    </ContentLayout>
  );
}
