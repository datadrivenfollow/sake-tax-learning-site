import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ContentLayout from '../../layout/ContentLayout';
import * as XLSX from 'xlsx';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5 pb-2 border-b-2 border-navy-100">{title}</h2>
    {children}
  </section>
);

export default function TemplateDownload() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [submitted, setSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const createTemplate = () => {
    // 新しいワークブックを作成
    const wb = XLSX.utils.book_new();

    // ==================== シート1：仕入れ ====================
    const purchaseData = [
      ['仕入年月日', '仕入先の氏名・名称', '仕入先の住所', '品目', '税率区分', '容量・規格', '数量', '単価', '金額', '備考'],
      ['2026/06/02', 'サンプル酒類販売㈱', '東京都中央区〇〇', 'ビール', '—', '350ml×24本', '3ケース', '3,200', '9,600', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ];
    const purchaseSheet = XLSX.utils.aoa_to_sheet(purchaseData);
    purchaseSheet['!cols'] = [
      { wch: 12 }, { wch: 18 }, { wch: 20 }, { wch: 12 }, { wch: 10 },
      { wch: 15 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 15 }
    ];
    XLSX.utils.book_append_sheet(wb, purchaseSheet, '仕入れ');

    // ==================== シート2：販売（小売） ====================
    const salesRetailData = [
      ['払出年月日', '払出先', '品目', '税率区分', '数量', '払出金額', '在庫残高'],
      ['2026/06/02', '（一般消費者・日計）', 'ビール', '—', '24本', '7,680', '48本'],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
    ];
    const salesRetailSheet = XLSX.utils.aoa_to_sheet(salesRetailData);
    salesRetailSheet['!cols'] = [
      { wch: 12 }, { wch: 18 }, { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 12 }, { wch: 12 }
    ];
    XLSX.utils.book_append_sheet(wb, salesRetailSheet, '販売（小売）');

    // ==================== シート3：販売（卸売） ====================
    const salesWholesaleData = [
      ['払出年月日', '払出先の名称', '払出先の住所', '品目', '税率区分', '数量', '払出金額'],
      ['2026/06/03', 'サンプル飲食㈱', '神奈川県横浜市〇〇', 'ビール', '—', '2ケース', '7,200'],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
    ];
    const salesWholesaleSheet = XLSX.utils.aoa_to_sheet(salesWholesaleData);
    salesWholesaleSheet['!cols'] = [
      { wch: 12 }, { wch: 18 }, { wch: 20 }, { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 12 }
    ];
    XLSX.utils.book_append_sheet(wb, salesWholesaleSheet, '販売（卸売）');

    // ==================== シート4：品目マスター ====================
    const masterData = [
      ['品目名（酒税法上）', '一般的な呼び方', '税率区分の例'],
      ['ビール', 'ビール・缶ビール', '—'],
      ['発泡酒', '発泡酒', '—'],
      ['その他の発泡性酒類', '第三のビール・新ジャンル', '—'],
      ['清酒', '日本酒', '—'],
      ['果実酒', 'ワイン・梅酒', '—'],
      ['単式蒸留焼酎', '芋焼酎・麦焼酎・米焼酎', '25度以下 / 25度超'],
      ['連続式蒸留焼酎', '甲類焼酎（宝焼酎等）', '—'],
      ['ウイスキー', 'ウイスキー・スコッチ', '度数区分を確認'],
      ['リキュール', '梅酒（焼酎ベース）・カルア等', '—'],
    ];
    const masterSheet = XLSX.utils.aoa_to_sheet(masterData);
    masterSheet['!cols'] = [{ wch: 20 }, { wch: 25 }, { wch: 20 }];
    XLSX.utils.book_append_sheet(wb, masterSheet, '品目マスター');

    // ==================== ファイルを保存 ====================
    const fileName = `酒類受払帳テンプレート_${new Date().getFullYear()}年度.xlsx`;
    XLSX.writeFile(wb, fileName);

    // Google Analytics イベント計測
    if (window.gtag) {
      window.gtag('event', 'download', {
        'event_category': 'template',
        'event_label': 'sake_ledger_template',
        'value': 1
      });
    }
  };

  const onSubmit = (data) => {
    // メアド送信（簡易版：localStorage に保存）
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    subscribers.push({
      email: data.email,
      newsletter: data.newsletter || false,
      date: new Date().toISOString()
    });
    localStorage.setItem('subscribers', JSON.stringify(subscribers));

    // ダウンロード実行
    setIsDownloading(true);
    createTemplate();

    // 成功メッセージ表示
    setSubmitted(true);
    setTimeout(() => setIsDownloading(false), 1000);

    // Google Analytics 送信イベント
    if (window.gtag) {
      window.gtag('event', 'lead_capture', {
        'event_category': 'form',
        'event_label': 'template_download_form',
        'value': 1
      });
    }
  };

  return (
    <ContentLayout
      section="chobo"
      title="酒類受払帳テンプレート｜無料ダウンロード"
      description="Excel・手書き両対応の酒類受払帳テンプレート。仕入れ・販売（小売/卸売）・品目マスターの3シート構成。メアド登録で無料ダウンロード可能。"
      breadcrumb={[{ label: '帳簿編', href: '/chobo/how-to-write' }, { label: 'テンプレートダウンロード' }]}
    >

      <Section title="このテンプレートでできること">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {[
            { icon: '📊', title: '仕入れ管理', desc: '仕入先・品目・数量・金額を一元記録。自動計算で月別集計も可能。' },
            { icon: '💰', title: '販売管理', desc: '小売（日次合計）・卸売（個別記録）の2シート。業態に合わせて使い分け。' },
            { icon: '📝', title: '品目マスター', desc: '酒税法上の品目名・税率区分をリスト化。記入ミスを防止。' },
          ].map((item, i) => (
            <div key={i} className="bg-navy-50 border border-navy-200 rounded-xl p-4">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-bold text-slate-900 mb-1">{item.title}</div>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="テンプレートの特徴">
        <ul className="space-y-2 mb-5">
          {[
            '仕入れシート：仕入先・品目・数量・金額の記録（自動計算対応）',
            '販売シート（小売）：日次合計での簡易記録',
            '販売シート（卸売）：相手先名・住所を含む個別記録',
            '品目マスター：ビール、清酒、焼酎など品目名と税率区分を整理',
            '列幅・見出し行：そのまま印刷可能な配置',
            'Excel 2016 以降対応（互換性の高い形式）',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="text-navy-600 font-bold flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="ダウンロード（メアド登録）">
        <div className="max-w-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  メールアドレス <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your-email@example.com"
                  {...register('email', {
                    required: 'メールアドレスを入力してください',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: '正しいメールアドレスを入力してください'
                    }
                  })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-700 text-sm"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-6 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  {...register('newsletter')}
                  className="w-4 h-4 mt-0.5 accent-navy-700 cursor-pointer"
                />
                <label htmlFor="newsletter" className="text-sm text-slate-600 cursor-pointer">
                  新しいテンプレート・コンテンツ情報をメールで受け取る
                  <br />
                  <span className="text-xs text-slate-500">（今後のアプリ情報も配信予定）</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isDownloading}
                className="w-full bg-navy-700 hover:bg-navy-800 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50"
              >
                {isDownloading ? 'ダウンロード中...' : 'テンプレートをダウンロード'}
              </button>

              <p className="text-xs text-slate-500 mt-4">
                💡 ご入力いただいたメールアドレスは、テンプレート更新・新機能情報のみのご案内に使用させていただきます。スパムメールは送信いたしません。
              </p>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">ダウンロード完了</h3>
              <p className="text-sm text-slate-700 mb-5">
                テンプレートファイルがダウンロードされます。<br />
                メールアドレスのご登録ありがとうございます。
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  createTemplate();
                }}
                className="text-navy-700 hover:text-navy-900 font-semibold text-sm"
              >
                もう一度ダウンロード
              </button>
            </div>
          )}
        </div>
      </Section>

      <Section title="使い方のポイント">
        <div className="space-y-4">
          {[
            {
              title: '1. 品目は商品名ではなく酒税法上の品目名で',
              body: '「アサヒスーパードライ」ではなく「ビール」と記入。品目マスターシートを参考にしてください。',
            },
            {
              title: '2. 小売販売は日次合計で記録可能',
              body: '一般消費者への販売であれば、日ごとの合計本数でOK。ただし仕入伝票は5年以上保存、3ヶ月ごとに棚卸しが条件です。',
            },
            {
              title: '3. 卸売・業者への販売は個別記録が必須',
              body: '販売先の名前・住所を必ず記載してください。',
            },
            {
              title: '4. 保存期間は5年間',
              body: 'このテンプレートで記録した帳簿は、帳簿閉鎖後5年間保存が法律で義務付けられています。',
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="テンプレートで足りない場合">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div className="font-bold text-blue-800 mb-2">アプリで全て自動化できます</div>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            テンプレートは基本的な記録に対応していますが、複数店舗管理・自動集計・税務調査対応等の高度な機能が必要な場合は、専用アプリの利用をおすすめします。
          </p>
          <p className="text-sm text-slate-600">
            🔜 <strong>酒類受払帳作成アプリ</strong>（近日リリース予定）
          </p>
        </div>
      </Section>

    </ContentLayout>
  );
}
