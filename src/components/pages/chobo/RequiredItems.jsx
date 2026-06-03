import React, { useState } from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function RequiredItems() {
  const [tab, setTab] = useState('retailer');

  const retailerItems = [
    { item: '仕入年月日', required: true, note: '商品が届いた日付。請求書・納品書の日付と一致させる' },
    { item: '仕入先の氏名・名称', required: true, note: '卸売業者・メーカーの正式名称' },
    { item: '仕入先の住所', required: true, note: '法人の場合は本店所在地または販売場所在地' },
    { item: '酒類の品目', required: true, note: 'ビール・清酒・焼酎など酒税法上の品目区分で記載' },
    { item: '税率の適用区分', required: true, note: '同じ品目でもアルコール度数等で税率が異なる場合がある（例：ウイスキーの度数区分）。商品ごとに記帳すれば自ずと品目別・税率区分別の記録になる' },
    { item: '容量（規格）', required: true, note: '350ml・500ml・1Lなど' },
    { item: '仕入数量', required: true, note: '本数・ケース数（ケース入数を記録しておくと便利）' },
    { item: '仕入価格（単価・合計）', required: true, note: '税抜・税込を明確にする' },
    { item: '販売年月日', required: true, note: '一般消費者への小売は日次合計記帳が可（条件あり：仕入伝票を5年以上保存＋3ヶ月以内の棚卸しを実施）' },
    { item: '販売先の氏名・名称と住所（卸売・業者への販売）', required: true, note: '卸売・業者への販売は省略不可。一般消費者への小売のみ省略可' },
    { item: '販売品目・税率の適用区分・数量', required: true, note: '品目別・税率区分別に記録' },
    { item: '在庫数量（残高）', required: false, note: '必須ではないが記録しておくと棚卸差異の確認に有効' },
  ];

  const restaurantItems = [
    { item: '仕入年月日', required: true, note: '仕入（納品）された日付' },
    { item: '仕入先の氏名・名称', required: true, note: '酒類卸売業者・メーカーの正式名称' },
    { item: '仕入先の住所', required: true, note: '法人の場合は本店または販売場所在地' },
    { item: '酒類の品目', required: true, note: 'ビール・ワイン・焼酎など' },
    { item: '規格・容量', required: true, note: 'ボトルサイズ・缶サイズなど' },
    { item: '仕入数量', required: true, note: '本数・ケース数' },
    { item: '仕入価格', required: true, note: '単価・合計金額' },
    { item: '廃棄・返品の記録', required: false, note: '廃棄や返品が発生した場合は理由とともに記録が推奨' },
    { item: '在庫残高', required: false, note: '月次での在庫確認・記録が推奨される' },
  ];

  const items = tab === 'retailer' ? retailerItems : restaurantItems;

  return (
    <ContentLayout
      section="chobo"
      title="帳簿に記載すべき項目（詳細）"
      description="酒類帳簿に必ず記載しなければならない法定事項を、酒小売店・飲食店それぞれの視点で詳しく解説します。記載例も含めて確認できます。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/what-is-ledger' }, { label: '記載すべき項目（詳細）' }]}
    >
      <Section title="業態別 記載項目一覧">
        <div className="flex gap-2 mb-5">
          {[
            { key: 'retailer', label: '酒小売店向け' },
            { key: 'restaurant', label: '飲食店向け（小売業免許あり）' },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === t.key ? 'bg-navy-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">記載項目</th>
                <th className="text-center px-4 py-3">必須</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">記載のポイント</th>
              </tr>
            </thead>
            <tbody>
              {items.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium">{r.item}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    {r.required
                      ? <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">必須</span>
                      : <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded">推奨</span>}
                  </td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="記載例（仕入帳）">
        <p className="text-slate-700 leading-relaxed mb-4">以下は酒小売店の仕入帳の記載例です。実際の帳簿では各行に1取引を記録します。</p>
        <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-navy-700 text-white">
                <th className="px-3 py-2 text-left">仕入日</th>
                <th className="px-3 py-2 text-left">仕入先名</th>
                <th className="px-3 py-2 text-left">住所（略）</th>
                <th className="px-3 py-2 text-left">品目</th>
                <th className="px-3 py-2 text-left">規格</th>
                <th className="px-3 py-2 text-right">数量</th>
                <th className="px-3 py-2 text-right">単価（税抜）</th>
                <th className="px-3 py-2 text-right">合計（税抜）</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '2026/06/01', name: '○○酒類販売㈱', addr: '東京都中央区…', type: 'ビール', size: '350ml×24', qty: '2ケース', price: '3,200円', total: '6,400円' },
                { date: '2026/06/01', name: '○○酒類販売㈱', addr: '東京都中央区…', type: '清酒（日本酒）', size: '720ml', qty: '12本', price: '800円', total: '9,600円' },
                { date: '2026/06/03', name: '△△食品㈱', addr: '大阪府大阪市…', type: '発泡酒', size: '350ml×24', qty: '1ケース', price: '2,800円', total: '2,800円' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-3 py-2 border-b border-slate-100 whitespace-nowrap">{r.date}</td>
                  <td className="px-3 py-2 border-b border-slate-100 whitespace-nowrap">{r.name}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-slate-500">{r.addr}</td>
                  <td className="px-3 py-2 border-b border-slate-100">{r.type}</td>
                  <td className="px-3 py-2 border-b border-slate-100">{r.size}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right">{r.qty}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right">{r.price}</td>
                  <td className="px-3 py-2 border-b border-slate-100 text-right font-mono">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-2">※ 上記はイメージです。実際の帳簿は法定事項をすべて含めてください。</p>
      </Section>

      <Section title="品目の記載ルール">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒類の品目は、酒税法上の分類に従って記載します。商品名（ブランド名）ではなく、酒税法上の品目区分を使用することがポイントです。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">商品の通称</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">帳簿に記載する品目区分</th>
              </tr>
            </thead>
            <tbody>
              {[
                { common: '缶ビール（スーパードライ等）', official: 'ビール' },
                { common: '第三のビール（のどごし等）', official: 'その他の発泡性酒類' },
                { common: '日本酒（獺祭等）', official: '清酒' },
                { common: 'ワイン', official: '果実酒' },
                { common: '芋焼酎・麦焼酎（本格焼酎）', official: '単式蒸留焼酎' },
                { common: '甲類焼酎（宝焼酎等）', official: '連続式蒸留焼酎' },
                { common: '梅酒（糖類・焼酎等を混合）', official: 'リキュール' },
                { common: 'ウイスキー', official: 'ウイスキー' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200">{r.common}</td>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800">{r.official}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </ContentLayout>
  );
}
