import Table from "@/shared/container/Table/Table";
import { useGetUnverifiedDocument } from "../usecase/useGetUnverifiedDocument";

export default async function AdministratorContainer() {
  const documents = await useGetUnverifiedDocument();
  return <Table data={documents.data} />;
}
