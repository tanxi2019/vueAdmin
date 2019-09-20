<template>
  <div class="customers container">
    <Alert v-if="alert"  :message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text"
           class="form-control"
           placeholder="搜索"
           v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in filterBy(customers,filterInput)">
        <td>{{item.name}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.email}}</td>
        <td>
          <router-link class="btn btn-default" :to="'/customerDetails/'+item.id">详情</router-link></td>
      </tr>
      </tbody>
    </table>
    <!--    <page></page>-->
  </div>
</template>

<script>
  // eslint-disable-next-line
  /* eslint-disable */
  import page from '@/components/page'
  import Alert from './Alert'
  export default {
    name: 'customers',
    components:{Alert,page},
    data:function () {
      return {
        customers:[],
        alert:"",
        filterInput:""
      }
    },
    methods:{
      fetchCustomers: function () {
        this.$axios.get('/users')
          .then((response) => {
            //console.log(response);
            this.customers = response.data
          })
      },
      filterBy(customers,value){
        return customers.filter((item) =>{
          return item.name.match(value);
        })
      }
    },
    created(){
      if (this.$route.query.alert) {
        this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
    },
    updated(){
      this.fetchCustomers();
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
