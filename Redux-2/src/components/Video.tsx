import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { nextVideo } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const videoId = useAppSelector((state) => {
    return state.player.course.modules[state.player.moduleActiveVideo].lessons[
      state.player.classroomActiveVideo
    ].id;
  });

  function handlePlayNext() {
    dispatch(nextVideo());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        playing
        controls
        onEnded={handlePlayNext}
        url={"https://www.youtube.com/watch?v=" + videoId}
      />
    </div>
  );
}
