'use client';
import React from 'react';
import { VideoLesson } from '../lib/data';

type Props = {
  lessons: VideoLesson[];
};

const VideoLessonGrid: React.FC<Props> = ({ lessons }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="border rounded-xl shadow hover:shadow-md transition duration-200"
        >
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-t-xl"
              src={lesson.youtubeUrl}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4 text-base font-medium text-gray-800">
            {lesson.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoLessonGrid;
