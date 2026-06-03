import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function CreationSteps() {
  return (
    <ContentLayout
      section="chobo"
      title="帳簿作成ステップガイド"
      description="酒類帳簿を正しく作成するための5ステップを、初めて帳簿を作る方でもわかるよう順を追って解説します。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/what-is-ledger' }, { label: '帳簿作成ステップガイド' }]}
    >
      <Section title="帳簿作成の5ステップ概要">
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-5">
          <div className="text-sm font-bold text-slate-500 mb-4 text-center">図：帳簿作成の全体フロー</div>
          <div className="flex flex-col md:flex-row gap-2 items-stretch">
            {[
              { step: 1, label: '帳簿の\n設計', color: 'bg-navy-700' },
              { step: 2, label: '仕入時の\n記録', color: 'bg-blue-600' },
              { step: 3, label: '販売時の\n記録', color: 'bg-indigo-600' },
              { step: 4, label: '月次\n照合', color: 'bg-teal-600' },
              { step: 5, label: '期末\n棚卸・保存', color: 'bg-slate-600' },
            ].map((item, i, arr) => (
              <React.Fragment key={i}>
                <div className={`${item.color} text-white rounded-xl px-4 py-4 text-center flex-1`}>
                  <div className="text-2xl font-bold mb-1">Step {item.step}</div>
                  <div className="text-sm font-medium whitespace-pre-line leading-snug">{item.label}</div>
                </div>
                {i < arr.length - 1 && <div className="text-slate-400 font-bold text-xl self-center text-center">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Step 1：帳簿の設計">
        <p className="text-slate-700 leading-relaxed mb-4">
          まず「どの形式で帳簿を作るか」を決めます。形式は自由ですが、法定記載事項をすべて記録できることが条件です。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {[
            { title: '手書き帳簿', pros: '初期費用ゼロ、シンプル', cons: '集計・検索が大変、修正しにくい', recommend: false },
            { title: 'Excel・スプレッドシート', pros: '集計・フィルタが簡単、コストほぼゼロ', cons: 'バックアップ管理が必要', recommend: true },
            { title: '会計・在庫管理ソフト', pros: '自動集計・連携が充実、電子帳簿対応', cons: '費用がかかる', recommend: false },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl p-4 border ${item.recommend ? 'border-navy-300 bg-navy-50' : 'border-slate-200 bg-white'}`}>
              <div className="font-bold text-slate-900 mb-2 text-sm">{item.title} {item.recommend && <span className="text-xs bg-navy-700 text-white px-2 py-0.5 rounded ml-1">おすすめ</span>}</div>
              <div className="text-xs text-green-700 mb-1">✓ {item.pros}</div>
              <div className="text-xs text-red-600">✗ {item.cons}</div>
            </div>
          ))}
        </div>
        <div className="bg-navy-50 border border-navy-100 rounded-lg p-4 text-sm text-slate-700">
          <strong className="text-navy-800">設計時のポイント：</strong> 仕入帳と販売帳を別シートで管理し、品目・規格ごとに行を分けると月次照合が楽になります。
        </div>
      </Section>

      <Section title="Step 2：仕入時の記録">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒類が届いたら、その日のうちに帳簿に記録します。納品書・請求書を保存し、帳簿の記録と照合できるようにしておきます。
        </p>
        <div className="space-y-3">
          {[
            { num: '①', title: '納品書を受け取る', body: '仕入先から届く納品書・送り状を必ず受け取り、保管する。これが帳簿の証拠書類になる。' },
            { num: '②', title: '品目・数量を確認', body: '実際に届いた商品と納品書の内容（品目・規格・数量）を照合する。差異があれば仕入先に確認。' },
            { num: '③', title: '帳簿に記載', body: '仕入日・仕入先名・住所・品目・規格・数量・単価・合計金額を帳簿に記入する。' },
            { num: '④', title: '在庫残高を更新', body: '前回の残高に今回の仕入数量を加算して、品目別の在庫残高を更新する。' },
          ].map((step, i) => (
            <div key={i} className="flex gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{step.num}</div>
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1">{step.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Step 3：販売時の記録">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒類を販売したときの記録です。一般消費者への小売の場合は、販売先の個別記録は不要で、日次の集計記録で足ります。業者間取引がある場合は販売先情報も必要です。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white border border-blue-200 rounded-xl p-5">
            <div className="font-bold text-blue-800 mb-3 text-sm">一般消費者への小売の場合</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• 販売日ごとに品目別・規格別の販売数量を集計して記録</li>
              <li>• レジのPOSデータや売上日報から転記するのが効率的</li>
              <li>• 販売先（消費者）の個別情報は不要</li>
              <li>• 在庫残高を販売数量分だけ減算する</li>
            </ul>
          </div>
          <div className="bg-white border border-navy-200 rounded-xl p-5">
            <div className="font-bold text-navy-800 mb-3 text-sm">業者（飲食店等）への販売の場合</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• 販売先の名称・住所・品目・数量・価格を記録</li>
              <li>• 発行した請求書・納品書と帳簿を照合</li>
              <li>• 取引先ごとに管理するとわかりやすい</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Step 4：月次照合">
        <p className="text-slate-700 leading-relaxed mb-4">
          月末（または月初）に、帳簿の記録と実際の在庫を照合します。差異（棚卸差異）があれば原因を調査し、記録します。
        </p>
        <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-3">確認項目</th>
                <th className="text-left px-4 py-3">方法</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: '帳簿残高の確認', method: '仕入合計 − 販売合計 = 帳簿上の在庫残高を算出' },
                { item: '実在庫カウント', method: '品目・規格別に実際の在庫数量を数える' },
                { item: '差異の確認', method: '帳簿残高と実在庫の差異を品目ごとに記録' },
                { item: '差異の原因調査', method: '破損・廃棄・記録漏れなど原因を特定して帳簿に注記' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium">{r.item}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{r.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Step 5：期末棚卸と保存">
        <p className="text-slate-700 leading-relaxed mb-4">
          年度末（または事業年度末）に全品目の棚卸を行い、棚卸表を作成します。帳簿は年度閉鎖後5年間保存します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: '期末棚卸のチェックリスト', items: ['全品目・全規格を数える', '破損・期限切れ品を除外して記録', '前年度末残高＋仕入−販売=今年度末残高 を確認', '差異がある場合は原因を記録', '棚卸表に日付・担当者名を記入して保管'] },
            { title: '帳簿の整理・保存方法', items: ['帳簿を閉鎖し、年度を明記して保存', '関連書類（納品書・請求書）とセットで保管', '電子保存の場合はバックアップを確保', '保存場所を記録し、すぐ取り出せる状態に', '廃棄は5年経過後に行う'] },
          ].map((col, i) => (
            <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5">
              <div className="font-bold text-navy-800 mb-3 text-sm">{col.title}</div>
              <ul className="space-y-1.5">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-4 h-4 border border-navy-400 rounded flex-shrink-0 mt-0.5"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
