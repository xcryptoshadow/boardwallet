export function formatAddress(address: string): string {
  return `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
}
