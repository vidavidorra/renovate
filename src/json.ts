type JsonPrimitive = string | number | boolean | null;
type JsonObject = { [key: string]: Json };
type JsonArray = Json[];
type Json = JsonPrimitive | JsonObject | JsonArray;

export { JsonPrimitive, JsonObject, JsonArray, Json };
