import { BrowserRouter, Routes, Route } from 'react-router-dom';

// トップ
import TopPage from './components/pages/TopPage';

// 基礎編
import WhatIsSakeTax from './components/pages/kiso/WhatIsSakeTax';
import Glossary from './components/pages/kiso/Glossary';
import FAQ from './components/pages/kiso/FAQ';
import WhySakeTax from './components/pages/kiso/WhySakeTax';

// 体系編
import TaxTypes from './components/pages/taikei/TaxTypes';
import FilingFlow from './components/pages/taikei/FilingFlow';
import Deadlines from './components/pages/taikei/Deadlines';
import Reforms from './components/pages/taikei/Reforms';
import Penalties from './components/pages/taikei/Penalties';
import ConsumptionTax from './components/pages/taikei/ConsumptionTax';
import LedgerRequirements from './components/pages/taikei/LedgerRequirements';

// 帳簿編
import HowToWrite from './components/pages/chobo/HowToWrite';
import Template from './components/pages/chobo/Template';
import TemplateDownload from './components/pages/chobo/TemplateDownload';
import MethodComparison from './components/pages/chobo/MethodComparison';
import WhatIsLedger from './components/pages/chobo/WhatIsLedger';
import ObligationMatrix from './components/pages/chobo/ObligationMatrix';
import RequiredItems from './components/pages/chobo/RequiredItems';
import CreationSteps from './components/pages/chobo/CreationSteps';
import CommonMistakes from './components/pages/chobo/CommonMistakes';
import BestPractices from './components/pages/chobo/BestPractices';
import Digitization from './components/pages/chobo/Digitization';
import Audit from './components/pages/chobo/Audit';

// 業態別編
import RetailerGuide from './components/pages/gyotai/RetailerGuide';
import RestaurantGuide from './components/pages/gyotai/RestaurantGuide';
import RestaurantTakeout from './components/pages/gyotai/RestaurantTakeout';

// 申請・免許編
import RetailLicense from './components/pages/menkyo/RetailLicense';

// リソース
import ReformHistory from './components/pages/resources/ReformHistory';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />

        {/* 基礎編 */}
        <Route path="/kiso/sake-tax" element={<WhatIsSakeTax />} />
        <Route path="/kiso/glossary" element={<Glossary />} />
        <Route path="/kiso/faq" element={<FAQ />} />
        <Route path="/kiso/why" element={<WhySakeTax />} />

        {/* 体系編 */}
        <Route path="/taikei/tax-types" element={<TaxTypes />} />
        <Route path="/taikei/filing-flow" element={<FilingFlow />} />
        <Route path="/taikei/deadlines" element={<Deadlines />} />
        <Route path="/taikei/reforms" element={<Reforms />} />
        <Route path="/taikei/penalties" element={<Penalties />} />
        <Route path="/taikei/consumption-tax" element={<ConsumptionTax />} />
        <Route path="/taikei/ledger-requirements" element={<LedgerRequirements />} />

        {/* 帳簿編 */}
        <Route path="/chobo/how-to-write" element={<HowToWrite />} />
        <Route path="/chobo/template" element={<Template />} />
        <Route path="/chobo/template-download" element={<TemplateDownload />} />
        <Route path="/chobo/method-comparison" element={<MethodComparison />} />
        <Route path="/chobo/obligation-matrix" element={<ObligationMatrix />} />
        <Route path="/chobo/what-is-ledger" element={<WhatIsLedger />} />
        <Route path="/chobo/required-items" element={<RequiredItems />} />
        <Route path="/chobo/creation-steps" element={<CreationSteps />} />
        <Route path="/chobo/common-mistakes" element={<CommonMistakes />} />
        <Route path="/chobo/best-practices" element={<BestPractices />} />
        <Route path="/chobo/digitization" element={<Digitization />} />
        <Route path="/chobo/audit" element={<Audit />} />

        {/* 業態別編 */}
        <Route path="/gyotai/retailer" element={<RetailerGuide />} />
        <Route path="/gyotai/restaurant" element={<RestaurantGuide />} />
        <Route path="/gyotai/restaurant-takeout" element={<RestaurantTakeout />} />

        {/* 申請・免許編 */}
        <Route path="/menkyo/retail-license" element={<RetailLicense />} />

        {/* リソース */}
        <Route path="/resources/reform-history" element={<ReformHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
