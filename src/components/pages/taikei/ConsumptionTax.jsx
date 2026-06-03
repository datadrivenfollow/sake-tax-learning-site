import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function ConsumptionTax() {
  return (
    <ContentLayout
      section="taikei"
      title="酒税と消費税の関係"
      description="酒税と消費税はどちらも酒類の価格に含まれています。両者の違い・計算の順序・実務上の注意点を整理します。"
      breadcrumb={[{ label: '体系編', href: '/taikei/tax-types' }, { label: '酒税と消費税の関係' }]}
    >
      <Section title="酒税と消費税の基本的な違い">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">項目</th>
                <th className="text-left px-4 py-3">酒税</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">消費税</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: '税の種類', sake: '個別消費税（特定の商品に課税）', cons: '一般消費税（全ての財・サービスに課税）' },
                { item: '課税対象', sake: '酒類のみ', cons: '酒類を含む全ての商品・サービス' },
                { item: '納税義務者', sake: '酒類製造者（メーカー）', cons: '事業者（最終的な負担者は消費者）' },
                { item: '税率の決め方', sake: '酒類の種類・アルコール度数等で決まる', cons: '一律10%（食料品等は8%の軽減税率）' },
                { item: '酒類への適用', sake: '酒類に特化して課税', cons: '酒税込みの価格にさらに課税（二重課税）' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200 whitespace-nowrap">{r.item}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.sake}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.cons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-navy-50 border-l-4 border-navy-700 rounded-r-lg p-4 text-sm text-slate-700">
          <strong className="text-navy-800">重要：</strong> 酒類は消費税の軽減税率（8%）の対象外です。アルコール飲料は食料品でも消費税率は10%が適用されます。
        </div>
      </Section>

      <Section title="価格に含まれる税の構造">
        <p className="text-slate-700 leading-relaxed mb-5">
          消費者がコンビニやスーパーで酒類を購入する際の価格には、酒税と消費税の両方が含まれています。計算の順序は「酒税が先、消費税が後」です。
        </p>
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-5">
          <div className="text-sm font-bold text-slate-500 mb-4 text-center">図：酒類の価格構造（350ml缶ビールの例）</div>
          <div className="max-w-sm mx-auto space-y-2">
            {[
              { label: '製造・流通コスト', color: 'bg-slate-200', flex: '3' },
              { label: '酒税（約63円/350ml）', color: 'bg-orange-200', flex: '2' },
              { label: '消費税 10%', color: 'bg-red-200', flex: '1' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`${item.color} rounded px-4 py-2 text-sm font-medium text-slate-700 flex-${item.flex} text-center`}>
                  {item.label}
                </div>
              </div>
            ))}
            <div className="border-t-2 border-slate-400 pt-2 text-sm font-bold text-slate-800 text-right">
              = 消費者が支払う税込価格
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-3">消費税は酒税を含んだ価格に対して課税される（税込価格の内訳）</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="font-bold text-slate-700 mb-3 text-sm">計算例：350ml缶ビール（税込220円の場合）</div>
          <div className="space-y-2 text-sm font-mono">
            {[
              { label: '税込販売価格', value: '220円', highlight: true },
              { label: '消費税（税込価格の10/110）', value: '≒ 20円', highlight: false },
              { label: '税抜価格（消費税を除いた額）', value: '≒ 200円', highlight: false },
              { label: 'うち酒税相当額（参考）', value: '≒ 63円', highlight: false },
              { label: '製造・流通コスト等', value: '≒ 137円', highlight: false },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between px-3 py-2 rounded ${row.highlight ? 'bg-navy-100 font-bold' : 'bg-white border border-slate-100'}`}>
                <span className="text-slate-700">{row.label}</span>
                <span className="text-navy-800">{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 上記はあくまでイメージです。実際の内訳はメーカー・商品により異なります。</p>
        </div>
      </Section>

      <Section title="小売店・飲食店の消費税処理">
        <p className="text-slate-700 leading-relaxed mb-5">
          小売店・飲食店が消費税の申告をする際、仕入れた酒類に含まれる消費税は「仕入税額控除」として控除できます。酒税自体は消費税の計算上、仕入価格の一部として扱います。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">処理の内容</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">説明</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: '仕入時の消費税', desc: '仕入価格（酒税込）に対して課される消費税は、仕入税額控除の対象。適格請求書（インボイス）の保存が必要。' },
                { item: '販売時の消費税', desc: '酒類の販売価格に10%の消費税を加算して顧客から受け取る。これが「預かり消費税」として申告対象となる。' },
                { item: '酒税の消費税処理', desc: '酒税は仕入価格の一部として扱う。酒税を消費税の計算から除外する特別な処理は不要。' },
                { item: 'インボイス対応', desc: '2023年10月以降、仕入税額控除には適格請求書（インボイス）が必要。仕入先のインボイス番号を確認する。' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200 whitespace-nowrap">{r.item}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="よくある混同と正しい理解">
        <div className="space-y-3">
          {[
            { q: '「お酒は消費税8%では？」', a: '誤りです。お酒（アルコール飲料）は消費税の軽減税率（8%）の対象外です。ノンアルコール飲料は8%ですが、アルコール分1度以上の飲料は10%です。' },
            { q: '「酒税と消費税を二重に払っている？」', a: '制度上は二重課税ですが、これは法律で認められた課税方式です。酒税は製造者が納付し価格に転嫁、消費税はその価格全体にさらに課税されます。' },
            { q: '「仕入れた酒類の酒税は控除できる？」', a: '酒税そのものは控除できません。ただし消費税の仕入税額控除（仕入価格に含まれる消費税分）は控除の対象です。インボイスの保存が要件です。' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="font-bold text-slate-800 mb-2 text-sm">Q: {item.q}</div>
              <div className="text-sm text-slate-700 leading-relaxed"><span className="text-navy-700 font-bold">A: </span>{item.a}</div>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
