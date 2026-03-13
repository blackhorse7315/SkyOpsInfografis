import { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, FileJson, Copy, Check } from 'lucide-react';

interface BlueprintPreviewProps {
  blueprint: string | null;
}

export function BlueprintPreview({ blueprint }: BlueprintPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (blueprint) {
      // Try to copy the formatted version if possible
      let textToCopy = blueprint;
      try {
        textToCopy = JSON.stringify(JSON.parse(blueprint), null, 2);
      } catch (e) {
        // Ignore
      }
      
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  let formattedBlueprint = blueprint;
  if (blueprint) {
    try {
      const parsed = JSON.parse(blueprint);
      formattedBlueprint = JSON.stringify(parsed, null, 2);
    } catch (e) {
      // Keep as is if parsing fails
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl p-4 md:p-8">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
        <LayoutDashboard className="h-6 w-6 text-[#21ff94]" />
        <h2 className="text-2xl font-bold text-white">DESIGN BLUEPRINT</h2>
      </div>

      <div className="min-h-[300px] rounded-2xl bg-[#0f172a] p-6 shadow-lg border border-white/5 relative">
        {!formattedBlueprint ? (
          <div className="flex h-full min-h-[250px] flex-col items-center justify-center text-center opacity-50">
            <FileJson className="mb-4 h-12 w-12 text-slate-500" />
            <p className="text-lg font-medium text-slate-300">Blueprint System</p>
            <p className="text-sm text-slate-500">Configure parameters to begin</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <button
              onClick={handleCopy}
              className="absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-[#21ff94]/10 px-3 py-2 text-sm font-medium text-[#21ff94] transition-colors hover:bg-[#21ff94]/20"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy JSON'}
            </button>
            <pre className="overflow-x-auto rounded-xl bg-[#020617] p-6 pt-16 text-sm text-slate-300 border border-white/5 hide-scrollbar">
              <code className="font-mono">{formattedBlueprint}</code>
            </pre>
          </motion.div>
        )}
      </div>
    </div>
  );
}
