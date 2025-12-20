void function removeAt() {
    int[] array = { 1, 2, 3, 4, 5, 6 };
    int removeID = 2;
    for (int i = removeID; i < array.Length - 1; i++) {
        array[i] = array[i+1];
    }
}
