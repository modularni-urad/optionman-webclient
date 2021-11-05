
export default {
  props: ['query', 'id', 'cfg'],
  // created() {
  //   this.cfg.url = this.cfg.apiurl + this.id
  // },
  computed: {
    muzuUpravit: function () {
      return true
    }
  },
  methods: {
    doEdit: function (row) {
      const query = Object.assign({}, this.query, { _detail: row.value })
      this.$router.replace({ query })
    }
  },
  template: `
  <ACListView :query="query" :cfg="cfg">

    <template v-slot:breadcrumb="{ cfg }">
      <b-breadcrumb-item :to="{name: 'opt_grouplist'}">skupiny options</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ id }}</b-breadcrumb-item>
    </template>

    <template v-slot:tbody="{ items, fields }">

      <tr v-for="row,rowidx in items" :key="rowidx">
        <td>{{ row.value }}</td>
        <td>{{ row.label }}</td>
        <td>{{ row.note }}</td>
        <td>
          <b-button v-if="muzuUpravit" size="sm" variant="primary" @click="doEdit(row)">
            <i class="fas fa-edit"></i> upravit
          </b-button>
        </td>
      </tr>

    </template>
  </ACListView>
  `
}
