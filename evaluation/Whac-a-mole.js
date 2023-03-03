// view
const view = (() => {
    // selectors 
    const domSelector = {
        gameBoard: document.querySelector('#game_board'),
        scoreCount: document.querySelector('#score_count'),
        startGameBtn: document.querySelector('#start_game_btn'),
        timeCount: document.querySelector('#time_count'),
    }

    // create the game board and holes
    const gameBoard = document.createElement('div');
    gameBoard.id = 'game_board';

    const renderBoard = () => {
        for (let i = 1; i < 13; i++) {
            // add holes 
            const hole = document.createElement('div');
            hole.classList.add('hole');
            hole.id = `hole-${i}`;
            gameBoard.appendChild(hole);

            // add moles 
            const moleImg = document.createElement('img');
            moleImg.classList.add('mole_img');
            moleImg.src = 'mole.jpeg';

            // add event listener to mole 
            moleImg.addEventListener('click', () => {
                hole.removeChild(moleImg);
                model.updateScore();
                view.updateScore(model.getScore());
            })

            hole.appendChild(moleImg);
        }
        document.body.appendChild(gameBoard);
    }

    const showMole = () => {
        // get random holes to show moles 
        const holes = document.querySelectorAll('.hole');
        const randomIndex = Math.floor(Math.random() * holes.length);
        const randomHole = holes[randomIndex];

        // add moles 
        const moleImg = document.createElement('img');
        moleImg.classList.add('mole_img');
        moleImg.src = 'mole.jpeg';
        randomHole.appendChild(moleImg);

        // add event listener to mole 
        moleImg.addEventListener('click', () => {
            randomHole.removeChild(moleImg);
            model.updateScore();
            view.updateScore(model.getScore());
        })

        // disappear after 2s after clicking 
        setTimeout(() => {
            randomHole.removeChild(moleImg);
        }, 2000);
    };

    const updateScore = (score) => {
        domSelector.scoreCount.textContent = score;
    }

    return {
        domSelector,
        renderBoard,
        showMole,
        updateScore
    };
})();

// model
const model = (() => {
    let score = 0;

    const updateScore = () => {
        score += 1;
    }

    const resetScore = () => {
        score = 0;
    };

    const getScore = () => {
        return score;
    }

    return {
        updateScore,
        resetScore,
        getScore
    }
})();

// controller
const controller = (() => {
    const { domSelector, renderBoard, showMole } = view;
    const { resetScore } = model;

    // start game, start count down 
    domSelector.startGameBtn.addEventListener('click', () => {
        // restart the score 
        domSelector.scoreCount.textContent = resetScore();

        // start the timer
        const duration = 30;
        let time = duration;
        const interval = setInterval(() => {
            domSelector.timeCount.textContent = time;
            if (time > 0) {
                time--;
            } else {
                clearInterval(interval);
                alert('Game Over!');
            }
        }, 1000);
    });

    const bootstrap = () => { // => initialize the board
        renderBoard();
    }
    return { bootstrap };
})();
controller.bootstrap();