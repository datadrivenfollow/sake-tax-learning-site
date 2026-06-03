import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function RestaurantGuide() {
  return (
    <ContentLayout
      section="gyotai"
      title="飲食店向けガイド"
      description="居酒屋・レストラン・バーなど飲食店が酒税法上で知っておくべき義務と、テイクアウト販売を追加する際の手続きを実務的に解説します。"
      breadcrumb={[{ label: '業態別編', href: '/gyotai/retailer' }, { label: '飲食店向けガイド' }]}
    >
      <Section title="飲食店に適用される酒税関連の義務">
        <p className="text-slate-700 leading-relaxed mb-5">
          飲食店（居酒屋・レストラン・バー等）は、店内でお酒を提供する行為（飲食提供）については酒類販売業免許が不要です。ただし、業態によって適用される義務が異なります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border-2 border-green-400 rounded-xl p-5">
            <div className="font-bold text-green-700 mb-4">店内提供のみの飲食店</div>
            <div className="space-y-3">
              {[
                { duty: '酒類販売業免許', required: false, note: '不要（店内で飲ませる行為は販売ではない）' },
                { duty: '帳簿記載義務（酒税法）', required: false, note: '不要（仕入記録は会計上別途管理）' },
                { duty: '未成年者への提供禁止', required: true, note: '必須（未成年者飲酒禁止法）' },
                { duty: '年齢確認の実施', required: true, note: '必須（特に深夜・外見が若い場合）' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className={`font-bold text-xs mt-0.5 px-2 py-0.5 rounded ${r.required ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-500'}`}>{r.required ? '必須' : '不要'}</span>
                  <div>
                    <span className="font-medium text-slate-800">{r.duty}</span>
                    <div className="text-slate-500 text-xs">{r.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border-2 border-navy-400 rounded-xl p-5">
            <div className="font-bold text-navy-700 mb-4">テイクアウト販売も行う飲食店</div>
            <div className="space-y-3">
              {[
                { duty: '一般酒類小売業免許', required: true, note: '必須（未開封ボトル等の販売）' },
                { duty: '帳簿記載義務（酒税法）', required: true, note: '必須（仕入・販売を記録）' },
                { duty: '帳簿の5年間保存', required: true, note: '必須（帳簿・仕入伝票）' },
                { duty: '未成年者への販売禁止', required: true, note: '必須' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="font-bold text-xs mt-0.5 px-2 py-0.5 rounded bg-red-100 text-red-700">必須</span>
                  <div>
                    <span className="font-medium text-slate-800">{r.duty}</span>
                    <div className="text-slate-500 text-xs">{r.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="申告義務の有無判定">
        <div className="space-y-3 mb-5">
          {[
            { q: '居酒屋でビールやワインをグラスで提供している', a: '酒税の申告義務なし。酒類販売業免許も不要。', ok: true },
            { q: 'ボトルキープの仕組みで瓶のウイスキーを販売（保管）している', a: '「保管」ではなく「販売」とみなされる場合がある。形態によっては小売業免許が必要か確認を。', ok: null },
            { q: 'テイクアウト用に缶ビールを販売している', a: '小売業免許が必要。帳簿記載義務も発生する。', ok: false },
            { q: '仕入れたワインを料理用・試飲用として使い、残りを廃棄した', a: '飲食提供・業務使用の範囲であれば申告不要。廃棄は帳簿義務がある場合のみ記録。', ok: true },
          ].map((item, i) => (
            <div key={i} className={`rounded-lg p-4 border ${item.ok === true ? 'bg-green-50 border-green-200' : item.ok === false ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'}`}>
              <div className="font-medium text-slate-800 mb-1 text-sm">Q: {item.q}</div>
              <div className={`text-sm font-bold ${item.ok === true ? 'text-green-700' : item.ok === false ? 'text-red-700' : 'text-yellow-700'}`}>
                A: {item.a}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500">※ 個別の判断については所轄税務署または税理士にご相談ください。</p>
      </Section>

      <Section title="テイクアウト販売を始める場合の手続き">
        <div className="space-y-3 mb-5">
          {[
            { step: 1, title: '販売する商品・規模を整理', desc: '何を（品目・規格）、どのくらいの量・頻度で販売するか整理する。' },
            { step: 2, title: '所轄税務署に事前相談', desc: '税務署の酒類指導官に相談し、必要な免許の種類・申請書類を確認する。' },
            { step: 3, title: '一般酒類小売業免許を申請', desc: '申請書類一式を準備し、税務署に提出。審査期間は約2ヶ月。' },
            { step: 4, title: '帳簿の整備', desc: '免許取得後すぐに帳簿を作成できるよう、様式・管理ルールを事前に決めておく。' },
            { step: 5, title: '免許取得後に販売開始', desc: '免許証を受け取ってから販売を開始する。免許前の販売は法律違反。' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-slate-200 rounded-lg p-4">
              <div className="bg-navy-700 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="飲食店の帳簿管理（小売業免許取得後）">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">記録の種類</th>
                <th className="text-left px-4 py-3">内容</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">備考</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '仕入記録', content: '仕入日・仕入先・品目・規格・数量・金額', note: '店内提供用とテイクアウト販売用を分けて管理するとわかりやすい' },
                { type: 'テイクアウト販売記録', content: '販売日・品目・規格・数量（日次集計可）', note: '一般消費者への販売は販売先の個別記録不要' },
                { type: '廃棄記録', content: '廃棄日・品目・数量・廃棄理由', note: '品質劣化・開封ミスなどの廃棄は都度記録' },
                { type: '在庫残高', content: '品目・規格別の在庫数（仕入−販売−廃棄）', note: '月1回以上実在庫と照合すること' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.content}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-500 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="深夜営業・風営法の注意点">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
          <div className="font-bold text-yellow-800 mb-3">深夜0時〜翌6時にお酒を提供する場合</div>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            深夜帯に酒類を伴う飲食サービスを提供する場合、酒税法ではなく「風俗営業等の規制及び業務の適正化等に関する法律（風営法）」に基づき、<strong>深夜酒類提供飲食店営業</strong>の届出が必要です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 border border-yellow-100">
              <div className="font-bold text-slate-800 mb-1">届出先</div>
              <p className="text-slate-700">営業所所在地を管轄する警察署（生活安全課）</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-100">
              <div className="font-bold text-slate-800 mb-1">届出のタイミング</div>
              <p className="text-slate-700">深夜営業開始の10日前までに届出</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="実装フロー：飲食店の酒類管理">
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              { phase: '開業前', items: ['業態の整理（店内のみ/テイクアウトあり）', '必要に応じて小売業免許申請', '帳簿様式の準備'] },
              { phase: '仕入時', items: ['仕入帳に記録', '納品書の保存', '在庫残高の更新'] },
              { phase: '廃棄時', items: ['廃棄記録（品目・数量・理由）', '在庫残高から減算'] },
              { phase: '月次', items: ['在庫照合', '書類整理', '深夜営業の届出状況確認'] },
            ].map((col, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="font-bold text-navy-800 mb-3 text-sm text-center">{col.phase}</div>
                <ul className="space-y-1">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-xs text-slate-700 flex items-start gap-1">
                      <span className="text-navy-500">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </ContentLayout>
  );
}
