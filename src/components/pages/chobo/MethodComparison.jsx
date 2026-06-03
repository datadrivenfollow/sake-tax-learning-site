import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

const Check = () => <span className="text-green-600 font-bold">✓</span>;
const Cross = () => <span className="text-red-400">✗</span>;
const Triangle = () => <span className="text-orange-400 font-bold">△</span>;

export default function MethodComparison() {
  return (
    <ContentLayout
      section="chobo"
      title="帳簿管理の方法比較：紙・Excel・アプリ"
      description="酒類受払帳の管理方法として「手書き」「Excel」「専用アプリ」の3つを費用・手間・リスクの観点で比較します。自店舗に合った方法を選ぶ参考にしてください。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/how-to-write' }, { label: '紙・Excel・アプリ比較' }]}
    >

      <Section title="3つの方法の概要">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {[
            {
              title: '手書き（紙帳簿）',
              icon: '📝',
              color: 'border-slate-300 bg-slate-50',
              summary: '市販の帳簿やノートに手書きで記入する最もシンプルな方法。初期費用はほぼゼロだが、集計・検索・保管に手間がかかる。',
              bestFor: '取扱品目が少なく、取引量も少ない小規模店舗',
            },
            {
              title: 'Excel・スプレッドシート',
              icon: '💻',
              color: 'border-blue-300 bg-blue-50',
              summary: 'PCでExcelやGoogleスプレッドシートを使って管理する方法。計算の自動化やフィルタ機能が使えるが、設計と運用は自己管理が必要。',
              bestFor: 'ある程度品目・取引量があり、PCに慣れている事業者',
            },
            {
              title: '専用アプリ',
              icon: '📱',
              color: 'border-navy-300 bg-navy-50',
              summary: '酒類受払帳に特化したアプリを使う方法。入力補助・自動計算・クラウド保存など機能が充実しており、記帳の手間を大幅に削減できる。',
              bestFor: '品目・取引が多く、管理の効率化・正確性を求める事業者',
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border-2 p-5 ${item.color}`}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-bold text-slate-900 mb-2">{item.title}</div>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.summary}</p>
              <div className="text-xs bg-white rounded-lg px-3 py-2 border border-slate-200 text-slate-600">
                <strong>向いている事業者：</strong>{item.bestFor}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="詳細比較表">
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">比較項目</th>
                <th className="text-center px-4 py-3">手書き（紙）</th>
                <th className="text-center px-4 py-3">Excel</th>
                <th className="text-center px-4 py-3 rounded-tr-lg">専用アプリ</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: '初期費用', paper: '0〜数百円', excel: '0円（既存PCがあれば）', app: '月額費用あり', paperIcon: '○', excelIcon: '○', appIcon: '△' },
                { item: '記帳の手間', paper: '大きい（全て手書き）', excel: '中程度（入力は必要）', app: '小さい（入力補助あり）', paperIcon: '✗', excelIcon: '△', appIcon: '○' },
                { item: '計算・集計', paper: '手動（ミスのリスク）', excel: '計算式で自動化可', app: '完全自動', paperIcon: '✗', excelIcon: '△', appIcon: '○' },
                { item: '在庫残高管理', paper: '手計算が必要', excel: '計算式で管理可', app: 'リアルタイム自動更新', paperIcon: '✗', excelIcon: '△', appIcon: '○' },
                { item: '品目の検索・絞り込み', paper: '困難（目視で探す）', excel: 'フィルタ機能で対応', app: '簡単（即時検索）', paperIcon: '✗', excelIcon: '△', appIcon: '○' },
                { item: 'バックアップ・紛失リスク', paper: '物理的保管が必要・紛失・火災リスク', excel: '自己管理・HDD故障リスク', app: 'クラウド自動保存', paperIcon: '✗', excelIcon: '△', appIcon: '○' },
                { item: '税務調査時の提示', paper: '現物確認のみ', excel: '画面表示・印刷出力', app: '即時出力・PDF生成', paperIcon: '△', excelIcon: '△', appIcon: '○' },
                { item: '帳簿フォーマットの適法性', paper: '自分で確認が必要', excel: '自分で設計が必要', app: '法定事項を網羅した設計', paperIcon: '△', excelIcon: '△', appIcon: '○' },
                { item: '複数店舗の管理', paper: '店舗ごとに別冊が必要', excel: 'ファイル分けで対応', app: '一元管理が可能', paperIcon: '✗', excelIcon: '△', appIcon: '○' },
                { item: '記帳ミスの検知', paper: '発見が困難', excel: '入力規則で一定の防止', app: '自動チェック機能', paperIcon: '✗', excelIcon: '△', appIcon: '○' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium">{r.item}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    <div className="text-sm text-slate-600">{r.paper}</div>
                  </td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    <div className="text-sm text-slate-600">{r.excel}</div>
                  </td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    <div className="text-sm text-slate-600">{r.app}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">○：優れている　△：標準的　✗：課題あり</p>
      </Section>

      <Section title="事業規模別おすすめ">
        <div className="space-y-4">
          {[
            {
              scale: '小規模（品目10種類未満・月間仕入10件以下）',
              rec: 'ExcelまたはGoogleスプレッドシート',
              reason: '手書きは将来の集計・検索で困る場面が多い。Excelであれば無料で始められ、品目が少なければシンプルな表で十分管理できる。',
              color: 'border-blue-300 bg-blue-50',
            },
            {
              scale: '中規模（品目10〜30種類・月間仕入20〜50件）',
              rec: 'Excel（仕入先マスター・ドロップダウン設定あり）または専用アプリ',
              reason: '品目が増えると手書きや単純なExcelでは管理ミスが発生しやすくなる。Excelを工夫するか、アプリへの移行を検討するタイミング。',
              color: 'border-indigo-300 bg-indigo-50',
            },
            {
              scale: '大規模（品目30種類以上・月間仕入50件以上）',
              rec: '専用アプリ',
              reason: '品目・取引量が多くなると、ExcelでもVLOOKUPや複数シート管理が複雑になり、人的ミスのリスクが高まる。専用アプリによる自動化が費用対効果として優れる。',
              color: 'border-navy-300 bg-navy-50',
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border-2 p-5 ${item.color}`}>
              <div className="font-bold text-slate-900 mb-1 text-sm">{item.scale}</div>
              <div className="text-navy-800 font-bold mb-2">→ {item.rec}</div>
              <p className="text-sm text-slate-700 leading-relaxed">{item.reason}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Excelからアプリに移行するタイミング">
        <p className="text-slate-700 leading-relaxed mb-4">
          以下に1つでも当てはまる場合、アプリへの移行を検討するサインです。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            '月末の帳簿照合に1時間以上かかるようになった',
            '在庫残高の計算でミスが増えてきた',
            '仕入品目が増えてExcelのシートが複雑になった',
            '複数店舗のデータを一元管理したい',
            '税務調査の準備で帳簿整理に丸1日かかった',
            'スマートフォンで外出先から記録・確認したい',
            'バックアップの管理が面倒になってきた',
            '法定フォーマットへの準拠が不安になってきた',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 bg-white border border-slate-200 rounded-lg p-3">
              <div className="w-5 h-5 border-2 border-navy-400 rounded flex-shrink-0 mt-0.5"></div>
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </Section>

    </ContentLayout>
  );
}
