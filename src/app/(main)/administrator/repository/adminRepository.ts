"use server";

export async function getUnverifiedDocumentRepository(token: string) {
  const response = await fetch(
    `${process.env.API_PATH}/api/document/unverified`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const res = await response.json();
  return res;
}

export async function updateDocumentRepository(
  id: string,
  status: number,
  token: string
) {
  const response = await fetch(
    `${process.env.API_PATH}/api/document/update/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({ status }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const res = await response.json();
  return res;
}
