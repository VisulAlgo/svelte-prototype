<script>
    import Source from "$lib/components/Source.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<div class="panel-header">
    <span>Код алгоритма</span>
    <div class="panel-actions">
        <Button type="code" text="Запустить"/>
        <Button type="code" text="Дебаггинг"/>
        <Button type="code" text="Остановить"/>
    </div>
</div>
<Source file="removeAt.cs"/>

<style>
.panel-header {
    padding: 10px 14px;
    background: #21262d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
}
</style>
