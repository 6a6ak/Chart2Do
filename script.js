function generateBoxes() {
    const input = document.getElementById('inputText').value.trim();
    const lines = input.split("\n").filter(line => line.trim() !== "");

    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = '';

    lines.forEach((line, index) => {
        const [num, text] = line.split('-');
        const texts = text.split('/');

        const lineDiv = document.createElement('div');
        lineDiv.className = 'line';

        texts.forEach((t) => {
            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    boxContent.classList.add('text-strike');
                } else {
                    boxContent.classList.remove('text-strike');
                }
            });

            const box = document.createElement('div');
            box.className = 'box';

            const boxContent = document.createElement('span');
            boxContent.textContent = `${num}- ${t}`;

            // Append elements
            box.appendChild(checkbox);
            box.appendChild(boxContent);
            lineDiv.appendChild(box);
        });

        outputContainer.appendChild(lineDiv);

        // Add arrow if not the last line
        if (index !== lines.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'arrow';
            outputContainer.appendChild(arrow);
        }
    });
       // After generating boxes, hide input section and show chart section
       document.getElementById('inputSection').style.display = 'none';
       document.getElementById('chartSection').style.display = 'block';
}


function showInput() {
    // Show the input section and hide the chart section
    document.getElementById('inputSection').style.display = 'block';
    document.getElementById('chartSection').style.display = 'none';
}
