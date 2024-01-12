import { PlayCircle, Video } from "lucide-react";
import { useDispatch } from "react-redux";
import { apresentationVideo } from "../store/slices/player";

interface LessonProps {
  title: string;
  duration: string;
  indexClassroom: number;
  moduleIndex: number;
  stateclassroom: boolean;
}

export function Lesson({
  title,
  duration,
  indexClassroom,
  moduleIndex,
  stateclassroom,
}: LessonProps) {
  const dispatch = useDispatch();

  function handleClasseModule() {
    dispatch(
      apresentationVideo({
        module: moduleIndex,
        classroom: indexClassroom,
      })
    );
  }

  return (
    <button
      onClick={handleClasseModule}
      data-active={stateclassroom}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400"
    >
      {stateclassroom ? (
        <PlayCircle className="w-4 h-4 text-emald-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
