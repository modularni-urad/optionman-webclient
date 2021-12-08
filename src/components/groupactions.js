import store from '../../dev/store.js'
import { ROUTE_NAMES } from '../consts.js'

export default {
  props: ['query', 'cfg', 'row'],
  computed: {
    muzuUpravit: function () {
      return this.$store.getters.isMember(this.row.owner)
    }
  },
  methods: {
    doEdit: function () {
      const query = Object.assign({}, this.query, { _detail: this.row.slug })
      this.$router.replace({ query })
    },
    showDetail: function (i) {
      this.$router.push({ name: ROUTE_NAMES.optionlist, params: { id: i.slug } })
    }
  },
  template: `
  <td>
    <b-button-group>
      <b-button v-if="muzuUpravit" size="sm" variant="primary" @click="doEdit(row)">
        <i class="fas fa-edit"></i> upravit
      </b-button>
      <b-button size="sm" variant="secondary" @click="showDetail(row)">
        <i class="fas fa-edit"></i> detail
      </b-button>
    </b-button-group>
  </td>
  `
}
