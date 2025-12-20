<script>
    import { onMount } from "svelte";
    import { EditorView, basicSetup } from "codemirror";
    import { oneDark } from "@codemirror/theme-one-dark";

    import { javascript } from "@codemirror/lang-javascript"; // тут устанавливается нужный язык

    let container;  // здесь хранится div.editor из-за bind:this
    // extensionsSettings для доп. настроек
    let extensionsSettings = [ 
        basicSetup,
        javascript(),
        oneDark,
    ];
    
    onMount(() => {
        let editor = new EditorView({
            doc: "console.log('Hello CodeMirror');",  // значение по умолчанию
            extensions: extensionsSettings,
            parent: container  // CodeMirror требует DOM
        });
    });
</script>

<div class = "box">
    <div bind:this={container} class="editor"></div>
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

.editor {
    width: 100%;
    height: 100%;
}

</style>
