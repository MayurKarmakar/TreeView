
export function getDataType(
  data: unknown
): "String" | "Array" | "Object" | "Number" {
  if (Array.isArray(data)) {
    return "Array";
  }

  if (typeof data === "string") {
    return "String";
  }

  if (typeof data === "number") {
    return "Number";
  }

  return "Object";
}
