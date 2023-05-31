import { atom } from "recoil";
import { data_penilaian } from "../data/data_penilaian";
import { Penilaian } from "../model/penilaian";

const listPenilaian = atom<Penilaian[]>({
  key: "listPenilaian",
  default: data_penilaian,
});

export { listPenilaian };
