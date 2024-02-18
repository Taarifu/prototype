const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Taarifu", function() {

  beforeEach(async function() {
  
  //const address_to_fix = await ethers.getSigner();
  const deployer = await ethers.getSigners();
  })
  it("Allows citizens to report and vote on items", async function() {
    const Taarifu = await ethers.getContractFactory("Taarifu", deployer);
    const taarifuContract = await Taarifu.deploy();
    await taarifuContract.deployed();

    const [_, firstMemberAddress, secondMemberAddress, thirdMemberAddress] =
      await ethers.getSigners();

    await taarifuContract.connect(firstMemberAddress).newMember();
    await taarifuContract.connect(secondMemberAddress).newMember();
    await taarifuContract.connect(thirdMemberAddress).newMember();

    //Creating news Items
    await taarifuContract
      .connect(firstMemberAddress)
      .postNews("This is a new news item");

    await taarifuContract
      .connect(secondMemberAddress)
      .postNews("This is a nother new news item");

    await taarifuContract
      .connect(thirdMemberAddress)
      .postNews("This is yet another new news item");

    //Becoming a validator
    await taarifuContract.connect(firstMemberAddress).becomeValidator(3);

    //Validator Elections
    await taarifuContract.connect(thirdMemberAddress).voteForValidator(1, 1);

    //Voting for worthy news Items
    await taarifuContract
      .connect(thirdMemberAddress)
      .voteWorthiness(1, true, 0);
    await taarifuContract
      .connect(firstMemberAddress)
      .voteWorthiness(2, true, 0);
    await taarifuContract
      .connect(secondMemberAddress)
      .voteWorthiness(2, false, 0);
    await taarifuContract
      .connect(thirdMemberAddress)
      .voteWorthiness(2, true, 0);

    //Verify News
    await taarifuContract.connect(firstMemberAddress).verifyNews(1);

    let allnews = await taarifuContract.fetchAllNewsItems();
    let members = await taarifuContract.fetchAllMembers();
    let validators = await taarifuContract.fetchAllValidators();

    console.log("all news : ", allnews);
    console.log("all members : ", members);
    console.log("all validator : ", validators);
  });
})

