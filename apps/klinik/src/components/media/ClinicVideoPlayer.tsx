import type { ClinicVideo } from "@/lib/media/clinic-photos";

type ClinicVideoPlayerProps = {
  video: ClinicVideo;
  className?: string;
  /** Varsayılan sessiz; müzikli videolar için false verilir. */
  muted?: boolean;
};

/** Otomatik oynatma yok: yalnızca kullanıcı tıklayınca başlar. */
export function ClinicVideoPlayer({ video, className, muted = true }: ClinicVideoPlayerProps) {
  return (
    <figure className={className}>
      {/* Konuşma yok (sessiz veya yalnızca enstrümantal müzik); altyazı gerekmez. */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        controls
        muted={muted}
        playsInline
        preload="none"
        poster={video.poster}
        width={video.width}
        height={video.height}
        aria-label={video.title}
        className="h-auto w-full rounded-2xl bg-black object-contain"
      >
        <source src={video.src} type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
      <figcaption className="mt-3 text-sm leading-6 text-mutedText">
        <span className="font-semibold text-foreground">{video.title}.</span>{" "}
        {video.description}
      </figcaption>
    </figure>
  );
}
