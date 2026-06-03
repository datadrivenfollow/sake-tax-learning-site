import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function Penalties() {
  return (
    <ContentLayout
      section="taikei"
      title="罰則と対応ケース"
      description="酒税法違反に対する罰則を刑事罰・行政処分・附帯税に分けて整理し、違反を未然に防ぐための対応策を具体的に解説します。"
      breadcrumb={[{ label: '体系編', href: '/taikei/tax-types' }, { label: '罰則と対応ケース' }]}
    >
      <Section title="罰則の3つの種類">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒税法の罰則は、①刑事罰（懲役・罰金）、②行政処分（免許取消・業務停止）、③附帯税（加算税・過怠税・延滞税）の3種類に大別されます。悪質な違反では複数が同時に適用される場合があります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { type: '刑事罰', icon: '⚖️', desc: '懲役または罰金。悪質な脱税・無免許営業などに適用。刑事訴追されるため記録が残る。', color: 'bg-red-50 border-red-300' },
            { type: '行政処分', icon: '🚫', desc: '免許の取消や業務停止命令。事業継続に直結するため実質的なダメージが大きい。', color: 'bg-orange-50 border-orange-300' },
            { type: '附帯税', icon: '💸', desc: '申告漏れ・納付遅延に対して課される追加の税金。本税に上乗せして徴収される。', color: 'bg-yellow-50 border-yellow-300' },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl p-5 border ${item.color}`}>
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-bold text-slate-900 mb-2">{item.type}</div>
              <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="主な違反行為と罰則一覧">
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-red-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">違反行為</th>
                <th className="text-left px-4 py-3">種別</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">主な罰則・内容</th>
              </tr>
            </thead>
            <tbody>
              {[
                { act: '無免許での酒類販売', type: '刑事罰', penalty: '1年以下の懲役または50万円以下の罰金', level: 'high' },
                { act: '無免許での酒類製造', type: '刑事罰', penalty: '5年以下の懲役または100万円以下の罰金', level: 'high' },
                { act: '酒税逋脱（故意の脱税）', type: '刑事罰', penalty: '10年以下の懲役または1,000万円以下の罰金（加重規定あり）', level: 'critical' },
                { act: '免許条件違反', type: '行政処分', penalty: '免許の取消または業務停止', level: 'high' },
                { act: '無申告（申告期限内に申告なし）', type: '附帯税', penalty: '無申告加算税：本税の15〜20%＋延滞税', level: 'medium' },
                { act: '過少申告（申告額が実際より少ない）', type: '附帯税', penalty: '過少申告加算税：本税の10%＋延滞税', level: 'medium' },
                { act: '帳簿の未記載・虚偽記載', type: '附帯税', penalty: '過怠税：本来の酒税額の3倍相当', level: 'medium' },
                { act: '帳簿の保存義務違反', type: '刑事罰', penalty: '1年以下の懲役または20万円以下の罰金', level: 'medium' },
                { act: '未成年者への酒類販売・提供', type: '刑事罰', penalty: '50万円以下の罰金（未成年者飲酒禁止法）', level: 'high' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50/30'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium">{r.act}</td>
                  <td className="px-4 py-3 border-b border-slate-200">
                    <span className={`text-xs font-bold px-2 py-1 rounded whitespace-nowrap ${
                      r.type === '刑事罰' ? 'bg-red-100 text-red-700' :
                      r.type === '行政処分' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>{r.type}</span>
                  </td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{r.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">※ 上記は2026年6月時点の参考情報です。正確な条文・最新の罰則額は国税庁資料または税理士にご確認ください。</p>
      </Section>

      <Section title="違反ケース別の対応例">
        <div className="space-y-5">
          {[
            {
              title: 'ケース1：免許取得前に酒類販売を開始してしまった',
              situation: '小売業免許の申請中に「少しくらい大丈夫」と販売を始めたケース。',
              risk: '無免許販売として酒税法違反。1年以下の懲役または50万円以下の罰金の対象に。免許申請中であることは免責事由にならない。',
              action: '即座に販売を停止し、税務署に自主申告。その後の免許申請に不利に働く可能性があるため、開業前に必ず免許を取得する。',
              color: 'border-red-300 bg-red-50',
            },
            {
              title: 'ケース2：帳簿の記載を数年間怠っていた',
              situation: '「誰にも見せるわけじゃないから」と仕入・販売を記録せずに営業を続けたケース。',
              risk: '酒税法上の帳簿記載義務違反。過怠税（本来の酒税額の3倍）が課される可能性。税務調査では推計課税が行われる場合もある。',
              action: 'できる限り過去の取引を再構成して記録を整備し、早期に適正化を図る。今後は帳簿管理を徹底する。',
              color: 'border-orange-300 bg-orange-50',
            },
            {
              title: 'ケース3：テイクアウト販売を免許なしで開始した',
              situation: '「瓶ビールを持ち帰り用に売るくらい大丈夫」と免許申請なしに販売したケース。',
              risk: '飲食店での店内提供は免許不要だが、未開封ボトルの販売は小売業免許が必要。無免許販売として罰則対象に。',
              action: '販売を停止し、小売業免許を申請する。取得後に適法に販売を再開する。',
              color: 'border-yellow-300 bg-yellow-50',
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl p-5 border ${item.color}`}>
              <div className="font-bold text-slate-900 mb-4">{item.title}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-xs font-bold text-slate-500 mb-1">状況</div>
                  <p className="text-slate-700">{item.situation}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-red-600 mb-1">リスク</div>
                  <p className="text-slate-700">{item.risk}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-green-600 mb-1">対応策</div>
                  <p className="text-slate-700">{item.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="違反を防ぐためのチェックリスト">
        <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              '販売業免許を取得してから営業を開始している',
              '免許の範囲内の酒類のみを販売している（通信販売の場合は別途免許あり）',
              '仕入・販売の記録を帳簿に記載している',
              '帳簿・仕入書類を5年間保存している',
              '年齢確認を販売・提供のたびに実施している',
              '未成年者への酒類提供を行っていない',
              '販売場所が免許証に記載された場所と一致している',
              '深夜0時以降に酒類提供を行う場合、風営法の届出を行っている',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-5 h-5 border-2 border-navy-400 rounded flex-shrink-0 mt-0.5"></div>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </ContentLayout>
  );
}
