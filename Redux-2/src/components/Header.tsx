import { useClassroom } from "../store/slices/player";

export function Header() {
  // const { module, classroom } = useAppSelector((state) => {
  //   const { moduleActiveVideo, classroomActiveVideo } = state.player;

  //   const module = state.player.course.modules[moduleActiveVideo];
  //   const classroom =
  //     state.player.course.modules[moduleActiveVideo].lessons[
  //       classroomActiveVideo
  //     ];

  //   return { module, classroom };
  // });

  // ---------------------------------------------------------------------
  // resumo de como está acima
  // ---------------------------------------------------------------------
  const { module, classroom } = useClassroom();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{module.title}</h1>
      <span className="text-sm text-zinc-400">{classroom.title}</span>
    </div>
  );
}
