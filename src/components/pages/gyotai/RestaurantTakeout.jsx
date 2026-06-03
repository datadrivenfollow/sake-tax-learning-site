import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function RestaurantTakeout() {
  return (
    <ContentLayout
      section="gyotai"
      title="飲食店のテイクアウト酒類販売ガイド"
      description="飲食店がテイクアウトでお酒を販売する際に必要な一般酒類小売業免許の取得手順・帳簿の分け方・よくある疑問をQ&Aで解説。「提供」と「販売」の違いから確認できます。"
      breadcrumb={[{ label: '業態別編', href: '/gyotai/retailer' }, { label: '飲食店のテイクアウト販売ガイド' }]}
    >

      <Section title="まず確認：「提供」と「販売」は全く違う">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-green-50 border-2 border-green-400 rounded-xl p-5">
            <div className="font-bold text-green-700 mb-3">免許不要：店内での「提供」</div>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              コップやグラスにお酒を注いで出す、瓶を開けてテーブルに置く——これは飲食の提供であり、酒類販売業免許は不要です。
            </p>
            <div className="space-y-1 text-sm">
              {['ビールをジョッキで提供', 'ワインをボトルごとテーブルに置く（開封済み）', '焼酎のボトルキープ（開封・提供が前提）'].map((ex, i) => (
                <div key={i} className="flex items-start gap-2"><span className="text-green-600">✓</span><span>{ex}</span></div>
              ))}
            </div>
          </div>
          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5">
            <div className="font-bold text-red-700 mb-3">免許必要：「販売（テイクアウト）」</div>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              未開封の商品を販売する行為は「酒類の販売」に該当し、一般酒類小売業免許が必要です。
            </p>
            <div className="space-y-1 text-sm">
              {['未開封の缶ビールを1本単位で販売', '瓶ワインを持ち帰り用に販売', '日本酒ボトルを未開封で販売', 'ギフトセットとして酒類を販売'].map((ex, i) => (
                <div key={i} className="flex items-start gap-2"><span className="text-red-600">✗</span><span>{ex}</span></div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-slate-700">
          <strong className="text-yellow-800">グレーゾーンに注意：</strong> 「お通しにビール1缶をそのまま出す」「未開封のボトルを客が持ち帰る」は販売に該当する可能性があります。不明な場合は所轄税務署に確認することをおすすめします。
        </div>
      </Section>

      <Section title="テイクアウト販売を始めるための手順">
        <div className="space-y-4">
          {[
            {
              step: 1, title: '販売する商品・規模を決める',
              body: '何を（品目・ブランド）、どのくらいの量・頻度で販売するかを整理します。免許申請の書類（仕入先・販売方法の概要書）に記載するために必要です。',
              sub: 'ポイント：まず小さく始めるなら缶ビール・瓶ワインの2〜3品目から',
            },
            {
              step: 2, title: '税務署で事前相談',
              body: '販売場の所在地を管轄する税務署の酒類担当窓口（酒類指導官）に相談します。飲食店は既に食品衛生法の営業許可を持っているため、販売場の要件は比較的満たしやすいです。',
              sub: '所要時間：30分〜1時間程度',
            },
            {
              step: 3, title: '一般酒類小売業免許を申請',
              body: '申請書類を揃えて税務署に提出します。審査期間は約2ヶ月。この間は販売できません。書類不備があると審査が遅れるため、事前確認を徹底します。',
              sub: '申請手数料：0円（無料）',
            },
            {
              step: 4, title: '帳簿の準備',
              body: '免許取得前から帳簿の様式・管理方法を決めておきましょう。飲食提供の仕入れとテイクアウト販売の仕入れを分けて管理する体制を作ります。',
              sub: 'おすすめ：Excelで仕入れシートと払い出しシートを作成',
            },
            {
              step: 5, title: '免許取得後に販売開始',
              body: '免許証を受け取った日から販売可能です。免許証は販売場に掲示し、帳簿管理を開始します。',
              sub: '免許取得前の販売は酒税法違反',
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5">
              <div className="bg-navy-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
              <div className="flex-1">
                <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                <p className="text-sm text-slate-700 leading-relaxed mb-2">{item.body}</p>
                <div className="text-xs text-navy-600 bg-navy-50 rounded px-3 py-1 inline-block">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="帳簿の管理：飲食提供とテイクアウトを分ける">
        <p className="text-slate-700 leading-relaxed mb-4">
          小売業免許を取得した飲食店では、酒類受払帳の作成義務が生じます。ただし、帳簿に記録するのは<strong>テイクアウト販売として仕入れた酒類のみ</strong>です。店内で飲食客に提供するために仕入れた酒類は記録対象外です。
        </p>
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">仕入れの用途</th>
                <th className="text-center px-4 py-3">酒類受払帳への記録</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">理由</th>
              </tr>
            </thead>
            <tbody>
              {[
                { use: '飲食客への提供用（ビール・ワイン等）', required: false, reason: '飲食提供は酒類販売業免許の対象外のため帳簿記録不要' },
                { use: 'テイクアウト販売用（未開封ボトル・缶等）', required: true, reason: '小売業免許に基づく販売のため帳簿記録が必要' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200">{r.use}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-center">
                    {r.required
                      ? <span className="text-red-600 font-bold text-sm bg-red-50 px-3 py-1 rounded">必要</span>
                      : <span className="text-slate-400 text-sm bg-slate-100 px-3 py-1 rounded">不要</span>}
                  </td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600 text-sm">{r.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
          <div className="font-bold text-navy-800 mb-3">管理を分けるための実践的な方法</div>
          <div className="space-y-2 text-sm text-slate-700">
            {[
              '同じ品目でも「店内提供用」と「テイクアウト販売用」を別発注・別在庫として管理する',
              'Excelの仕入れシートに「用途」列を追加し、「提供用」「販売用」で分類する',
              'テイクアウト専用の棚・冷蔵庫を設けると在庫管理がしやすくなる',
              '仕入れ伝票も「提供用」「販売用」で分けて保管すると帳簿照合が楽になる',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-navy-600 flex-shrink-0">•</span>{item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="テイクアウト販売に関するよくある質問">
        <div className="space-y-3">
          {[
            {
              q: 'ランチ営業でビールを1本ずつ販売したい。免許は必要？',
              a: '未開封のビール缶を販売する場合は一般酒類小売業免許が必要です。「飲食提供の一環」とみなせる状況（グラスに注いで出す等）であれば不要ですが、未開封のまま渡す場合は販売に該当します。',
            },
            {
              q: '今は店内提供のみ。テイクアウト販売を追加するには？',
              a: '一般酒類小売業免許を新たに申請する必要があります。既存の飲食営業許可（保健所の許可）はそのまま有効です。申請から取得まで約2ヶ月かかるため、販売開始の2〜3ヶ月前から準備を始めることをおすすめします。',
            },
            {
              q: 'ネット通販でもテイクアウト販売したい場合は？',
              a: '複数都道府県の消費者に販売する場合は、一般酒類小売業免許とは別に「通信販売酒類小売業免許」が必要です。同一都道府県内のみのデリバリー等は一般小売業免許の範囲内となる場合がありますが、税務署に確認することを推奨します。',
            },
            {
              q: 'お酒のギフトセットを販売してもいい？',
              a: '一般酒類小売業免許があれば可能です。ギフトセットの内容（酒類の品目）を帳簿に記録します。お中元・お歳暮時期に需要が高まる商品ですが、免許の範囲内で販売することが前提です。',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="font-bold text-slate-900 text-sm mb-1">Q: {item.q}</div>
              <div className="text-sm text-slate-700 leading-relaxed"><span className="text-navy-700 font-bold">A: </span>{item.a}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
          <strong className="text-slate-800">免責事項：</strong> 本ページは一般的な情報提供を目的としています。個別の状況については所轄税務署または行政書士にご相談ください。
        </div>
      </Section>

    </ContentLayout>
  );
}
