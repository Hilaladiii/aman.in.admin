"use client";

import Link from "next/link";
import Button from "../Button/Button";
import { dateTimeFormatter } from "@/shared/usecase/dateTimeFormatter";
import { actionUpdateDocument } from "@/app/(main)/administrator/usecase/actionUpdateDocument";

interface ITableProps {
  id: string;
  user_name: string;
  type: string;
  number: string;
  created_at: string;
  user_id: string;
  status: number;
}

export default function Table({ data }: { data: ITableProps[] | null }) {
  if (data == null) {
    return <div>Tidak ada permintaan verifikasi</div>;
  }
  const { updateDocument } = actionUpdateDocument();
  const onUpdate = async (id: string, status: number) => {
    await updateDocument(id, status);
  };
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="border-b border-b-neutral500 pb-4">
            <th>Nama Pemohon</th>
            <th>Jenis Dokumen</th>
            <th>Nomor Dokumen</th>
            <th>Tanggal Ajuan</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((document, index) => (
            <tr key={index}>
              <td>{document.user_name}</td>
              <td>{document.type}</td>
              <td>{document.number}</td>
              <td>{dateTimeFormatter(document.created_at)}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => onUpdate(document.id, 1)}
                >
                  Terima
                </Button>
                <Button
                  variant="warning"
                  onClick={() => onUpdate(document.id, -1)}
                >
                  Tolak
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
