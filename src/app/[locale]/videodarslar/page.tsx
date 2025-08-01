import { videoLessons } from '@/widgets/video-lesson/lib/data';
import VideoLessonGrid from '@/widgets/video-lesson/ui';

const VideoDarslarPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Video darslar</h1>
      <VideoLessonGrid lessons={videoLessons} />
    </div>
  );
};

export default VideoDarslarPage;
