export const truncate = (text: string, n: number) =>
  text?.slice(0, 1) + `${text?.slice(1, n ?? 10)}....`;
