import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

const InfoBox = ({ title, children }) => (
  <div className="my-5 bg-navy-50 border-l-4 border-navy-700 rounded-r-lg p-5">
    {title && <div className="font-bold text-navy-800 mb-2">{title}</div>}
    <div className="text-slate-700 text-sm leading-relaxed">{children}</div>
  </div>
);

export default function TaxTypes() {
  return (
    <ContentLayout
      section="taikei"
      title="酒税の種類と税率"
      description="酒類の4大分類ごとの税率体系を解説します。2026年6月時点の税率と、2026年10月に予定されるビール類統一改正を含めて整理します。"
      breadcrumb={[{ label: '体系編', href: '/taikei/tax-types' }, { label: '酒税の種類と税率' }]}
    >
      <Section title="酒税の課税標準と計算方法">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒税は、製造者（メーカー）が酒類を製造場から「移出」した量（キロリットル単位）を課税標準として計算します。税率は酒類の種類・麦芽比率・アルコール度数などによって異なります。
        </p>
        <InfoBox title="課税の基本式">
          <div className="font-mono text-base text-navy-900 bg-white rounded p-3 border border-navy-200 mb-2">
            酒税額 ＝ 移出数量（kl）× 税率（円/kl）
          </div>
          ※ 蒸留酒類・混成酒類の一部はアルコール度数に応じた計算になります。
        </InfoBox>
      </Section>

      <Section title="発泡性酒類の税率（2026年6月時点）">
        <p className="text-slate-700 leading-relaxed mb-5">
          ビール・発泡酒・新ジャンルは2020年から段階的に税率が見直されており、2026年10月に最終統一が予定されています。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">種類</th>
                <th className="text-left px-4 py-3">主な条件</th>
                <th className="text-right px-4 py-3">2023年10月〜<br />2026年9月</th>
                <th className="text-right px-4 py-3 rounded-tr-lg">2026年10月〜<br />（統一後）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'ビール', cond: '麦芽比率50%以上など', current: '181,000円/kl', next: '155,000円/kl', change: '↓ 引下げ' },
                { type: '発泡酒（麦芽50%以上）', cond: '麦芽比率50%以上', current: '134,250円/kl', next: '155,000円/kl', change: '↑ 引上げ' },
                { type: '発泡酒（麦芽25%未満）', cond: '麦芽比率25%未満', current: '100,000円/kl', next: '155,000円/kl', change: '↑ 引上げ' },
                { type: 'その他発泡性酒類', cond: '新ジャンル（第三のビール）', current: '108,000円/kl', next: '155,000円/kl', change: '↑ 引上げ' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200">{r.type}</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 text-xs">{r.cond}</td>
                  <td className="px-4 py-3 text-right border-b border-slate-200 font-mono">{r.current}</td>
                  <td className="px-4 py-3 text-right border-b border-slate-200">
                    <div className="font-mono font-bold text-amber-700">{r.next}</div>
                    <div className="text-xs text-slate-500">{r.change}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mb-5">※ 税率は1キロリットル当たりの額。正確な値は国税庁「酒税法」でご確認ください。</p>

        {/* Beer reform timeline */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="text-sm font-bold text-slate-600 mb-4">図：ビール類税率統一のロードマップ</div>
          <div className="flex flex-col md:flex-row gap-2 items-stretch">
            {[
              { year: '2020年10月', label: '第1段階', desc: 'ビール引下げ・新ジャンル引上げ開始', color: 'bg-blue-100 border-blue-300' },
              { year: '2023年10月', label: '第2段階', desc: 'さらに段階的に税率変更', color: 'bg-indigo-100 border-indigo-300' },
              { year: '2026年10月', label: '第3段階（最終）', desc: 'ビール・発泡酒・新ジャンル 統一税率へ', color: 'bg-amber-100 border-amber-300 font-bold' },
            ].map((step, i) => (
              <div key={i} className={`flex-1 rounded-lg p-4 border ${step.color}`}>
                <div className="text-xs text-slate-500 mb-1">{step.year}</div>
                <div className="font-bold text-slate-800 text-sm mb-2">{step.label}</div>
                <div className="text-xs text-slate-600">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="醸造酒類の税率">
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">種類</th>
                <th className="text-left px-4 py-3">主な例</th>
                <th className="text-right px-4 py-3 rounded-tr-lg">税率（2026年6月時点）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '清酒', ex: '日本酒', rate: '110,000円/kl' },
                { type: '果実酒', ex: 'ワイン、梅酒（果実のみ）', rate: '90,000円/kl' },
                { type: 'その他の醸造酒', ex: '濁酒など', rate: '種類により異なる' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200">{r.type}</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{r.ex}</td>
                  <td className="px-4 py-3 text-right border-b border-slate-200 font-mono">{r.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">※ 清酒・果実酒は2023年10月に税率が統一されました。</p>
      </Section>

      <Section title="蒸留酒類・混成酒類の税率">
        <p className="text-slate-700 leading-relaxed mb-5">
          蒸留酒類・混成酒類の一部は、アルコール度数に応じた税率が適用されます。度数が高いほど税率が高くなる仕組みです。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">種類</th>
                <th className="text-left px-4 py-3">主な例</th>
                <th className="text-right px-4 py-3 rounded-tr-lg">税率の考え方</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '単式蒸留焼酎', ex: '本格焼酎（芋・麦・米など）', rate: '100,000円/kl（25度換算）' },
                { type: '連続式蒸留焼酎', ex: '甲類焼酎', rate: '200,000円/kl' },
                { type: 'ウイスキー', ex: 'スコッチ・バーボン・国産ウイスキー', rate: 'アルコール度数に応じた税率' },
                { type: 'ブランデー', ex: 'コニャック・国産ブランデー', rate: 'アルコール度数に応じた税率' },
                { type: 'リキュール', ex: '梅酒（糖類添加）・カクテルベース', rate: '100,000円/kl程度（度数による）' },
                { type: 'みりん', ex: '本みりん', rate: '20,000円/kl' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200 whitespace-nowrap">{r.type}</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{r.ex}</td>
                  <td className="px-4 py-3 text-right border-b border-slate-200 font-mono text-xs">{r.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">※ 上記は参考値です。正確な税率・計算方法は国税庁「酒税法（別表）」をご参照ください。</p>
      </Section>

      <Section title="小売店・飲食店が知っておくべきポイント">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: '税率は仕入価格に反映されている', body: '小売店・飲食店が仕入れる酒類の価格にはすでに酒税が含まれています。税率が上がれば仕入コストへの影響が生じます。' },
            { title: '2026年10月の改正に注意', body: '2026年10月にビール類の税率が統一されます。ビールは値下がり、新ジャンルは値上がりが見込まれるため、仕入構成の見直しが必要になる場合があります。' },
            { title: '種類ごとの税率差を理解する', body: '同じ「お酒」でも種類によって税率が大きく異なります。リキュールと焼酎では税率が違うため、商品構成を考える際の参考になります。' },
            { title: '税率≠販売価格', body: '酒税は原価の一部です。最終的な販売価格は酒税＋製造コスト＋流通マージン＋消費税で構成されます。' },
          ].map((item, idx) => (
            <div key={idx} className="bg-navy-50 border border-navy-100 rounded-lg p-4">
              <div className="font-bold text-navy-800 mb-2 text-sm">{item.title}</div>
              <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
