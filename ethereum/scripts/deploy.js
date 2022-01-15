const { ethers } = require("hardhat");

async function main() {
    const EmotionaShapes = await ethers.getContractFactory("EmotionalShapes");
    const emotionalShapes = await EmotionaShapes.deploy();
    console.log("Emotional shapes deployed:", emotionalShapes.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
