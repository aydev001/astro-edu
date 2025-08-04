'use client';

import { useAccessibilityStore } from '@/shared/store/accessibilityStore';
import { Check } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Label } from '@/shared/ui/label';
import clsx from 'clsx';

export default function AccessibilityControls() {
  const { fontSize, setFontSize, theme, setTheme } = useAccessibilityStore();

  const themeOptions: { value: typeof theme; label: string; bg: string }[] = [
    {
      value: 'default',
      label: 'Oddiy',
      bg: 'bg-gradient-to-r from-blue-600 from-0% via-blue-600 via-50% to-blue-100 to-50% border',
    },
    { value: 'sepia', label: 'Sepia', bg: 'bg-neutral-400 border' },
    { value: 'high-contrast', label: 'Kontrast', bg: 'bg-neutral-900 border' },
  ];

  return (
    <div className="w-[200px] space-y-2 p-2">
      <div className="space-y-1">
        <Label className="text-xs text-muted-foreground">Shrift o‘lchami</Label>
        <div className="flex gap-2 flex-col">
          <Button
            size="sm"
            className="font-normal"
            variant={fontSize === 'small' ? 'default' : 'outline'}
            onClick={() => setFontSize('small')}
          >
            Kichikina
          </Button>
          <Button
            size="sm"
            className="font-normal"
            variant={fontSize === 'base' ? 'default' : 'outline'}
            onClick={() => setFontSize('base')}
          >
            {`O'rtacha`}
          </Button>
          <Button
            size="sm"
            className="font-normal"
            variant={fontSize === 'large' ? 'default' : 'outline'}
            onClick={() => setFontSize('large')}
          >
            Katta
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <Label className="text-xs text-muted-foreground">Rang rejimi</Label>
        <div className="flex gap-2">
          {themeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setTheme(opt.value)}
              className={clsx(
                'relative w-full h-10 rounded-md shadow-sm border transition-all duration-200',
                opt.bg,
                theme === opt.value && 'ring-2 ring-blue-500',
              )}
            >
              {theme === opt.value && (
                <Check
                  className={clsx(
                    'w-4 h-4 absolute top-[4px] right-[4px]',
                    opt.value === 'high-contrast'
                      ? 'text-yellow-400'
                      : 'text-black',
                  )}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tiklash */}
      <div className="flex pt-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setFontSize('base');
            setTheme('default');
          }}
          className="w-full font-normal"
        >
          Tiklash
        </Button>
      </div>
    </div>
  );
}
