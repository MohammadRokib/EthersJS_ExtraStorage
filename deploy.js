const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const provider = new ethers.providers.JsonRpcBatchProvider(process.env.URL);
    const wallet = new ethers.Wallet(process.env.KEY, provider);

    const abi = fs.readFileSync("./ExtraStorage_sol_ExtraStorage.abi", "utf8");
    const bin = fs.readFileSync("./ExtraStorage_sol_ExtraStorage.bin", "utf8");

    const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
    console.log ("Deploying please wait...");
    const contract = await contractFactory.deploy();
    // console.log (contract);

    const number = await contract.retrieve();
    console.log (`Current Number: ${number.toString()}`);

    const storeNumberResponse = await contract.store("989765");
    const storeNumberReciept = await storeNumberResponse.wait(1);
    const num = await contract.retrieve();
    console.log (`Current Number: ${num.toString()}`);

    const addPersonResponse = await contract.addPerson("Python", "321456");
    const addPersonReciept = await addPersonResponse.wait(1);

    const array = await contract.array("0");
    console.log (array);

    const list = await contract.list("Python");
    console.log (list.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })