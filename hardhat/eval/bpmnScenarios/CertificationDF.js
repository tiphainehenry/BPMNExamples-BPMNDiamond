const { deployDiamond } = require('../../scripts/deployDiamondFactory.js')

let modelName= "Certification"
describe('mesureGasDiamondCertification', async function () {
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

    const activities =  [
      {
        "id": 0,
        "nodeType": 4,
        "xmlID": "Task_1hcentk",
        "name": "",
        "lane": "ChefAffaire",
        "dataIn": "{CahierDesCharges:xxxx,MetadonneesProjet:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 1,
        "nodeType": 4,
        "xmlID": "Activity_15n2fuv",
        "name": "",
        "lane": "BureauEtude",
        "dataIn": "{ResultatsTest:xxxx,DonneesEntree:xxxx,RapportEtude:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 2,
        "nodeType": 4,
        "xmlID": "Activity_0qmqgly",
        "name": "",
        "lane": "VerificateurN2",
        "dataIn": "{ElementsVerificationN2:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 3,
        "nodeType": 4,
        "xmlID": "Activity_03e8d70",
        "name": "",
        "lane": "VerificateurN2",
        "dataIn": "{NotesN2:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 4,
        "nodeType": 4,
        "xmlID": "Activity_0p7tzld",
        "name": "",
        "lane": "VerificateurN2",
        "dataIn": "{VisaDecisionN2:xxxx,RapportN2:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 5,
        "nodeType": 4,
        "xmlID": "Activity_1l5e770",
        "name": "",
        "lane": "Approbateur",
        "dataIn": "{Purpose:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 6,
        "nodeType": 4,
        "xmlID": "Activity_0pylq6o",
        "name": "",
        "lane": "Approbateur",
        "dataIn": "{RapportApprouve:xxxx,VisaApprobation:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 7,
        "nodeType": 4,
        "xmlID": "Activity_03et48t",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "{RapportN1:xxxx,VisaDecisionN1:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 8,
        "nodeType": 4,
        "xmlID": "Activity_0fhjnyv",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "{NotesN1:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 9,
        "nodeType": 4,
        "xmlID": "Activity_0jptkb4",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "{ElementsVerificationN1:xxxx}",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 10,
        "nodeType": 0,
        "xmlID": "StartEvent_1y45yut",
        "name": "",
        "lane": "ChefAffaire",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 11,
        "nodeType": 2,
        "xmlID": "Event_0rc5ucp",
        "name": "",
        "lane": "BureauEtude",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 12,
        "nodeType": 2,
        "xmlID": "Event_0uel3fu",
        "name": "",
        "lane": "VerificateurN2",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 13,
        "nodeType": 2,
        "xmlID": "Event_02ej7g0",
        "name": "",
        "lane": "Approbateur",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 14,
        "nodeType": 2,
        "xmlID": "Event_1xb2qil",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 15,
        "nodeType": 3,
        "xmlID": "Event_0aeztkj",
        "name": "",
        "lane": "BureauEtude",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 16,
        "nodeType": 3,
        "xmlID": "Event_1kvcbpv",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 17,
        "nodeType": 1,
        "xmlID": "Event_0f6zvuq",
        "name": "",
        "lane": "ChefAffaire",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 18,
        "nodeType": 1,
        "xmlID": "Event_1jryq1w",
        "name": "",
        "lane": "BureauEtude",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 19,
        "nodeType": 1,
        "xmlID": "Event_1stmo6n",
        "name": "",
        "lane": "VerificateurN2",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 20,
        "nodeType": 1,
        "xmlID": "Event_0k95nad",
        "name": "",
        "lane": "VerificateurN2",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 21,
        "nodeType": 1,
        "xmlID": "Event_17cg1yq",
        "name": "",
        "lane": "Approbateur",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 22,
        "nodeType": 1,
        "xmlID": "Event_0wwd4it",
        "name": "",
        "lane": "Approbateur",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 23,
        "nodeType": 1,
        "xmlID": "Event_0oqnp2p",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 24,
        "nodeType": 1,
        "xmlID": "Event_07w16d4",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 25,
        "nodeType": 5,
        "xmlID": "Gateway_0nb1emw",
        "name": "",
        "lane": "VerificateurN2",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 26,
        "nodeType": 5,
        "xmlID": "Gateway_0f0o07g",
        "name": "",
        "lane": "Approbateur",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 27,
        "nodeType": 5,
        "xmlID": "Gateway_1xsibkd",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 28,
        "nodeType": 6,
        "xmlID": "Gateway_05dmrm9",
        "name": "",
        "lane": "BureauEtude",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      },
      {
        "id": 29,
        "nodeType": 6,
        "xmlID": "Gateway_08bwshd",
        "name": "",
        "lane": "VerificateurN1",
        "dataIn": "",
        "dataOut": "",
        "timestamp": ""
      }
    ]
    
    const _tabChildrenOptim=[
      [
        "Event_0f6zvuq"
      ],
      [
        "Event_1jryq1w"
      ],
      [
        "Activity_03e8d70"
      ],
      [
        "Activity_0p7tzld"
      ],
      [
        "Gateway_0nb1emw"
      ],
      [
        "Event_0wwd4it"
      ],
      [
        "Gateway_0f0o07g"
      ],
      [
        "Gateway_1xsibkd"
      ],
      [
        "Activity_03et48t"
      ],
      [
        "Gateway_08bwshd"
      ],
      [
        "Task_1hcentk"
      ],
      [
        "Gateway_05dmrm9"
      ],
      [
        "Activity_0qmqgly"
      ],
      [
        "Activity_0pylq6o"
      ],
      [
        "Activity_0jptkb4"
      ],
      [],
      [
        "Gateway_08bwshd"
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
        "Event_1stmo6n",
        "Event_0k95nad"
      ],
      [
        "Event_17cg1yq",
        "Activity_1l5e770"
      ],
      [
        "Event_0oqnp2p",
        "Event_07w16d4"
      ],
      [
        "Activity_15n2fuv",
        "Event_0aeztkj"
      ],
      [
        "Activity_0fhjnyv"
      ]
    ]
    const _tabParentOptim=  [
      [
        "StartEvent_1y45yut"
      ],
      [
        "Gateway_05dmrm9"
      ],
      [
        "Event_0uel3fu"
      ],
      [
        "Activity_0qmqgly"
      ],
      [
        "Activity_03e8d70"
      ],
      [
        "Gateway_0f0o07g"
      ],
      [
        "Event_02ej7g0"
      ],
      [
        "Activity_0fhjnyv"
      ],
      [
        "Gateway_08bwshd"
      ],
      [
        "Event_1xb2qil"
      ],
      [],
      [],
      [],
      [],
      [],
      [
        "Gateway_05dmrm9"
      ],
      [],
      [
        "Task_1hcentk"
      ],
      [
        "Activity_15n2fuv"
      ],
      [
        "Gateway_0nb1emw"
      ],
      [
        "Gateway_0nb1emw"
      ],
      [
        "Gateway_0f0o07g"
      ],
      [
        "Activity_1l5e770"
      ],
      [
        "Gateway_1xsibkd"
      ],
      [
        "Gateway_1xsibkd"
      ],
      [
        "Activity_0p7tzld"
      ],
      [
        "Activity_0pylq6o"
      ],
      [
        "Activity_03et48t"
      ],
      [
        "Event_0rc5ucp"
      ],
      [
        "Event_1kvcbpv",
        "Activity_0jptkb4"
      ]
    ]
    const _msgInOptim= [
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
        "Event_0f6zvuq",
        "Event_1stmo6n",
        "Event_17cg1yq",
        "Event_07w16d4"
      ],
      [
        "Event_0oqnp2p"
      ],
      [
        "Event_0k95nad"
      ],
      [
        "Event_0aeztkj"
      ],
      [],
      [
        "Event_1jryq1w"
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
      []
    ]
    const _msgOutOptim= [
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
        "Event_1xb2qil"
      ],
      [],
      [
        "Event_0rc5ucp"
      ],
      [
        "Event_1kvcbpv"
      ],
      [
        "Event_0rc5ucp"
      ],
      [
        "Event_02ej7g0"
      ],
      [
        "Event_0rc5ucp"
      ],
      [],
      [
        "Event_0uel3fu"
      ],
      [
        "Event_0rc5ucp"
      ],
      [],
      [],
      [],
      [],
      []
    ]
    const _keyReplay=[]
    const _valueReplay=[[]]

    await ModelFactoryFacet.addModel(modelName, activities,_tabChildrenOptim,_tabParentOptim,_msgInOptim,_msgOutOptim,_keyReplay,_valueReplay)

    let tx = await ModelFactoryFacet.newInstance(modelName)
    let receipt = await tx.wait()
    const events = receipt.events;
    const id = events.find(event => event.event === 'instanceId');
    console.log(Number(id.args._id))
    instanceTest =Number(id.args._id)


    })
    it('mesure de Gas avec Abi facet entiere', async () =>{
        

        await workflowExecution.Invoke(10, modelName,instanceTest,"ChefAffaire","","")

        await workflowExecution.Invoke(0, modelName,instanceTest,"ChefAffaire","","")
        await workflowExecution.Invoke(17, modelName,instanceTest,"ChefAffaire","","")
        await workflowExecution.Invoke(28, modelName,instanceTest,"BureauEtude","","")
        await workflowExecution.Invoke(1, modelName,instanceTest,"BureauEtude","","")
        await workflowExecution.Invoke(15, modelName,instanceTest,"BureauEtude","","")
        await workflowExecution.Invoke(9, modelName,instanceTest,"VerificateurN1","","")
        await workflowExecution.Invoke(18, modelName,instanceTest,"BureauEtude","","")
        await workflowExecution.Invoke(29, modelName,instanceTest,"VerificateurN1","","")
        await workflowExecution.Invoke(8, modelName,instanceTest,"VerificateurN1","","")
        await workflowExecution.Invoke(7, modelName,instanceTest,"VerificateurN1","","")
        await workflowExecution.Invoke(27, modelName,instanceTest,"VerificateurN1","","")
        await workflowExecution.Invoke(23, modelName,instanceTest,"VerificateurN1","","")
        await workflowExecution.Invoke(2, modelName,instanceTest,"VerificateurN2","","")
        await workflowExecution.Invoke(3, modelName,instanceTest,"VerificateurN2","","")
        await workflowExecution.Invoke(4, modelName,instanceTest,"VerificateurN2","","")
        await workflowExecution.Invoke(25, modelName,instanceTest,"VerificateurN2","","")
        await workflowExecution.Invoke(20, modelName,instanceTest,"VerificateurN2","","")
        await workflowExecution.Invoke(6, modelName,instanceTest,"Approbateur","","")
        await workflowExecution.Invoke(26, modelName,instanceTest,"Approbateur","","")
        await workflowExecution.Invoke(5, modelName,instanceTest,"Approbateur","","")
        await workflowExecution.Invoke(22, modelName,instanceTest,"Approbateur","","")
        included = await getterFacet.getIncluded(modelName,instanceTest)
        included = included.map(value => Number(value));
        console.log(included)


    })
})