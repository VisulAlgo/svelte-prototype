<script>
    import Button from "$lib/components/Button.svelte";

    let {title} = $props();
</script>

<header>
    <div class="top-left">
        <Button type="header" text="← Предыдущий алгоритм"/>
        <h1>{title}</h1>
    </div>
    <div class="top-right">
        <Button type="header" text="Карта знаний"/>
        <Button type="header" text="Cледующий алгоритм →"/>
    </div>
</header>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 24px;
    border-bottom: 1px solid #21262d;
    background: #0f1117;
}
.top-left h1 {
    font-size: 26px;
    font-weight: 400;
    margin: 0;
}
.top-right {
    display: flex;
    gap: 12px;
}
</style>
