export default class Utility {
    static snakeCaseToCamelCase(string: string) {
        return string
            .split("_")
            .map((sub) => sub[0].toUpperCase() + sub.slice(1))
            .join(" ");
    }
}
