// view
const View = (() => {
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
        }
        document.body.appendChild(gameBoard);
    }

    const showMole = () => {
        // get at most 3 random holes to show moles 
        const maxHoles = 3;
        const holes = document.querySelectorAll('.hole');
        const moles = document.querySelectorAll('.mole_img');
        if (moles.length < maxHoles) {
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
                Model.updateScore();
                View.updateScore(Model.getScore());
            })

            // disappear after 2s after clicking 
            setTimeout(() => {
                if (randomHole.contains(moleImg)) {
                    randomHole.removeChild(moleImg);
                }
            }, 2000);
        }
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
const Model = ((view) => {
    const { showMole } = view;

    let score = 0;
    let gameStarted = false;

    const startGame = () => {
        gameStarted = true;
        setInterval(() => {
            showMole();
        }, 500);
    }

    const updateScore = () => {
        if (gameStarted) {
            score += 1;
            return score;
        }
    }

    const resetScore = () => {
        score = 0;
        return score;
    };

    const getScore = () => {
        return score;
    }

    return {
        startGame,
        updateScore,
        resetScore,
        getScore,
        gameStarted
    }
})(View);

// controller
const Controller = ((view, model) => {
    const { domSelector, renderBoard, showMole } = view;
    const { resetScore, startGame } = model;

    // start game, start count down 
    domSelector.startGameBtn.addEventListener('click', () => {
        // start game 
        startGame();

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
})(View, Model);
Controller.bootstrap();