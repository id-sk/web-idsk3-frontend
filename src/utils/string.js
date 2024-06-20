export const normalizeForSearch = (word) =>
    typeof word === "string"
        ? word
            .toLowerCase()
            .normalize("NFKD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\//g, "")
        : "";