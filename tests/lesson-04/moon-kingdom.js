//Khai báo mảng các object: characters có các thuộc tính: name, level, health

const characters = [
    {name: 'Mario', level: 99, health: 450},
    {name: 'Luigi', level: 75, health: 325},
    {name: 'Peach', level: 87, health: 238},
    {name: 'Yoshi', level: 69, health: 550},
    {name: 'Bowser', level: 99, health: 521}
];
console.log(characters);

// Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp

const charactersPowerUp = characters.map (character => ({
    name: character.name.toUpperCase(),
    level: character.level * 2,
    health: character.health * 3
}));
console.log (charactersPowerUp);

// Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên mảng mới lọc được này là "possibleWinners"

const possibleWinners = charactersPowerUp.filter (character => character.health > 1000);
console.log(possibleWinners);

// Tạo hàm printLeaderboard:
// Nhận vào tham số: players là mảng các object: [{name: "Mario", score: 1000},...]
const players = [
    {name: 'Mario', score: 1000},
    {name: 'Luigi', score: 623},
    {name: 'Peach', score: 859},
    {name: 'Yoshi', score: 971},
    {name: 'Bowser', score: 705}
];
console.log(players);

// Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp

const printLeaderboard = players.sort((a, b) => (b.score - a.score));
console.log(printLeaderboard);

// In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1,2,3 hãy thêm huy chương phía trước

const medals = ["🥇","🥈","🥉"];
for (let i = 0; i < printLeaderboard.length; i++){
    const leaderboard = printLeaderboard[i];
    const icon = medals[i] || "  ";
    console.log(`${icon} ${i + 1}. ${leaderboard.name} - ${leaderboard.score} pts`)
};