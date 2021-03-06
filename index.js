import GroupListComponent from './src/components/grouplist.js'
import OptionListComponent from './src/components/optionlist.js'
import { ROUTE_NAMES as NAMES } from './src/consts.js'
import { GROUP_FORM_CONFIG, OPTION_FORM_CONFIG } from './src/formconfig.js'

export function createMenu (user) {
  return { label: 'options', to: { name: NAMES.grouplist } }
}

export async function setupRoutes (path, cfg, initConfig) {
  const groupsCfg = Object.assign(cfg, { conf: GROUP_FORM_CONFIG })
  await initConfig(groupsCfg)
  const optionsCfg = Object.assign({}, cfg, { 
    conf: OPTION_FORM_CONFIG,
    apiurl: cfg.url,
    default_sort: 'value:asc',
    getLoadUrl: (itemId, self) => {
      const filter = { 
        value: self.query._detail 
      }
      return `${self.cfg.url}${self.$route.params.id}?filter=${JSON.stringify(filter)}`
    },
    getListUrl: (self) => {
      return `${self.cfg.url}${self.$route.params.id}`
    },
    getSaveUrl: (currItem, self) => {
      const u = `${self.cfg.url}${self.$route.params.id}`
      return currItem ? `${u}/${self.query._detail}` : u
    }
  })
  await initConfig(optionsCfg)

  return [{ 
    path, 
    name: NAMES.grouplist, 
    component: GroupListComponent, 
    props: route => {
      return { query: route.query, cfg: groupsCfg }
    }
  }, { 
    path: `${path}:id`, 
    name: NAMES.optionlist, 
    component: OptionListComponent, 
    props: route => {
      return { query: route.query, id: route.params.id, cfg: optionsCfg }
    }
  }]
}

export const List = GroupListComponent
export const Detail = OptionListComponent
export const ROUTE_NAMES = NAMES