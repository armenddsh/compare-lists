document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");
    
    btn = document.getElementById("btn_run")

    list_1 = document.getElementById("list_1");
    list_2 = document.getElementById("list_2");
    one_only = document.getElementById("one_only");
    two_only = document.getElementById("two_only");
    intersection = document.getElementById("intersection");
    union = document.getElementById("union");
    loader = document.getElementById("loader");

    symmetric_difference = document.getElementById("symmetric_difference");

    btn.addEventListener("click", function (event) {
        loader.classList.add("loader");
        setTimeout(() => {
            calculate(list_a, list_b);

            setTimeout(() => loader.classList.remove("loader"), 100)
        }, 300)
    });

    let list_a = [];
    let list_b = [];

    list_1.addEventListener("input", function (event) {
        list_a = event.target.value.split("\n");
        // calculate(list_a, list_b);
    });

    list_2.addEventListener("input", function (event) {
        list_b = event.target.value.split("\n");
        // calculate(list_a, list_b);
    });

    function calculate(list_1, list_2) {
        // Remove empty strings

        

        list_1 = list_1.filter(x => x.trim() !== "");
        list_2 = list_2.filter(x => x.trim() !== "");

        // Use Sets for O(1) lookup
        const set1 = new Set(list_1);
        const set2 = new Set(list_2);

        const _intersection = [];
        const _one_only = [];
        const _two_only = [];

        for (const item of set1) {
            if (set2.has(item)) {
                _intersection.push(item);
            } else {
                _one_only.push(item);
            }
        }

        for (const item of set2) {
            if (!set1.has(item)) {
                _two_only.push(item);
            }
        }

        const _union = [...new Set([...set1, ...set2])];
        const _symmetric_difference = [..._one_only, ..._two_only];

        // Set the textarea values
        intersection.value = _intersection.join("\n");
        one_only.value = _one_only.join("\n");
        two_only.value = _two_only.join("\n");
        union.value = _union.join("\n");
        symmetric_difference.value = _symmetric_difference.join("\n");

        
    }

});