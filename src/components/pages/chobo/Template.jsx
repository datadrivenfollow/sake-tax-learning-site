import React, { useState } from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function Template() {
  const [tab, setTab] = useState('retail');

  return (
    <ContentLayout
      section="chobo"
      title="酒類受払帳テンプレートの作り方"
      description="酒類受払帳のExcelテンプレートの作り方を解説。仕入れシート・払い出しシートの列構成、ドロップダウン設定、自動計算の設定手順まで。手書き帳簿の構成方法も掲載。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/how-to-write' }, { label: 'テンプレートの作り方' }]}
    >

      <Section title="テンプレートの全体構成">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒類受払帳のテンプレートは「仕入れ（受け入れ）シート」と「払い出し（販売）シート」の2枚構成が基本です。品目が多い場合は品目別にシートを分けると管理しやすくなります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {[
            { label: 'シート①', title: '仕入れ（受け入れ）', desc: '酒類を仕入れた記録。仕入先・品目・数量・価格を記録する。', color: 'bg-blue-50 border-blue-200' },
            { label: 'シート②', title: '払い出し（販売）', desc: '酒類を販売した記録。販売先（業者の場合）・品目・数量を記録する。', color: 'bg-indigo-50 border-indigo-200' },
            { label: 'シート③', title: '在庫残高（任意）', desc: '品目ごとの在庫残高を自動計算で追跡する。棚卸しに活用できる。', color: 'bg-teal-50 border-teal-200' },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border p-4 ${item.color}`}>
              <div className="text-xs font-bold text-slate-500 mb-1">{item.label}</div>
              <div className="font-bold text-slate-900 mb-2">{item.title}</div>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="仕入れシートのテンプレート">
        <p className="text-slate-700 leading-relaxed mb-4">以下の列構成でシートを作成します。A列から右に順に設定してください。</p>

        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="px-3 py-2 text-left">列</th>
                <th className="px-3 py-2 text-left">項目名</th>
                <th className="px-3 py-2 text-left">入力形式</th>
                <th className="px-3 py-2 text-left">必須</th>
                <th className="px-3 py-2 text-left">記入のポイント</th>
              </tr>
            </thead>
            <tbody>
              {[
                { col: 'A', name: '仕入年月日', format: '日付（YYYY/MM/DD）', req: true, note: '納品日を記入。日付形式で統一するとフィルタが使いやすい' },
                { col: 'B', name: '仕入先の氏名・名称', format: 'テキスト', req: true, note: '法人は正式名称（㈱・㈲等含む）。ドロップダウンで選択式にすると誤記防止になる' },
                { col: 'C', name: '仕入先の住所', format: 'テキスト', req: true, note: '都道府県から記入。仕入先マスターシートから参照式で自動入力にすると楽' },
                { col: 'D', name: '品目', format: 'テキスト（ドロップダウン推奨）', req: true, note: '酒税法上の品目区分で記入。入力規則でドロップダウン設定を推奨' },
                { col: 'E', name: '税率の適用区分', format: 'テキスト', req: true, note: '焼酎・ウイスキーは度数区分を記入。それ以外は「—」' },
                { col: 'F', name: '容量・規格', format: 'テキスト', req: true, note: '「350ml×24本」「720ml」など。ケース入数も記録しておくと便利' },
                { col: 'G', name: '仕入数量', format: '数値（本数）', req: true, note: '本数単位で統一するか、ケース数で記録するかを事前に決めておく' },
                { col: 'H', name: '仕入単価', format: '数値（円）', req: true, note: '税抜価格で記録するのが一般的' },
                { col: 'I', name: '仕入金額（合計）', format: '数値（G×H）', req: true, note: 'G列×H列の計算式を設定すると自動計算になる' },
                { col: 'J', name: '備考', format: 'テキスト', req: false, note: '返品・破損等の特記事項を記入' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-3 py-2 border-b border-slate-200 font-bold text-navy-800 w-8">{r.col}</td>
                  <td className="px-3 py-2 border-b border-slate-200 font-semibold">{r.name}</td>
                  <td className="px-3 py-2 border-b border-slate-200 text-slate-600 text-xs">{r.format}</td>
                  <td className="px-3 py-2 border-b border-slate-200 text-center">
                    {r.req ? <span className="text-red-600 font-bold text-xs">必須</span> : <span className="text-slate-400 text-xs">任意</span>}
                  </td>
                  <td className="px-3 py-2 border-b border-slate-200 text-slate-600 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Template preview */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
          <div className="text-xs font-bold text-slate-500 mb-3">仕入れシート プレビュー（ヘッダー行のみ）</div>
          <div className="overflow-x-auto">
            <div className="flex gap-0 text-xs font-mono min-w-max">
              {['A\n仕入年月日', 'B\n仕入先名称', 'C\n仕入先住所', 'D\n品目', 'E\n税率区分', 'F\n容量・規格', 'G\n数量', 'H\n単価', 'I\n金額', 'J\n備考'].map((col, i) => (
                <div key={i} className={`border border-slate-300 px-2 py-2 text-center whitespace-pre-line leading-tight ${i === 0 ? 'rounded-tl-lg' : ''} ${i === 9 ? 'rounded-tr-lg' : ''} ${i < 8 ? 'min-w-[80px]' : 'min-w-[60px]'} bg-navy-700 text-white font-bold`}>
                  {col}
                </div>
              ))}
            </div>
            {[1, 2].map(row => (
              <div key={row} className="flex gap-0 text-xs font-mono min-w-max">
                {['2026/06/02', '○○酒類販売㈱', '東京都中央区…', 'ビール', '—', '350ml×24', '3ケース', '3,200', '9,600', ''].map((cell, i) => (
                  <div key={i} className={`border border-slate-200 px-2 py-2 text-center ${row % 2 === 0 ? 'bg-slate-50' : 'bg-white'} ${i < 8 ? 'min-w-[80px]' : 'min-w-[60px]'} text-slate-600`}>
                    {cell || ' '}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="払い出しシートのテンプレート">
        <div className="flex gap-2 mb-5">
          {[
            { key: 'retail', label: '小売（一般消費者向け）' },
            { key: 'wholesale', label: '卸売・業者向け' },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tab === t.key ? 'bg-navy-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-700 text-white">
                <th className="px-3 py-2 text-left">列</th>
                <th className="px-3 py-2 text-left">項目名</th>
                <th className="px-3 py-2 text-left">必須</th>
                <th className="px-3 py-2 text-left">記入のポイント</th>
              </tr>
            </thead>
            <tbody>
              {(tab === 'retail' ? [
                { col: 'A', name: '払出年月日', req: true, note: '一般消費者への販売は日次集計で記入可（条件を満たす場合）' },
                { col: 'B', name: '払出先', req: false, note: '一般消費者の場合は「（一般消費者・日計）」と記入' },
                { col: 'C', name: '品目', req: true, note: '酒税法上の品目名で記入' },
                { col: 'D', name: '税率の適用区分', req: true, note: 'ビール・清酒等は「—」、焼酎等は度数区分を記入' },
                { col: 'E', name: '払出数量', req: true, note: '日次合計の場合はその日の販売合計本数' },
                { col: 'F', name: '払出金額', req: false, note: '任意だが記録しておくと管理に役立つ' },
                { col: 'G', name: '在庫残高', req: false, note: '前行の残高−払出数量の計算式を設定' },
              ] : [
                { col: 'A', name: '払出年月日', req: true, note: '取引ごとに個別記録が必要' },
                { col: 'B', name: '払出先の氏名・名称', req: true, note: '省略不可。法人は正式名称で記入' },
                { col: 'C', name: '払出先の住所', req: true, note: '省略不可。業者間取引は全て必須' },
                { col: 'D', name: '品目', req: true, note: '酒税法上の品目名で記入' },
                { col: 'E', name: '税率の適用区分', req: true, note: '該当品目は記入' },
                { col: 'F', name: '払出数量', req: true, note: '本数・ケース数で記入' },
                { col: 'G', name: '払出金額', req: true, note: '卸売価格で記録' },
                { col: 'H', name: '在庫残高', req: false, note: '計算式で自動更新できる' },
              ]).map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-3 py-2 border-b border-slate-200 font-bold text-navy-800 w-8">{r.col}</td>
                  <td className="px-3 py-2 border-b border-slate-200 font-semibold">{r.name}</td>
                  <td className="px-3 py-2 border-b border-slate-200 text-center">
                    {r.req ? <span className="text-red-600 font-bold text-xs">必須</span> : <span className="text-slate-400 text-xs">任意</span>}
                  </td>
                  <td className="px-3 py-2 border-b border-slate-200 text-slate-600 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Excelで作る際の実践的な設定">
        <div className="space-y-4">
          {[
            {
              title: 'ドロップダウンで品目を選択式にする',
              steps: ['「品目」列のセルを選択 → データ → データの入力規則', '「リスト」を選択し、元の値に品目名をカンマ区切りで入力', '例：ビール,発泡酒,その他の発泡性酒類,清酒,果実酒,単式蒸留焼酎,連続式蒸留焼酎,ウイスキー,リキュール'],
            },
            {
              title: '仕入先マスターシートを作成する',
              steps: ['別シートに仕入先名・住所の一覧を作成', 'VLOOKUP関数またはXLOOKUP関数で仕入先名から住所を自動入力', 'これにより住所の記入漏れ・誤記を防げる'],
            },
            {
              title: '金額列を自動計算にする',
              steps: ['仕入金額列（I列）に「=G2*H2」のような計算式を入力', '数量・単価を入力すれば金額が自動計算される', 'テンプレート行を作成し、行を追加するたびにコピーする'],
            },
            {
              title: '年度別にファイルを分けて保存する',
              steps: ['ファイル名を「酒類受払帳_2026年度_○○店.xlsx」のように命名', '年度ごとに別ファイルで保存（上書きせずに新ファイル）', '帳簿閉鎖後5年間（保存期間）が経過するまで削除しない'],
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="font-bold text-slate-900 mb-3 text-sm">💡 {item.title}</div>
              <ol className="space-y-1">
                {item.steps.map((step, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-navy-600 font-bold flex-shrink-0">{j + 1}.</span>{step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      <Section title="手書き帳簿を使う場合">
        <p className="text-slate-700 leading-relaxed mb-4">
          罫線入りの帳簿（市販の「売上帳」「現金出納帳」等）でも、法定記載事項の列が確保できれば使用可能です。ただし、列数が多いため、縦方向に記録する形式（縦帳）を利用することが多いです。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-3 text-sm">手書き帳簿のメリット</div>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• 初期費用がほぼかからない</li>
              <li>• 電子機器が不要</li>
              <li>• 直感的に記入できる</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <div className="font-bold text-red-800 mb-3 text-sm">手書き帳簿のデメリット</div>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• 集計・在庫残高の計算が手動になる</li>
              <li>• 記入ミスの修正が面倒</li>
              <li>• 品目が多いと管理が煩雑</li>
              <li>• 5年間の物理的な保管スペースが必要</li>
              <li>• 税務調査時の検索・提示に時間がかかる</li>
            </ul>
          </div>
        </div>
      </Section>

    </ContentLayout>
  );
}
