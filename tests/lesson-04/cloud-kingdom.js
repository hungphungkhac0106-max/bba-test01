let playerName = "Mario";
const currentLives = 3;
const coinsQuantity = {
   level1: 25,
   level2: 30,
   level3: 45 
};

// Tính tổng coin của 3 level, sau đó tính giá trị trung bình (tổng / 3)
const totalCoins = coinsQuantity.level1 + coinsQuantity.level2 + coinsQuantity.level3;
const averageCoins = totalCoins / 3;

// In ra số coin dư khi chia tổng số coin cho 3
const remainingCoins = totalCoins % 3;
console.log(`Tổng số coin dư khi chia tổng số coin cho 3: ${remainingCoins} coins`);