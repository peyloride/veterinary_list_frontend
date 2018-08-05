<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="columns is-mobile is-centered">
        <div class="column">
          <div class="level-item has-text-centered">
            <div class="control">
              <b-field label="İsim">
                  <b-input v-model="search_query.vet_name" @keyup.native.enter="loadAsyncData" type="search" icon="magnify"></b-input>
              </b-field>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="level-item has-text-centered">
            <div class="control">
                <b-field label="Şehir">
                    <b-input v-model="search_query.city" @keyup.native.enter="loadAsyncData" type="search" icon="magnify"></b-input>
                </b-field>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="level-item has-text-centered">
            <div class="control">
              <b-field label="İlçe">
                  <b-input v-model="search_query.town" @keyup.native.enter="loadAsyncData" type="search" icon="magnify"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-table
      :data="data"
      :striped="true"
      :hoverable="true"
      :loading="isLoading"
      :mobile-cards="true"
      paginated
      backend-pagination
      :total="total"
      :per-page="perPage"
      @page-change="onPageChange"
      >

      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="name" label="İsim">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column field="address" label="Adres">
          {{ props.row.address }}
        </b-table-column>

        <b-table-column field="city" label="Şehir" centered>
          {{ props.row.city }}
        </b-table-column>

        <b-table-column field="town" label="İlçe" centered>
          {{ props.row.town }}
        </b-table-column>

        <b-table-column field="telephone" label="Telefon" centered>
          {{ props.row.telephone }}
        </b-table-column>

        <b-table-column field="website" label="Web" centered>
          {{ props.row.website }}
        </b-table-column>

        <b-table-column field="email" label="Email" centered>
          {{ props.row.email }}
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon
                icon="emoticon-sad"
                size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: [],
      total: 4863,
      isLoading: true,
      page: 1,
      perPage: 20,
      mode: '',
      search_query: {
        vet_name: '',
        city: '',
        town: ''
      }
    }
  },
  methods: {
    loadAsyncData () {
      this.isLoading = true
      this.cleanEmptySearchParameters()

      if (Object.keys(this.search_query).length !== 0) {
        this.mode = 'search'
      } else {
        this.mode = 'veterinaries?page=' + this.page
      }

      axios.get('http://veterinaries.enderahmetyurt.com/' + this.mode, {params: this.search_query})
        .then(response => {
          if (this.mode === 'search') this.total = response.data.length
          this.data = response.data
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    },
    onPageChange (page) {
      this.page = page
      this.loadAsyncData()
    },
    cleanEmptySearchParameters () {
      Object.keys(this.search_query).forEach((key) => (this.search_query[key] === '' && delete this.search_query[key]))
    }
  },
  created () {
    this.loadAsyncData()
  }
}
</script>

<style>
.section {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
