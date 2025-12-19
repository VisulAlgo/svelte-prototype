<script>
    import Source from "$lib/Source.svelte";
    import Stack from "$lib/Stack.svelte";
</script>
<header>
    <div class="algName">
        <h1>
            Удаление элемента из массива
        </h1>
    </div>
    <div class="other">
        <button class="debug">
            Проверить код
        </button>
        <button class="next">
            Перейти к следующему блоку
        </button>
    </div>
</header>
<div class="container">
    <Source/>
    <Stack/>
</div>

<style>
header {
    height: 10%;
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5%;
}

.debug {
    background-color: blueviolet;
}

.algName {
    background-color:blue;
    width: 40%;
    text-align: center;
}

.other {
    display: flex;
    justify-content: space-between;
}

.debug {
    margin-right: 100px;
}

.next {
    background-color: cadetblue;
}

.container {
    display: flex;
    justify-content: space-between;
    height: 80vh;
    overflow: hidden;
}

.container * {
    background-color: brown;
    height: 100%;
    width: 100%;
    margin: 5px;
    display: inline-block;
    border-radius: 10px;
}

</style>
