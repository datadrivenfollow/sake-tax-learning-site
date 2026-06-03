import React, { useState } from 'react';
import ContentLayout from '../../layout/ContentLayout';
import { Search } from 'lucide-react';

const terms = [
  {
    category: '酒税・税制の基礎',
    color: 'bg-blue-50 border-blue-200',
    headerColor: 'bg-blue-700',
    items: [
      {
        term: '酒税',
        reading: 'しゅぜい',
        definition: '酒類（アルコール分1度以上の飲料）に対して課される国税。製造者が申告・納付義務を負い、税額は製品価格に転嫁される。',
      },
      {
        term: '課税標準',
        reading: 'かぜいひょうじゅん',
        definition: '税額を計算するための基準となる数量。酒税の場合は原則として「移出数量（製造場から出荷した量）」をキロリットル単位で計算する。',
      },
      {
        term: '税率',
        reading: 'ぜいりつ',
        definition: '課税標準1単位に対して課される税額。酒類の種類・アルコール度数・麦芽比率などによって異なる。国税庁が定め、法改正で変更される。',
      },
      {
        term: '移出',
        reading: 'いしゅつ',
        definition: '酒類を製造場から出荷すること。酒税の課税は「移出」の時点で発生する。製造場内での試飲や品質検査は移出に含まれない。',
      },
      {
        term: '申告納税方式',
        reading: 'しんこくのうぜいほうしき',
        definition: '納税者自身が税額を計算して申告・納付する方式。酒税はこの方式で、製造者が製造量と税率をもとに計算・申告する。',
      },
    ],
  },
  {
    category: '免許・許可',
    color: 'bg-indigo-50 border-indigo-200',
    headerColor: 'bg-indigo-700',
    items: [
      {
        term: '酒類製造免許',
        reading: 'しゅるいせいぞうめんきょ',
        definition: '酒類を製造するために税務署（国税庁管轄）から取得が必要な免許。製造する酒類の品目ごとに申請が必要。無免許製造は酒税法違反となる。',
      },
      {
        term: '一般酒類小売業免許',
        reading: 'いっぱんしゅるいこうりぎょうめんきょ',
        definition: '店舗で一般消費者に酒類を販売するための免許。酒類小売店が必ず取得しなければならない基本免許。所轄税務署に申請する。',
      },
      {
        term: '通信販売酒類小売業免許',
        reading: 'つうしんはんばいしゅるいこうりぎょうめんきょ',
        definition: 'インターネット・カタログ等で複数都道府県の消費者に酒類を販売するための免許。一般小売業免許とは別に取得が必要。',
      },
      {
        term: '免許の取消',
        reading: 'めんきょのとりけし',
        definition: '義務違反・不正行為などにより、税務署が免許を無効にする処分。取消後は酒類の製造・販売ができなくなる。',
      },
      {
        term: '販売場',
        reading: 'はんばいじょう',
        definition: '酒類販売業免許において、販売する場所として指定された施設。免許は販売場ごとに取得が必要で、販売場外での販売は原則認められない。',
      },
    ],
  },
  {
    category: '申告・納付・罰則',
    color: 'bg-red-50 border-red-200',
    headerColor: 'bg-red-700',
    items: [
      {
        term: '申告期限',
        reading: 'しんこくきげん',
        definition: '酒税を申告・納付しなければならない期限。製造者の場合、移出した月の翌月末日が原則。期限を過ぎると延滞税・加算税が課される。',
      },
      {
        term: '加算税',
        reading: 'かさんぜい',
        definition: '申告漏れや無申告に対して課される附帯税。無申告の場合は「無申告加算税」（本税の15〜20%）、過少申告の場合は「過少申告加算税」（10%）が課される。',
      },
      {
        term: '延滞税',
        reading: 'えんたいぜい',
        definition: '納付期限を過ぎた場合に日割りで課される附帯税。法定納期限の翌日から完納日まで計算される。税率は年によって変動する。',
      },
      {
        term: '更正処分',
        reading: 'こうせいしょぶん',
        definition: '申告内容に誤りがある場合に、税務署が正しい税額に修正する行政処分。更正処分を受けると差額の納付と加算税が求められる。',
      },
      {
        term: '過怠税',
        reading: 'かたいぜい',
        definition: '酒税法固有の制裁。帳簿を記載しない・虚偽記載した場合などに、本来の酒税額の3倍相当が課される。行政上の制裁であり刑事罰とは別。',
      },
    ],
  },
  {
    category: '帳簿・記録',
    color: 'bg-teal-50 border-teal-200',
    headerColor: 'bg-teal-700',
    items: [
      {
        term: '酒類帳簿',
        reading: 'しゅるいちょうぼ',
        definition: '酒類の仕入・販売・在庫状況などを記録する法定帳簿。酒類販売業者は酒税法により作成・保存が義務付けられている。法定記載事項を漏れなく記録する必要がある。',
      },
      {
        term: '保存期間',
        reading: 'ほぞんきかん',
        definition: '帳簿・書類を保存しなければならない期間。酒税法上の酒類受払帳は帳簿閉鎖後5年間が義務。なお法人税法・所得税法の一般的な帳簿書類は7年間のため、実務上7年保存される場合も多い。電子データによる保存も認められている。',
      },
      {
        term: '電磁的記録',
        reading: 'でんじてききろく',
        definition: '電子データとして作成・保存する記録。法令の要件を満たすことで、紙の帳簿に代えてPC・クラウド等での電子保存が認められる。',
      },
      {
        term: '棚卸',
        reading: 'たなおろし',
        definition: '期末時点での実際の在庫数量を確認し、帳簿残高と照合する作業。帳簿残高と実在庫の差異（棚卸差異）が生じた場合は原因を調査・記録する必要がある。',
      },
      {
        term: '仕入書類',
        reading: 'しいれしょるい',
        definition: '酒類を仕入れた際に発行される納品書・請求書・領収書などの証憑書類。帳簿と合わせて保存が必要で、税務調査の際に確認される。',
      },
    ],
  },
];

