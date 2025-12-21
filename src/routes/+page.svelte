<script>
    import Header from "$lib/components/Header.svelte";
    import Code from "$lib/components/Code.svelte";
    import Browser from "$lib/components/Browser.svelte";
</script>

<Header title="Удаление элемента из массива"/>

<main>
    <section><Code/></section>
    <section><Browser/></section>
</main>

<style>
:global(body) {
    margin: 0;
    background-color: #0f1117;
    color: #e6edf3;
}
:global(*) {
    box-sizing: border-box;
}
main {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 20px;
    padding: 20px;
    height: calc(100vh - 70px);
}

section {
    background: #161b22;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

</style>
