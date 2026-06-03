import React, { useState } from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

const Yes = () => <span className="text-green-600 font-bold text-base">○</span>;
const No = () => <span className="text-slate-300 text-base">—</span>;
const Rec = () => <span className="text-orange-400 font-bold text-sm">△</span>;

const businessTypes = [
  { key: 'maker', label: '酒類製造者', sub: '（メーカー）', color: 'bg-purple-50' },
  { key: 'wholesale', label: '酒類卸売業者', sub: '（問屋・ディストリビューター）', color: 'bg-blue-50' },
  { key: 'retail', label: '酒類小売業者', sub: '（酒販店・スーパー等）', color: 'bg-indigo-50' },
  { key: 'restaurant', label: '飲食店', sub: '（提供のみ・小売免許なし）', color: 'bg-slate-50' },
  { key: 'restaurant_retail', label: '飲食店', sub: '（小売免許あり・テイクアウト販売含む）', color: 'bg-teal-50' },
];

const docCategories = [
  {
    category: '作成が必要な帳簿',
    docs: [
      {
        name: '酒類受払帳',
        desc: '酒類の受け入れ（仕入れ）と払い出し（販売）を記録する法定帳簿',
        maker: false, wholesale: true, retail: true, restaurant: false, restaurant_retail: true,
        makerNote: '製造者は受払帳ではなく製造帳簿・移出帳を作成',
        restaurantNote: '店内提供のみなら義務なし',
      },
      {
        name: '製造帳簿（仕込帳・製成帳等）',
        desc: '原料の使用量・製造工程・製成数量・アルコール度数などを記録',
        maker: true, wholesale: false, retail: false, restaurant: false, restaurant_retail: false,
        makerNote: '酒類の種類によって記載事項が異なる',
      },
      {
        name: '移出帳',
        desc: '製造場から酒類を出荷した日時・相手先・品目・数量・税額を記録',
        maker: true, wholesale: false, retail: false, restaurant: false, restaurant_retail: false,
        makerNote: '酒税の申告額算定の基礎となる重要書類',
      },
      {
        name: '棚卸記録',
        desc: '期末時点の在庫品目・数量を実査して作成する記録',
        maker: true, wholesale: 'rec', retail: 'rec', restaurant: false, restaurant_retail: 'rec',
        makerNote: '製造者は法定義務あり',
        wholesaleNote: '義務ではないが税務調査対応上強く推奨',
        retailNote: '義務ではないが税務調査対応上強く推奨',
      },
    ],
  },
  {
    category: '保存が必要な書類',
    docs: [
      {
        name: '仕入に関する納品書・請求書',
        desc: '酒類を仕入れた際に発行される証拠書類',
        maker: true, wholesale: true, retail: true, restaurant: false, restaurant_retail: true,
        restaurantNote: '免許なし飲食店の酒類仕入伝票は酒税法上の保存義務なし（会計上は保存推奨）',
      },
      {
        name: '販売に関する請求書・納品書',
        desc: '業者へ販売した際に発行する証拠書類',
        maker: true, wholesale: true, retail: 'rec', restaurant: false, restaurant_retail: 'rec',
        retailNote: '一般消費者への小売は義務なし。業者への販売分は保存推奨',
      },
      {
        name: '酒類製造免許証',
        desc: '国税庁から交付された製造免許の原本',
        maker: true, wholesale: false, retail: false, restaurant: false, restaurant_retail: false,
      },
      {
        name: '酒類販売業免許証',
        desc: '国税庁から交付された販売業免許の原本',
        maker: false, wholesale: true, retail: true, restaurant: false, restaurant_retail: true,
      },
      {
        name: '酒税申告書の控え',
        desc: '提出した酒税申告書の写し',
        maker: true, wholesale: false, retail: false, restaurant: false, restaurant_retail: false,
        makerNote: '申告書の控えを保存することが推奨される',
      },
    ],
  },
  {
    category: '遵守が必要なルール',
    docs: [
      {
        name: '未成年者への販売・提供禁止',
        desc: '20歳未満の者への酒類の販売・提供は全業種で禁止',
        maker: false, wholesale: true, retail: true, restaurant: true, restaurant_retail: true,
      },
      {
        name: '年齢確認の実施',
        desc: '外見・状況から20歳未満が疑われる場合の年齢確認',
        maker: false, wholesale: false, retail: true, restaurant: true, restaurant_retail: true,
      },
      {
        name: '深夜酒類提供飲食店の届出（風営法）',
        desc: '深夜0時〜翌6時に酒類を提供する場合は警察署へ届出',
        maker: false, wholesale: false, retail: false, restaurant: true, restaurant_retail: true,
        restaurantNote: '酒税法ではなく風営法の義務',
      },
    ],
  },
];

