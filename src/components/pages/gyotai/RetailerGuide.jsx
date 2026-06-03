import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function RetailerGuide() {
  return (
    <ContentLayout
      section="gyotai"
      title="酒小売店向けガイド"
      description="酒類小売業を営む事業者が知っておくべき免許・帳簿・申告の義務を、実務的な視点でまとめたガイドです。"
      breadcrumb={[{ label: '業態別編', href: '/gyotai/retailer' }, { label: '酒小売店向けガイド' }]}
    >
      <Section title="酒小売店に適用される酒税関連の義務">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒類小売業者（酒屋・スーパー・コンビニ・量販店など）は、酒税の直接の納税者ではありませんが、酒税法に基づく以下の義務が課されます。
        </p>
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">義務の種類</th>
                <th className="text-left px-4 py-3">内容</th>
                <th className="text-center px-4 py-3 rounded-tr-lg">必須</th>
              </tr>
            </thead>
            <tbody>
              {[
                { duty: '一般酒類小売業免許の取得', content: '店舗での販売前に税務署から免許を取得。申請から取得まで約2ヶ月。', required: true },
                { duty: '通信販売酒類小売業免許（EC販売の場合）', content: '複数都道府県への通信販売には別途免許が必要。', required: true },
                { duty: '仕入・販売の帳簿記載', content: '仕入・販売の品目・数量・金額等を帳簿に記載。', required: true },
                { duty: '帳簿の5年間保存', content: '帳簿と関連書類（仕入伝票等）を5年間保管。', required: true },
                { duty: '年齢確認の実施', content: '酒類販売時は購入者の年齢確認を実施。', required: true },
                { duty: '販売場の管理', content: '免許証に記載された販売場での販売を遵守。', required: true },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800">{r.duty}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.content}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    {r.required ? <span className="text-red-600 font-bold text-xs bg-red-50 px-2 py-1 rounded">必須</span> : <span className="text-slate-400 text-xs">条件による</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="免許申請から開業までのフロー">
        <div className="space-y-3 mb-5">
          {[
            { step: 1, title: '事前相談（所轄税務署）', desc: '申請前に税務署の酒類指導官に相談する。必要書類・審査基準・販売場の要件を確認。', days: '開業予定日の3〜4ヶ月前' },
            { step: 2, title: '申請書類の準備', desc: '申請書・販売場の図面・事業計画書・法人登記・履歴書等を準備。必要書類は税務署によって異なる場合がある。', days: '〜2ヶ月前' },
            { step: 3, title: '免許申請書の提出', desc: '所轄税務署に申請書一式を提出。申請手数料は不要だが、事前審査に時間がかかる。', days: '〜2ヶ月前' },
            { step: 4, title: '審査期間', desc: '申請受理から免許交付まで約2ヶ月（申請内容に不備がない場合）。審査中に追加書類の提出を求められる場合がある。', days: '約2ヶ月' },
            { step: 5, title: '免許交付・開業', desc: '免許証を受け取り、酒類の販売が可能になる。免許を受ける前の販売は厳禁。', days: '免許取得後' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-slate-200 rounded-lg p-4">
              <div className="bg-navy-700 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{item.step}</div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-1 mb-1">
                  <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                  <span className="text-xs bg-navy-50 text-navy-600 px-2 py-0.5 rounded md:ml-auto">{item.days}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="仕入管理と帳簿の実務">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border border-navy-200 rounded-xl p-5">
            <div className="font-bold text-navy-800 mb-3">仕入時の帳簿記載</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="text-navy-600">•</span>仕入が届いた日に仕入帳に記載（当日または翌営業日）</li>
              <li className="flex items-start gap-2"><span className="text-navy-600">•</span>品目は「ビール」「清酒」など酒税法の区分で記載</li>
              <li className="flex items-start gap-2"><span className="text-navy-600">•</span>仕入先の正式名称と住所を記載（省略不可）</li>
              <li className="flex items-start gap-2"><span className="text-navy-600">•</span>納品書・請求書は5年間保存</li>
            </ul>
          </div>
          <div className="bg-white border border-blue-200 rounded-xl p-5">
            <div className="font-bold text-blue-800 mb-3">販売時の帳簿記載</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="text-blue-600">•</span>一般消費者への小売は、日次で品目・数量・金額を集計記録</li>
              <li className="flex items-start gap-2"><span className="text-blue-600">•</span>飲食店など業者への販売は販売先の名称・住所も記録</li>
              <li className="flex items-start gap-2"><span className="text-blue-600">•</span>レジのPOSデータを活用して転記すると効率的</li>
              <li className="flex items-start gap-2"><span className="text-blue-600">•</span>返品が発生した場合は「返品」として理由とともに記録</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="在庫把握と棚卸のポイント">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">作業</th>
                <th className="text-left px-4 py-3">頻度</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">目的・ポイント</th>
              </tr>
            </thead>
            <tbody>
              {[
                { task: '在庫残高の更新', freq: '仕入・販売のつど', point: '帳簿の在庫残高を常に最新の状態に保つ' },
                { task: '帳簿と実在庫の照合', freq: '月1回以上', point: '差異があれば早期に原因を特定し記録する' },
                { task: '期末棚卸', freq: '年1回（期末）', point: '全品目を数え、棚卸表を作成して5年保存' },
                { task: '季節変動の確認', freq: '四半期ごと', point: '繁忙期（夏・年末）前後の在庫変動を帳簿で確認' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800">{r.task}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{r.freq}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.point}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="実装フロー：準備から継続運用まで">
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              { phase: '準備', items: ['免許申請', '帳簿様式の決定', '仕入先マスター作成'] },
              { phase: '開業〜日常', items: ['仕入・販売の都度記録', '週1回残高確認', '伝票のファイリング'] },
              { phase: '月次', items: ['在庫照合', '書類整理', 'バックアップ'] },
              { phase: '年次', items: ['期末棚卸', '帳簿閉鎖・保存', '改正確認'] },
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
