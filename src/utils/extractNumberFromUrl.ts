export function extractNumberFromUrl(url: string) {
  const baseUrl = new URL(url);
  const pathParts = baseUrl.pathname.split("/"); // Split the pathname into parts
  const typeNumber = pathParts[pathParts.length - 2]; // Get the part before the last slash
  return typeNumber;
}
