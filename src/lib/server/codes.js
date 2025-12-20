import { createHighlighter } from "shiki";

export async function compute_codes() {
    console.log("!");
    const highlighter = await createHighlighter({
        themes: ["github-dark"],
        langs: ["cs"],
    });

    const snippets = import.meta.glob("$lib/snippets/*", {
        query: "?raw",
        import: "default",
        eager: true,
    })

    const codes = Object.fromEntries(Object.entries(snippets).map(transform));
    function transform([path, file_content]) {
        const file_name = path.split("/").at(-1);
        const lang = file_name.split(".").at(-1);
        const code = highlighter.codeToHtml(file_content, {
            theme: "github-dark", lang: "cs"
        });
        return [file_name, code];
    }

    highlighter.dispose();

    return codes;
}
