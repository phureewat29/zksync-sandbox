import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  await hre.run("verify:verify", {
    address: "",
    contract: "Corgi",
    constructorArguments: []
  });
}