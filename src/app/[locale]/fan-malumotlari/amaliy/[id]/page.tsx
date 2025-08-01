'use client';

import { lectureSections } from '@/widgets/file-list/lib/data';
import LectureDetail from '@/widgets/file-list/ui/FileDetail';

export default function Page() {
  const basePath = '/fan-malumotlari/amaliy';
  const section = lectureSections.find((s) => s.basePath === basePath);

  if (!section) return <div className="p-4">Malumot topilmadi</div>;

  return <LectureDetail data={section.data} basePath={section.basePath} />;
}
