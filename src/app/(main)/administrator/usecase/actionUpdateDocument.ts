import toast from "react-hot-toast";
import { updateDocumentRepository } from "../repository/adminRepository";
import { getCookie } from "cookies-next";

export function actionUpdateDocument() {
  const token = getCookie("token")?.toString();

  const updateDocument = async (id: string, status: number) => {
    const res = await updateDocumentRepository(id, status, token!);
    if (res.status == "success") {
      toast.success("Berhasil memperbarui status dokumen");
      window.location.href = "/administrator";
    } else {
      toast.error("Gagal memperbarui status dokumen");
    }
  };

  return {
    updateDocument,
  };
}
