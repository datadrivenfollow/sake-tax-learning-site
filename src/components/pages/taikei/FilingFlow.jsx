import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

const Step = ({ num, title, children, color = 'bg-navy-700' }) => (
  <div className="flex gap-4 mb-6">
    <div className={`${color} text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5`}>{num}</div>
    <div>
      <div className="font-bold text-slate-900 mb-1">{title}</div>
      <div className="text-sm text-slate-700 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function FilingFlow() {
  return (
    <ContentLayout
      section="taikei"
      title="申告義務の判定フロー"
      description="「自分は酒税の申告が必要か？」を判定するためのフローと、酒小売店・飲食店に実際に課される義務を整理します。"
      breadcrumb={[{ label: '体系編', href: '/taikei/tax-types' }, { label: '申告義務の判定フロー' }]}
    >
      <Section title="酒税の申告義務者は誰か">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒税法上の「申告・納付義務者」は、酒類を製造場から移出する<strong>製造者（メーカー）</strong>です。酒小売店や飲食店は、原則として酒税の申告義務を負いません。
        </p>

        {/* Flow diagram */}
        <div className="bg-slate-50 rounded-xl p-6 mb-6 border border-slate-200">
          <div className="text-sm font-bold text-slate-500 mb-6 text-center">図：申告義務の判定フロー</div>
          <div className="max-w-lg mx-auto space-y-3">
            {[
              { q: '酒類を製造していますか？', yes: '→ 申告・納付義務あり', no: '次へ', yesColor: 'text-red-600', isLast: false },
              { q: '未成年者への販売・提供をしていませんか？', yes: null, no: null, isNote: true, note: '業種を問わず遵守が必要な義務' },
              { q: '酒類を販売（小売・卸売）していますか？', yes: '→ 販売業免許の取得・帳簿記載義務あり', no: '次へ', yesColor: 'text-orange-600', isLast: false },
              { q: '飲食提供のみで販売なし？', yes: '→ 免許不要（帳簿義務も基本なし）', no: null, yesColor: 'text-green-600', isLast: true },
            ].map((item, i) => (
              <div key={i}>
                {item.isNote ? (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 text-sm text-yellow-800">
                    ⚠️ <strong>{item.q}</strong><br />
                    <span className="text-slate-600">{item.note}</span>
                  </div>
                ) : (
                  <div className="bg-white border border-slate-200 rounded-lg p-4">
                    <div className="font-semibold text-slate-800 mb-2 text-sm">Q. {item.q}</div>
                    <div className="flex flex-col sm:flex-row gap-2 text-xs">
                      {item.yes && <div className={`${item.yesColor} font-bold`}>YES {item.yes}</div>}
                      {item.no && <div className="text-slate-500">NO → {item.no}</div>}
                    </div>
                  </div>
                )}
                {!item.isLast && <div className="text-center text-slate-400 text-lg">↓ NO の場合</div>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="業態別の申告・義務一覧">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">義務の内容</th>
                <th className="text-center px-4 py-3">製造者</th>
                <th className="text-center px-4 py-3">酒小売店</th>
                <th className="text-center px-4 py-3">飲食店<br />（店内提供のみ）</th>
                <th className="text-center px-4 py-3 rounded-tr-lg">飲食店<br />（テイクアウト販売あり）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { duty: '酒税の申告・納付', maker: true, retailer: false, rest: false, restTake: false },
                { duty: '酒類製造免許', maker: true, retailer: false, rest: false, restTake: false },
                { duty: '酒類販売業免許', maker: false, retailer: true, rest: false, restTake: true },
                { duty: '帳簿の記載・保存（5年）', maker: true, retailer: true, rest: false, restTake: true },
                { duty: '未成年者への販売禁止', maker: true, retailer: true, rest: true, restTake: true },
                { duty: '年齢確認の実施', maker: false, retailer: true, rest: true, restTake: true },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium">{row.duty}</td>
                  {[row.maker, row.retailer, row.rest, row.restTake].map((v, i) => (
                    <td key={i} className="px-4 py-3 border-b border-slate-200 text-center">
                      {v ? <span className="text-green-600 font-bold">必要</span> : <span className="text-slate-300">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="小売店・飲食店が実際に行うべき手続き">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-navy-200 rounded-xl p-5">
            <div className="font-bold text-navy-800 mb-4 pb-2 border-b border-navy-100">酒小売店が行う手続き</div>
            <Step num="1" title="免許申請">所轄税務署に一般酒類小売業免許を申請。申請から取得まで約2ヶ月。</Step>
            <Step num="2" title="帳簿の整備">仕入・販売を記録する帳簿を作成・保管（5年間）。</Step>
            <Step num="3" title="免許条件の確認">販売場所・販売方法が免許の範囲内かを定期的に確認。</Step>
            <Step num="4" title="年齢確認の徹底">酒類販売時には購入者の年齢確認を実施。</Step>
          </div>
          <div className="bg-white border border-blue-200 rounded-xl p-5">
            <div className="font-bold text-blue-800 mb-4 pb-2 border-b border-blue-100">飲食店が行う手続き</div>
            <Step num="1" title="業態を確認" color="bg-blue-700">店内提供のみか、テイクアウト販売も行うかを整理。</Step>
            <Step num="2" title="テイクアウト販売する場合は免許取得" color="bg-blue-700">小売業免許が必要。申請前に販売予定品目を確認。</Step>
            <Step num="3" title="深夜営業は風営法の届出" color="bg-blue-700">深夜0時以降に酒類を提供する場合、警察署への届出が必要（酒税法とは別）。</Step>
            <Step num="4" title="年齢確認の徹底" color="bg-blue-700">未成年者への提供・販売禁止を遵守。</Step>
          </div>
        </div>
      </Section>

      <Section title="よくある誤解">
        <div className="space-y-4">
          {[
            { wrong: '「飲食店だから酒税の申告は不要」', right: '正しい。店内提供のみなら申告義務はない。ただし免許・帳簿義務は業態による。', ok: true },
            { wrong: '「少量だから免許なしで販売しても大丈夫」', right: '誤り。販売量に関わらず、酒類を販売するには免許が必要。', ok: false },
            { wrong: '「酒税は小売店が払う税金」', right: '誤り。酒税の納税義務者は製造者。小売店は商品価格に含まれた酒税を消費者から間接的に回収しているだけ。', ok: false },
            { wrong: '「帳簿は飲食店なら不要」', right: '飲食店が販売業免許も取得している場合は帳簿記載義務あり。店内提供のみなら義務はない。', ok: true },
          ].map((item, i) => (
            <div key={i} className={`rounded-lg p-4 border ${item.ok ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className={`font-bold text-sm mb-1 ${item.ok ? 'text-green-800' : 'text-red-800'}`}>
                {item.ok ? '✓ 正しい理解' : '✗ よくある誤解'}：{item.wrong}
              </div>
              <div className="text-sm text-slate-700">{item.right}</div>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
