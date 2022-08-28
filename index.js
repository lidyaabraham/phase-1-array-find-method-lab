// code your solution here
function superbowlWin(games) {
    let win = games.find(game => game.result === 'W');
    if(typeof(win) === 'undefined') {
        return undefined;
    } else {
        return win.year;
    }
}