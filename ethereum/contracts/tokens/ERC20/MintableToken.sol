pragma solidity ^0.4.24;

import "./StandardToken.sol";
import "../../ownership/Ownable.sol";


/**
 * @title Mintable token
 * @dev Simple ERC20 Token example, with mintable token creation
 * Based on code by TokenMarketNet: https://github.com/TokenMarketNet/ico/blob/master/contracts/MintableToken.sol
 */
contract MintableToken is DividendToken {

  bool public mintingFinished = false;



  // @dev Function to mint tokens
  // @param _to The address that will receive the minted tokens.
  // @param _amount The amount of tokens to mint.
  function mint(address _to, uint256 _amount)
  public
  hasMintPermission
  canMint
  returns (bool) {
    supply = supply.add(_amount);
    balances[_to] = balances[_to].add(_amount);
    emit Mint(_to, _amount);
    emit Transfer(address(0), _to, _amount);
    return true;
  }


  // @dev Function to stop minting new tokens.
  function finishMinting() 
  public 
  onlyOwner 
  canMint 
  returns (bool) {
    mintingFinished = true;
    emit MintFinished();
    return true;
  }

  // @notice modifier: Requires that minting hasn't finished
  modifier canMint() {
    require(!mintingFinished);
    _;
  }

  // @notice only certified minter can call
  modifier hasMintPermission() {
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("assetOwner", msg.sender))));
    _;
  }


  event Mint(address indexed to, uint256 amount);
  event MintFinished();
}