"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TokenFactoryInterface = exports.TokenFactoryInterface = 
{
  "contractName": "TokenFactoryInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenURI",
          "type": "string"
        }
      ],
      "name": "createEtherDividend",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenURI",
          "type": "string"
        },
        {
          "name": "_erc20Address",
          "type": "address"
        }
      ],
      "name": "createERC20Dividend",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface TokenFactoryInterface{\n\n  function createEtherDividend(string _tokenURI) external returns (address);\n\n  function createERC20Dividend(string _tokenURI, address _erc20Address) external returns (address);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        8499
      ]
    },
    "id": 8500,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8482,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8499,
        "linearizedBaseContracts": [
          8499
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8489,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8484,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 8489,
                  "src": "91:16:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8483,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 8488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8487,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8489,
                  "src": "127:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8486,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:32"
            },
            "scope": 8499,
            "src": "62:74:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8498,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8494,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8491,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 8498,
                  "src": "169:16:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8490,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8493,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8498,
                  "src": "187:21:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8492,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 8497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8496,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8498,
                  "src": "228:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8495,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:32"
            },
            "scope": 8499,
            "src": "140:97:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8500,
        "src": "26:214:32"
      }
    ],
    "src": "0:241:32"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        8499
      ]
    },
    "id": 8500,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8482,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8499,
        "linearizedBaseContracts": [
          8499
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8489,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8484,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 8489,
                  "src": "91:16:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8483,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 8488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8487,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8489,
                  "src": "127:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8486,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:32"
            },
            "scope": 8499,
            "src": "62:74:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8498,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8494,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8491,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 8498,
                  "src": "169:16:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8490,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8493,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8498,
                  "src": "187:21:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8492,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 8497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8496,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8498,
                  "src": "228:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8495,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:32"
            },
            "scope": 8499,
            "src": "140:97:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8500,
        "src": "26:214:32"
      }
    ],
    "src": "0:241:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-11T19:26:29.587Z"
}