import { Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  indexClassroom: number;
  moduleIndex: number;
}

export function Lesson({
  title,
  duration,
  indexClassroom,
  moduleIndex,
}: LessonProps) {
  function handleClasseModule() {
    console.log(moduleIndex, indexClassroom);
  }

  return (
    <button
      onClick={handleClasseModule}
      className="flex items-center gap-3 text-sm text-zinc-400"
    >
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
