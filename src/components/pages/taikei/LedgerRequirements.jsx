import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function LedgerRequirements() {
  return (
    <ContentLayout
      section="taikei"
      title="帳簿保存要件の概要"
      description="酒税法が定める帳簿の作成義務・保存期間・保存方法の要件を整理します。小売店・飲食店が最低限知っておくべき内容に絞って解説します。"
      breadcrumb={[{ label: '体系編', href: '/taikei/tax-types' }, { label: '帳簿保存要件の概要' }]}
    >
      <Section title="帳簿作成義務の対象者">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒税法第46条により、酒類の製造者および販売業者（酒類販売業免許を取得した事業者）は、酒類の仕入・販売等を記録した帳簿を作成・保存する義務があります。
        </p>
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">事業者の種類</th>
                <th className="text-center px-4 py-3">帳簿義務</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">主な記録内容</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '酒類製造者', duty: true, content: '製造量・移出量・在庫量・申告税額など' },
                { type: '酒類小売業者（免許あり）', duty: true, content: '仕入日・仕入先・品目・数量・価格、販売日・販売先・品目・数量・価格' },
                { type: '酒類卸売業者（免許あり）', duty: true, content: '仕入・販売の詳細記録（取引量が多いため詳細な記録が必要）' },
                { type: '飲食店（店内提供のみ・免許なし）', duty: false, content: '酒税法上の帳簿義務なし（会計上の仕入記録は別途必要）' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    {r.duty ? <span className="text-green-600 font-bold">あり</span> : <span className="text-slate-400">なし</span>}
                  </td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600 text-xs">{r.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="帳簿の保存期間・保存方法">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-navy-50 border border-navy-200 rounded-xl p-5">
            <div className="font-bold text-navy-800 mb-3">保存期間：5年間（酒税法）</div>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              酒税法施行規則は、酒類受払帳を「帳簿閉鎖後5年間」保存することを義務付けています。
            </p>
            <div className="bg-white rounded-lg p-3 text-xs text-slate-600 border border-navy-100 mb-2">
              例：2024年に閉鎖した帳簿 → 帳簿閉鎖日の翌日から5年間（2029年まで）保存
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 text-xs text-yellow-800 border border-yellow-200">
              ⚠️ 法人税法・所得税法上の一般的な帳簿書類の保存期間は5年間です。実務上は酒類受払帳も含めて5年間保存する事業者も多くいます。
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-3">保存方法</div>
            <div className="space-y-2 text-sm">
              {[
                { method: '紙（手書き・印刷）', ok: true, note: '法定の記載事項が揃っていれば形式は問わない' },
                { method: 'PC・スプレッドシート', ok: true, note: '出力して保存、または電子保存（要件あり）' },
                { method: '電子帳簿（クラウド含む）', ok: true, note: '電子帳簿保存法の要件を満たすこと' },
                { method: '紙のみのスキャン保存', ok: true, note: 'スキャナ保存の要件（解像度・タイムスタンプ等）が必要' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`font-bold text-xs mt-0.5 ${item.ok ? 'text-green-600' : 'text-red-600'}`}>{item.ok ? '○' : '✗'}</span>
                  <div>
                    <span className="font-medium">{item.method}</span>
                    <span className="text-slate-500 text-xs ml-1">— {item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="保存が必要な帳簿・書類の種類">
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">書類の種類</th>
                <th className="text-left px-4 py-3">内容・例</th>
                <th className="text-center px-4 py-3 rounded-tr-lg">保存期間</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '仕入帳（酒類元帳）', ex: '仕入日・仕入先・品目・数量・金額の記録', period: '5年' },
                { type: '販売帳', ex: '販売日・販売先（業者への販売の場合）・品目・数量・金額', period: '5年' },
                { type: '在庫管理表・棚卸記録', ex: '期末時点の在庫数量・品目ごとの残高', period: '5年' },
                { type: '仕入に関する証憑', ex: '納品書・請求書・領収書', period: '5年' },
                { type: '販売に関する証憑', ex: '販売先への請求書・納品書（業者間取引の場合）', period: '5年' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-semibold text-navy-800 border-b border-slate-200">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{r.ex}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center font-bold text-navy-700">{r.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="違反した場合のペナルティ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: '帳簿の未記載・虚偽記載', penalty: '過怠税（本来の酒税額の3倍相当）が課される', color: 'bg-red-50 border-red-200 text-red-800' },
            { title: '帳簿の保存義務違反', penalty: '1年以下の懲役または20万円以下の罰金', color: 'bg-orange-50 border-orange-200 text-orange-800' },
            { title: '検査拒否・虚偽陳述', penalty: '税務調査での不適切な対応に対して罰則あり', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl p-4 border ${item.color.split(' ').slice(0, 2).join(' ')}`}>
              <div className={`font-bold text-sm mb-2 ${item.color.split(' ')[2]}`}>{item.title}</div>
              <p className="text-sm text-slate-700">{item.penalty}</p>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
