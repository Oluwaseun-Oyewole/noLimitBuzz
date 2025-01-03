import requestError from "../components/Error/index";

export async function fetchWrapper({
  cache = "no-cache",
  tags,
  endpoint,
  revalidate,
  headers,
  options,
  signal,
}: {
  cache?: RequestCache;
  tags?: string[];
  endpoint: string;
  revalidate?: number;
  headers?: HeadersInit;
  options?: RequestInit;
  signal?: AbortSignal;
}) {
  try {
    const response = await fetch(endpoint, {
      ...options,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      signal,
      cache,
      ...(tags && { next: { tags, revalidate } }),
    });
    if (!response.ok) return;
    return await response.json();
  } catch (error) {
    if (error instanceof DOMException && error?.name === "AbortError") {
      requestError("Fetch Aborted");
    } else {
      requestError((error as Error)?.message || "Something went wrong");
    }
    return;
  }
}
