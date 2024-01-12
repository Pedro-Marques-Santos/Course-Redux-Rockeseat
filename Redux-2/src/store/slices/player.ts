import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

interface IAction {
  payload: {
    module: number;
    classroom: number;
  };
}

const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [
        {
          id: "1",
          title: "Iniciando com React",
          lessons: [
            { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
            {
              id: "w-DW4DhDfcw",
              title: "Estilização do Post",
              duration: "10:05",
            },
            {
              id: "D83-55LUdKE",
              title: "Componente: Header",
              duration: "06:33",
            },
            {
              id: "W_ATsETujaY",
              title: "Componente: Sidebar",
              duration: "09:12",
            },
            { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
            {
              id: "8KBq2vhwbac",
              title: "Form de comentários",
              duration: "11:34",
            },
          ],
        },
        {
          id: "2",
          title: "Estrutura da aplicação",
          lessons: [
            {
              id: "gE48FQXRZ_o",
              title: "Componente: Comment",
              duration: "13:45",
            },
            { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
            {
              id: "h5JA3wfuW1k",
              title: "Interações no JSX",
              duration: "06:33",
            },
            {
              id: "1G0vSTqWELg",
              title: "Utilizando estado",
              duration: "09:12",
            },
          ],
        },
      ],
    },
    moduleActiveVideo: 0,
    classroomActiveVideo: 0,
  },
  reducers: {
    apresentationVideo: (state, action: IAction) => {
      state.moduleActiveVideo = action.payload.module;
      state.classroomActiveVideo = action.payload.classroom;
    },

    nextVideo: (state) => {
      const nextClassroomIndex = state.classroomActiveVideo + 1;
      const nextClassroom =
        state.course.modules[state.moduleActiveVideo].lessons[
          nextClassroomIndex
        ];

      if (nextClassroom) {
        state.classroomActiveVideo = nextClassroomIndex;
      } else {
        const nextModuleIndex = state.moduleActiveVideo + 1;
        const nextModule = state.course.modules[nextModuleIndex];

        if (nextModule) {
          state.moduleActiveVideo = nextModuleIndex;
          state.classroomActiveVideo = 0;
        }
      }
    },
  },
});

export const { apresentationVideo } = playerSlice.actions;
export const { nextVideo } = playerSlice.actions;

export const player = playerSlice.reducer;

// deixar aqui, um slice que poderia ser importanto pra fora
// tipo de slice que a gente utiliza muito
export const useClassroom = () => {
  return useAppSelector((state) => {
    const { moduleActiveVideo, classroomActiveVideo } = state.player;

    const module = state.player.course.modules[moduleActiveVideo];
    const classroom =
      state.player.course.modules[moduleActiveVideo].lessons[
        classroomActiveVideo
      ];

    return { module, classroom };
  });
};
