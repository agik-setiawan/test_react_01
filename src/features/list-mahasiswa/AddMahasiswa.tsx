import { useRecoilState } from "recoil";
import Button from "../../components/button/Button";
import { listPenilaian } from "../../states/listPenilaian";
import { data_penilaian_template } from "../../data/data_penilaian";

const AddMahasiswa = () => {
  const [penilaians, setPenilaian] = useRecoilState(listPenilaian);
  const handleAdd = () => {
    const penilaian = {
      ...data_penilaian_template,
      user: {
        name: "Mahasiswa " + (penilaians.length + 1),
      },
    };
    setPenilaian([...penilaians, penilaian]);
  };
  return (
    <div style={{ marginTop: 20 }}>
      <Button text="Tambah Mahasiswa" onClick={handleAdd} />
    </div>
  );
};

export default AddMahasiswa;
