const { deployDiamond } = require('../../scripts/deployDiamondFactory.js')


async function getIncludedIndices(getterFacet, modelName, instanceTest) {
  // Fetch the included array and convert elements to numbers
  let included = await getterFacet.getIncluded(modelName, instanceTest);
  included = included.map(value => Number(value));
  console.log("Included array:", included);

  // Find indices where the value is 1
  const indices = included
      .map((value, index) => value === 1 ? index : -1) // Map to index if value is 1, otherwise -1
      .filter(index => index !== -1); // Filter out -1s

  console.log("Indices of ones:", indices);
  return indices;
}


describe('mesureGasDiamondSPARKLogistics', async function () {
    let diamondAddress
    let workflowExecution 
    let getterFacet
    let ModelFactoryFacet
    let instanceTest
    before(async function () {

    diamondAddress = await deployDiamond()
    workflowExecution = await ethers.getContractAt('ExecLogicFacet', diamondAddress)
    getterFacet = await ethers.getContractAt('GettersFacet', diamondAddress)
    ModelFactoryFacet = await ethers.getContractAt('ModelFactoryFacet',diamondAddress)
    activities= [
      {
        "id": 0,
        "nodeType": 4,
        "xmlID": "sid-47441335-A92F-4B95-999B-5A0FCDFEE072",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 1,
        "nodeType": 4,
        "xmlID": "sid-5D8D22A7-1742-4EA1-B8AA-77860774A62E",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 2,
        "nodeType": 4,
        "xmlID": "Activity_0esk4hs",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 3,
        "nodeType": 4,
        "xmlID": "sid-9278779F-D64C-44A8-BB23-342FD885198D",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 4,
        "nodeType": 4,
        "xmlID": "sid-26DBEBFF-BAF1-4B88-A84A-25E87D8B2878",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 5,
        "nodeType": 4,
        "xmlID": "sid-DF6303CA-8443-4ECF-A070-A96028072AC4",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 6,
        "nodeType": 4,
        "xmlID": "sid-D4074E68-AAAB-4AEC-8B09-510C359DE279",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 7,
        "nodeType": 4,
        "xmlID": "sid-0A783647-344C-4AC5-8D30-AC00C1181224",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 8,
        "nodeType": 4,
        "xmlID": "sid-89022631-89C6-467D-BB16-93E55E5B2898",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 9,
        "nodeType": 4,
        "xmlID": "sid-BFC65806-6E59-4214-9EC7-D04DA15AE984",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 10,
        "nodeType": 4,
        "xmlID": "sid-F02C51E9-19F2-4894-A39B-D19DC81D36F8",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 11,
        "nodeType": 4,
        "xmlID": "sid-7704547D-4E32-4F5A-920E-985CF15FB582",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 12,
        "nodeType": 4,
        "xmlID": "sid-3C1431D5-D732-4A23-BD90-DF64321C99CF",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 13,
        "nodeType": 4,
        "xmlID": "sid-BF16C5DA-FEA1-43EB-A526-0BB72D75C122",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 14,
        "nodeType": 4,
        "xmlID": "sid-390CE8A8-D57E-46C1-ABE3-33FD39AFE182",
        "name": "",
        "lane": "Second reseller",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 15,
        "nodeType": 4,
        "xmlID": "sid-E6B050B6-FC0C-4026-953E-6FF89C52CC0E",
        "name": "",
        "lane": "External garage",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 16,
        "nodeType": 2,
        "xmlID": "Event_0cypz96",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 17,
        "nodeType": 0,
        "xmlID": "Event_1vttjvz",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 18,
        "nodeType": 2,
        "xmlID": "Event_1m9uzy4",
        "name": "",
        "lane": "Certified reseller",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 19,
        "nodeType": 2,
        "xmlID": "Event_1gzm7ak",
        "name": "",
        "lane": "Second reseller",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 20,
        "nodeType": 2,
        "xmlID": "Event_0b674ab",
        "name": "",
        "lane": "External garage",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 21,
        "nodeType": 3,
        "xmlID": "Event_0g6levg",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 22,
        "nodeType": 3,
        "xmlID": "sid-3F444730-08E2-48A9-9ED6-94CD055E7081",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 23,
        "nodeType": 3,
        "xmlID": "Event_1t0unw5",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 24,
        "nodeType": 3,
        "xmlID": "Event_0es4leg",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 25,
        "nodeType": 3,
        "xmlID": "Event_05emvq3",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 26,
        "nodeType": 3,
        "xmlID": "Event_1qkl7ya",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 27,
        "nodeType": 3,
        "xmlID": "Event_13rfpwt",
        "name": "",
        "lane": "Certified reseller",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 28,
        "nodeType": 3,
        "xmlID": "Event_0mf230p",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 29,
        "nodeType": 3,
        "xmlID": "sid-6C5A9378-E3D8-4D49-81A0-B71FC4B6492E",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 30,
        "nodeType": 3,
        "xmlID": "Event_052hy0v",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 31,
        "nodeType": 3,
        "xmlID": "Event_1530wd4",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 32,
        "nodeType": 3,
        "xmlID": "sid-ACCB2512-67F5-418E-9081-E0AA01D56A90",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 33,
        "nodeType": 3,
        "xmlID": "Event_0x8291w",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 34,
        "nodeType": 3,
        "xmlID": "Event_04qux99",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 35,
        "nodeType": 3,
        "xmlID": "sid-7E1D3389-B269-4246-A85D-84B4CB516943",
        "name": "",
        "lane": "External garage",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 36,
        "nodeType": 1,
        "xmlID": "sid-0CB445C7-AA60-4DCC-8FFF-4DF194FD5472",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 37,
        "nodeType": 1,
        "xmlID": "Event_00790yn",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 38,
        "nodeType": 1,
        "xmlID": "sid-9FD79319-1B71-4B25-94D0-C1C0BC04417B",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 39,
        "nodeType": 1,
        "xmlID": "Event_0vjtkcs",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 40,
        "nodeType": 1,
        "xmlID": "sid-2F7756D4-C9F8-4FB6-94D6-B59750DFA0A5",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 41,
        "nodeType": 1,
        "xmlID": "Event_1l7rkx3",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 42,
        "nodeType": 1,
        "xmlID": "Event_1cwbv97",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 43,
        "nodeType": 1,
        "xmlID": "Event_0qzsgvi",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 44,
        "nodeType": 1,
        "xmlID": "sid-0366512C-CB64-4B12-A56C-E623E06C97B1",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 45,
        "nodeType": 1,
        "xmlID": "Event_12tyx2p",
        "name": "",
        "lane": "Certified reseller",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 46,
        "nodeType": 1,
        "xmlID": "Event_0bh4j1g",
        "name": "",
        "lane": "Second reseller",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 47,
        "nodeType": 1,
        "xmlID": "Event_08v14sc",
        "name": "",
        "lane": "External garage",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 48,
        "nodeType": 1,
        "xmlID": "Event_0imfgrp",
        "name": "",
        "lane": "External garage",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 49,
        "nodeType": 5,
        "xmlID": "sid-AA3FD24D-6A11-48C3-AA58-8ED61F07FCF2",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 50,
        "nodeType": 5,
        "xmlID": "Gateway_05goyjb",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 51,
        "nodeType": 5,
        "xmlID": "sid-65720A2A-2794-4BD3-B673-5E38D0A4D4E1",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 52,
        "nodeType": 5,
        "xmlID": "sid-B7D6978C-9985-4CE9-9D8F-5884DE9B75BE",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 53,
        "nodeType": 5,
        "xmlID": "Gateway_1qmcawv",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 54,
        "nodeType": 5,
        "xmlID": "sid-77979638-4CF5-448A-95E7-D5C9D579DC00",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 55,
        "nodeType": 5,
        "xmlID": "Gateway_1ohw6cn",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 56,
        "nodeType": 5,
        "xmlID": "sid-B915E66B-6811-4406-A33C-7F0E2923CD9F",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 57,
        "nodeType": 5,
        "xmlID": "Gateway_15t1v1j",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 58,
        "nodeType": 5,
        "xmlID": "Gateway_19n65nc",
        "name": "",
        "lane": "External garage",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 59,
        "nodeType": 4,
        "xmlID": "Condition_9BB7823-1380-4C03-A55B-7D7744C95469",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 60,
        "nodeType": 4,
        "xmlID": "Condition_7D9AF68-B779-44EE-B382-084542D262C9",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 61,
        "nodeType": 4,
        "xmlID": "Condition_25F9785-235F-4BA8-8D3F-3854798E6EF0",
        "name": "",
        "lane": "Customer",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 62,
        "nodeType": 4,
        "xmlID": "Condition_3DAA1F9-D5D3-4515-BD40-AB126E856AEC",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 63,
        "nodeType": 4,
        "xmlID": "Condition_276F0AA-0B47-4821-8B9A-2265D233D78E",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 64,
        "nodeType": 4,
        "xmlID": "Condition_21432F4-0645-474A-9B1D-C2A270B93532",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 65,
        "nodeType": 4,
        "xmlID": "Condition_23D76E5-1D5E-4F27-B8BA-F62297E5AF7B",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 66,
        "nodeType": 4,
        "xmlID": "Condition_3055635-5895-4F6A-8DE6-618CB6D7C64C",
        "name": "",
        "lane": "SPARKS",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 67,
        "nodeType": 4,
        "xmlID": "Condition_BFB90FA-99AA-4D96-83E3-D4FD8C0C3E8F",
        "name": "",
        "lane": "External garage",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      }
    ]
    _tabChildrenOptim= [
      [
        "sid-AA3FD24D-6A11-48C3-AA58-8ED61F07FCF2"
      ],
      [
        "sid-9FD79319-1B71-4B25-94D0-C1C0BC04417B"
      ],
      [
        "Event_0vjtkcs"
      ],
      [
        "sid-26DBEBFF-BAF1-4B88-A84A-25E87D8B2878"
      ],
      [
        "sid-B7D6978C-9985-4CE9-9D8F-5884DE9B75BE"
      ],
      [
        "sid-3F444730-08E2-48A9-9ED6-94CD055E7081"
      ],
      [
        "sid-DF6303CA-8443-4ECF-A070-A96028072AC4"
      ],
      [
        "sid-B915E66B-6811-4406-A33C-7F0E2923CD9F"
      ],
      [
        "sid-BFC65806-6E59-4214-9EC7-D04DA15AE984"
      ],
      [
        "Event_0qzsgvi"
      ],
      [
        "sid-0366512C-CB64-4B12-A56C-E623E06C97B1"
      ],
      [
        "sid-F02C51E9-19F2-4894-A39B-D19DC81D36F8"
      ],
      [
        "sid-77979638-4CF5-448A-95E7-D5C9D579DC00",
        "sid-77979638-4CF5-448A-95E7-D5C9D579DC00"
      ],
      [
        "sid-B915E66B-6811-4406-A33C-7F0E2923CD9F"
      ],
      [
        "Event_0bh4j1g"
      ],
      [
        "Gateway_19n65nc"
      ],
      [
        "sid-47441335-A92F-4B95-999B-5A0FCDFEE072"
      ],
      [
        "sid-9278779F-D64C-44A8-BB23-342FD885198D"
      ],
      [
        "Event_13rfpwt"
      ],
      [
        "sid-390CE8A8-D57E-46C1-ABE3-33FD39AFE182"
      ],
      [
        "sid-E6B050B6-FC0C-4026-953E-6FF89C52CC0E"
      ],
      [
        "Gateway_05goyjb"
      ],
      [
        "Gateway_1qmcawv"
      ],
      [
        "Gateway_1ohw6cn"
      ],
      [],
      [
        "Gateway_15t1v1j"
      ],
      [
        "Event_1cwbv97"
      ],
      [
        "Event_12tyx2p"
      ],
      [
        "Event_00790yn"
      ],
      [
        "sid-65720A2A-2794-4BD3-B673-5E38D0A4D4E1"
      ],
      [
        "Event_1l7rkx3"
      ],
      [
        "sid-0A783647-344C-4AC5-8D30-AC00C1181224"
      ],
      [
        "sid-BF16C5DA-FEA1-43EB-A526-0BB72D75C122"
      ],
      [
        "sid-7704547D-4E32-4F5A-920E-985CF15FB582"
      ],
      [
        "sid-3C1431D5-D732-4A23-BD90-DF64321C99CF"
      ],
      [
        "Event_0imfgrp"
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        "Condition_9BB7823-1380-4C03-A55B-7D7744C95469",
        "Condition_7D9AF68-B779-44EE-B382-084542D262C9"
      ],
      [
        "Event_0mf230p",
        "sid-6C5A9378-E3D8-4D49-81A0-B71FC4B6492E"
      ],
      [
        "Condition_25F9785-235F-4BA8-8D3F-3854798E6EF0",
        "Activity_0esk4hs"
      ],
      [
        "Condition_3DAA1F9-D5D3-4515-BD40-AB126E856AEC",
        "Condition_276F0AA-0B47-4821-8B9A-2265D233D78E"
      ],
      [
        "Event_052hy0v",
        "Event_04qux99"
      ],
      [
        "Condition_21432F4-0645-474A-9B1D-C2A270B93532",
        "Condition_23D76E5-1D5E-4F27-B8BA-F62297E5AF7B"
      ],
      [
        "Event_1qkl7ya",
        "sid-ACCB2512-67F5-418E-9081-E0AA01D56A90"
      ],
      [
        "Condition_3055635-5895-4F6A-8DE6-618CB6D7C64C"
      ],
      [
        "Event_1t0unw5",
        "Event_1530wd4"
      ],
      [
        "Condition_BFB90FA-99AA-4D96-83E3-D4FD8C0C3E8F",
        "Event_08v14sc"
      ],
      [
        "Event_0g6levg"
      ],
      [
        "sid-0CB445C7-AA60-4DCC-8FFF-4DF194FD5472"
      ],
      [
        "sid-5D8D22A7-1742-4EA1-B8AA-77860774A62E"
      ],
      [
        "sid-D4074E68-AAAB-4AEC-8B09-510C359DE279"
      ],
      [
        "sid-2F7756D4-C9F8-4FB6-94D6-B59750DFA0A5"
      ],
      [
        "Event_0es4leg"
      ],
      [
        "Event_05emvq3"
      ],
      [
        "sid-89022631-89C6-467D-BB16-93E55E5B2898"
      ],
      [
        "sid-7E1D3389-B269-4246-A85D-84B4CB516943"
      ]
    ]
    _tabParentOptim = [
      [
        "Event_0cypz96"
      ],
      [
        "Condition_25F9785-235F-4BA8-8D3F-3854798E6EF0"
      ],
      [
        "sid-65720A2A-2794-4BD3-B673-5E38D0A4D4E1"
      ],
      [
        "Event_1vttjvz"
      ],
      [
        "sid-9278779F-D64C-44A8-BB23-342FD885198D"
      ],
      [
        "sid-D4074E68-AAAB-4AEC-8B09-510C359DE279"
      ],
      [
        "Condition_3DAA1F9-D5D3-4515-BD40-AB126E856AEC"
      ],
      [
        "Event_1530wd4"
      ],
      [
        "Condition_3055635-5895-4F6A-8DE6-618CB6D7C64C"
      ],
      [
        "sid-89022631-89C6-467D-BB16-93E55E5B2898"
      ],
      [
        "sid-7704547D-4E32-4F5A-920E-985CF15FB582"
      ],
      [
        "Event_0x8291w"
      ],
      [
        "Event_04qux99"
      ],
      [
        "sid-ACCB2512-67F5-418E-9081-E0AA01D56A90"
      ],
      [
        "Event_1gzm7ak"
      ],
      [
        "Event_0b674ab"
      ],
      [],
      [],
      [],
      [],
      [],
      [
        "Condition_9BB7823-1380-4C03-A55B-7D7744C95469"
      ],
      [
        "sid-DF6303CA-8443-4ECF-A070-A96028072AC4"
      ],
      [
        "Gateway_15t1v1j"
      ],
      [
        "Condition_21432F4-0645-474A-9B1D-C2A270B93532"
      ],
      [
        "Condition_23D76E5-1D5E-4F27-B8BA-F62297E5AF7B"
      ],
      [
        "Gateway_1ohw6cn"
      ],
      [
        "Event_1m9uzy4"
      ],
      [
        "Gateway_05goyjb"
      ],
      [
        "Gateway_05goyjb"
      ],
      [
        "Gateway_1qmcawv"
      ],
      [
        "Gateway_15t1v1j"
      ],
      [
        "Gateway_1ohw6cn"
      ],
      [],
      [
        "Gateway_1qmcawv"
      ],
      [
        "Condition_BFB90FA-99AA-4D96-83E3-D4FD8C0C3E8F"
      ],
      [
        "Condition_7D9AF68-B779-44EE-B382-084542D262C9"
      ],
      [
        "Event_0mf230p"
      ],
      [
        "sid-5D8D22A7-1742-4EA1-B8AA-77860774A62E"
      ],
      [
        "Activity_0esk4hs"
      ],
      [
        "Condition_276F0AA-0B47-4821-8B9A-2265D233D78E"
      ],
      [
        "Event_052hy0v"
      ],
      [
        "Event_1qkl7ya"
      ],
      [
        "sid-BFC65806-6E59-4214-9EC7-D04DA15AE984"
      ],
      [
        "sid-F02C51E9-19F2-4894-A39B-D19DC81D36F8"
      ],
      [
        "Event_13rfpwt"
      ],
      [
        "sid-390CE8A8-D57E-46C1-ABE3-33FD39AFE182"
      ],
      [
        "Gateway_19n65nc"
      ],
      [
        "sid-7E1D3389-B269-4246-A85D-84B4CB516943"
      ],
      [
        "sid-47441335-A92F-4B95-999B-5A0FCDFEE072"
      ],
      [
        "Event_0g6levg"
      ],
      [
        "sid-6C5A9378-E3D8-4D49-81A0-B71FC4B6492E"
      ],
      [
        "sid-26DBEBFF-BAF1-4B88-A84A-25E87D8B2878"
      ],
      [
        "sid-3F444730-08E2-48A9-9ED6-94CD055E7081"
      ],
      [
        "sid-3C1431D5-D732-4A23-BD90-DF64321C99CF",
        "sid-3C1431D5-D732-4A23-BD90-DF64321C99CF"
      ],
      [
        "Event_1t0unw5"
      ],
      [
        "sid-0A783647-344C-4AC5-8D30-AC00C1181224",
        "sid-BF16C5DA-FEA1-43EB-A526-0BB72D75C122"
      ],
      [
        "Event_05emvq3"
      ],
      [
        "sid-E6B050B6-FC0C-4026-953E-6FF89C52CC0E"
      ],
      [
        "sid-AA3FD24D-6A11-48C3-AA58-8ED61F07FCF2"
      ],
      [
        "sid-AA3FD24D-6A11-48C3-AA58-8ED61F07FCF2"
      ],
      [
        "sid-65720A2A-2794-4BD3-B673-5E38D0A4D4E1"
      ],
      [
        "sid-B7D6978C-9985-4CE9-9D8F-5884DE9B75BE"
      ],
      [
        "sid-B7D6978C-9985-4CE9-9D8F-5884DE9B75BE"
      ],
      [
        "sid-77979638-4CF5-448A-95E7-D5C9D579DC00"
      ],
      [
        "sid-77979638-4CF5-448A-95E7-D5C9D579DC00"
      ],
      [
        "sid-B915E66B-6811-4406-A33C-7F0E2923CD9F"
      ],
      [
        "Gateway_19n65nc"
      ]
    ]
    _msgInOptim= [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        "sid-3F444730-08E2-48A9-9ED6-94CD055E7081"
      ],
      [],
      [
        "Event_05emvq3"
      ],
      [
        "Event_1t0unw5"
      ],
      [
        "sid-89022631-89C6-467D-BB16-93E55E5B2898"
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        "Event_1qkl7ya"
      ],
      [
        "sid-BFC65806-6E59-4214-9EC7-D04DA15AE984",
        "Event_0es4leg"
      ],
      [
        "sid-0CB445C7-AA60-4DCC-8FFF-4DF194FD5472"
      ],
      [
        "Event_13rfpwt"
      ],
      [
        "sid-390CE8A8-D57E-46C1-ABE3-33FD39AFE182"
      ],
      [
        "Activity_0esk4hs"
      ],
      [
        "Event_0g6levg"
      ],
      [
        "sid-0366512C-CB64-4B12-A56C-E623E06C97B1"
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
    _msgOutOptim= [
      [],
      [],
      [
        "Event_0x8291w"
      ],
      [],
      [],
      [],
      [],
      [],
      [
        "Event_0b674ab"
      ],
      [
        "sid-6C5A9378-E3D8-4D49-81A0-B71FC4B6492E"
      ],
      [],
      [],
      [],
      [],
      [
        "sid-ACCB2512-67F5-418E-9081-E0AA01D56A90"
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        "Event_04qux99"
      ],
      [
        "Event_0cypz96"
      ],
      [
        "Event_1gzm7ak"
      ],
      [
        "sid-6C5A9378-E3D8-4D49-81A0-B71FC4B6492E"
      ],
      [
        "Event_1m9uzy4"
      ],
      [
        "Event_0mf230p"
      ],
      [
        "Event_1530wd4"
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        "Event_052hy0v"
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [
        "sid-7E1D3389-B269-4246-A85D-84B4CB516943"
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
      const _keyReplay=[]
      const _valueReplay=[[]]


      await ModelFactoryFacet.addModel('SPARKLogistics',activities,_tabChildrenOptim,_tabParentOptim,_msgInOptim,_msgOutOptim,_keyReplay,_valueReplay)
      
      let tx = await ModelFactoryFacet.newInstance('SPARKLogistics')
      let receipt = await tx.wait()
      const events = receipt.events;
      const id = events.find(event => event.event === 'instanceId');
      console.log(Number(id.args._id))
      instanceTest =Number(id.args._id)

    })
    it('mesure de Gas avec Abi facet entiere', async () =>{
      let modelName = 'SPARKLogistics'

      await workflowExecution.Invoke(17, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(3,modelName,instanceTest,"SPARKS","","")
      await workflowExecution.Invoke(4,modelName,instanceTest,"SPARKS","","")
      await workflowExecution.Invoke(52, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(62, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(63, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(6, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(5, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(22, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(49, modelName, instanceTest, "Customer", "", "");
      await workflowExecution.Invoke(0,modelName,instanceTest,"Customer","","")
      await workflowExecution.Invoke(49, modelName, instanceTest, "Customer", "", "");
      await workflowExecution.Invoke(59, modelName, instanceTest, "Customer", "", "");
      await workflowExecution.Invoke(60, modelName, instanceTest, "Customer", "", "");
      await workflowExecution.Invoke(21, modelName, instanceTest, "Customer", "", "");
      await workflowExecution.Invoke(12, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(54, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(64, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(65, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(24, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(51, modelName, instanceTest, "Customer", "", "");
      await workflowExecution.Invoke(2,modelName,instanceTest,"Customer","","")
      await workflowExecution.Invoke(61, modelName, instanceTest, "Customer", "", "");
      await workflowExecution.Invoke(11, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(10, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(44, modelName, instanceTest, "SPARKS", "", "");
      await workflowExecution.Invoke(48, modelName, instanceTest, "External garage", "", "");

      getIncludedIndices(getterFacet, modelName, instanceTest)

    })
})