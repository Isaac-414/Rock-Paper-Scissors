const selectionButtons = document.querySelectorAll('[data-selection]')


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
}

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const playerSelection = selection

    const winner = getWinner(playerSelection, computerSelection)

    console.log(playerSelection, computerSelection, winner)
}