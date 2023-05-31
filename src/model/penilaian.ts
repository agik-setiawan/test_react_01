export interface Penilaian {
  user: User;
  aspek_penilaian_1: number;
  aspek_penilaian_2: number;
  aspek_penilaian_3: number;
  aspek_penilaian_4: number;
}

export interface User {
  name: string;
  avatar?: string;
}
