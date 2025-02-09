import { useEffect, useRef, useState } from "react";
import { VideoProps } from "../dummy-data/home";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";
import { VIEW_FORMATTER } from "../utils/formatViews";

type VideoGridItemProps = VideoProps;

export default function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideoPlaying == null) return;

    if (isVideoPlaying) {
      videoRef.current!.currentTime = 0;
      videoRef.current!.play();
    } else {
      videoRef.current!.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => {
        setIsVideoPlaying(true);
      }}
      onMouseLeave={() => {
        setIsVideoPlaying(false);
      }}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt="Video"
          className={`block w-full h-full object-cover
         rounded-xl transition-[border-radius] duration-2000 ${
           isVideoPlaying ? "rounded-none" : "rounded-xl"
         }`}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
        <video
          src={videoUrl}
          ref={videoRef}
          muted
          playsInline
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
          }`}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img
            src={channel.profileUrl}
            alt="Profile ID"
            className="w-12 h-12 rounded-full"
          />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-texte text-sm">
            {channel.name}
          </a>
          <div className="text-secondary-text text-sm">
            {`${VIEW_FORMATTER.format(views)} views • ${formatTimeAgo(
              postedAt
            )}`}
          </div>
        </div>
      </div>
    </div>
  );
}
