import { useRecoilValue } from "recoil";
import { listPenilaian } from "../../states/listPenilaian";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";

const Output = () => {
  const penilaians = useRecoilValue(listPenilaian);
  const [formatView, setFormatView] = useState<any>();

  useEffect(() => {
    const keys = Object.keys(penilaians[0]);
    const keysFilter = keys.filter((item) => item !== "user");
    const dataView: any = {};
    keysFilter.forEach((item) => {
      const mahasiswaView: any = {};
      penilaians.forEach((mahasiswa: any) => {
        mahasiswaView[mahasiswa.user.name.replace(" ", "_").toLowerCase()] =
          mahasiswa[item];
      });
      dataView[item] = mahasiswaView;
    });

    setFormatView(dataView);
  }, [penilaians]);
  return (
    <>
      <div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h2>Output Data</h2>
          <div>
            <Button text="Simpan" />
          </div>
        </div>
        <pre>{JSON.stringify(formatView, null, 2)}</pre>
      </div>
    </>
  );
};

export default Output;
