<script lang="js">
    import {page} from "$app/stores";
    let {file} = $props();
    const code = $page.data.codes?.[file]
</script>


<div class = "box">
    {@html code}
</div>

<style>
.box {
    width: 100%;
    display: flex;
    justify-content: center;
}
:global(pre) {
    width: 90%;
    padding: 1em;
    border-radius: 5px;
    overflow: auto;
}
:global(code) {
    counter-reset: step;
    counter-increment: step 0;
}

:global(code .line::before) {
    content: counter(step);
    counter-increment: step;
    width: 1rem;
    margin-right: 1.5rem;
    display: inline-block;
    text-align: right;
    color: rgba(115,138,148,.4) 
}
</style>
