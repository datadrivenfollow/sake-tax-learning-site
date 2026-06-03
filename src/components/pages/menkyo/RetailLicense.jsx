import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

const Step = ({ num, title, sub, children, color = 'bg-navy-700' }) => (
  <div className="flex gap-4 mb-5">
    <div className={`${color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5`}>{num}</div>
    <div className="flex-1">
      <div className="font-bold text-slate-900 mb-0.5">{title}</div>
      {sub && <div className="text-xs text-slate-500 mb-2">{sub}</div>}
      <div className="text-sm text-slate-700 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function RetailLicense() {
  return (
    <ContentLayout
      section="menkyo"
      title="一般酒類小売業免許の申請ガイド"
      description="一般酒類小売業免許の申請に必要な書類（個人・法人別）、費用（申請手数料0円）、審査期間（約2ヶ月）、欠格事由を解説。申請から免許取得までの流れをステップで確認できます。"
      breadcrumb={[{ label: '申請・免許編', href: '/menkyo/retail-license' }, { label: '一般酒類小売業免許 申請ガイド' }]}
    >

      <Section title="一般酒類小売業免許とは">
        <p className="text-slate-700 leading-relaxed mb-4">
          一般消費者に対して酒類を販売する事業（酒屋・スーパーの酒類コーナー・コンビニ・ドラッグストアなど）を行うには、所轄の税務署から「一般酒類小売業免許」を取得する必要があります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {[
            { label: '申請先', value: '所轄の税務署（販売場の所在地）', icon: '🏛️' },
            { label: '審査期間', value: '申請から約2ヶ月', icon: '⏱️' },
            { label: '申請手数料', value: '0円（無料）', icon: '💴' },
          ].map((item, i) => (
            <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-xs text-navy-600 mb-1">{item.label}</div>
              <div className="font-bold text-navy-800">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-slate-700">
          <strong className="text-amber-800">注意：</strong> 免許を取得する前に販売を開始した場合、酒税法違反（無免許販売）となり、1年以下の懲役または50万円以下の罰金が科される可能性があります。必ず免許を取得してから販売を開始してください。
        </div>
      </Section>

      <Section title="申請から取得までの流れ">
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <Step num="1" title="事前準備・欠格事由の確認" sub="開業予定の3〜4ヶ月前">
            自分（または法人の役員）が欠格事由に該当しないか確認します。欠格事由に該当すると申請しても却下されます。主な欠格事由は次セクションで解説します。
          </Step>
          <Step num="2" title="税務署へ事前相談" sub="申請の2〜3ヶ月前">
            販売場の所在地を管轄する税務署の酒類担当窓口（酒類指導官）に事前相談します。必要書類の確認・販売場の要件確認・申請手続きの説明を受けます。予約が必要な場合があります。
          </Step>
          <Step num="3" title="申請書類の収集・作成" sub="申請の1〜2ヶ月前">
            税務署の指定する書類を収集・作成します。個人と法人で必要書類が異なります。詳細は次セクションをご参照ください。
          </Step>
          <Step num="4" title="申請書の提出" sub="開業予定の2ヶ月前">
            書類一式を所轄税務署に提出します。書類の不備があると審査が遅れるため、事前相談で確認した内容を漏れなく揃えます。
          </Step>
          <Step num="5" title="審査期間" sub="申請から約2ヶ月">
            税務署が申請内容を審査します。審査中に追加書類の提出や現地確認が行われる場合があります。審査状況は担当窓口に問い合わせ可能です。
          </Step>
          <Step num="6" title="免許交付・販売開始" sub="審査完了後">
            審査が通れば免許証が交付されます。免許証を受け取った日から酒類の販売が可能です。免許証は販売場に掲示・保管します。
          </Step>
        </div>
      </Section>

      <Section title="必要書類一覧">
        <div className="flex gap-2 mb-5">
          {['個人', '法人'].map((label, i) => (
            <div key={i} className={`px-4 py-1.5 rounded-lg text-sm font-semibold ${i === 0 ? 'bg-navy-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
              {label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">個人で申請する場合</div>
            <ul className="space-y-2 text-sm">
              {[
                { doc: '酒類小売業免許申請書', note: '税務署の書式。署名・押印が必要' },
                { doc: '申請者の履歴書', note: '直近の職歴等を記入' },
                { doc: '住民票の写し', note: '申請日前1〜3ヶ月以内のもの' },
                { doc: '販売場の図面', note: '販売場の見取り図・位置図' },
                { doc: '土地・建物の使用権を証明する書類', note: '賃貸の場合は賃貸借契約書のコピー等' },
                { doc: '酒類の仕入先や販売先の概要書', note: '取引先・販売方法の説明' },
                { doc: '最終事業年度の収支計算書', note: '事業の経済的基礎を示す書類' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-navy-600 font-bold flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <div className="font-medium text-slate-900">{item.doc}</div>
                    <div className="text-slate-500 text-xs">{item.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">法人で申請する場合</div>
            <ul className="space-y-2 text-sm">
              {[
                { doc: '酒類小売業免許申請書', note: '税務署の書式' },
                { doc: '定款の写し', note: '事業目的に酒類販売が含まれていること' },
                { doc: '登記事項証明書（履歴事項全部証明書）', note: '申請日前1〜3ヶ月以内のもの' },
                { doc: '株主名簿・社員名簿', note: '10%以上の株式を持つ株主の名簿' },
                { doc: '役員名簿・各役員の履歴書', note: '全役員分が必要' },
                { doc: '最終事業年度の貸借対照表・損益計算書', note: '経営状況を示す財務書類' },
                { doc: '販売場の図面・使用権書類', note: '個人申請と同様' },
                { doc: '酒類の仕入先や販売先の概要書', note: '取引先・販売方法の説明' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-navy-600 font-bold flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <div className="font-medium text-slate-900">{item.doc}</div>
                    <div className="text-slate-500 text-xs">{item.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-500">※ 必要書類は税務署・申請内容によって異なる場合があります。事前相談で正確な書類リストを確認してください。</p>
      </Section>

      <Section title="主な欠格事由（却下される主な理由）">
        <p className="text-slate-700 leading-relaxed mb-5">
          以下に該当する場合、免許申請をしても却下されます。開業前に確認が必要です。
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">欠格事由の種類</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">内容</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '刑事上の欠格事由', content: '禁錮以上の刑に処せられ、刑の執行完了から3年を経過していない者' },
                { type: '酒税関連の欠格事由', content: '酒税法違反で罰金刑を受け、刑の執行完了から3年を経過していない者' },
                { type: '免許取消の欠格事由', content: '酒類の製造・販売免許を取消され、取消日から2年を経過していない者' },
                { type: '経営能力の要件', content: '経営の基礎が薄弱と認められる者（債務超過・設立直後で実績なし等）' },
                { type: '法令遵守の要件', content: '申請者や役員が法令を遵守する能力がないと認められる者' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50/30'}>
                  <td className="px-4 py-3 border-b border-slate-200 font-semibold text-red-800">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{r.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-navy-50 border border-navy-100 rounded-lg p-4 text-sm text-slate-700">
          <strong className="text-navy-800">注：</strong> かつて存在した「距離基準（コンビニ等からの距離制限）」は2003年に廃止されています。現在は距離に関わらず申請できます。
        </div>
      </Section>

      <Section title="申請にかかる費用">
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">費用の種類</th>
                <th className="text-right px-4 py-3">目安金額</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">備考</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '申請手数料（税務署）', price: '0円', note: '酒類小売業免許の申請手数料は不要' },
                { type: '住民票・登記証明書等の取得費用', price: '数百〜数千円', note: '各証明書の発行手数料' },
                { type: '行政書士への依頼費用（任意）', price: '5万〜15万円程度', note: '自分で申請する場合は不要。書類作成・窓口対応を依頼する場合' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 border-b border-slate-200">{r.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-right font-bold text-navy-800">{r.price}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600 text-xs">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="よくある質問">
        <div className="space-y-3">
          {[
            { q: '開業前に申請できますか？', a: 'はい。開業予定日の2〜3ヶ月前に申請するのが一般的です。審査期間を考慮して早めに動き始めることが重要です。' },
            { q: '法人成り（個人→法人化）した場合は再申請が必要ですか？', a: 'はい。個人で取得した免許は法人には引き継がれません。法人名義で新たに申請が必要です。' },
            { q: 'ネット販売（EC）も一緒にしたい場合は？', a: '別途「通信販売酒類小売業免許」が必要です。一般酒類小売業免許のみでは複数都道府県への通信販売はできません。' },
            { q: '申請中に販売を始めることはできますか？', a: 'できません。免許証の交付を受けた日から販売可能になります。申請中の販売は無免許販売として違法です。' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="font-bold text-slate-900 text-sm mb-1">Q: {item.q}</div>
              <div className="text-sm text-slate-700 leading-relaxed"><span className="text-navy-700 font-bold">A: </span>{item.a}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
          <strong className="text-slate-800">免責事項：</strong> 本ページは一般的な情報提供を目的としています。申請要件・必要書類は税務署・状況によって異なります。正確な情報は所轄税務署の酒類担当窓口にご確認ください。
        </div>
      </Section>

    </ContentLayout>
  );
}
