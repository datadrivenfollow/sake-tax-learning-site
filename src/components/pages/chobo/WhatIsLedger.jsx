import React from 'react';
import { Link } from 'react-router-dom';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function WhatIsLedger() {
  return (
    <ContentLayout
      section="chobo"
      title="酒類受払帳とは"
      description="酒税法が小売業者・卸売業者に義務付ける「酒類受払帳」の正確な意味と、製造者が作成する帳簿との違い、そして各業種の義務範囲を解説します。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/what-is-ledger' }, { label: '酒類受払帳とは' }]}
    >

      <Section title="「酒類受払帳」と「酒税帳簿」の違い">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒税法に関わる帳簿について、「酒類受払帳」と「酒税帳簿」という表現が混在しますが、この2つは意味が異なります。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-navy-50 border-2 border-navy-400 rounded-xl p-5">
            <div className="font-bold text-navy-800 mb-1">酒類受払帳（正式名称）</div>
            <div className="text-xs text-navy-600 mb-3">酒税法第46条が根拠とする法定帳簿</div>
            <p className="text-sm text-slate-700 leading-relaxed">
              酒類<strong>販売業者</strong>（小売業者・卸売業者）が作成を義務付けられた帳簿の正式名称。「受払」とは受け入れ（仕入れ）と払い出し（販売）の略で、酒類の受け取りと出荷を記録する。
            </p>
            <div className="mt-3 text-xs bg-white rounded-lg p-3 border border-navy-200 text-slate-600">
              対象：酒類小売業者・卸売業者
            </div>
          </div>
          <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5">
            <div className="font-bold text-slate-700 mb-1">酒税帳簿（一般的な呼称）</div>
            <div className="text-xs text-slate-500 mb-3">法律上の正式名称ではない</div>
            <p className="text-sm text-slate-700 leading-relaxed">
              酒税に関わる帳簿類を広く指す一般的な総称。「酒税帳簿」という名称の書類は酒税法上に存在せず、酒類受払帳を指す場合もあれば、製造者の製造帳簿などを含む意味で使われることもある。
            </p>
            <div className="mt-3 text-xs bg-white rounded-lg p-3 border border-slate-200 text-slate-600">
              文脈によって指す範囲が変わる曖昧な用語
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 text-sm text-slate-700">
          <strong className="text-amber-800">重要：</strong> 酒類小売業者・卸売業者が法律上作成を求められているのは「<strong>酒類受払帳</strong>」です。本サイトでは以降この正式名称を使用します。
        </div>
      </Section>

      <Section title="製造者の帳簿と販売業者の帳簿は別物">
        <p className="text-slate-700 leading-relaxed mb-5">
          製造者（メーカー）が保管する帳簿と、小売店・卸売業者が作成する酒類受払帳は、目的も記載内容も全く異なります。
        </p>

        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">帳簿の種類</th>
                <th className="text-left px-4 py-3">作成義務者</th>
                <th className="text-left px-4 py-3">主な記録内容</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">目的</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: '酒類受払帳',
                  who: '小売業者・卸売業者',
                  content: '仕入先・品目・受け入れ数量、販売先・払い出し数量、在庫残高',
                  purpose: '酒類の流通記録。販売業者が在庫・取引を管理するため',
                },
                {
                  name: '製造帳簿（仕込帳・製成帳等）',
                  who: '酒類製造者',
                  content: '原料の種類・使用量、製造工程、仕込数量、アルコール度数、製成数量',
                  purpose: '製造工程の記録。酒税の申告額（移出量）を正確に計算するため',
                },
                {
                  name: '移出帳',
                  who: '酒類製造者',
                  content: '移出日、移出先、品目、移出数量、課税標準・税額',
                  purpose: '製造場から出荷した量の記録。これが酒税の課税根拠になる',
                },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-bold text-navy-800 border-b border-slate-200 whitespace-nowrap">{r.name}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600 text-xs">{r.who}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.content}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600 text-xs">{r.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">※ 製造者の帳簿種類は製造する酒類の種類・規模によって異なります。詳細は国税庁または所轄税務署にご確認ください。</p>
      </Section>

      <Section title="酒類受払帳の法的根拠">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒類受払帳の作成義務は酒税法第46条に定められています。同条は酒類の製造者および販売業者に対して帳簿の記載・保存を義務付けており、小売業者・卸売業者が作成する帳簿が「酒類受払帳」と称されます。
        </p>
        <div className="bg-navy-50 border-l-4 border-navy-700 rounded-r-lg p-5 text-sm text-slate-700">
          <strong className="text-navy-800">根拠法令：</strong> 酒税法第46条（帳簿の記載義務）、同法施行令、国税庁通達
        </div>
      </Section>

      <Section title="業種別 作成・保存義務の全体像">
        <p className="text-slate-700 leading-relaxed mb-4">
          業種ごとに作成・保存が必要な書類が異なります。詳細は専用ページで確認できます。
        </p>
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">業種</th>
                <th className="text-center px-3 py-3">酒類受払帳</th>
                <th className="text-center px-3 py-3">製造帳簿</th>
                <th className="text-center px-3 py-3">移出帳</th>
                <th className="text-center px-3 py-3">仕入伝票保存</th>
                <th className="text-center px-3 py-3 rounded-tr-lg">保存期間</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '酒類製造者', ukeharai: false, seizo: true, idashi: true, shiiresho: true, period: '5年' },
                { type: '酒類卸売業者', ukeharai: true, seizo: false, idashi: false, shiiresho: true, period: '5年' },
                { type: '酒類小売業者', ukeharai: true, seizo: false, idashi: false, shiiresho: true, period: '5年' },
                { type: '飲食店（提供のみ・免許なし）', ukeharai: false, seizo: false, idashi: false, shiiresho: false, period: '義務なし' },
                { type: '飲食店（小売免許あり）', ukeharai: true, seizo: false, idashi: false, shiiresho: true, period: '5年' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-800">{r.type}</td>
                  {[r.ukeharai, r.seizo, r.idashi, r.shiiresho].map((v, j) => (
                    <td key={j} className="px-3 py-3 border-b border-slate-200 text-center">
                      {v
                        ? <span className="text-green-600 font-bold text-base">○</span>
                        : <span className="text-slate-300">—</span>}
                    </td>
                  ))}
                  <td className="px-3 py-3 border-b border-slate-200 text-center text-xs font-semibold text-navy-700">{r.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm flex items-start gap-2">
          <span className="text-blue-600 font-bold flex-shrink-0">→</span>
          <span className="text-slate-700">
            業種別の義務を詳細なマトリクスで確認できる専用ページがあります：
            <Link to="/chobo/obligation-matrix" className="text-navy-700 font-bold underline ml-1">業種別 帳簿・書類の義務マトリクス</Link>
          </span>
        </div>
      </Section>

      <Section title="酒類受払帳の基本構造">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒類受払帳は「受け入れ（仕入れ）」と「払い出し（販売）」の2つのパートで構成され、品目別に在庫残高を管理します。
        </p>
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <div className="text-sm font-bold text-slate-500 mb-4 text-center">図：酒類受払帳の構造</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: '受け入れ欄（仕入れ）', color: 'bg-blue-50 border-blue-200', items: ['仕入年月日', '仕入先の氏名・名称', '仕入先の住所', '酒類の品目・容量', '受け入れ数量'] },
              { label: '払い出し欄（販売）', color: 'bg-indigo-50 border-indigo-200', items: ['払い出し年月日', '相手方の氏名・名称 ※1', '相手方の住所 ※1', '酒類の品目・容量', '払い出し数量'] },
              { label: '在庫残高欄', color: 'bg-teal-50 border-teal-200', items: ['品目別の残高数量', '受入後・払出後の残高', '月次照合の基礎数値', '棚卸との突合に使用'] },
            ].map((col, i) => (
              <div key={i} className={`rounded-lg p-4 border ${col.color}`}>
                <div className="font-bold text-slate-800 text-sm mb-3">{col.label}</div>
                <ul className="space-y-1">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-xs text-slate-600 flex items-start gap-1">
                      <span className="text-slate-400 flex-shrink-0">・</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            ※1 一般消費者への小売販売は相手方の記録不要。業者への販売は名称・住所が必須。
          </p>
        </div>
      </Section>

      <Section title="帳簿の形式・記載ルール">
        <div className="space-y-3">
          {[
            { title: '形式は自由', body: '法定記載事項が含まれていれば、手書き・Excel・会計ソフト・クラウドいずれでも可。' },
            { title: '記載のタイミング', body: '仕入・販売が発生したつど記録するのが原則。後からまとめて記録すると数量の記憶違いや漏れの原因になる。' },
            { title: '訂正方法', body: '二重線で消して正しい内容を記載する。修正テープ・修正液は不可。' },
            { title: '販売場ごとに備え付ける（重要）', body: '酒類受払帳は、酒類販売業免許を取得した販売場ごとに作成・備え付けなければならない。複数店舗を持つ場合も本社でまとめて管理することは認められず、記帳義務違反となる。' },
            { title: '備付け場所', body: '販売場（店舗）に備え付けることが原則。電子帳簿の場合は調査時に出力・表示できる環境が必要。' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="w-2 h-2 bg-navy-600 rounded-full flex-shrink-0 mt-1.5"></div>
              <div>
                <div className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

    </ContentLayout>
  );
}
