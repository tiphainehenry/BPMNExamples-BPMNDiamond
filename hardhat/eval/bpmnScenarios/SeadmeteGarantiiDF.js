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

let modelName = "SeadmeteGarantii"
describe('mesureGasDiamondSeadmeteGarantii', async function () {
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
    activities = [
      {
        "id": 0,
        "nodeType": 4,
        "xmlID": "sid-1CD046B2-F1DE-4E72-B186-DF757F0F0C04",
        "name": "",
        "lane": "Laojuhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 1,
        "nodeType": 4,
        "xmlID": "sid-879120B8-4CD9-4C47-82E3-EFB91447D38D",
        "name": "",
        "lane": "Laojuhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 2,
        "nodeType": 4,
        "xmlID": "sid-EB69579C-EF16-4414-BC8C-1F1B7F20005B",
        "name": "",
        "lane": "Laojuhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 3,
        "nodeType": 4,
        "xmlID": "sid-B3AE24CC-FFE6-4592-9C39-728CC9A45341",
        "name": "",
        "lane": "Laojuhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 4,
        "nodeType": 4,
        "xmlID": "sid-655BCB50-6C40-4142-BAA1-261489F4548A",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 5,
        "nodeType": 4,
        "xmlID": "sid-DAB5F507-EFF9-47EF-8321-F9C2F5FA0C0F",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 6,
        "nodeType": 4,
        "xmlID": "sid-BE0732BC-5BFA-4BEA-AA19-733D3FAAB241",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 7,
        "nodeType": 4,
        "xmlID": "sid-E2D50642-1DA9-48B4-A1AB-551FE2F59C63",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 8,
        "nodeType": 4,
        "xmlID": "sid-D4E6D16E-D0F4-4473-A4DD-829ECF1655EE",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 9,
        "nodeType": 4,
        "xmlID": "sid-164C0EFF-2B9A-4893-B2DB-325C55891720",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 10,
        "nodeType": 4,
        "xmlID": "sid-DDC5F833-4DD6-43FE-BAD7-5AD7F891F5E2",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 11,
        "nodeType": 4,
        "xmlID": "sid-AB73CCD4-7D6C-4872-B5B3-BEAEF0965FB3",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 12,
        "nodeType": 4,
        "xmlID": "sid-A0412598-4D5B-45B5-9292-0409BE89EFFC",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 13,
        "nodeType": 4,
        "xmlID": "sid-40098927-352B-4CDF-A6BC-55107978D3C7",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 14,
        "nodeType": 4,
        "xmlID": "sid-5DA39FA5-564C-4864-9B45-9BB81CE08961",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 15,
        "nodeType": 4,
        "xmlID": "sid-249307F2-98C5-452E-9248-5DE68862F557",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 16,
        "nodeType": 4,
        "xmlID": "sid-F8690217-2307-40A5-A61E-3EF5F39B9CAE",
        "name": "",
        "lane": "Muugijuht",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 17,
        "nodeType": 4,
        "xmlID": "sid-65765301-4B25-4C76-9535-DECCF4C3EA79",
        "name": "",
        "lane": "Assistent",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 18,
        "nodeType": 4,
        "xmlID": "sid-E9F66E5F-B46A-4CF4-858E-D438D9824F2C",
        "name": "",
        "lane": "Assistent",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 19,
        "nodeType": 4,
        "xmlID": "sid-55897027-E46C-468A-A5BD-625512853329",
        "name": "",
        "lane": "Tootja remondikeskus",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 20,
        "nodeType": 4,
        "xmlID": "sid-2CFB401F-E8DA-4C44-BAF1-32D4E5EC0D58",
        "name": "",
        "lane": "Tootja remondikeskus",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 21,
        "nodeType": 0,
        "xmlID": "sid-1B7E9696-9C54-40E8-8B9A-870A0ABDF635",
        "name": "",
        "lane": "Laojuhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 22,
        "nodeType": 0,
        "xmlID": "sid-309BFA47-2018-486B-A2C6-720AC2FC87B4",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 23,
        "nodeType": 0,
        "xmlID": "sid-17AA4693-C3E0-4D0D-9463-D7BE82CAC7EA",
        "name": "",
        "lane": "Assistent",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 24,
        "nodeType": 1,
        "xmlID": "sid-543E867B-FE95-422E-A25E-E8584400AA70",
        "name": "",
        "lane": "Laojuhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 25,
        "nodeType": 1,
        "xmlID": "sid-B53B9E38-A94C-407F-BCFE-B94AD9028F01",
        "name": "",
        "lane": "Assistent",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 26,
        "nodeType": 5,
        "xmlID": "sid-03F6742B-9635-4069-8FCD-E0C301A5FF0C",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 27,
        "nodeType": 5,
        "xmlID": "sid-84B5CB3C-E7CB-40E6-B5EA-6DE12F949FAA",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 28,
        "nodeType": 5,
        "xmlID": "sid-5347D7F1-610B-4CC3-AEC1-1F94454397F5",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 29,
        "nodeType": 5,
        "xmlID": "sid-E28CC810-DB0D-413D-A0FE-5FDA0394BBAA",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 30,
        "nodeType": 5,
        "xmlID": "sid-B32A0916-B0A5-4EC8-BB34-46054FE3C97F",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 31,
        "nodeType": 4,
        "xmlID": "Condition_3F394B5-24A3-41B2-A70A-FEDED8168106",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 32,
        "nodeType": 4,
        "xmlID": "Condition_90B21C2-FB72-497F-B41A-AB6EE3E4B854",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 33,
        "nodeType": 4,
        "xmlID": "Condition_00D722A-78BF-41B8-AF7A-02A9F3F6EFCB",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 34,
        "nodeType": 4,
        "xmlID": "Condition_FD26262-9A3E-4D10-9723-8F8237AE66F5",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 35,
        "nodeType": 4,
        "xmlID": "Condition_ED57E10-FA75-4C28-8B13-627C2B6EC7AF",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 36,
        "nodeType": 4,
        "xmlID": "Condition_348E072-F751-4739-A396-5FAB93B42FFF",
        "name": "",
        "lane": "Tookoja juhataja",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 37,
        "nodeType": 4,
        "xmlID": "Condition_41A5BBA-BBB0-454E-A947-65B55036C5E1",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 38,
        "nodeType": 4,
        "xmlID": "Condition_8F3D20F-DA3A-4B86-9755-23D4C3E551D9",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 39,
        "nodeType": 4,
        "xmlID": "Condition_68632E2-1250-41B3-9F3E-02008D14A7BE",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 40,
        "nodeType": 4,
        "xmlID": "Condition_21061BE-11E3-4127-91AA-DBDBD94A3AB1",
        "name": "",
        "lane": "Remonditehnik",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      }
    ]
    _tabChildrenOptim = [
      [
        "sid-DAB5F507-EFF9-47EF-8321-F9C2F5FA0C0F"
      ],
      [
        "sid-E2D50642-1DA9-48B4-A1AB-551FE2F59C63"
      ],
      [
        "sid-543E867B-FE95-422E-A25E-E8584400AA70"
      ],
      [
        "sid-164C0EFF-2B9A-4893-B2DB-325C55891720"
      ],
      [
        "sid-84B5CB3C-E7CB-40E6-B5EA-6DE12F949FAA"
      ],
      [
        "sid-03F6742B-9635-4069-8FCD-E0C301A5FF0C"
      ],
      [
        "sid-879120B8-4CD9-4C47-82E3-EFB91447D38D"
      ],
      [
        "sid-55897027-E46C-468A-A5BD-625512853329"
      ],
      [
        "sid-5347D7F1-610B-4CC3-AEC1-1F94454397F5"
      ],
      [
        "sid-D4E6D16E-D0F4-4473-A4DD-829ECF1655EE"
      ],
      [
        "sid-543E867B-FE95-422E-A25E-E8584400AA70"
      ],
      [
        "sid-E28CC810-DB0D-413D-A0FE-5FDA0394BBAA"
      ],
      [
        "sid-B32A0916-B0A5-4EC8-BB34-46054FE3C97F"
      ],
      [
        "sid-B3AE24CC-FFE6-4592-9C39-728CC9A45341"
      ],
      [
        "sid-E9F66E5F-B46A-4CF4-858E-D438D9824F2C"
      ],
      [
        "sid-40098927-352B-4CDF-A6BC-55107978D3C7"
      ],
      [
        "sid-BE0732BC-5BFA-4BEA-AA19-733D3FAAB241"
      ],
      [
        "sid-AB73CCD4-7D6C-4872-B5B3-BEAEF0965FB3"
      ],
      [
        "sid-B53B9E38-A94C-407F-BCFE-B94AD9028F01"
      ],
      [
        "sid-2CFB401F-E8DA-4C44-BAF1-32D4E5EC0D58"
      ],
      [
        "sid-B3AE24CC-FFE6-4592-9C39-728CC9A45341"
      ],
      [
        "sid-1CD046B2-F1DE-4E72-B186-DF757F0F0C04"
      ],
      [
        "sid-DAB5F507-EFF9-47EF-8321-F9C2F5FA0C0F"
      ],
      [
        "sid-65765301-4B25-4C76-9535-DECCF4C3EA79"
      ],
      [],
      [],
      [
        "Condition_90B21C2-FB72-497F-B41A-AB6EE3E4B854",
        "Condition_00D722A-78BF-41B8-AF7A-02A9F3F6EFCB"
      ],
      [
        "Condition_ED57E10-FA75-4C28-8B13-627C2B6EC7AF",
        "Condition_348E072-F751-4739-A396-5FAB93B42FFF"
      ],
      [
        "Condition_3F394B5-24A3-41B2-A70A-FEDED8168106",
        "Condition_FD26262-9A3E-4D10-9723-8F8237AE66F5"
      ],
      [
        "Condition_41A5BBA-BBB0-454E-A947-65B55036C5E1",
        "Condition_68632E2-1250-41B3-9F3E-02008D14A7BE"
      ],
      [
        "Condition_8F3D20F-DA3A-4B86-9755-23D4C3E551D9",
        "Condition_21061BE-11E3-4127-91AA-DBDBD94A3AB1"
      ],
      [
        "sid-EB69579C-EF16-4414-BC8C-1F1B7F20005B"
      ],
      [
        "sid-655BCB50-6C40-4142-BAA1-261489F4548A"
      ],
      [
        "sid-AB73CCD4-7D6C-4872-B5B3-BEAEF0965FB3"
      ],
      [
        "sid-DDC5F833-4DD6-43FE-BAD7-5AD7F891F5E2"
      ],
      [
        "sid-F8690217-2307-40A5-A61E-3EF5F39B9CAE"
      ],
      [
        "sid-BE0732BC-5BFA-4BEA-AA19-733D3FAAB241"
      ],
      [
        "sid-655BCB50-6C40-4142-BAA1-261489F4548A"
      ],
      [
        "sid-5DA39FA5-564C-4864-9B45-9BB81CE08961"
      ],
      [
        "sid-A0412598-4D5B-45B5-9292-0409BE89EFFC"
      ],
      [
        "sid-249307F2-98C5-452E-9248-5DE68862F557"
      ]
    ]
    _tabParentOptim = [
      [
        "sid-1B7E9696-9C54-40E8-8B9A-870A0ABDF635"
      ],
      [
        "sid-BE0732BC-5BFA-4BEA-AA19-733D3FAAB241"
      ],
      [
        "Condition_3F394B5-24A3-41B2-A70A-FEDED8168106"
      ],
      [
        "sid-40098927-352B-4CDF-A6BC-55107978D3C7",
        "sid-2CFB401F-E8DA-4C44-BAF1-32D4E5EC0D58"
      ],
      [
        "Condition_90B21C2-FB72-497F-B41A-AB6EE3E4B854",
        "Condition_41A5BBA-BBB0-454E-A947-65B55036C5E1"
      ],
      [
        "sid-1CD046B2-F1DE-4E72-B186-DF757F0F0C04",
        "sid-309BFA47-2018-486B-A2C6-720AC2FC87B4"
      ],
      [
        "Condition_348E072-F751-4739-A396-5FAB93B42FFF",
        "sid-F8690217-2307-40A5-A61E-3EF5F39B9CAE"
      ],
      [
        "sid-879120B8-4CD9-4C47-82E3-EFB91447D38D"
      ],
      [
        "sid-164C0EFF-2B9A-4893-B2DB-325C55891720"
      ],
      [
        "sid-B3AE24CC-FFE6-4592-9C39-728CC9A45341"
      ],
      [
        "Condition_FD26262-9A3E-4D10-9723-8F8237AE66F5"
      ],
      [
        "Condition_00D722A-78BF-41B8-AF7A-02A9F3F6EFCB",
        "sid-65765301-4B25-4C76-9535-DECCF4C3EA79"
      ],
      [
        "Condition_68632E2-1250-41B3-9F3E-02008D14A7BE"
      ],
      [
        "sid-249307F2-98C5-452E-9248-5DE68862F557"
      ],
      [
        "Condition_8F3D20F-DA3A-4B86-9755-23D4C3E551D9"
      ],
      [
        "Condition_21061BE-11E3-4127-91AA-DBDBD94A3AB1"
      ],
      [
        "Condition_ED57E10-FA75-4C28-8B13-627C2B6EC7AF"
      ],
      [
        "sid-17AA4693-C3E0-4D0D-9463-D7BE82CAC7EA"
      ],
      [
        "sid-5DA39FA5-564C-4864-9B45-9BB81CE08961"
      ],
      [
        "sid-E2D50642-1DA9-48B4-A1AB-551FE2F59C63"
      ],
      [
        "sid-55897027-E46C-468A-A5BD-625512853329"
      ],
      [],
      [],
      [],
      [
        "sid-EB69579C-EF16-4414-BC8C-1F1B7F20005B",
        "sid-DDC5F833-4DD6-43FE-BAD7-5AD7F891F5E2"
      ],
      [
        "sid-E9F66E5F-B46A-4CF4-858E-D438D9824F2C"
      ],
      [
        "sid-DAB5F507-EFF9-47EF-8321-F9C2F5FA0C0F"
      ],
      [
        "sid-655BCB50-6C40-4142-BAA1-261489F4548A"
      ],
      [
        "sid-D4E6D16E-D0F4-4473-A4DD-829ECF1655EE"
      ],
      [
        "sid-AB73CCD4-7D6C-4872-B5B3-BEAEF0965FB3"
      ],
      [
        "sid-A0412598-4D5B-45B5-9292-0409BE89EFFC"
      ],
      [
        "sid-5347D7F1-610B-4CC3-AEC1-1F94454397F5"
      ],
      [
        "sid-03F6742B-9635-4069-8FCD-E0C301A5FF0C"
      ],
      [
        "sid-03F6742B-9635-4069-8FCD-E0C301A5FF0C"
      ],
      [
        "sid-5347D7F1-610B-4CC3-AEC1-1F94454397F5"
      ],
      [
        "sid-84B5CB3C-E7CB-40E6-B5EA-6DE12F949FAA"
      ],
      [
        "sid-84B5CB3C-E7CB-40E6-B5EA-6DE12F949FAA"
      ],
      [
        "sid-E28CC810-DB0D-413D-A0FE-5FDA0394BBAA"
      ],
      [
        "sid-B32A0916-B0A5-4EC8-BB34-46054FE3C97F"
      ],
      [
        "sid-E28CC810-DB0D-413D-A0FE-5FDA0394BBAA"
      ],
      [
        "sid-B32A0916-B0A5-4EC8-BB34-46054FE3C97F"
      ]
    ]
    _msgInOptim = [
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
    _msgOutOptim = [
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


      await ModelFactoryFacet.addModel(modelName,activities,_tabChildrenOptim,_tabParentOptim,_msgInOptim,_msgOutOptim,_keyReplay,_valueReplay)
      
      let tx = await ModelFactoryFacet.newInstance(modelName)
      let receipt = await tx.wait()
      const events = receipt.events;
      const id = events.find(event => event.event === 'instanceId');
      console.log(Number(id.args._id))
      instanceTest =Number(id.args._id)

    })
    it('mesure de Gas avec Abi facet entiere', async () =>{

      await workflowExecution.Invoke(21, modelName, instanceTest, "Laojuhataja", "", "");
      await workflowExecution.Invoke(22, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(23, modelName, instanceTest, "Assistent", "", "");
      await workflowExecution.Invoke(5, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(17, modelName, instanceTest, "Assistent", "", "");
      await workflowExecution.Invoke(11, modelName, instanceTest, "Remonditehnik", "", "");
      await workflowExecution.Invoke(26, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(0, modelName, instanceTest, "Laojuhataja", "", "");
      await workflowExecution.Invoke(29, modelName, instanceTest, "Remonditehnik", "", "");
      await workflowExecution.Invoke(32, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(33, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(4, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(27, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(35, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(36, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(16, modelName, instanceTest, "Muugijuht", "", "");
      await workflowExecution.Invoke(6, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(1, modelName, instanceTest, "Laojuhataja", "", "");
      await workflowExecution.Invoke(7, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(19, modelName, instanceTest, "Tootja remondikeskus", "", "");
      await workflowExecution.Invoke(20, modelName, instanceTest, "Tootja remondikeskus", "", "");
      await workflowExecution.Invoke(3, modelName, instanceTest, "Laojuhataja", "", "");
      await workflowExecution.Invoke(9, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(8, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(28, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(31, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(34, modelName, instanceTest, "Tookoja juhataja", "", "");
      await workflowExecution.Invoke(24, modelName, instanceTest, "Laojuhataja", "", "");
      await workflowExecution.Invoke(24, modelName, instanceTest, "Laojuhataja", "", "");
      // getIncludedIndices(getterFacet, modelName, instanceTest)

    })
})