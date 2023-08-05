function generateBoxes() {
    const input = document.getElementById('inputText').value.trim();
    const lines = input.split("\n");

    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = ''; // clear previous boxes

    lines.forEach((line, index) => {
        const [num, text] = line.split('-');
        const texts = text.split('/');

        const lineDiv = document.createElement('div');
        lineDiv.className = 'line';

        texts.forEach((t) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = `${num}- ${t}`;
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
}