const Cell = ({ value, note }) => {
  if (value === true) return <td className="px-3 py-3 border-b border-slate-100 text-center align-top"><Yes /></td>;
  if (value === false) return <td className="px-3 py-3 border-b border-slate-100 text-center align-top"><No /></td>;
  if (value === 'rec') return (
    <td className="px-3 py-3 border-b border-slate-100 text-center align-top">
      <Rec />
      <div className="text-xs text-orange-500 mt-0.5">推奨</div>
    </td>
  );
  return <td className="px-3 py-3 border-b border-slate-100 text-center align-top"><No /></td>;
};

export default function ObligationMatrix() {
  const [activeType, setActiveType] = useState(null);

  return (
    <ContentLayout
      section="chobo"
      title="業種別 帳簿・書類の義務マトリクス"
      description="酒類製造者・卸売業者・小売業者・飲食店（免許あり/なし）それぞれが作成・保存しなければならない書類と遵守すべきルールを一覧で整理します。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/what-is-ledger' }, { label: '業種別 義務マトリクス' }]}
    >

      <Section title="凡例と業種の定義">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-3 text-sm">凡例</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3"><Yes /><span className="text-slate-700">作成・保存・遵守が<strong>義務</strong></span></div>
              <div className="flex items-center gap-3"><Rec /><span className="text-orange-600 font-medium">義務ではないが強く推奨</span></div>
              <div className="flex items-center gap-3"><No /><span className="text-slate-400">酒税法上の義務なし</span></div>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-3 text-sm">保存期間（共通）</div>
            <div className="text-sm text-slate-700 space-y-1">
              <div>酒類受払帳は<strong className="text-navy-800">帳簿閉鎖後5年間</strong>保存が義務（酒税法）</div>
              <div className="text-xs text-slate-500 mt-2">※ 法人税法・所得税法上の一般帳簿は7年。実務上は7年保存する事業者も多い。</div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">業種</th>
                <th className="text-left px-4 py-3">説明</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">免許の種類</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '酒類製造者', desc: '日本酒・ビール・焼酎等を製造するメーカー', license: '酒類製造免許' },
                { type: '酒類卸売業者', desc: '製造者から仕入れ、小売業者等に販売する問屋・ディストリビューター', license: '酒類卸売業免許' },
                { type: '酒類小売業者', desc: '一般消費者に店頭販売する酒屋・スーパー・コンビニ等', license: '一般酒類小売業免許' },
                { type: '飲食店（提供のみ）', desc: '居酒屋・レストランで酒類をグラス・ボトルで提供するだけで販売は行わない', license: '不要' },
                { type: '飲食店（小売免許あり）', desc: '飲食提供に加え、未開封ボトル等のテイクアウト販売も行う', license: '一般酒類小売業免許 ＋飲食営業許可' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-navy-800 whitespace-nowrap">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.desc}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600 text-xs">{r.license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="義務マトリクス">
        {docCategories.map((cat, catIdx) => (
          <div key={catIdx} className="mb-8">
            <div className="bg-navy-700 text-white text-sm font-bold px-4 py-2 rounded-t-lg">{cat.category}</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm border border-slate-200 rounded-b-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left px-4 py-3 min-w-[200px]">書類・帳簿</th>
                    {businessTypes.map(bt => (
                      <th key={bt.key} className={`px-2 py-3 text-center text-xs min-w-[80px] leading-tight ${bt.color}`}>
                        <div className="font-bold text-slate-800">{bt.label}</div>
                        <div className="text-slate-500 font-normal">{bt.sub}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cat.docs.map((doc, docIdx) => (
                    <tr key={docIdx} className={docIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-4 py-3 border-b border-slate-100 align-top">
                        <div className="font-semibold text-slate-900 text-sm">{doc.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{doc.desc}</div>
                      </td>
                      <Cell value={doc.maker} />
                      <Cell value={doc.wholesale} />
                      <Cell value={doc.retail} />
                      <Cell value={doc.restaurant} />
                      <Cell value={doc.restaurant_retail} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        <p className="text-xs text-slate-500">※ 上記は2026年6月時点の情報を基にした一般的な整理です。個別の状況によって異なる場合があるため、所轄税務署または税理士にご確認ください。</p>
      </Section>

      <Section title="業種別 詳細解説">
        <div className="space-y-5">
          {[
            {
              type: '酒類製造者',
              color: 'border-purple-400 bg-purple-50',
              headerColor: 'text-purple-800',
              summary: '最も義務が複雑。酒税の申告・納付義務者であり、製造工程の詳細記録が必要。',
              points: [
                '酒税の申告・納付義務あり（移出数量×税率）',
                '製造帳簿・移出帳など複数の法定帳簿を作成・保存',
                '酒類受払帳は不要（代わりに移出帳が機能を担う）',
                '国税庁の定める様式・記載事項に従った帳簿作成が必要',
              ],
            },
            {
              type: '酒類卸売業者',
              color: 'border-blue-400 bg-blue-50',
              headerColor: 'text-blue-800',
              summary: '酒類受払帳の作成が必要。取引量が多く、全取引に相手先の記録が必要。',
              points: [
                '酒類受払帳を品目別に作成・保存（5年）',
                '受け入れ（メーカーからの仕入れ）と払い出し（小売業者等への販売）を記録',
                '全取引が業者間取引のため、販売先の名称・住所の記録が必須',
                '仕入伝票・販売伝票を5年間保存',
              ],
            },
            {
              type: '酒類小売業者',
              color: 'border-indigo-400 bg-indigo-50',
              headerColor: 'text-indigo-800',
              summary: '酒類受払帳の作成が必要。一般消費者への販売は日次集計でよい。',
              points: [
                '酒類受払帳を品目別に作成・保存（5年）',
                '仕入は1取引ごとに仕入先・品目・数量を記録',
                '一般消費者への販売は日次集計でよい（販売先の個別記録不要）',
                '業者（飲食店等）への販売は相手先の名称・住所も記録',
                '仕入納品書・請求書を5年間保存',
              ],
            },
            {
              type: '飲食店（店内提供のみ）',
              color: 'border-slate-300 bg-slate-50',
              headerColor: 'text-slate-600',
              summary: '酒税法上の帳簿義務なし。ただし販売規制の遵守は必要。',
              points: [
                '酒税法上の帳簿作成義務なし（酒類受払帳は不要）',
                '仕入伝票の保存義務もなし（会計・税務上の観点から保存は推奨）',
                '未成年者への酒類提供禁止・年齢確認は必須',
                '深夜0時〜翌6時の提供は風営法に基づく届出が必要',
              ],
            },
            {
              type: '飲食店（小売免許あり・テイクアウト販売含む）',
              color: 'border-teal-400 bg-teal-50',
              headerColor: 'text-teal-800',
              summary: '小売業者と同様の義務が追加される。飲食提供分と販売分を分けて管理するとよい。',
              points: [
                '酒類受払帳の作成が義務（小売業免許取得後）',
                '飲食提供用と販売用の仕入を区別して記録すると管理しやすい',
                'テイクアウト販売分の払い出しを日次集計で記録',
                '仕入伝票・納品書を5年間保存',
                '未成年者への販売禁止・年齢確認も義務',
              ],
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border-2 p-5 ${item.color}`}>
              <div className={`font-bold text-lg mb-1 ${item.headerColor}`}>{item.type}</div>
              <p className="text-sm text-slate-600 mb-3">{item.summary}</p>
              <ul className="space-y-1.5">
                {item.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="よくある誤解">
        <div className="space-y-3">
          {[
            {
              wrong: '「製造者も酒類受払帳を作る必要がある」',
              right: '誤りです。酒類受払帳は販売業者（小売・卸売）の法定帳簿です。製造者は移出帳・製造帳簿を作成します。',
            },
            {
              wrong: '「飲食店は酒税法上の帳簿義務が一切ない」',
              right: '店内提供のみなら原則正しい。ただし、小売業免許を取得してテイクアウト販売を行う場合は酒類受払帳の作成が必要です。',
            },
            {
              wrong: '「仕入伝票は酒類受払帳と別に保存しなくていい」',
              right: '誤りです。仕入伝票・納品書は酒類受払帳の証拠書類として同じく5年間保存が必要です。帳簿だけでは証拠として不十分です。',
            },
            {
              wrong: '「卸売業者への販売なら小売業免許は不要」',
              right: '誤りです。卸売業者への販売は卸売業免許が必要です。小売業免許（一般酒類小売業免許）は一般消費者への販売に限られます。',
            },
            {
              wrong: '「複数店舗なら本社でまとめて帳簿管理できる」',
              right: '誤りです。酒類受払帳は免許を取得した販売場ごとに備え付ける義務があります。本社での一括管理は記帳義務違反です。',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="font-bold text-red-600 text-sm mb-1">✗ よくある誤解：{item.wrong}</div>
              <div className="text-sm text-slate-700"><span className="text-green-600 font-bold">→ </span>{item.right}</div>
            </div>
          ))}
        </div>
      </Section>

    </ContentLayout>
  );
}
