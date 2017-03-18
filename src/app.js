import { configureBusinessLogic, businessProcesses } from 'config/business-logic'
import { configurePresentation } from 'config/presentation'
import { configureStore } from 'config/store'

const businessLogic = configureBusinessLogic()
const store = configureStore(businessLogic)
configurePresentation(store)

businessLogic.run(businessProcesses)
