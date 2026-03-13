/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InstantMode } from './components/InstantMode';
import { StandardMode } from './components/StandardMode';
import { BlueprintPreview } from './components/BlueprintPreview';
import { TabType, InstantFormData, StandardFormData } from './types';
import { generateInstantBlueprint, generateStandardBlueprint } from './services/geminiService';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('Instant');
  const [blueprint, setBlueprint] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInstantGenerate = async (data: InstantFormData) => {
    setIsLoading(true);
    setBlueprint(null);
    try {
      const result = await generateInstantBlueprint(data);
      setBlueprint(result);
      // Scroll to preview
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } catch (error) {
      alert('Gagal membuat blueprint. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStandardGenerate = async (data: StandardFormData) => {
    setIsLoading(true);
    setBlueprint(null);
    try {
      const result = await generateStandardBlueprint(data);
      setBlueprint(result);
      // Scroll to preview
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } catch (error) {
      alert('Gagal membuat blueprint. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#020617] font-sans text-slate-50 selection:bg-[#21ff94]/30">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 py-8">
        {activeTab === 'Instant' && (
          <InstantMode onGenerate={handleInstantGenerate} isLoading={isLoading} />
        )}
        {activeTab === 'Standard' && (
          <StandardMode onGenerate={handleStandardGenerate} isLoading={isLoading} />
        )}
        {(activeTab === 'Ads' || activeTab === 'Idea Corner') && (
          <div className="flex h-[400px] items-center justify-center text-slate-500">
            <p>Fitur {activeTab} sedang dalam pengembangan.</p>
          </div>
        )}

        <BlueprintPreview blueprint={blueprint} />
      </main>

      <Footer />
    </div>
  );
}
