import { createHighlighter } from "shiki";
import mermaid from "mermaid";

// TODO: ОТРЕФАКТОРИТЬ ИМПОРТ ФАЙЛОВ В ОТДЕЛЬНУЮ ФУНКЦИЮ КОТОРАЯ БЕРЕТ ФУНКЦИЮ АРГУМЕНТОМ КАК МАП

export async function render_mermaid() {
    mermaid.initialize({startOnLoad: false});

    const defs = import.meta.glob("$lib/diagrams/*.mmd", {
        query: "?raw",
        import: "default",
        eager: true,
    })

    const check = Object.entries(defs).map(transform);
    const diagrams = Object.fromEntries(Object.entries(defs).map(transform));
    function transform([path, file_content]) {
        const file_name = path.split("/").at(-1);
        return [file_name, file_content]
    }
    return diagrams;
}


export async function compute_codes() {
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
