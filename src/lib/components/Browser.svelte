<script>
    import Stack from "$lib/components/Stack.svelte";
</script>
<div class="browser">
    <div class="browser-header">
        <div class="tabs">
            <div class="tab">Описание</div>
            <div class="tab-active">Блок-схема</div>
            <div class="tab">Анимация</div>
        </div>
    </div>
    <div class="tab-content">
        <Stack file="removeAt.mmd"/>
    </div>
</div>

<style>
.browser {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.browser-header {
    background: #21262d;
    padding: 0px 12px;
    display: flex;
    align-items: center;
    gap: 6px;
}
.tabs { 
    display: flex;
    background: #21262d;
    border-bottom: 2px solid #30363d;
}

.tab {
    padding: 12px 16px;
    background: transparent;
    border: none;
    color: #8b949e;
    cursor: pointer;
    font-size: 14px;
}

.tab-active {
    color: #e6edf3;
    padding: 10px 16px;;
    border-bottom: 2px solid #4fc3f7;
}

.tab:hover {
    border-bottom: 2px solid #cdefff;
}
.tab-content {
    width: 100%;
    padding: 16px;
    overflow: auto;
    flex: 1;
}
</style>
