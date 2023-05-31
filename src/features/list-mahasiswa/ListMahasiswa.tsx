import { useRecoilState } from "recoil";
import Avatar from "../../components/avatar/Avatar";
import Container from "../../components/container/Container";
import { listPenilaian } from "../../states/listPenilaian";
import clasess from "./ListMahasiswa.module.css";
import Input from "../../components/input/Input";
import { Penilaian } from "../../model/penilaian";
import Output from "../output/Output";
import { useEffect, useState } from "react";
import AddMahasiswa from "./AddMahasiswa";

const ListMahasiswa = () => {
  const [penilaians, setPenilaians] = useRecoilState(listPenilaian);
  const [header, setHeader] = useState<any[]>();

  useEffect(() => {
    const keys = Object.keys(penilaians[0]);
    const headerData = keys.filter((item) => item !== "user");
    const headerView = headerData.map((item) =>
      item.replaceAll("_", " ").toLocaleLowerCase()
    );
    setHeader(headerView);
  }, [penilaians]);

  const handleChangeAspekValue = (
    index: number,
    aspek: string,
    value: number
  ) => {
    const penilaiansData = [...penilaians];
    const penilaian: any | Penilaian = { ...penilaiansData[index] };
    penilaian[aspek] = value;
    penilaiansData[index] = penilaian;
    setPenilaians(penilaiansData);
  };

  return (
    <>
      <div>
        <Container>
          <div className={clasess.list_item}>
            <div></div>
            {header?.map((item) => (
              <div key={item} style={{ textTransform: "capitalize" }}>
                {item}
              </div>
            ))}
          </div>
        </Container>
        {penilaians.map((item, i) => {
          return (
            <div key={i} className={clasess.list_item_container}>
              <Container>
                <div className={clasess.list_item}>
                  <div>
                    <Avatar {...item.user} />
                  </div>
                  <div>
                    <Input
                      placeholder="Nilai aspek 1"
                      value={item.aspek_penilaian_1}
                      onChange={(val) => {
                        handleChangeAspekValue(i, "aspek_penilaian_1", val);
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Nilai aspek 2"
                      value={item.aspek_penilaian_2}
                      onChange={(val) => {
                        handleChangeAspekValue(i, "aspek_penilaian_2", val);
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Nilai aspek 3"
                      value={item.aspek_penilaian_3}
                      onChange={(val) => {
                        handleChangeAspekValue(i, "aspek_penilaian_3", val);
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Nilai aspek 4"
                      value={item.aspek_penilaian_4}
                      onChange={(val) => {
                        handleChangeAspekValue(i, "aspek_penilaian_4", val);
                      }}
                    />
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </div>
      <div>
        <AddMahasiswa />
      </div>
      <Output />
    </>
  );
};

export default ListMahasiswa;
