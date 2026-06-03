import React from 'react';
import ContentLayout from '../../layout/ContentLayout';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function CommonMistakes() {
  return (
    <ContentLayout
      section="chobo"
      title="よくあるミス＆対策"
      description="酒類帳簿の記録でよく発生するミスとその防止策を、実務的な観点から整理します。税務調査で指摘されやすいポイントも含めて解説します。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/what-is-ledger' }, { label: 'よくあるミス＆対策' }]}
    >
      <Section title="記録に関するミス">
        <div className="space-y-4">
          {[
            {
              mistake: '品目の記載が曖昧（「お酒」「ビール系」など）',
              risk: '酒税法上の品目区分で記載していない場合、帳簿として不適切とみなされる可能性がある。',
              fix: '「ビール」「その他の発泡性酒類（新ジャンル）」「清酒」など酒税法の品目区分を使用する。ラベルや仕入伝票で正式品目を確認する。',
              severity: 'high',
            },
            {
              mistake: '仕入先の住所を記載していない',
              fix: '仕入先の正式名称と住所は必須記載事項。最初に仕入先ごとのマスターリストを作成しておき、コピペで対応すると効率的。',
              risk: '必須記載事項の漏れとして過怠税の対象になる可能性がある。',
              severity: 'high',
            },
            {
              mistake: '仕入記録を月末にまとめて記入している',
              fix: '届いた日に記録することが原則。日々の記録が難しい場合でも週1回程度は記録する運用にする。',
              risk: '後から記録すると数量の記憶が曖昧になり、実際と帳簿が合わなくなる可能性がある。',
              severity: 'medium',
            },
            {
              mistake: '返品・廃棄の記録を残していない',
              fix: '返品・廃棄が発生したら「返品」「廃棄」と明記して帳簿に記録。理由（品質劣化・破損等）も合わせて記録する。',
              risk: '帳簿残高と実在庫に差異が生じ、棚卸差異の説明ができなくなる。',
              severity: 'medium',
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border p-5 ${item.severity === 'high' ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'}`}>
              <div className="flex items-start gap-3 mb-3">
                <span className={`text-xs font-bold px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${item.severity === 'high' ? 'bg-red-200 text-red-800' : 'bg-orange-200 text-orange-800'}`}>
                  {item.severity === 'high' ? '要注意' : '注意'}
                </span>
                <div className="font-bold text-slate-900">{item.mistake}</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <div className="text-xs font-bold text-red-600 mb-1">リスク</div>
                  <p className="text-slate-700">{item.risk}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <div className="text-xs font-bold text-green-600 mb-1">対策</div>
                  <p className="text-slate-700">{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="保存に関するミス">
        <div className="space-y-4">
          {[
            {
              mistake: '仕入伝票（納品書・領収書）を捨ててしまう',
              risk: '帳簿の証拠書類がなくなるため、税務調査で記録の正確性を証明できない。',
              fix: '仕入伝票は帳簿とセットで5年間保存。月ごとにファイリングして整理する。',
              severity: 'high',
            },
            {
              mistake: '「もう古いから」と5年経つ前に廃棄してしまう',
              risk: '保存期間内の廃棄は帳簿保存義務違反。刑事罰の対象になる可能性がある。',
              fix: '帳簿に廃棄可能年を記載しておき、5年経過後に廃棄するルールを徹底する。',
              severity: 'high',
            },
            {
              mistake: 'Excelのファイルを上書きして過去データが消える',
              risk: '過去の取引記録が参照できなくなり、税務調査時に証拠を提示できない。',
              fix: '年度ごとに別ファイルで保存する。クラウドストレージ（Google Drive等）を使いバックアップを自動化する。',
              severity: 'medium',
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border p-5 ${item.severity === 'high' ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'}`}>
              <div className="flex items-start gap-3 mb-3">
                <span className={`text-xs font-bold px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${item.severity === 'high' ? 'bg-red-200 text-red-800' : 'bg-orange-200 text-orange-800'}`}>
                  {item.severity === 'high' ? '要注意' : '注意'}
                </span>
                <div className="font-bold text-slate-900">{item.mistake}</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <div className="text-xs font-bold text-red-600 mb-1">リスク</div>
                  <p className="text-slate-700">{item.risk}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <div className="text-xs font-bold text-green-600 mb-1">対策</div>
                  <p className="text-slate-700">{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="棚卸・在庫管理のミス">
        <div className="space-y-4">
          {[
            { mistake: '棚卸を年1回しか行わず、差異の原因が不明になる', risk: '棚卸差異が蓄積し、帳簿と実在庫の乖離が大きくなる。', fix: '少なくとも月次（理想は週次）で帳簿残高と実在庫を照合する。差異は都度原因を確認・記録する。' },
            { mistake: '棚卸表を作成・保存していない', risk: '年末在庫の証拠書類がなく、翌年の仕入・販売記録との整合が取れない。', fix: '棚卸の都度、日付・担当者・品目別数量を記載した棚卸表を作成し帳簿とともに保存する。' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border bg-yellow-50 border-yellow-200 p-5">
              <div className="font-bold text-slate-900 mb-3">⚠️ {item.mistake}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-yellow-100">
                  <div className="text-xs font-bold text-red-600 mb-1">リスク</div>
                  <p className="text-slate-700">{item.risk}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <div className="text-xs font-bold text-green-600 mb-1">対策</div>
                  <p className="text-slate-700">{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="ミス防止チェックリスト">
        <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
          <div className="font-bold text-navy-800 mb-4">日々の運用で確認すべき項目</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              '仕入は届いた日（または翌営業日）に記録している',
              '品目は酒税法上の品目区分で記載している',
              '仕入先の名称・住所を記載している',
              '仕入伝票（納品書・請求書）を保管している',
              '返品・廃棄が発生した場合は帳簿に記録している',
              '月1回以上、帳簿残高と実在庫を照合している',
              '帳簿ファイルのバックアップを定期的に取っている',
              '5年間の保存ルールに従って書類を管理している',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-5 h-5 border-2 border-navy-400 rounded flex-shrink-0 mt-0.5"></div>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </ContentLayout>
  );
}
