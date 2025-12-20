export const prerender = true;

import { compute_codes, render_mermaid } from "$lib/server/codes";

export const load = async () => {
    const codes = await compute_codes();
    const diagrams = await render_mermaid();
    return { codes, diagrams };
};
