export async function fetchWrapper({
  cache = "no-cache",
  tags,
  endpoint,
  revalidate,
  headers,
  options,
}: {
  cache?: RequestCache;
  tags?: string[];
  endpoint: string;
  revalidate?: number;
  headers?: HeadersInit;
  options?: RequestInit;
}) {
  try {
    const response = await fetch(endpoint, {
      ...options,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      cache,
      ...(tags && { next: { tags, revalidate } }),
    });
    return await response.json();
  } catch (e) {
    // throw e;
    return e;
  }
}
