import React from 'react';
import ContentLayout from '../../layout/ContentLayout';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function WhySakeTax() {
  return (
    <ContentLayout
      title="なぜ酒税法が大切か"
      description="「知らなかった」では済まされない酒税法の義務。違反リスク・罰則の具体例と、正しい知識を持つことのメリットを解説します。"
      breadcrumb={[
        { label: '基礎編', href: '/kiso/sake-tax' },
        { label: 'なぜ酒税法が大切か' },
      ]}
    >

      <Section title="酒税法は「知らなかった」では免責されない">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒税法は、酒類の製造・販売に関わる事業者に対して、免許の取得・帳簿の記載・申告などの義務を課しています。これらの義務は「義務の存在を知らなかった」ことを理由に免除されることはなく、違反した場合は刑事罰・行政処分・附帯税が課されます。
        </p>
        <p className="text-slate-700 leading-relaxed mb-5">
          特に酒類販売業は参入しやすいビジネスに見える一方、見落とされがちな義務が多く、開業後に問題が発覚するケースがあります。事前に正しい知識を身につけることが、安全な事業運営の第一歩です。
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="font-bold text-red-800">よくある落とし穴</span>
          </div>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>• 小売業免許を取得せずに「少量だから大丈夫」とテイクアウト販売を始めてしまう</li>
            <li>• 通信販売に別途免許が必要だと知らずにECサイトで販売してしまう</li>
            <li>• 帳簿の作成義務を知らないまま数年間、記録を付けていない</li>
            <li>• 帳簿は付けているが保存期間（5年）を知らずに古い帳簿を廃棄してしまう</li>
          </ul>
        </div>
      </Section>

      <Section title="主な義務違反と罰則">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒税法に違反した場合に科される主な罰則を以下の表に整理します。刑事罰（懲役・罰金）のほか、税務上の附帯税（加算税・延滞税・過怠税）も重要です。
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-red-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">違反行為</th>
                <th className="text-left px-4 py-3">種別</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">主な罰則</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  act: '無免許での酒類販売',
                  type: '刑事罰',
                  penalty: '1年以下の懲役または50万円以下の罰金',
                },
                {
                  act: '無免許での酒類製造',
                  type: '刑事罰',
                  penalty: '5年以下の懲役または100万円以下の罰金（酒税逋脱罪が成立する場合はさらに重い）',
                },
                {
                  act: '申告義務違反（無申告）',
                  type: '附帯税',
                  penalty: '無申告加算税（本税の15〜20%）＋延滞税',
                },
                {
                  act: '申告内容の虚偽・過少',
                  type: '附帯税',
                  penalty: '過少申告加算税（本税の10%）＋延滞税',
                },
                {
                  act: '帳簿の未記載・虚偽記載',
                  type: '行政処分',
                  penalty: '過怠税（本来の酒税額の3倍相当）',
                },
                {
                  act: '帳簿の保存義務違反',
                  type: '刑事罰',
                  penalty: '1年以下の懲役または20万円以下の罰金',
                },
                {
                  act: '免許条件違反',
                  type: '行政処分',
                  penalty: '免許の取消または業務停止',
                },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
                  <td className="px-4 py-3 font-semibold text-slate-900 border-b border-slate-200">{row.act}</td>
                  <td className="px-4 py-3 border-b border-slate-200">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      row.type === '刑事罰' ? 'bg-red-100 text-red-700' :
                      row.type === '附帯税' ? 'bg-orange-100 text-orange-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>{row.type}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{row.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          ※ 上記は2026年6月時点の情報を参考にまとめたものです。罰則の詳細・最新情報は酒税法の条文（国税庁ウェブサイト）または税理士にご確認ください。
        </p>
      </Section>

      <Section title="税務調査の実態">
        <p className="text-slate-700 leading-relaxed mb-5">
          国税庁は酒類業者に対して定期的に税務調査を行います。調査では主に以下の点が確認されます。
        </p>

        {/* Audit flow */}
        <div className="bg-slate-50 rounded-xl p-6 mb-6">
          <div className="text-sm font-bold text-slate-500 mb-4 text-center">図：税務調査の主な確認事項</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                step: '1',
                title: '帳簿の整合性',
                items: ['仕入記録と実在庫の一致', '販売記録の漏れの有無', '5年分の帳簿が揃っているか'],
              },
              {
                step: '2',
                title: '書類の保存状況',
                items: ['仕入先からの納品書・請求書', '販売時の領収書・レシート', '棚卸記録・在庫表'],
              },
              {
                step: '3',
                title: '免許・申告の適正',
                items: ['免許の範囲内で販売しているか', '申告内容と実績の一致', '申告期限を守っているか'],
              },
            ].map((col, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-navy-700 text-white text-xs font-bold rounded-full flex items-center justify-center">{col.step}</div>
                  <div className="font-bold text-slate-900 text-sm">{col.title}</div>
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-navy-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-slate-700 leading-relaxed text-sm">
          調査の際に書類が揃っていない・帳簿の記録が不十分な場合、不利益な推計課税（実態が不明なために課税当局が独自に税額を推定する）が行われることがあります。日頃から正確な記録を続けることが、税務調査リスクの軽減につながります。
        </p>
      </Section>

      <Section title="業態別の主な義務一覧">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒小売店と飲食店では、酒税法上の義務が異なります。自分の業態に当てはまる義務を把握しておきましょう。
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">義務の内容</th>
                <th className="text-center px-4 py-3">酒小売店</th>
                <th className="text-center px-4 py-3 rounded-tr-lg">飲食店（店内提供のみ）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { duty: '酒類販売業免許の取得', retailer: true, restaurant: false, note: '飲食提供のみは不要' },
                { duty: '仕入・販売の帳簿記載', retailer: true, restaurant: false, note: '小売業免許保有時のみ必要' },
                { duty: '帳簿の5年間保存', retailer: true, restaurant: false, note: '' },
                { duty: '未成年者への販売禁止', retailer: true, restaurant: true, note: '両業態とも遵守が必要' },
                { duty: '深夜営業の届出（風営法）', retailer: false, restaurant: true, note: '酒税法ではなく風営法の規制' },
                { duty: '年齢確認の実施', retailer: true, restaurant: true, note: '' },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200">{row.duty}
                    {row.note && <span className="block text-xs text-slate-400 mt-0.5">{row.note}</span>}
                  </td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    {row.retailer
                      ? <span className="text-green-600 font-bold">必要</span>
                      : <span className="text-slate-400">—</span>}
                  </td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    {row.restaurant
                      ? <span className="text-green-600 font-bold">必要</span>
                      : <span className="text-slate-400">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="知識を持つことのメリット">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: '罰則・追徴課税を避けられる',
              body: '義務を正しく理解していれば、無免許販売・帳簿不備・申告漏れといったリスクを事前に回避できます。想定外のコスト（加算税・過怠税など）を防げます。',
            },
            {
              title: '税務調査に自信を持って対応できる',
              body: '帳簿が整備されていれば、税務調査が来ても慌てる必要がありません。調査官に対して正確な資料をスムーズに提示できます。',
            },
            {
              title: '免許の取消リスクを減らせる',
              body: '免許の条件を正しく理解し遵守することで、免許取消・業務停止といった事業継続に関わるリスクを低減できます。',
            },
            {
              title: '改正への適切な対応ができる',
              body: '酒税法は定期的に改正されます（2026年10月にも改正予定）。基礎知識があれば、改正内容を正確に理解し、必要な対応を取ることができます。',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 bg-navy-50 border border-navy-100 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-navy-700 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-navy-800 mb-1 text-sm">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

    </ContentLayout>
  );
}
