<script>
    let {text, type} = $props();
</script>

<button class={type}>
    {text}
</button>

<style>
.header {
    border-radius: 8px;
    padding: 8px 14px;
    border: none;
    cursor: pointer;
    font-size: 14px;
}

.header:hover {
    background: #5c5cf5;
}
.code {
    background: transparent;
    border: none;
    color: #c9d1d9;
    cursor: pointer;
    margin-left: 6px;
}
</style>
