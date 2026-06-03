import React, { useState } from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

const InfoBox = ({ title, children }) => (
  <div className="my-5 bg-navy-50 border-l-4 border-navy-700 rounded-r-lg p-5">
    {title && <div className="font-bold text-navy-800 mb-2">{title}</div>}
    <div className="text-slate-700 text-sm leading-relaxed">{children}</div>
  </div>
);

export default function HowToWrite() {
  const [tab, setTab] = useState('retail');

  return (
    <ContentLayout
      section="chobo"
      title="酒類受払帳の書き方（記入例付き）"
      description="酒類受払帳の書き方を記入例付きで解説。仕入れ・払い出しの記帳ステップ、日次合計記帳の条件、品目別チートシート（ビール・清酒・焼酎など）、よくあるミスの防止策まで。小売業者・飲食店向け。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/how-to-write' }, { label: '書き方ガイド' }]}
    >
      <Section title="書き方の5つの基本ルール">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {[
            { num: '1', title: '仕入れのつど記帳する', body: '商品が届いたその日（遅くとも翌営業日）に仕入欄に記入。まとめ記帳は記憶の誤りと記載漏れを招く。' },
            { num: '2', title: '酒税法上の品目区分で書く', body: '「缶ビール」ではなく「ビール」、「芋焼酎」ではなく「単式蒸留焼酎」のように酒税法上の品目名で記載する。' },
            { num: '3', title: '仕入先の正式名称と住所を省略しない', body: '法人名・所在地は省略不可の必須項目。一度マスターリストを作れば以降はコピーで対応できる。' },
            { num: '4', title: '訂正は二重線で行う', body: '修正テープ・修正液は不可。誤記した箇所は二重線を引き、正しい内容を横に記入する。' },
            { num: '5', title: '販売場ごとに帳簿を用意する', body: '店舗が複数ある場合、各店舗ごとに別の帳簿を備え付ける。本社でのまとめ管理は違反。' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="w-7 h-7 bg-navy-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.num}</div>
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="STEP 1：仕入れの記入方法">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒類が届いたら納品書と照合しながら、以下の項目を記入します。
        </p>

        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="px-3 py-2 text-left">仕入年月日</th>
                <th className="px-3 py-2 text-left">仕入先の氏名・名称</th>
                <th className="px-3 py-2 text-left">仕入先の住所</th>
                <th className="px-3 py-2 text-left">品目</th>
                <th className="px-3 py-2 text-left">税率区分</th>
                <th className="px-3 py-2 text-left">容量</th>
                <th className="px-3 py-2 text-right">数量</th>
                <th className="px-3 py-2 text-right">単価</th>
                <th className="px-3 py-2 text-right">金額</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '2026/06/02', name: '○○酒類販売㈱', addr: '東京都中央区○○', type: 'ビール', tax: '—', size: '350ml×24本', qty: '3ケース', price: '3,200円', total: '9,600円' },
                { date: '2026/06/02', name: '○○酒類販売㈱', addr: '東京都中央区○○', type: '清酒', tax: '—', size: '720ml', qty: '12本', price: '850円', total: '10,200円' },
                { date: '2026/06/05', name: '△△食品㈱', addr: '大阪府大阪市○○', type: '単式蒸留焼酎', tax: '25度以下', size: '900ml', qty: '6本', price: '1,200円', total: '7,200円' },
                { date: '2026/06/05', name: '△△食品㈱', addr: '大阪府大阪市○○', type: 'リキュール', tax: '—', size: '500ml×6本', qty: '2ケース', price: '2,800円', total: '5,600円' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-3 py-2 border-b border-slate-100 whitespace-nowrap">{r.date}</td>
                  <td className="px-3 py-2 border-b border-slate-100">{r.name}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-slate-500">{r.addr}</td>
                  <td className="px-3 py-2 border-b border-slate-100 font-medium">{r.type}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-slate-500">{r.tax}</td>
                  <td className="px-3 py-2 border-b border-slate-100">{r.size}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right">{r.qty}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right font-mono">{r.price}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right font-mono font-bold">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mb-5">※ 記入例。実際の取引内容に合わせて記載してください。</p>

        <div className="space-y-3">
          {[
            { title: '「品目」の書き方', body: '商品のブランド名ではなく酒税法上の品目区分で記載します。缶ビール→「ビール」、第三のビール→「その他の発泡性酒類」、梅酒（焼酎ベース）→「リキュール」など。' },
            { title: '「税率区分」の書き方', body: '同じ品目でも度数によって税率が異なる焼酎・ウイスキーなどは税率区分も記載が必要。ビール・清酒など税率が一種類の品目は「—」で構いません。' },
            { title: '同じ仕入先から複数品目を仕入れた場合', body: '品目ごとに行を分けて記入します。仕入先名・住所は各行に記載するか、「同上」と記入する運用でも認められる場合があります。' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="text-blue-600 font-bold flex-shrink-0 text-sm">Q</div>
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="STEP 2：払い出し（販売）の記入方法">
        <div className="flex gap-2 mb-5">
          {[
            { key: 'retail', label: '小売（一般消費者への販売）' },
            { key: 'wholesale', label: '卸売・業者への販売' },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tab === t.key ? 'bg-navy-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'retail' ? (
          <>
            <p className="text-slate-700 leading-relaxed mb-4">
              一般消費者への小売販売は、個別の購入者を記録する必要はありません。<strong>日次合計で品目ごとに集計</strong>して記入できます。ただし以下の条件を満たす必要があります。
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5 text-sm">
              <div className="font-bold text-amber-800 mb-2">日次合計記帳ができる条件</div>
              <ul className="space-y-1 text-slate-700">
                <li>① 仕入伝票（納品書）を5年以上保存していること</li>
                <li>② 3ヶ月を超えない期間ごとに棚卸しを実施していること</li>
              </ul>
              <p className="text-xs text-slate-500 mt-2">この条件を満たさない場合は取引のつど個別記録が必要です。</p>
            </div>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-indigo-700 text-white">
                    <th className="px-3 py-2 text-left">払出年月日</th>
                    <th className="px-3 py-2 text-left">払出先</th>
                    <th className="px-3 py-2 text-left">品目</th>
                    <th className="px-3 py-2 text-left">税率区分</th>
                    <th className="px-3 py-2 text-right">数量</th>
                    <th className="px-3 py-2 text-right">払出金額</th>
                    <th className="px-3 py-2 text-right">在庫残高</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: '2026/06/02', dest: '（一般消費者・日計）', type: 'ビール', tax: '—', qty: '24本', price: '7,680円', stock: '48本' },
                    { date: '2026/06/02', dest: '（一般消費者・日計）', type: '清酒', tax: '—', qty: '3本', price: '3,300円', stock: '9本' },
                    { date: '2026/06/03', dest: '（一般消費者・日計）', type: 'ビール', tax: '—', qty: '36本', price: '11,520円', stock: '12本' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-indigo-50/30'}>
                      <td className="px-3 py-2 border-b border-slate-100">{r.date}</td>
                      <td className="px-3 py-2 border-b border-slate-100 text-slate-500">{r.dest}</td>
                      <td className="px-3 py-2 border-b border-slate-100 font-medium">{r.type}</td>
                      <td className="px-3 py-2 border-b border-slate-100">{r.tax}</td>
                      <td className="px-3 py-2 border-b border-slate-100 text-right">{r.qty}</td>
                      <td className="px-3 py-2 border-b border-slate-100 text-right font-mono">{r.price}</td>
                      <td className="px-3 py-2 border-b border-slate-100 text-right font-mono text-navy-700">{r.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <p className="text-slate-700 leading-relaxed mb-4">
              業者（飲食店・他の小売店など）への販売は、<strong>販売先の氏名・名称と住所の記載が必須</strong>です。日次合計にはできません。
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-indigo-700 text-white">
                    <th className="px-3 py-2 text-left">払出年月日</th>
                    <th className="px-3 py-2 text-left">払出先の名称</th>
                    <th className="px-3 py-2 text-left">払出先の住所</th>
                    <th className="px-3 py-2 text-left">品目</th>
                    <th className="px-3 py-2 text-right">数量</th>
                    <th className="px-3 py-2 text-right">払出金額</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: '2026/06/03', name: '○○飲食㈱', addr: '神奈川県横浜市○○', type: 'ビール', qty: '2ケース', price: '7,200円' },
                    { date: '2026/06/03', name: '○○飲食㈱', addr: '神奈川県横浜市○○', type: '清酒', qty: '6本', price: '5,400円' },
                    { date: '2026/06/05', name: '△△酒場', addr: '東京都新宿区○○', type: '単式蒸留焼酎', qty: '12本', price: '14,400円' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-indigo-50/30'}>
                      <td className="px-3 py-2 border-b border-slate-100">{r.date}</td>
                      <td className="px-3 py-2 border-b border-slate-100 font-medium">{r.name}</td>
                      <td className="px-3 py-2 border-b border-slate-100 text-slate-500">{r.addr}</td>
                      <td className="px-3 py-2 border-b border-slate-100">{r.type}</td>
                      <td className="px-3 py-2 border-b border-slate-100 text-right">{r.qty}</td>
                      <td className="px-3 py-2 border-b border-slate-100 text-right font-mono">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <InfoBox>
              卸売業者の場合、全取引が業者間取引のため、全ての払い出し記録に相手先の名称・住所が必要です。一般消費者への販売がないため日次集計は使用しません。
            </InfoBox>
          </>
        )}
      </Section>

      <Section title="STEP 3：在庫残高の管理">
        <p className="text-slate-700 leading-relaxed mb-4">
          帳簿の必須記載事項ではありませんが、品目ごとに在庫残高を記録しておくと棚卸し・差異確認が効率的になります。
        </p>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-5">
          <div className="text-sm font-bold text-slate-600 mb-3">残高の計算式</div>
          <div className="font-mono text-sm bg-white rounded-lg p-4 border border-slate-200">
            前回残高 ＋ 受け入れ（仕入れ）数量 － 払い出し（販売）数量 ＝ 現在の在庫残高
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-teal-700 text-white">
                <th className="px-3 py-2 text-left">日付</th>
                <th className="px-3 py-2 text-left">摘要</th>
                <th className="px-3 py-2 text-right">受入</th>
                <th className="px-3 py-2 text-right">払出</th>
                <th className="px-3 py-2 text-right">残高（ビール）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '6/1 繰越', note: '前月末残高', in: '—', out: '—', stock: '48本' },
                { date: '6/2', note: '仕入れ ○○酒類販売', in: '72本', out: '—', stock: '120本' },
                { date: '6/2', note: '販売（日計）', in: '—', out: '24本', stock: '96本' },
                { date: '6/3', note: '販売（日計）', in: '—', out: '36本', stock: '60本' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                  <td className="px-3 py-2 border-b border-slate-100">{r.date}</td>
                  <td className="px-3 py-2 border-b border-slate-100">{r.note}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right text-blue-700">{r.in}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right text-red-600">{r.out}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right font-bold text-navy-800">{r.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="品目別の書き方チートシート">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">商品の通称</th>
                <th className="text-left px-4 py-3">帳簿の「品目」欄</th>
                <th className="text-left px-4 py-3">「税率区分」欄</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">備考</th>
              </tr>
            </thead>
            <tbody>
              {[
                { common: '缶ビール・瓶ビール', ledger: 'ビール', tax: '—', note: '麦芽比率50%以上' },
                { common: '発泡酒（麦芽25%未満）', ledger: '発泡酒', tax: 'その他（25%未満）', note: '' },
                { common: '第三のビール・新ジャンル', ledger: 'その他の発泡性酒類', tax: '—', note: '' },
                { common: '日本酒（清酒）', ledger: '清酒', tax: '—', note: '' },
                { common: 'ワイン・果実酒', ledger: '果実酒', tax: '—', note: '' },
                { common: '芋・麦・米焼酎（本格焼酎）', ledger: '単式蒸留焼酎', tax: '25度以下 or 25度超', note: '度数で税率区分が変わる' },
                { common: '甲類焼酎（宝焼酎等）', ledger: '連続式蒸留焼酎', tax: '—', note: '' },
                { common: 'ウイスキー', ledger: 'ウイスキー', tax: '度数区分を確認', note: '度数で税率が変わる' },
                { common: '梅酒（糖類・焼酎等を混合）', ledger: 'リキュール', tax: '—', note: '果実のみで仕込む場合は果実酒' },
                { common: '本みりん', ledger: 'みりん', tax: '—', note: '' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200">{r.common}</td>
                  <td className="px-4 py-3 border-b border-slate-200 font-bold text-navy-800">{r.ledger}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{r.tax || '—'}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-500 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="よくある書き方のミス">
        <div className="space-y-3">
          {[
            { mistake: 'ビールを「アサヒスーパードライ」とブランド名で記入している', fix: '「ビール」と酒税法上の品目名で記入する。ブランド名は摘要欄に補足として記入してもよい。' },
            { mistake: '仕入先の住所を省略または「同上」で統一している', fix: '仕入先の住所は必須記載事項。各行に正式住所を記載するか、あらかじめ仕入先マスター表を作成して参照する。' },
            { mistake: '日次合計記帳の条件（仕入伝票保存・3ヶ月棚卸し）を満たさずに日計記入している', fix: '条件を満たさない場合は1取引ごとの個別記録が必要。条件を整備してから日計方式に移行する。' },
            { mistake: '複数店舗分を1冊の帳簿にまとめている', fix: '販売場（店舗）ごとに帳簿を分ける。店舗別ページを設けるだけでは不可。' },
            { mistake: '「焼酎25度」などの度数情報を書いているが、税率区分が空白のまま', fix: '「単式蒸留焼酎」の場合は「25度以下」または「25度超」の税率区分を明記する。' },
          ].map((item, i) => (
            <div key={i} className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="font-bold text-red-700 text-sm mb-1">✗ NG: {item.mistake}</div>
              <div className="text-sm text-slate-700"><span className="text-green-600 font-bold">✓ 対策: </span>{item.fix}</div>
            </div>
          ))}
        </div>
      </Section>

    </ContentLayout>
  );
}
