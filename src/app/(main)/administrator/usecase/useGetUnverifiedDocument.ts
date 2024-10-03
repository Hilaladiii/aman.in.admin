import { useTokenServer } from "@/shared/usecase/useTokenServer";
import { getUnverifiedDocumentRepository } from "../repository/adminRepository";

export async function useGetUnverifiedDocument() {
  const token = useTokenServer();
  const res = await getUnverifiedDocumentRepository(token!);
  return res;
}
