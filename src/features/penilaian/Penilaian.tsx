import ListMahasiswa from "./../list-mahasiswa/ListMahasiswa";
import clasess from "./Penilaian.module.css";

const Penilaian = () => {
  return (
    <div className={clasess.penilaian}>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <div>
        <ListMahasiswa />
      </div>
    </div>
  );
};

export default Penilaian;
