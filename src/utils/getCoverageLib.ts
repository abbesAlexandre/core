export function getCoverageLib(deps = {}): string {
  const libs: string[] = [];
  if ("nyc" in deps) {
    libs.push("nyc");
  }
  if ("c8" in deps) {
    libs.push("c8");
  }
  if ("jest" in deps) {
    libs.push("jest");
  }

  return libs.length === 0 ? "N/A" : libs.join(",");
}
