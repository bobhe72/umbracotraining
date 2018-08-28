
function addSelectOption(select, value, name, cssClass) {
    if (value === "") {
        select.innerText = null;
    }

    const content = document.createElement('option');
    content.className = cssClass;
    content.value = value;
    content.text = name;
    select.add(content);
}

export default addSelectOption;
