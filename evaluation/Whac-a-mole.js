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

    const updateScore = (score) => {
        domSelector.scoreCount.textContent = score;
    }

    return {
        domSelector,
        renderBoard,
        updateScore
    };
})();

// model
const Model = ((view) => {
    let score = 0;
    let gameStarted = false;
    let moleInterval;
    let snakeInterval;

    const startGame = () => {
        gameStarted = true;
        const moleInterval = setInterval(() => {
            showMole();
        }, 1000);
        const snakeInterval = setInterval(() => {
            showSnake();
        }, 2000);
        return { moleInterval, snakeInterval };
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

    const resetBoard = () => {
        const holes = document.querySelectorAll('.hole');
        holes.forEach(hole => {
            hole.innerHTML = '';
        });
    }

    const resetGame = () => {
        gameStarted = false;
        resetBoard();
        clearInterval(moleInterval);
        clearInterval(snakeInterval);
        return score;
    }

    const showMole = () => {
        // check if the game started 
        if (gameStarted) {
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
        }
    };

    // add snakes 
    const showSnake = () => {
        if (gameStarted) {
            // get random holes to show snakes 
            const holes = document.querySelectorAll('.hole');
            const randomIndexSnake = Math.floor(Math.random() * holes.length);
            const randomHoleSnake = holes[randomIndexSnake];

            // add snakes 
            const snakeImg = document.createElement('img');
            snakeImg.classList.add('snake_img');
            snakeImg.src = 'mine.jpeg';
            randomHoleSnake.appendChild(snakeImg);

            // disappear after 2s after clicking 
            setTimeout(() => {
                if (randomHoleSnake.contains(snakeImg)) {
                    randomHoleSnake.removeChild(snakeImg);
                }
            }, 2000);

            // add event listener to snake 
            snakeImg.addEventListener('click', () => {
                // update score 
                Model.updateScore();
                View.updateScore(Model.getScore());

                // clear holes  
                resetBoard();
                clearInterval(moleInterval);
                clearInterval(snakeInterval);

                // all snakes appear 
                holes.forEach(hole => {
                    const snakeImg = document.createElement('img');
                    snakeImg.classList.add('snake_img');
                    snakeImg.src = 'mine.jpeg';
                    hole.appendChild(snakeImg);
                });

                // disappear after 2s after showing all 
                setTimeout(() => {
                    holes.forEach(hole => {
                        hole.innerHTML = '';
                    });
                }, 2000);
            })
        }
    };

    return {
        startGame,
        updateScore,
        resetScore,
        getScore,
        resetBoard,
        resetGame,
        showMole,
        showSnake,
        gameStarted
    }
})(View);

// controller
const Controller = ((view, model) => {
    const { domSelector, renderBoard, showMole } = view;
    const { resetScore, startGame, resetGame, resetBoard } = model;

    // start game, start count down 
    domSelector.startGameBtn.addEventListener('click', () => {
        // start game 
        startGame();
        resetBoard();

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
                alert('Time is Over!');
                resetGame();
            }
        }, 1000);
    });

    const bootstrap = () => { // => initialize the board
        renderBoard();
    }
    return { bootstrap };
})(View, Model);
Controller.bootstrap();