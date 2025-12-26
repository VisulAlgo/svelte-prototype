<script lang="js">
    import { Mermaid } from "@friendofsvelte/mermaid";
    import { page } from "$app/stores";
    let { file } = $props();
    const raw = $page.data.diagrams?.[file];
    console.log(raw);
</script>

<div class="box">
    <Mermaid string={raw} />
</div>

<style>
    .box {
        width: 100%;
        justify-content: center;
        display: flex;
        height: 50%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
