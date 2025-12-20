<script lang="js">
    import {Mermaid} from "@friendofsvelte/mermaid";
    import {page} from "$app/stores";
    let {file} = $props();
    const raw = $page.data.diagrams?.[file]
    console.log(raw);
</script>

<div class="box">
    <Mermaid string={raw}/>
</div>

<style>
.box {
    width: 40%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: #a4a4a4;
    border-radius: 10px;
}
</style>
