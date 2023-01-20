// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";

contract Taarifu {
    using Counters for Counters.Counter;
    Counters.Counter private _memberIds;
    Counters.Counter private _newsIds;
    Counters.Counter private _validatorIds;

    struct NewsItem {
        uint256 newsId;
        address poster;
        string content;
        int worthinessVotes;
        int totalVotes;
        bool verified;
    }

    struct Member{
        uint256 memberId;
        address _address;
    }

    struct Validator {
        uint256 validatorId;
        address memberAddress;
        string _alias;
        string motivation;
        uint voteCount;
    }

    address public creator;
    Member[] public members;
    Validator[] public validators;
    NewsItem[] public newsItems;

    mapping(address => bool) public isMember;
    mapping(address => bool) public hasVoted;
    mapping(address => uint) public communityPoints;
    mapping(address => bool) public isValidator;
    mapping(address => bool) public isActiveValidator;
    mapping(address => uint) public memberVotes;
    mapping (address => uint) public lastVoteTime;

    event NewMember(uint256 indexed memberId,address memberAddress);
    event NewNewsItem(uint256 indexed newsId, address poster, string content, int worthinessVotes, int totalVotes, bool verified);
    event WorthinessVote(address voter, uint newsId, bool vote);
    event ValidatorRequest(uint256 indexed validatorId, address memberAddress, string _alias,string _motivation,uint voteCount);
    event ValidatorElection(address member, uint validatorId);


    constructor() public {
       creator = msg.sender;
    }

    function newMember()public returns (uint) {
         _memberIds.increment();
        uint256 newMemberId = _memberIds.current(); 
        members.push(Member(newMemberId,msg.sender));
        isMember[msg.sender] = true;
        emit NewMember(newMemberId, msg.sender);
        return newMemberId;
    }

    function postNews(string memory content) public returns (uint){
        
        _newsIds.increment();
        uint256 newNewsId = _newsIds.current(); 
        newsItems.push(NewsItem(newNewsId, msg.sender, content, 0,0,false));
        communityPoints[msg.sender]+= 5;
        emit NewNewsItem(newNewsId, msg.sender, content, 0,0, false);
        return newNewsId;
    }

    function becomeValidator(string memory _alias, string memory motivation, uint requiredPoints)public returns (uint) {
        require(communityPoints[msg.sender] > requiredPoints, "You do not meet the required community points");
        require(!isValidator[msg.sender], "You had already submitted a request to be a validator");
         _validatorIds.increment();
        uint256 newValidatorId = _validatorIds.current(); 
        validators.push(Validator(newValidatorId,msg.sender,_alias, motivation,0));
        isValidator[msg.sender] = true;
        emit ValidatorRequest(newValidatorId, msg.sender,_alias, motivation,0);
        return newValidatorId;
    }

    function voteWorthiness(uint newsId, bool vote, uint timeLimit) public {
        require(block.timestamp > lastVoteTime[msg.sender] + timeLimit, "You can vote again after 10 mins");
        lastVoteTime[msg.sender] = block.timestamp;

        NewsItem storage news = newsItems[newsId-1];

        if (vote) {
            news.worthinessVotes++;
        } else {
            news.worthinessVotes--;
        }

        news.totalVotes++;
        hasVoted[msg.sender] = true;
        communityPoints[msg.sender]+= 1;
        emit WorthinessVote(msg.sender, newsId, vote);
    }


    function voteForValidator(uint validatorId, uint threshold) public {
        require(memberVotes[msg.sender] < 2, "Member has already voted for 2 validators.");
        Validator storage validator = validators[validatorId-1];
        
        memberVotes[msg.sender]++;
        validator.voteCount++;
        
        uint currentVotes = validator.voteCount;
        if(currentVotes >= threshold){
            isActiveValidator[validator.memberAddress] = true;
        }
        
        emit ValidatorElection(msg.sender, validatorId);
    }


    function verifyNews(uint newsId) public {
        require(isActiveValidator[msg.sender], "Validator is not active.");

        NewsItem storage news = newsItems[newsId-1];
        news.verified = true;
    }

    function fetchAllNewsItems() public view returns (NewsItem[] memory) {
        return newsItems;
    }

    function fetchAllMembers() public view returns (Member[] memory) {
        return members;
    }

    function fetchAllValidators() public view returns (Validator[] memory) {
        return validators;
    }

}
