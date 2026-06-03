import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function BestPractices() {
  return (
    <ContentLayout
      section="chobo"
      title="帳簿管理のベストプラクティス"
      description="日々の帳簿管理を効率よく正確に行うための実践的なコツを紹介します。月次・年次の作業スケジュールも含めて解説します。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/what-is-ledger' }, { label: '帳簿管理のベストプラクティス' }]}
    >
      <Section title="帳簿管理の基本原則">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {[
            { title: '都度記録の原則', body: '仕入・返品・廃棄などが発生したら、その日のうちに記録する。「後でまとめて」は記憶の誤りや漏れの原因になる。', icon: '📅' },
            { title: '証拠書類との一致', body: '帳簿の記録は仕入伝票・領収書と必ず照合できるようにしておく。証拠書類のない記録は税務調査で問題になる。', icon: '📎' },
            { title: '定期照合の習慣化', body: '月1回は帳簿の在庫残高と実際の在庫数量を照合する。差異が小さいうちに原因を把握するのが重要。', icon: '🔍' },
            { title: '担当者・ルールの明確化', body: '帳簿記録の担当者・記録タイミング・保存場所を明文化する。担当者が変わっても運用が継続できる体制を作る。', icon: '📋' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-navy-100 rounded-xl p-5 flex gap-3">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <div className="font-bold text-slate-900 mb-2 text-sm">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="月次の作業スケジュール">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">タイミング</th>
                <th className="text-left px-4 py-3">作業内容</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">所要時間の目安</th>
              </tr>
            </thead>
            <tbody>
              {[
                { timing: '仕入発生時（随時）', task: '仕入帳への記録・仕入伝票のファイリング', time: '5〜10分/回' },
                { timing: '返品・廃棄発生時（随時）', task: '返品・廃棄の記録（品目・数量・理由）', time: '5分/回' },
                { timing: '週1回', task: '在庫残高の確認・帳簿記録の漏れチェック', time: '15〜30分' },
                { timing: '月末', task: '帳簿残高と実在庫の照合・棚卸差異の確認と記録', time: '30〜60分' },
                { timing: '月末', task: '仕入伝票・領収書の整理・月次ファイリング', time: '15〜30分' },
                { timing: '月末', task: '電子帳簿のバックアップ', time: '5分' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800 whitespace-nowrap">{r.timing}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.task}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-500 text-xs whitespace-nowrap">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="年次の作業スケジュール">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">時期</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">作業内容</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: '期末（年度末前後）', task: '全品目の期末棚卸・棚卸表の作成と保管' },
                { time: '年度末', task: '帳簿の閉鎖・年度を明記して保管開始' },
                { time: '翌年度初め', task: '新年度帳簿の開始・前年度の保存場所の確認' },
                { time: '5年経過後の書類', task: '廃棄可能な書類の確認・適切に廃棄（個人情報に注意）' },
                { time: '税制改正の時期（10月等）', task: '税率・法令の改正内容を確認し、品目の税率変更に備える' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800 whitespace-nowrap">{r.time}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="効率化のコツ">
        <div className="space-y-4">
          {[
            {
              title: '仕入先マスターリストの作成',
              body: '定期的に取引する仕入先（名称・住所・連絡先）をあらかじめリスト化しておく。帳簿記入時にコピー＆ペーストできるため、誤記を防ぎ時間も短縮できる。',
            },
            {
              title: 'POSデータ・注文履歴の活用',
              body: 'レジのPOSシステムや卸売業者の注文履歴を帳簿記録に活用する。仕入伝票と照合しながら転記すると効率的。',
            },
            {
              title: '品目別テンプレートの準備',
              body: '定期的に仕入れる品目のテンプレート行をExcelで作成しておく。日付・数量・価格だけ更新すれば記録が完了する。',
            },
            {
              title: '証拠書類の月別ファイリング',
              body: '仕入伝票・領収書は月ごとにファイルに綴じる。ファイルに「2026年6月分」などラベルを貼ると5年後の廃棄管理も楽になる。',
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex gap-3">
              <div className="w-6 h-6 bg-navy-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
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
