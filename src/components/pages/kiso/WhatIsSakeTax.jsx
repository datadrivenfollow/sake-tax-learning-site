import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

const InfoBox = ({ title, children }) => (
  <div className="my-6 bg-navy-50 border-l-4 border-navy-700 rounded-r-lg p-5">
    {title && <div className="font-bold text-navy-800 mb-2">{title}</div>}
    <div className="text-slate-700 text-sm leading-relaxed">{children}</div>
  </div>
);

const UpdateBox = ({ children }) => (
  <div className="my-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-5">
    <div className="font-bold text-amber-800 mb-2">2026年10月 改正予定</div>
    <div className="text-slate-700 text-sm leading-relaxed">{children}</div>
  </div>
);

export default function WhatIsSakeTax() {
  return (
    <ContentLayout
      title="酒税法とは？"
      description="酒税法の基本的な定義から、対象となる酒類の分類、免許制度の概要まで、酒類事業に関わる全ての方が押さえておくべき基礎知識を解説します。"
      breadcrumb={[
        { label: '基礎編', href: '/kiso/sake-tax' },
        { label: '酒税法とは？' },
      ]}
    >
      <Section title="酒税法の定義">
        <p className="text-slate-700 leading-relaxed mb-4">
          酒税法とは、日本で酒類（アルコール飲料）に対して「酒税」を課すことを定めた国税に関する法律です。正式には「酒税法（昭和28年法律第6号）」と呼ばれ、1953年（昭和28年）に制定されました。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          酒税法は、単に税金を定めるだけでなく、酒類の製造・販売に必要な免許制度や、事業者が守るべき帳簿記載義務なども規定しています。
        </p>
        <InfoBox title="酒税法が定める主な内容">
          <ul className="space-y-1 list-disc list-inside">
            <li>酒類の定義と分類（何が「お酒」にあたるか）</li>
            <li>酒税の税率と計算方法</li>
            <li>酒類製造免許・販売業免許の制度</li>
            <li>申告・納付義務（製造者が対象）</li>
            <li>帳簿の記載・保存義務（販売業者も対象）</li>
            <li>違反した場合の罰則</li>
          </ul>
        </InfoBox>
      </Section>

      <Section title="酒税の仕組み">
        <p className="text-slate-700 leading-relaxed mb-6">
          酒税は、酒類を「製造する者」が国に納付する税金です。消費者が直接払うのではなく、メーカーが製品価格に酒税分を転嫁する形で市場に流通します。
          酒小売店・飲食店は酒税の直接の納税義務者ではありません。
        </p>

        <div className="bg-slate-50 rounded-xl p-6 mb-6">
          <div className="text-sm font-bold text-slate-500 mb-4 text-center">図：酒税の流れ</div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            {[
              { label: '製造者', sub: 'メーカー', color: 'bg-navy-700 text-white' },
              { label: '卸売業者', sub: '問屋', color: 'bg-navy-100 text-navy-800' },
              { label: '小売業者', sub: '酒販店', color: 'bg-navy-100 text-navy-800' },
              { label: '消費者', sub: '最終購入者', color: 'bg-slate-200 text-slate-700' },
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={`${step.color} rounded-lg px-5 py-3 text-center min-w-[100px]`}>
                  <div className="font-bold text-sm">{step.label}</div>
                  <div className="text-xs opacity-75">{step.sub}</div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="text-navy-400 font-bold text-lg">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-5 flex flex-col md:flex-row items-center gap-2 justify-center">
            <div className="bg-navy-700 text-white rounded-lg px-5 py-3 text-center min-w-[100px]">
              <div className="font-bold text-sm">製造者</div>
              <div className="text-xs opacity-75">メーカー</div>
            </div>
            <div className="text-red-500 font-bold text-lg">→ 酒税を納付 →</div>
            <div className="bg-red-100 text-red-800 border border-red-200 rounded-lg px-5 py-3 text-center min-w-[100px]">
              <div className="font-bold text-sm">税務署</div>
              <div className="text-xs opacity-75">国税庁管轄</div>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">
            ※ 酒税は製品価格に含まれて卸・小売・消費者に転嫁される
          </p>
        </div>

        <InfoBox title="小売店・飲食店の立場">
          酒小売店や飲食店は、<strong>酒税を直接納める義務はありません</strong>。仕入れる酒類にはすでに酒税が含まれています。
          ただし、以下の義務が法律で定められています。
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>酒類販売業免許の取得・維持（販売・提供を行う場合）</li>
            <li>取引記録の帳簿への記載と5年間保存</li>
            <li>年齢確認などの販売規制の遵守</li>
          </ul>
        </InfoBox>
      </Section>

      <Section title="酒類の4分類">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒税法では、アルコール分1度以上の飲料を「酒類」と定義し、以下の4つに大分類しています。どの分類に該当するかによって、税率や規制内容が異なります。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">大分類</th>
                <th className="text-left px-4 py-3">主な種類</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">特徴</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '発泡性酒類', examples: 'ビール、発泡酒、その他の発泡性酒類（新ジャンル）', desc: 'アルコール分20度未満で炭酸ガスを含むもの。ビール類の税率は2026年10月に統一予定。' },
                { type: '醸造酒類', examples: '清酒（日本酒）、果実酒（ワイン）、その他の醸造酒', desc: '穀物・果実などを発酵させた酒。清酒・果実酒は2023年10月に税率が統一済み。' },
                { type: '蒸留酒類', examples: '焼酎（単式・連続式）、ウイスキー、ブランデー、スピリッツ', desc: '醸造酒を蒸留して製造。アルコール度数が高く、税率はアルコール度数に応じて計算。' },
                { type: '混成酒類', examples: 'リキュール、みりん、合成清酒、雑酒', desc: '醸造酒・蒸留酒に糖類・香料などを混合したもの。' },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-bold text-navy-800 border-b border-slate-200 whitespace-nowrap">{row.type}</td>
                  <td className="px-4 py-3 border-b border-slate-200">{row.examples}</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-2">※ 2026年6月時点。詳細な分類・税率は国税庁ウェブサイトでご確認ください。</p>
      </Section>

      <Section title="免許制度の概要">
        <p className="text-slate-700 leading-relaxed mb-5">
          酒類を製造・販売するためには、所轄の税務署（国税庁管轄）から免許を取得する必要があります。無免許での製造・販売は酒税法違反となり、厳しい罰則が適用されます。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">免許の種類</th>
                <th className="text-left px-4 py-3">対象事業者</th>
                <th className="text-left px-4 py-3">販売先</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">備考</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: '酒類製造免許', target: '酒類メーカー', buyer: '（製造のための免許）', note: '製品の種類ごとに免許が必要' },
                { name: '一般酒類小売業免許', target: '酒類小売店', buyer: '一般消費者', note: '店舗販売の基本免許' },
                { name: '通信販売酒類小売業免許', target: 'ECサイト・通販', buyer: '通信販売の消費者（複数都道府県）', note: '都道府県をまたぐ通信販売に必要' },
                { name: '酒類卸売業免許', target: '酒類卸売業者', buyer: '小売業者・製造者など', note: '取り扱う酒類の種類で区分あり' },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-bold text-navy-800 border-b border-slate-200 whitespace-nowrap">{row.name}</td>
                  <td className="px-4 py-3 border-b border-slate-200">{row.target}</td>
                  <td className="px-4 py-3 border-b border-slate-200">{row.buyer}</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="text-sm font-bold text-slate-600 mb-4 text-center">図：飲食店と小売店の免許要否</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="font-bold text-blue-800 mb-3">飲食店（居酒屋・レストランなど）</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>店内提供</strong>（コップに注いで出す）<br /><span className="text-slate-500">→ 酒類販売業免許 不要</span></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>未開封ボトルの持ち帰り販売</strong><br /><span className="text-slate-500">→ 小売業免許 必要</span></span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-navy-200">
              <div className="font-bold text-navy-800 mb-3">酒小売店（量販店・酒屋など）</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>店舗での販売</strong><br /><span className="text-slate-500">→ 一般酒類小売業免許 必要</span></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>ネット・通信販売</strong><br /><span className="text-slate-500">→ 通信販売酒類小売業免許 別途必要</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="2026年6月時点の最新動向">
        <UpdateBox>
          <p className="mb-2">
            <strong>ビール類の税率統一（第3段階）が2026年10月1日に実施予定です。</strong>
          </p>
          <p className="mb-3 text-slate-600">
            2020年10月から段階的に進められてきたビール・発泡酒・新ジャンルの税率統一が、2026年10月に最終段階を迎えます。統一後は3種類すべてが同じ税率になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-amber-100">
                  <th className="text-left px-3 py-2 border border-amber-200">種類</th>
                  <th className="text-right px-3 py-2 border border-amber-200">〜2026年9月</th>
                  <th className="text-right px-3 py-2 border border-amber-200">2026年10月〜</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'ビール', before: '高い', after: '統一税率' },
                  { type: '発泡酒（麦芽25%未満）', before: '中程度', after: '統一税率' },
                  { type: 'その他発泡性酒類（新ジャンル）', before: '低い', after: '統一税率' },
                ].map((r, i) => (
                  <tr key={i} className="bg-white">
                    <td className="px-3 py-2 border border-amber-100">{r.type}</td>
                    <td className="px-3 py-2 border border-amber-100 text-right text-slate-600">{r.before}</td>
                    <td className="px-3 py-2 border border-amber-100 text-right font-bold text-amber-700">{r.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">※ 正確な税率額は国税庁ウェブサイト（酒税関係）でご確認ください。</p>
        </UpdateBox>
      </Section>

      <Section title="まとめ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: '酒税法とは', body: '酒類に税金を課し、製造・販売の免許と帳簿義務を定めた国税法（1953年制定）。' },
            { title: '納税義務者', body: '酒税を直接納めるのは製造者（メーカー）。小売店・飲食店は納税義務なし。' },
            { title: '免許', body: '酒類を販売するには税務署から免許を取得。飲食店での店内提供は不要、テイクアウト販売は必要。' },
            { title: '事業者の義務', body: '免許の維持、仕入・販売の帳簿記載（5年保存）、年齢確認などの販売規制遵守。' },
          ].map((item, idx) => (
            <div key={idx} className="bg-navy-50 border border-navy-100 rounded-lg p-4">
              <div className="font-bold text-navy-800 mb-2">{item.title}</div>
              <p className="text-sm text-slate-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </ContentLayout>
  );
}
