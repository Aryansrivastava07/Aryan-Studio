const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function getData(path) {
  const response = await fetch(`${API_URL}${path}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status}`);
  }

  return response.json();
}