export default function Glossary() {
  const [search, setSearch] = useState('');

  const filtered = search.trim()
    ? terms.map(cat => ({
        ...cat,
        items: cat.items.filter(
          item =>
            item.term.includes(search) ||
            item.reading.includes(search) ||
            item.definition.includes(search)
        ),
      })).filter(cat => cat.items.length > 0)
    : terms;

  return (
    <ContentLayout
      title="基本用語集（20語）"
      description="酒税法・酒類販売に関わる重要用語を4つのカテゴリに分けて解説します。実務でよく出てくる言葉を中心に選定しました。"
      breadcrumb={[
        { label: '基礎編', href: '/kiso/sake-tax' },
        { label: '基本用語集' },
      ]}
    >
      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="用語を検索..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-300 text-sm"
        />
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-slate-500 py-12">該当する用語が見つかりませんでした。</div>
      )}

      <div className="space-y-10">
        {filtered.map((cat, catIdx) => (
          <section key={catIdx}>
            <div className={`${cat.headerColor} text-white font-bold px-4 py-2 rounded-t-lg text-sm`}>
              {cat.category}
            </div>
            <div className={`border ${cat.color.split(' ')[1]} rounded-b-lg overflow-hidden`}>
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className={`${itemIdx !== 0 ? 'border-t border-slate-100' : ''} p-4 ${cat.color}`}
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-bold text-slate-900 text-lg">{item.term}</span>
                    <span className="text-sm text-slate-400">{item.reading}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 bg-navy-50 border border-navy-100 rounded-lg p-4 text-sm text-slate-600">
        <strong className="text-navy-800">参考資料：</strong> 各用語の詳細定義・最新情報は国税庁ウェブサイト（<a href="https://www.nta.go.jp" target="_blank" rel="noopener noreferrer" className="text-navy-700 underline">www.nta.go.jp</a>）の酒税法関係法令でご確認ください。
      </div>
    </ContentLayout>
  );
}
