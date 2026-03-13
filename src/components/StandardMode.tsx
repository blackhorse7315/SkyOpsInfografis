import { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Palette, User, LayoutTemplate, Image as ImageIcon, Type, AlignLeft } from 'lucide-react';
import { StandardFormData, InfographicType, DesignTheme, OutputFormat, WatermarkPosition } from '../types';

const INFOGRAPHIC_TYPES: InfographicType[] = [
  'Timeline', 'Comparison', 'Process', 'List', 'Statistics', 'Flowchart', 'Step Guide'
];

const THEMES: DesignTheme[] = [
  'Clean & Minimal', 'Modern', '2D Flat Design', 'Playful', 'Elegant', 'Fun', 'Artistik',
  '3D Claymorphism', '3D Pixar Style', '3D Illustrated Infographic', 'Paper Graphic',
  'Glass Morphism', 'Neon', 'Hand Writing'
];

const FORMATS: OutputFormat[] = ['Portrait (4:5)', 'Feed (1:1)', 'Landscape (16:9)', 'Story (9:16)'];

interface StandardModeProps {
  onGenerate: (data: StandardFormData) => void;
  isLoading: boolean;
}

export function StandardMode({ onGenerate, isLoading }: StandardModeProps) {
  const [formData, setFormData] = useState<StandardFormData>({
    infographicType: 'List',
    theme: 'Modern',
    brandCustomization: false,
    bgColor: '#020617',
    accentColor: '#21ff94',
    creatorIdentity: false,
    createdBy: '',
    watermarkPosition: 'Pojok kanan bawah',
    mainTitle: '',
    content: '',
    format: 'Portrait (4:5)',
  });

  const handleChange = (field: keyof StandardFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-3xl space-y-8 p-4 md:p-8"
    >
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <Settings className="h-6 w-6 text-[#21ff94]" />
        <h2 className="text-2xl font-bold text-white">KONFIGURASI MANUAL</h2>
      </div>

      <div className="space-y-6 rounded-2xl bg-[#0f172a] p-6 shadow-lg border border-white/5">
        
        {/* Type & Theme */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">Jenis Infografis</label>
            <select
              value={formData.infographicType}
              onChange={(e) => handleChange('infographicType', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#020617] p-3 text-white focus:border-[#21ff94] focus:outline-none"
            >
              {INFOGRAPHIC_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">Tema</label>
            <select
              value={formData.theme}
              onChange={(e) => handleChange('theme', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#020617] p-3 text-white focus:border-[#21ff94] focus:outline-none"
            >
              {THEMES.map((theme) => (
                <option key={theme} value={theme}>{theme}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Brand Customization */}
        <div className="space-y-4 rounded-xl border border-white/5 bg-[#020617] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-slate-400" />
              <label className="font-semibold text-slate-300">Kustomisasi Brand</label>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={formData.brandCustomization}
                onChange={(e) => handleChange('brandCustomization', e.target.checked)}
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#21ff94] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#21ff94]/50"></div>
            </label>
          </div>

          {formData.brandCustomization && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="space-y-2">
                <label className="text-xs text-slate-400">Background</label>
                <div className="flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-[#0f172a] px-3">
                  <input
                    type="color"
                    value={formData.bgColor}
                    onChange={(e) => handleChange('bgColor', e.target.value)}
                    className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
                  />
                  <span className="text-sm text-slate-300">{formData.bgColor}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-400">Accent</label>
                <div className="flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-[#0f172a] px-3">
                  <input
                    type="color"
                    value={formData.accentColor}
                    onChange={(e) => handleChange('accentColor', e.target.value)}
                    className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
                  />
                  <span className="text-sm text-slate-300">{formData.accentColor}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Creator Identity */}
        <div className="space-y-4 rounded-xl border border-white/5 bg-[#020617] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-slate-400" />
              <label className="font-semibold text-slate-300">Identitas Creator</label>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={formData.creatorIdentity}
                onChange={(e) => handleChange('creatorIdentity', e.target.checked)}
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#21ff94] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#21ff94]/50"></div>
            </label>
          </div>

          {formData.creatorIdentity && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2"
            >
              <div className="space-y-2">
                <label className="text-xs text-slate-400">Created By</label>
                <input
                  type="text"
                  value={formData.createdBy}
                  onChange={(e) => handleChange('createdBy', e.target.value)}
                  placeholder="@username atau Nama Kreator"
                  className="w-full rounded-lg border border-white/10 bg-[#0f172a] p-2 text-sm text-white focus:border-[#21ff94] focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-400">Posisi Watermark</label>
                <select
                  value={formData.watermarkPosition}
                  onChange={(e) => handleChange('watermarkPosition', e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#0f172a] p-2 text-sm text-white focus:border-[#21ff94] focus:outline-none"
                >
                  <option value="Pojok kanan bawah">Pojok kanan bawah</option>
                  <option value="Pojok kiri bawah">Pojok kiri bawah</option>
                  <option value="Pojok kanan atas">Pojok kanan atas</option>
                  <option value="Pojok kiri atas">Pojok kiri atas</option>
                  <option value="Tengah bawah">Tengah bawah</option>
                  <option value="Tengah atas">Tengah atas</option>
                </select>
              </div>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Type className="h-5 w-5 text-slate-400" />
              <label className="text-sm font-semibold text-slate-300">Judul Utama</label>
            </div>
            <input
              required
              type="text"
              value={formData.mainTitle}
              onChange={(e) => handleChange('mainTitle', e.target.value)}
              placeholder="Masukkan judul infografis"
              className="w-full rounded-xl border border-white/10 bg-[#020617] p-3 text-white focus:border-[#21ff94] focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlignLeft className="h-5 w-5 text-slate-400" />
              <label className="text-sm font-semibold text-slate-300">Isi Konten</label>
            </div>
            <textarea
              required
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Poin-poin..."
              className="w-full resize-none rounded-xl border border-white/10 bg-[#020617] p-4 text-white placeholder-slate-500 focus:border-[#21ff94] focus:outline-none focus:ring-1 focus:ring-[#21ff94] transition-all"
              rows={5}
            />
          </div>
        </div>

        {/* Format */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-slate-400" />
            <label className="text-sm font-semibold text-slate-300">Dimensi</label>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FORMATS.map((format) => (
              <label
                key={format}
                className={`flex cursor-pointer items-center justify-center rounded-xl border p-3 text-sm font-medium transition-all ${
                  formData.format === format
                    ? 'border-[#21ff94] bg-[#21ff94]/10 text-[#21ff94]'
                    : 'border-white/10 bg-[#020617] text-slate-400 hover:border-white/30 hover:text-white'
                }`}
              >
                <input
                  type="radio"
                  name="format"
                  value={format}
                  checked={formData.format === format}
                  onChange={() => handleChange('format', format as OutputFormat)}
                  className="hidden"
                />
                {format}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !formData.mainTitle.trim() || !formData.content.trim()}
        className="group relative w-full overflow-hidden rounded-2xl bg-[#21ff94] p-4 text-lg font-bold text-[#020617] shadow-[0_0_20px_rgba(33,255,148,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(33,255,148,0.6)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
      >
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
        <span className="relative flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              >
                <Settings className="h-6 w-6" />
              </motion.div>
              GENERATING BLUEPRINT...
            </>
          ) : (
            <>
              <LayoutTemplate className="h-6 w-6" />
              GENERATE BLUEPRINT
            </>
          )}
        </span>
      </button>
    </motion.form>
  );
}
