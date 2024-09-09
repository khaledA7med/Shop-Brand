import { BaseData } from "src/app/core/models/masterTableModels";
const LookUpTables = "/LookupTables/";

export const ApiRoutes = {
  Users: {
    login: "/Account/login",
    verify: "/Account/VerifyOtp",
    refesh: "/Account/RefreshToken",
    revoke: "/Account/RevokeToken",
    changePassword: "/Account/ChangePassword",
  },
  Activities: {
    allTasks: "/Activities/Calendar/AllTasks",
    moduleClients: "/Activities/Calendar/ModuleClients",
    searchModule: "/Activities/Calendar/SearchModule",
    addTask: "/Activities/Calendar/saveTask",
    changeStatus: "/Activities/Calendar/ChangeTaskStatus",
    taskLogs: "/Activities/Calendar/TaskLogs",
  },
  Emails: {
    allActiveClients: LookUpTables + "ActiveClient",
    createClientContact: "/ClientRegistry/Clients/CreateClientContact",
    createCompanyContact:
      "/MasterTables/InsuranceCompanies/CreateCompanyContact",
    sendEmail: "/Emails/Send",
  },
  LookUpTables: {
    contactDepartment: LookUpTables + BaseData.ContactDepartment,
    contactLineOfBusiness: LookUpTables + BaseData.ContactLineOfBusiness,
    positions: LookUpTables + BaseData.Positions,
    insuranceCompaniesContact: LookUpTables + "InsuranceCompaniesContact",
    emailsPriorityList: LookUpTables + "EmailsPriorityList",
    productionReportNumberOrCharts:
      LookUpTables + BaseData.ProductionReportNumberOrCharts,
    producers: LookUpTables + BaseData.Producers,
    activeProducers: LookUpTables + BaseData.ActiveProducers,
    distinctProducers: LookUpTables + BaseData.DistinctProducers,
    tasksTypes: LookUpTables + BaseData.TasksTypes,
    IBSModules: LookUpTables + BaseData.IBSModules,
    insurClasses: LookUpTables + BaseData.InsurClasses,
    lineOfBusiness: LookUpTables + BaseData.LineOfBusiness,
    policyEndorsTypes: LookUpTables + BaseData.PolicyEndorsTypes,
    policyAllTypes: LookUpTables + BaseData.PolicyAllTypes,
    policyEndorsementsTypes: LookUpTables + BaseData.PolicyEndorsementsTypes,
    PolicyInstallmentsTypes: LookUpTables + BaseData.GetAllPolicyTypesReports,
    policyInstallmentsTypes: LookUpTables + BaseData.PolicyInstallmentsTypes,
    regions: LookUpTables + BaseData.Regions,
    cities: LookUpTables + BaseData.Cities,
    claimStatus: LookUpTables + BaseData.ClaimStatus,
    typeClaimsRejectionReason:
      LookUpTables + BaseData.TypeClaimsRejectionReason,
    vehicleCarsMake: LookUpTables + BaseData.VehicleCarsMake,
    getPolicyTypeIssue: LookUpTables + BaseData.GetPolicyTypeIssue,
    categoryOfDefaultEmail: LookUpTables + BaseData.CategoryOfDefaultEmail,
    clientType: LookUpTables + BaseData.ClientType,
    RelationshipStatus: LookUpTables + BaseData.RelationshipStatus,
    RelationshipStatusofSalesLead:
      LookUpTables + BaseData.RelationshipStatusofSalesLead,
    businessType: LookUpTables + BaseData.BusinessType,
    channels: LookUpTables + BaseData.Channels,
    interface: LookUpTables + BaseData.Interface,
    screeningResult: LookUpTables + BaseData.ScreeningResult,
    nationalities: LookUpTables + BaseData.Nationalities,
    sourceofIncome: LookUpTables + BaseData.SourceofIncome,
    registrationStatus: LookUpTables + BaseData.RegistrationStatus,
    businessActivities: LookUpTables + BaseData.BusinessActivities,
    marketSegment: LookUpTables + BaseData.MarketSegment,
    premium: LookUpTables + BaseData.Premium,
    banks: LookUpTables + BaseData.Banks,
    commericalNo: LookUpTables + BaseData.CommericalNo,
    groupsList: LookUpTables + BaseData.GroupsList,
    status: LookUpTables + BaseData.ClientStatus,
    salesleadStatus: LookUpTables + BaseData.SalesleadStatus,
    statusOfSaleslead: LookUpTables + BaseData.StatusOfSaleslead,
    allClients: LookUpTables + BaseData.AllClients,
    insuranceCompanyName: LookUpTables + BaseData.InsuranceCompanyName,
    insuranceBrokersList: LookUpTables + BaseData.InsuranceBrokersList,
    logType: LookUpTables + BaseData.LogType,
    prospectsReportsTypes: LookUpTables + BaseData.ProspectsReportsTypes,
    insuranceCompanies: LookUpTables + BaseData.InsuranceCompanies,
    currencies: LookUpTables + BaseData.Currencies,
    branch: LookUpTables + BaseData.Branch,
    pendingReason: LookUpTables + BaseData.PendingReason,
    getOnlinePortalStatus: LookUpTables + BaseData.GetOnlinePortalStatus,
    vatPercentage: LookUpTables + BaseData.VATPercentage,
    policyStatus: LookUpTables + BaseData.PolicyStatus,
    clientsList: LookUpTables + BaseData.ClientsList,
    allUsers: LookUpTables + BaseData.AllUsers,
    productionFieldList: LookUpTables + BaseData.ProductionFieldList,
    productionOperatordList: LookUpTables + BaseData.ProductionOperatordList,
    getStatusClientsPolicies: LookUpTables + BaseData.GetStatusClientsPolicies,
    typeOfCustomerServices: LookUpTables + BaseData.TypeOfCustomerServices,
    rejectionReasons: LookUpTables + BaseData.RejectionReasons,
    claimCaseTypes: LookUpTables + BaseData.ClaimCaseTypes,
    motorClaimTypes: LookUpTables + BaseData.MotorClaimTypes,
    typesOfRepair: LookUpTables + BaseData.TypesOfRepair,
    hospitals: LookUpTables + BaseData.Hospitals,
    carsModels: LookUpTables + BaseData.CarsModels,
    statusOfUsers: LookUpTables + BaseData.StatusOfUsers,
    jobTitleOfUsers: LookUpTables + BaseData.JobTitleOfUsers,
    staffProfilesNames: LookUpTables + BaseData.ProducersList,
    userSecurityRoles: LookUpTables + BaseData.UserSecurityRoles,
    lineOfBusinessByClassNames: LookUpTables + "LineOfBusinessByClassNames",
    productionReportType: LookUpTables + BaseData.ProductionReportType,
    productionReportBasedOn: LookUpTables + BaseData.ProductionReportBasedOn,
    productionReportCaptive: LookUpTables + BaseData.ProductionReportCaptive,
    productionReportStatus: LookUpTables + BaseData.ProductionReportStatus,
    renewalNoticeReportStatus:
      LookUpTables + BaseData.RenewalNoticeReportStatus,
    cserviceStatus: LookUpTables + BaseData.CServiceStatus,
    csReportType: LookUpTables + BaseData.CSReportType,
    csReportStatus: LookUpTables + BaseData.CSReportStatus,
    claimsReportType: LookUpTables + BaseData.ClaimsReportType,
    typeOfLoans: LookUpTables + BaseData.typeOfLoans,
    bloodType: LookUpTables + BaseData.BloodType,
    vacationRequest: {
      GetDistinctStaffProfilesNames:
        LookUpTables + BaseData.GetDistinctStaffProfilesNames,
      GetDistinctVacationTypes:
        LookUpTables + BaseData.GetDistinctVacationTypes,
    },
    getItemsRequestTypes: LookUpTables + BaseData.GetItemsRequestTypes,
    getDepartments: LookUpTables + BaseData.GetDepartments,
    getDistinctStaffProfilesNames:
      LookUpTables + BaseData.GetDistinctStaffProfilesNames,
    excuseType: LookUpTables + BaseData.ExcuseType,
    slipsStatus: LookUpTables + BaseData.SlipsStatus,
    prospectsLossReasons: LookUpTables + BaseData.ProspectsLossReasons,
    regionNameofSalesLead: LookUpTables + BaseData.RegionNameofSalesLead,
    invoiceNote: LookUpTables + BaseData.InvoiceNote,
    policyClientType: LookUpTables + BaseData.PolicyClientType,
    allActiveClients: "/LookupTables/AllClientbyStatus",
    getListOfRequiredDocumentsHR: "/LookupTables/GetListOfRequiredDocumentsHR",
    loadEmpByDirectManager: LookUpTables + BaseData.LoadEmpByDirectManager,
    salesleadMngApproveStatus:
      LookUpTables + BaseData.SalesleadMngApproveStatus,
  },
  MasterMethods: {
    downloadDocument: "/Documents/Download",
    deleteDocument: "/Documents/Delete",
    lineOfBusiness: LookUpTables + "LineOfBusiness",
    RegionCities: LookUpTables + "RegionCities",
    ProductionReportTypeByCategory:
      LookUpTables + "ProductionReportTypeByCategory",
    ClientCommericalNo: LookUpTables + "ClientCommericalNo",
    subRequesTypes: LookUpTables + "GetSubItemsRequestTypes",
  },
  masterTables: {
    inuranceClasses: {
      search: "/MasterTables/InsurranceClass/Search",
      save: "/MasterTables/InsurranceClass/Save",
      edit: "/MasterTables/InsurranceClass/Edit",
      delete: "/MasterTables/InsurranceClass/Delete",
    },
    lineOfBusiness: {
      search: "/MasterTables/LineOfBusiness/Search",
      save: "/MasterTables/LineOfBusiness/Save",
      edit: "/MasterTables/LineOfBusiness/Edit",
      delete: "/MasterTables/LineOfBusiness/Delete",
    },
    insuranceCompanies: {
      search: "/MasterTables/InsuranceCompanies/Search",
      save: "/MasterTables/InsuranceCompanies/Save",
      edit: "/MasterTables/InsuranceCompanies/Edit",
      delete: "/MasterTables/InsuranceCompanies/Delete",
    },
    insuranceBrokers: {
      search: "/MasterTables/InsuranceBrokers/Search",
      save: "/MasterTables/InsuranceBrokers/Save",
      edit: "/MasterTables/InsuranceBrokers/Edit",
      delete: "/MasterTables/InsuranceBrokers/Delete",
    },
    policyTypes: {
      search: "/MasterTables/PolicyTypes/Search",
      create: "/MasterTables/PolicyTypes/Create",
      edit: "/MasterTables/PolicyTypes/Edit",
      delete: "/MasterTables/PolicyTypes/Delete",
    },
    nationalities: {
      search: "/MasterTables/Nationalities/Search",
      save: "/MasterTables/Nationalities/Save",
      edit: "/MasterTables/Nationalities/Edit",
      delete: "/MasterTables/Nationalities/Delete",
    },
    businessActivity: {
      search: "/MasterTables/BusinessActivity/Search",
      save: "/MasterTables/BusinessActivity/Save",
      edit: "/MasterTables/BusinessActivity/Edit",
      delete: "/MasterTables/BusinessActivity/Delete",
    },
    legalStatus: {
      search: "/MasterTables/LegalStatus/Search",
      save: "/MasterTables/LegalStatus/Save",
      edit: "/MasterTables/LegalStatus/Edit",
      delete: "/MasterTables/LegalStatus/Delete",
    },
    locations: {
      search: "/MasterTables/Locations/Search",
      save: "/MasterTables/Locations/Save",
      edit: "/MasterTables/Locations/Edit",
      delete: "/MasterTables/Locations/Delete",
    },
    BusinessDevelopment: {
      Sales: {
        QuotingRequirements: {
          search: "/MasterTables/SalesQuotingRequirements/Search",
          save: "/MasterTables/SalesQuotingRequirements/Save",
          edit: "/MasterTables/SalesQuotingRequirements/Edit",
          delete: "/MasterTables/SalesQuotingRequirements/Delete",
        },
        PolicyIssuanceRequirements: {
          search: "/MasterTables/SalesPolicyRequirements/Search",
          save: "/MasterTables/SalesPolicyRequirements/Save",
          edit: "/MasterTables/SalesPolicyRequirements/Edit",
          delete: "/MasterTables/SalesPolicyRequirements/Delete",
        },
        ProspectsLossReasons: {
          search: "/MasterTables/ProspectsLossReasons/Search",
          save: "/MasterTables/ProspectsLossReasons/Save",
          edit: "/MasterTables/ProspectsLossReasons/Edit",
          delete: "/MasterTables/ProspectsLossReasons/Delete",
        },
      },
      CancellationRejectionReasons: {
        CompanyRejectionReason: {
          search: "/MasterTables/CompanyRejectionReason/Search",
          save: "/MasterTables/CompanyRejectionReason/Save",
          edit: "/MasterTables/CompanyRejectionReason/Edit",
          delete: "/MasterTables/CompanyRejectionReason/Delete",
        },
        ClientRejectionReason: {
          search: "/MasterTables/ClientRejectionReason/Search",
          save: "/MasterTables/ClientRejectionReason/Save",
          edit: "/MasterTables/ClientRejectionReason/Edit",
          delete: "/MasterTables/ClientRejectionReason/Delete",
        },
        CancellationReason: {
          search: "/MasterTables/CancellationReason/Search",
          save: "/MasterTables/CancellationReason/Save",
          edit: "/MasterTables/CancellationReason/Edit",
          delete: "/MasterTables/CancellationReason/Delete",
        },
      },
    },
    Slips: {
      SlipsBuilder: {
        allUnderwritingFields:
          "/MasterTables/SlipsBuilder/AllUnderwritingFields",
        getUnderwritingFieldBySno:
          "/MasterTables/SlipsBuilder/GetUnderwritingFieldBySNo",
        saveUnderwritingFields:
          "/MasterTables/SlipsBuilder/SaveUnderwritingFields",
        deleteUnderwritingFields:
          "/MasterTables/SlipsBuilder/DeleteUnderwritingFields",
        allInsuranceClassAndline:
          "/MasterTables/SlipsBuilder/AllInsuranceClassAndline",
        getSlipBuilderData: "/MasterTables/SlipsBuilder/GetSlipBuilderData",
        createSlipsBuilder: "/MasterTables/SlipsBuilder/CreateSlipsBuilder",
      },
    },
    clientCategories: {
      search: "/MasterTables/ClientsCategory/Search",
      save: "/MasterTables/ClientsCategory/Save",
      edit: "/MasterTables/ClientsCategory/Edit",
      delete: "/MasterTables/ClientsCategory/Delete",
    },
    customerService: {
      InsuranceCompaniesDocuments: {
        search: "/MasterTables/CustomerService/CompanyDocuments/Search",
        upload: "/MasterTables/CustomerService/CompanyDocuments/Upload",
      },
      customerServiceRequirements: {
        search: "/MasterTables/CustomerService/CompanyRequirments/Search",
        save: "/MasterTables/CustomerService/CompanyRequirments/Save",
        delete: "/MasterTables/CustomerService/CompanyRequirments/Delete",
      },
      complaintsTypes: {
        search: "/MasterTables/CustomerService/ComplaintsTypes/Index",
        save: "/MasterTables/CustomerService/ComplaintsTypes/Save",
        edit: "/MasterTables/CustomerService/ComplaintsTypes/Edit",
        delete: "/MasterTables/CustomerService/ComplaintsTypes/Delete",
      },
      complaintsSettings: {
        search: "/MasterTables/CustomerService/ComplaintsSettings/Index",
        save: "/MasterTables/CustomerService/ComplaintsSettings/Edit",
      },
      complaintsSuspectiveCauses: {
        search: "/MasterTables/CustomerService/SuspectiveCauses/Index",
        save: "/MasterTables/CustomerService/SuspectiveCauses/Save",
        edit: "/MasterTables/CustomerService/SuspectiveCauses/Edit",
        delete: "/MasterTables/CustomerService/SuspectiveCauses/Delete",
      },
      customerServiceCancellationReasons: {
        search: "/MasterTables/CustomerService/CancellationReasons/Index",
        save: "/MasterTables/CustomerService/CancellationReasons/Save",
        edit: "/MasterTables/CustomerService/CancellationReasons/Edit",
        delete: "/MasterTables/CustomerService/CancellationReasons/Delete",
      },
    },
    Claims: {
      carsMake: {
        search: "/MasterTables/Claims/CarsMake/Index",
        save: "/MasterTables/Claims/CarsMake/Save",
        edit: "/MasterTables/Claims/CarsMake/Edit",
        delete: "/MasterTables/Claims/CarsMake/Delete",
      },
      hospitals: {
        search: "/MasterTables/Claims/Hospital/Index",
        save: "/MasterTables/Claims/Hospital/Save",
        edit: "/MasterTables/Claims/Hospital/Edit",
        delete: "/MasterTables/Claims/Hospital/Delete",
      },
      insuranceWorkshopDetails: {
        search: "/MasterTables/Claims/WorkshopDetails/Search",
        save: "/MasterTables/Claims/WorkshopDetails/Save",
        edit: "/MasterTables/Claims/WorkshopDetails/Edit",
        delete: "/MasterTables/Claims/WorkshopDetails/Delete",
      },
      tpaList: {
        search: "/MasterTables/Claims/TPAList/Index",
        save: "/MasterTables/Claims/TPAList/Create",
        delete: "/MasterTables/Claims/TPAList/Delete",
      },
      claimsGeneralItems: {
        search: "/MasterTables/Claims/GeneralItems/Search",
        save: "/MasterTables/Claims/GeneralItems/Save",
        edit: "/MasterTables/Claims/GeneralItems/Edit",
        delete: "/MasterTables/Claims/GeneralItems/Delete",
      },
      claimsStatus: {
        search: "/MasterTables/Claims/Status/Search",
        save: "/MasterTables/Claims/Status/Save",
        edit: "/MasterTables/Claims/Status/Edit",
        delete: "/MasterTables/Claims/Status/Delete",
      },
      claimsRejectionReasons: {
        search: "/MasterTables/Claims/RejectionReasons/Search",
        save: "/MasterTables/Claims/RejectionReasons/Save",
        edit: "/MasterTables/Claims/RejectionReasons/Edit",
        delete: "/MasterTables/Claims/RejectionReasons/Delete",
      },
    },
    production: {
      libraryOfCovers: {
        search: "/MasterTables/LibraryofCovers/Search",
        save: "/MasterTables/LibraryofCovers/Save",
        edit: "/MasterTables/LibraryofCovers/Edit",
        delete: "/MasterTables/LibraryofCovers/Delete",
      },
      libraryOfInterestsInsured: {
        search: "/MasterTables/InterestsInsuredLibrary/Search",
        save: "/MasterTables/InterestsInsuredLibrary/Save",
        edit: "/MasterTables/InterestsInsuredLibrary/Edit",
        delete: "/MasterTables/InterestsInsuredLibrary/Delete",
      },
      libraryOfTermsAndConditions: {
        search: "/MasterTables/TermsAndConditions/Search",
        save: "/MasterTables/TermsAndConditions/Save",
        edit: "/MasterTables/TermsAndConditions/Edit",
        delete: "/MasterTables/TermsAndConditions/Delete",
      },
      libraryOfDeductibles: {
        search: "/MasterTables/Deductibles/Search",
        save: "/MasterTables/Deductibles/Save",
        edit: "/MasterTables/Deductibles/Edit",
        delete: "/MasterTables/Deductibles/Delete",
      },
      libraryOfExclusions: {
        search: "/MasterTables/Exclusions/Search",
        save: "/MasterTables/Exclusions/Save",
        edit: "/MasterTables/Exclusions/Edit",
        delete: "/MasterTables/Exclusions/Delete",
      },
      libraryOfWarranties: {
        search: "/MasterTables/Warranties/Search",
        save: "/MasterTables/Warranties/Save",
        edit: "/MasterTables/Warranties/Edit",
        delete: "/MasterTables/Warranties/Delete",
      },
      lifePlan: {
        search: "/MasterTables/LifePlan/Search",
        save: "/MasterTables/LifePlan/Save",
        edit: "/MasterTables/LifePlan/Edit",
        delete: "/MasterTables/LifePlan/Delete",
      },
      vehicleMake: {
        search: "/MasterTables/VehicleCarMake/Search",
        save: "/MasterTables/VehicleCarMake/Save",
        edit: "/MasterTables/VehicleCarMake/Edit",
        delete: "/MasterTables/VehicleCarMake/Delete",
      },
      vehicleType: {
        search: "/MasterTables/VehicleTypes/Search",
        save: "/MasterTables/VehicleTypes/Save",
        edit: "/MasterTables/VehicleTypes/Edit",
        delete: "/MasterTables/VehicleTypes/Delete",
      },
      vehicleColor: {
        search: "/MasterTables/VehicleColors/Search",
        save: "/MasterTables/VehicleColors/Save",
        edit: "/MasterTables/VehicleColors/Edit",
        delete: "/MasterTables/VehicleColors/Delete",
      },
    },
    listOfDocuments: {
      clients: {
        search: "/MasterTables/DocumentsClients/Search",
        save: "/MasterTables/DocumentsClients/Save",
        edit: "/MasterTables/DocumentsClients/Edit",
        delete: "/MasterTables/DocumentsClients/Delete",
      },
      claims: {
        search: "/MasterTables/DocumentsClaims/Search",
        save: "/MasterTables/DocumentsClaims/Save",
        edit: "/MasterTables/DocumentsClaims/Edit",
        delete: "/MasterTables/DocumentsClaims/Delete",
      },
      production: {
        search: "/MasterTables/DocumentsPolicies/Search",
        save: "/MasterTables/DocumentsPolicies/Save",
        edit: "/MasterTables/DocumentsPolicies/Edit",
        delete: "/MasterTables/DocumentsPolicies/Delete",
      },
      BusinessDevelopment: {
        search: "/MasterTables/DocumentsBusinessDenelopment/Search",
        save: "/MasterTables/DocumentsBusinessDenelopment/Save",
        edit: "/MasterTables/DocumentsBusinessDenelopment/Edit",
        delete: "/MasterTables/DocumentsBusinessDenelopment/Delete",
      },
    },
    staffPanel: {
      healthInsuranceRequiredDocuments: {
        search: "/MasterTables/ListOfRequiredDocumentsHR/Search",
        save: "/MasterTables/ListOfRequiredDocumentsHR/Save",
        edit: "/MasterTables/ListOfRequiredDocumentsHR/Edit",
        delete: "/MasterTables/ListOfRequiredDocumentsHR/Delete",
      },
    },
    vehiclesTypes: {
      search: "/MasterTables/VehiclesTypes/Search",
      save: "/MasterTables/VehiclesTypes/Save",
      edit: "/MasterTables/VehiclesTypes/Edit",
      delete: "/MasterTables/VehiclesTypes/Delete",
    },
    contactsListPosition: {
      search: "/MasterTables/Position/Search",
      save: "/MasterTables/Position/Save",
      edit: "/MasterTables/Position/Edit",
      delete: "/MasterTables/Position/Delete",
    },
    cities: {
      search: "/MasterTables/Cities/Search",
      save: "/MasterTables/Cities/Save",
      edit: "/MasterTables/Cities/Edit",
      delete: "/MasterTables/Cities/Delete",
    },
    regions: {
      search: "/MasterTables/Regions/Search",
      save: "/MasterTables/Regions/Save",
      edit: "/MasterTables/Regions/Edit",
      delete: "/MasterTables/Regions/Delete",
    },
    defaultEmail: {
      search: "/MasterTables/DefaultEmail/Search",
      save: "/MasterTables/DefaultEmail/Save",
    },
    bankSettings: {
      search: "/MasterTables/BanksSettings/Search",
      save: "/MasterTables/BanksSettings/Save",
      edit: "/MasterTables/BanksSettings/Edit",
      delete: "/MasterTables/BanksSettings/Delete",
    },
  },
  Clients: {
    search: "/ClientRegistry/Clients/Search",
    details: "/ClientRegistry/Clients/Details",
    save: "/ClientRegistry/Clients/Save",
    edit: "/ClientRegistry/Clients/Edit",
    changeStatus: "/ClientRegistry/Clients/ChangeStatus",
    clientContacts: "/ClientRegistry/Clients/ClientContacts",
    deleteDocument: "/ClientRegistry/Clients/DeleteFile",
    downloadDocument: "/ClientRegistry/Clients/DownloadFile",
    report: "/ClientRegistry/Clients/Report",
  },
  ClientsGroups: {
    list: "/ClientRegistry/Groups/Search",
    create: "/ClientRegistry/Groups/Create",
    delete: "/ClientRegistry/Groups/Delete",
    listGroupClients: "/ClientRegistry/Groups/AllClients",
    addClient: "/ClientRegistry/Groups/Join",
    deleteClient: "/ClientRegistry/Groups/RemoveClient",
  },
  BusinessDevelopment: {
    search: "/BusinessDevelopment/SalesLeads/Search",
    approve: "/BusinessDevelopment/SalesLeads/SalesLeadManagerApprove",
    changeStatus: "/BusinessDevelopment/SalesLeads/UpdateStatus",
    followUp: "/BusinessDevelopment/SalesLeads/GetSalesLeadFllowup",
    saveNote: "/BusinessDevelopment/SalesLeads/SaveNote",
    quotingRequirements: "/BusinessDevelopment/SalesLeads/QuotingRequirments",
    lineOfBusiness: "/LookupTables/LineOfBusiness",
    policyRequirements: "/BusinessDevelopment/SalesLeads/PolicyRequirments",
    save: "/BusinessDevelopment/SalesLeads/Save",
    edit: "/BusinessDevelopment/SalesLeads/Edit",
    prospectReport: "/BusinessDevelopment/SalesLeads/ProspectsReport",
    requiredDocuments:
      "/BusinessDevelopment/SalesLeads/ListofSalesLeadDocument",
    producerRegion: "/BusinessDevelopment/SalesLeads/GetRegionByStaff",
    checkAndUpdateClientExist:
      "/BusinessDevelopment/SalesLeads/CheckAndUpdateClientExist",
  },
  Slips: {
    searchLead: "/BusinessDevelopment/Slips/SearchSalesLead",
    searchSlips: "/BusinessDevelopment/Slips/SearchSlips",
    slipFormData: "/BusinessDevelopment/Slips/SlipFormData",
    save: "/BusinessDevelopment/Slips/Save",
    itemsCategory: LookUpTables + "SlipsItemsCategories",
    followUps: "/BusinessDevelopment/Slips/SlipFollowUp",
    getClauses: "/BusinessDevelopment/Slips/GetClauses",
    saveFollowUps: "/BusinessDevelopment/Slips/SaveNote",
    deleteSlip: "/BusinessDevelopment/Slips/DeleteSlip",
    changeStatus: "/BusinessDevelopment/Slips/ChangeStatus",
    Documents: "/BusinessDevelopment/Slips/InitializeDocuments",
    leadDocuments: "/BusinessDevelopment/Slips/InitializeLeadDocuments",
    addDocument: "/BusinessDevelopment/Slips/AddDocuments",
    addLeadDocument: "/BusinessDevelopment/Slips/AddLeadDocuments",
    notifyBody: "/BusinessDevelopment/Slips/NotifyBody",
    sendEmail: "/BusinessDevelopment/Slips/SendEmailAndUpdateNotify",
    preview: "/BusinessDevelopment/Slips/SlipsPreview",
    downloadStaticDoc: "/BusinessDevelopment/Slips/DownloadStaticDocument",
    comparisonSheet: "/BusinessDevelopment/Slips/SlipComparisonSheet",
    comparisonSheetClauses:
      "/BusinessDevelopment/Slips/SlipComparisonSheetInsuranceCompaniesClauses",
    comparisonSheetSummary:
      "/BusinessDevelopment/Slips/SlipComparisonSheetInsuredDetailsSummary",
  },

  Production: {
    search: "/Production/Policy/Search",
    activeListSearch: "/Production/ClientsPolicies/Search",
    downloadExcelFiles: "/Production/ClientsPolicies/DownloadStaticDocument",
    details: "/Production/Policy/Details",
    reverse: "/Production/Policy/MakeReverseEntity",
    clientByRequest: "/Production/Policy/SearchClientByRequest",
    searchClient: LookUpTables + "ActiveClient",
    searchPolicies: "/Production/Policy/SearchClientPolicies",
    fillRequestData: "/Production/Policy/FillRequestData",
    loadPolicyData: "/Production/Policy/LoadPolicyData",
    loadActivePolicyData: "/Production/ClientsPolicies/Details",
    getVehiclesData: "/Production/ClientsPolicies/GetPoliciesVehicles",
    getMedicalsData: "/Production/ClientsPolicies/GetPoliciesMedical",
    lineOfBusiness: "/LookupTables/LineOfBusiness",
    save: "/Production/Policy/Save",
    saveMotorData: "/Production/ClientsPolicies/SavePoliciesVehicles",
    saveMedicalData: "/Production/ClientsPolicies/SavePoliciesMedical",
    edit: "/Production/Policy/Edit",
    checkEndorsNo: "/Production/Policy/CheckPolicyEnrodsNo",
    changeStatus: "/Production/Policy/ChangeStatus",
    changeDeliveryStatus: "/Production/Policy/SaveDeliveryStatus",
    editCommissions: "/Production/Policy/SearchClientPoliciesFilter",
    editEditCommission: "/Production/Policy/EditPolicyCommission",
    updatePolicyCommission: "/Production/Policy/UpdatePolicyComissions",
    productionReportTypeByCategory:
      "/Production/Policy/ProductionReportTypeByCategory",
    productionReport: "/Production/Policy/StatisticsReport",
    renewalReport: "/Production/Policy/RenewalsReports",
    renewalNoticeReports: "/Production/Policy/RenewalNoticeReports",
    archiveReport: "/Production/Policy/ArchivesReports",
    debitcreditNoteReport: "/Production/Policy/GenerateArchivesReportsURL",
    getInvoiceRef: "/Production/Policy/GetInvoiceRef",
    revertPolicyApproval: "/Production/Policy/RevertPolicyApproval",
    deletePolicy: "/Production/Policy/DeletePolicy",
    uploadDocs: "/Production/Policy/UploadFilesPolicy",
    getNumberOfRenewals:
      "/Production/Policy/GetCountClientPoliciesPerClassName",
      reportType :"/Production/Policy/DNCNStatementSummaryReports"
  },
  CustomerService: {
    search: "/CustomerService/Requests/Search",
    followUp: "/CustomerService/Requests/CSFollwUp",
    saveNote: "/CustomerService/Requests/SaveNote",
    changeStatus: "/CustomerService/Requests/CSchangeStatus",
    statusCount: "/CustomerService/Requests/StatusCount",
    searchPolicies: "/CustomerService/Requests/PolicesSearch",
    endorseTypeByPolicy: "/CustomerService/Requests/GetEndorseTypeByPolicy",
    csRequirments: "/CustomerService/Requests/CSRequirements",
    create: "/CustomerService/Requests/Save",
    edit: "/CustomerService/Requests/Edit",
    csReport: "/CustomerService/Requests/Reports",
    summary: "/CustomerService/Requests/Summary",
    getClientMailData: "/CustomerService/Requests/NotifyClientMailData",
    getInsurerMailData: "/CustomerService/Requests/NotifyInsurerMailData",
    sendClientEmail: "/CustomerService/Requests/SendEmailAndUpdateNotifyClient",
    sendInsurerEmail:
      "/CustomerService/Requests/SendEmailAndUpdateNotifyInsurer",
    onlineSearch: "/OnlinePortal/CSOnlineRequest/Search",
    editOnlineRequest: "/OnlinePortal/CSOnlineRequest/Edit",
    saveOnlineRequest: "/OnlinePortal/CSOnlineRequest/Save",
  },
  Claims: {
    search: "/Claims/Search",
    saveClaim: "/Claims/SaveClaim",
    editClaim: "/Claims/EditClaim",
    saveClaimPayment: "/Claims/SaveClaimPayment",
    approvePayment: "/Claims/Approve",
    rejectPayment: "/Claims/Reject",
    saveClaimApproval: "/Claims/SaveClaimApproval",
    saveClaimInvoice: "/Claims/SaveClaimInvoice",
    saveClaimRejectDeduct: "/Claims/SaveClaimsRejections",
    deleteClaimRejectDeduct: "/Claims/DeleteClaimsRejections",
    searchPolicy: "/Claims/SearchPolicy",
    SearchClientClaimData: "/Claims/SearchClientClaimData",
    subStatus: "/Claims/GetSubStatusByStatus",
    followUps: "/Claims/GetClaimFollowUps",
    saveFollowUps: "/Claims/SaveClaimFollowUp",
    getClaimStatusNotes: "/Claims/GetClaimStatusNotes",
    getInsurerWorkshops: "/Claims/GetInsurerWorkshops",
    getClientMailData: "/Claims/NotifyClientMailData",
    getInsurerMailData: "/Claims/NotifyInsurerMailData",
    claimsReport: "/Claims/Reports",
    archiveReport: "/Claims/ArchiveReport",
    summary: "/Claims/Summary",
    onlineClaimsSearch: "/OnlinePortal/ClaimsOnlineRequest/Search",
    editOnlineClaims: "/OnlinePortal/ClaimsOnlineRequest/Edit",
    saveOnlineClaims: "/OnlinePortal/ClaimsOnlineRequest/Save",
    sendClientEmail: "/Claims/SendEmailAndUpdateNotifyClient",
    sendInsurerEmail: "/Claims/SendEmailAndUpdateNotifyInsurer",
    activateClaim: "/Claims/ReactiveClaim",
    downloadExcelTemplate: "/Claims/DownloadClaimExcelSheet",
    saveClaimsExcelData: "/Claims/CreateClaimExcelSheet",
  },
  SystemAdmin: {
    search: "/SystemAdmin/Users/Search",
    allRoles: "/SystemAdmin/Users/GetRoles",
    changeStatus: "/SystemAdmin/Users/ChangeStatus",
    userDetails: "/SystemAdmin/Users/ProducerBySno",
    addRole: "/SystemAdmin/Users/AddRole",
    deleteRole: "/SystemAdmin/Users/DeleteRole",
    getPrivileges: "/SystemAdmin/Users/GetPrivileges",
    editPrivileges: "/SystemAdmin/Users/EditPrivileges",
    changePasswordAsync: "/SystemAdmin/Users/ChangePasswordAsync",
    save: "/SystemAdmin/Users/Save",
    edit: "/SystemAdmin/Users/Edit",
    privigles: "/SystemAdmin/Users/ActivePrivileges",
  },
  StaffPanel: {
    staffProfile: "/HumanResources/HRPanel/StaffProfiles",
    overview: "/HumanResources/HRPanel/OverviewOfStaff",
    overtimeStaffProfile: {
      overtime: "/HumanResources/HRPanel/OverTime",
      save: "/HumanResources/HRPanel/InsertOverTime",
    },
    LoanRequest: {
      search: "/HumanResources/HRPanel/LoansHistory",
      save: "/HumanResources/HRPanel/InsertLoansRequest",
    },
    medicalProfile: {
      edit: "/HumanResources/HRPanel/EditMedicalProfile",
      medicalProfile: "/HumanResources/HRPanel/MedicalProfile",
    },
    vacationRequest: {
      vacationRequest: "/HumanResources/HRPanel/VacationRequest",
      initializeHolidays: "/HumanResources/HRPanel/InitializeHolidays",
      leaveBalance: "/HumanResources/HRPanel/FillLeaveBalance",
      save: "/HumanResources/HRPanel/InsertVacationRequest",
      backToWork: "/HumanResources/HRPanel/UpdateVacationBackToWork",
      initializeDocument: "/HumanResources/HRPanel/InitializeDocuments",
      cancelVacationRequest: "/HumanResources/HRPanel/UpdateVacationStatus",
    },
    vacationRequestApproval: {
      vacationRequestApproval:
        "/HumanResources/HRPanel/VacationRequestApproval",
      changeStatus: "/HumanResources/HRPanel/ChangeVacationApprovalStatus",
    },
    Deductibles: {
      deductibles: "/HumanResources/HRPanel/Deductibles",
    },
    generalDocuments: {
      documents: "/HumanResources/HRPanel/GeneralDocuments",
    },
    RequestService: {
      search: "/HumanResources/HRPanel/RequestServicesFromHR",
      save: "/HumanResources/HRPanel/InsertRequestServices",
      changeStatus: "/HumanResources/HRPanel/UpdateRequestStatus",
      Documents: "/HumanResources/HRPanel/InitializeDocuments",
      saveDocuments: "/HumanResources/HRPanel/AddDocuments",
    },
    HealthInsuranceRequest: {
      search: "/HumanResources/HRPanel/InitializeHealthInsuranceRequest",
      save: "/HumanResources/HRPanel/CreateHealthInsuranceRequest",
      // Documents: "/HumanResources/HRPanel/InitializeDocuments",
    },
    ExcuseRequest: {
      search: "/HumanResources/HRPanel/StaffExcuseRequest",
      getData: "/HumanResources/HRPanel/OverviewOfExcuseRequest",
      save: "/HumanResources/HRPanel/InsertExcuseRequest",
      changeStatus: "/HumanResources/HRPanel/UpdateExcuseStatus",
      Documents: "/HumanResources/HRPanel/InitializeDocuments",
      saveDocuments: "/HumanResources/HRPanel/AddDocuments",
    },
    ExcuseRequestApproval: {
      getUnApprovedExcuses: "/HumanResources/HRPanel/FillStaff",
      getExcuseDetails: "/HumanResources/HRPanel/GetExecuseRequest",
      getExcusesHistory: "/HumanResources/HRPanel/FillEmpExecuseRequests",
      approveExcuseReq: "/HumanResources/HRPanel/ApproveExecuseRequest",
      rejectExcuseReq: "/HumanResources/HRPanel/RejectExecuseRequest",
    },
    StaffRequests: {
      getStaffRequestsHistory: "/HumanResources/HRPanel/StaffRequests",
    },
    StaffAttendance: {
      report: "/HumanResources/HRPanel/StaffAttendanceReport",
    },
  },
};