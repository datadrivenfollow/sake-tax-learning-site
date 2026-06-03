import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function Audit() {
  return (
    <ContentLayout
      section="chobo"
      title="帳簿監査への対応"
      description="税務調査（帳簿監査）が来た際に慌てないための準備と対応の流れを解説します。日頃から正しく帳簿管理していれば、調査は怖くありません。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/what-is-ledger' }, { label: '帳簿監査への対応' }]}
    >
      <Section title="酒類業者への税務調査とは">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒類業者に対する税務調査は、国税庁（税務署）が酒税の申告内容・帳簿記録の適正性を確認するために行うものです。製造者への調査は定期的に行われますが、小売業者・飲食業者への調査は主に申告漏れや不正が疑われる場合や、免許審査に関連して行われます。
        </p>
        <div className="bg-navy-50 border-l-4 border-navy-700 rounded-r-lg p-5 text-sm text-slate-700 mb-5">
          <strong className="text-navy-800">重要：</strong> 帳簿が正しく整備されていれば、税務調査は「記録の確認作業」に過ぎません。過剰に恐れる必要はありませんが、事前準備が不可欠です。
        </div>
      </Section>

      <Section title="調査の流れ">
        <div className="space-y-3 mb-5">
          {[
            { step: 1, title: '事前通知', desc: '原則として調査日時・対象期間・調査内容について事前に連絡があります（任意調査の場合）。緊急調査・無予告調査の場合もまれにあります。', color: 'bg-blue-600' },
            { step: 2, title: '調査当日：帳簿・書類の提示', desc: '調査官が来訪し、帳簿（仕入帳・販売帳・棚卸表）と関連書類（納品書・請求書・領収書）の提示を求めます。', color: 'bg-indigo-600' },
            { step: 3, title: '調査官による確認作業', desc: '帳簿の記録内容と書類を照合し、記載漏れ・虚偽記載・在庫の整合性を確認します。疑問点については口頭で質問が行われます。', color: 'bg-navy-600' },
            { step: 4, title: '調査結果の通知', desc: '調査が終了すると、問題なし（適正）または指摘事項ありの通知があります。指摘がある場合は修正申告・更正処分の手続きに進みます。', color: 'bg-teal-600' },
            { step: 5, title: '是正・対応（必要な場合）', desc: '指摘を受けた場合は、修正申告書の提出・追加納税・再発防止策の実施が必要になります。', color: 'bg-slate-600' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-slate-200 rounded-lg p-4">
              <div className={`${item.color} text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>{item.step}</div>
              <div>
                <div className="font-bold text-slate-900 mb-1 text-sm">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="調査で確認される主な書類">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">書類の種類</th>
                <th className="text-left px-4 py-3">確認ポイント</th>
                <th className="text-center px-4 py-3 rounded-tr-lg">準備の優先度</th>
              </tr>
            </thead>
            <tbody>
              {[
                { doc: '仕入帳（酒類元帳）', check: '仕入日・仕入先・品目・数量・金額の記載漏れがないか', priority: '高' },
                { doc: '販売帳', check: '販売日・品目・数量の記録、業者への販売は相手先も記載', priority: '高' },
                { doc: '棚卸表', check: '期末在庫の品目・数量・帳簿残高との一致', priority: '高' },
                { doc: '仕入に関する納品書・請求書', check: '帳簿記録と内容が一致しているか', priority: '高' },
                { doc: '領収書・振込明細', check: '支払いの証拠として帳簿と照合', priority: '中' },
                { doc: '免許証', check: '有効期限・許可範囲の確認', priority: '中' },
                { doc: '取引先との契約書（あれば）', check: '継続取引の条件確認', priority: '低' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800">{r.doc}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{r.check}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${r.priority === '高' ? 'bg-red-100 text-red-700' : r.priority === '中' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`}>{r.priority}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="調査前の準備チェックリスト">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
            <div className="font-bold text-navy-800 mb-4">書類の整備</div>
            <div className="space-y-2">
              {[
                '過去5年分の仕入帳が揃っている',
                '仕入伝票・納品書が月別にファイリングされている',
                '棚卸表が各期末に作成・保管されている',
                '電子帳簿の場合は出力・表示できる状態にある',
                '免許証（現物）がすぐ取り出せる場所にある',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 border-2 border-navy-400 rounded flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-4">調査当日の対応</div>
            <div className="space-y-2">
              {[
                '身分証明（税務署職員の身分証）を確認する',
                '調査範囲・対象期間を確認する',
                '聞かれたことに正確に答える（推測で答えない）',
                'わからないことは「確認します」と答え、確認後に回答',
                '調査結果の書面受領時に内容を確認する',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 border-2 border-slate-400 rounded flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="指摘を受けた場合の対応">
        <div className="space-y-3">
          {[
            { title: '修正申告', body: '申告内容に誤りがあった場合、修正申告書を提出します。自主的に修正申告した場合は、加算税が軽減される場合があります。' },
            { title: '追加納税', body: '修正申告・更正処分により税額が増える場合は、不足分と延滞税を納付します。' },
            { title: '帳簿の是正', body: '帳簿の記載方法に問題がある場合、今後の記録方法を是正する指導を受けます。指摘内容を踏まえて帳簿の整備方法を見直しましょう。' },
            { title: '不服申立て', body: '調査結果に不服がある場合は、更正処分の通知を受けた日から90日以内に不服申立て（異議申立て）ができます。' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 flex gap-3">
              <div className="w-6 h-6 bg-navy-700 text-white rounded text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          <strong>税理士への相談を検討する場面：</strong> 税務調査の事前通知を受けた場合、多額の追加課税が見込まれる場合、不服申立てを検討する場合は、税理士に相談することを推奨します。
        </div>
      </Section>
    </ContentLayout>
  );
}
