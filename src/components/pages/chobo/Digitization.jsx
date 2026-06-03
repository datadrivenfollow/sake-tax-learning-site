import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function Digitization() {
  return (
    <ContentLayout
      section="chobo"
      title="帳簿のデジタル化"
      description="酒類帳簿を電子化する方法・電子帳簿保存法の要件・ツール選定のポイントを解説します。デジタル化のメリットと注意点を整理します。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/what-is-ledger' }, { label: '帳簿のデジタル化' }]}
    >
      <Section title="デジタル化のメリット">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {[
            { icon: '🔍', title: '検索・集計が容易', body: '品目別・期間別の集計、特定取引の検索が瞬時に行える。手書き帳簿では不可能な分析も簡単。' },
            { icon: '📦', title: '保管スペースの削減', body: '5年分の帳簿・伝票を物理的に保管する必要がなくなる。特に大量取引がある小売店には効果大。' },
            { icon: '🔒', title: 'バックアップ・災害対策', body: 'クラウド保存すれば火災・水害で帳簿が失われるリスクを低減できる。' },
            { icon: '🔗', title: '会計ソフトとの連携', body: '会計ソフト・POSシステムと連携することで、仕入データの二重入力を省ける。' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-navy-100 rounded-xl p-5 flex gap-3">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <div className="font-bold text-slate-900 mb-1 text-sm">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="電子帳簿の3つの方式">
        <div className="space-y-4 mb-5">
          {[
            {
              method: '① 電子帳簿保存（最初から電子で作成）',
              desc: 'ExcelやソフトウェアでPC上に帳簿を作成・保存する方式。最もシンプルで、多くの小売店・飲食店に適している。',
              req: ['法定要件：検索機能（日付・金額・取引先で絞り込み可能）が必要', 'バックアップを定期的に取ること', '出力できる状態を保つこと（調査時にすぐ印刷・表示できること）'],
              color: 'bg-blue-50 border-blue-200',
            },
            {
              method: '② スキャナ保存（紙の書類を電子化）',
              desc: '紙で受け取った仕入伝票・領収書をスキャンしてデータ保存する方式。紙の整理を省けるが、要件が細かい。',
              req: ['法定要件：解像度200dpi以上', 'タイムスタンプの付与（または一定期間内の入力確認）', '入力者・確認者の情報を記録すること'],
              color: 'bg-indigo-50 border-indigo-200',
            },
            {
              method: '③ 電子取引データの保存（電子で受け取った書類）',
              desc: 'メール・ECサイト・EDIなど電子的に受け取った請求書・領収書はデータのまま保存する義務がある（2022年1月より原則義務化）。',
              req: ['法定要件：受信した電子データをそのまま保存', '検索機能の確保（日付・金額・取引先）', '訂正・削除の履歴が確認できること'],
              color: 'bg-teal-50 border-teal-200',
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border p-5 ${item.color}`}>
              <div className="font-bold text-slate-900 mb-2">{item.method}</div>
              <p className="text-sm text-slate-700 mb-3">{item.desc}</p>
              <div className="bg-white rounded-lg p-3 text-xs text-slate-600">
                <div className="font-bold text-slate-700 mb-1">主な要件</div>
                <ul className="space-y-1">
                  {item.req.map((r, j) => <li key={j}>• {r}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500">※ 電子帳簿保存法の要件は改正される場合があります。最新情報は国税庁ウェブサイトでご確認ください。</p>
      </Section>

      <Section title="ツール選定のポイント">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">ツールの種類</th>
                <th className="text-left px-4 py-3">向いている業態</th>
                <th className="text-left px-4 py-3">費用目安</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">注意点</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Excel・Googleスプレッドシート', target: '小規模小売店・飲食店', cost: 'ほぼ無料', note: '検索・バックアップを自分で設定する必要あり' },
                { type: '会計ソフト（freee・マネーフォワード等）', target: '売上規模が大きい小売店', cost: '月額数千円〜', note: '酒類帳簿専用機能はないが仕入管理に活用可能' },
                { type: '在庫管理ソフト（POSレジ連携型）', target: '多品目を扱う酒販店', cost: '月額数千円〜数万円', note: '品目ごとの在庫追跡が自動化される' },
                { type: '酒類業向け専門ソフト', target: '酒類専業の小売・卸売', cost: '個別見積もり', note: '酒税法の帳簿要件を満たす設計が多い' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200">{r.target}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{r.cost}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-500 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="デジタル化の注意点">
        <div className="space-y-3">
          {[
            { title: 'すぐに消せる記録は不可', body: '「訂正・削除の防止」が電子帳簿保存の要件の一つです。通常のExcelファイルは訂正が自由なため、保存要件を完全に満たさない場合があります。訂正履歴が残る仕組みを検討しましょう。', warn: true },
            { title: 'ソフト廃業時のデータ移行', body: '使用しているソフトやクラウドサービスがサービス終了した場合に備え、定期的にデータをエクスポート（CSV等）して手元に保存しておきましょう。', warn: false },
            { title: 'バックアップは複数箇所に', body: 'PCの故障・ランサムウェア被害に備え、クラウドとローカル（外付けHDD等）の両方にバックアップを保存することを推奨します。', warn: false },
          ].map((item, i) => (
            <div key={i} className={`rounded-lg p-4 border flex gap-3 ${item.warn ? 'bg-red-50 border-red-200' : 'bg-navy-50 border-navy-100'}`}>
              <div className="text-lg flex-shrink-0">{item.warn ? '⚠️' : '💡'}</div>
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
