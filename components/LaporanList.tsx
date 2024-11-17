import Link from 'next/link';

type Laporan = {
  id: string;
  type?: string;
  nama?: string;
  keluhan?: string;
  AlurKejadian?: string;
};

type LaporanListProps = {
  laporan: Laporan[];
  type: string;
};

const LaporanList = ({ laporan, type }: LaporanListProps) => {
  const formatType = (type: string) => {
    if (type === "fasilitaskampus") {
      return "Fasilitas Kampus";
    } else {
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  return (
    <div className="overflow-x-auto max-h-52">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 py-3 rounded-t-xl px-5 font-bold">
            <th className="w-1/3 py-3 px-5">{type === "sexual" ? "Nama" : "Type"}</th>
            <th className="w-2/3 py-3 px-5">{type === "sexual" ? "Alur Kejadian" : "Keluhan"}</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {laporan.map((laporan: Laporan) => (
            <tr key={laporan.id} className="bg-white py-3 px-5 rounded-xl">
              <td className="w-1/3 border-r border-black py-3 px-5">
                <Link href={`/admin/laporan/${laporan.id}`}>
                  {type === "sexual"
                    ? laporan.nama
                      ? laporan.nama || " "
                      : "Anon"
                    : laporan.type
                    ? formatType(laporan.type || "")
                    : "N/A"}
                </Link>
              </td>
              <td className="w-2/3 py-3 px-5">
                <Link href={`/admin/laporan/${laporan.id}`}>
                  {type === "sexual"
                    ? laporan.AlurKejadian
                      ? laporan.AlurKejadian
                      : "N/A"
                    : laporan.keluhan
                    ? laporan.keluhan
                    : "N/A"}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaporanList;