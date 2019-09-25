<template>
  <div class="details container">
     <span class="pull-left">
       <router-link to="/" class="btn btn-default">返回</router-link></span>
    <div class="page-header">{{customer.name}}<span class="pull-right">
      <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
    	<button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
    	</span>
    </div>
    <ul class="list-group">
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-asterisk">
    			{{customer.phone}}
    		</span>
    	</li>
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-plus">
    			{{customer.email}}
    		</span>
    	</li>
    </ul>
    <ul class="list-group">
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-asterisk">
    			{{customer.education}}
    		</span>
    	</li>
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-plus">
    			{{customer.graduationschool}}
    		</span>
    	</li>

		<li class="list-group-item">
			<span class="glyphicon glyphicon-asterisk">
				{{customer.profession}}
			</span>
		</li>
		<li class="list-group-item">
			<span class="glyphicon glyphicon-plus">
				{{customer.profile}}
			</span>
		</li>
    </ul>
  </div>
</template>

<script>
import {getUserId,getUserDelete} from '../api/api'
export default {
  name: 'cumstomerdetails',
  data () {
    return {
      customer:{}
    }
  },
  methods: {
  	 fetchCustomers: function (id) {
  	   let params = {id:id} // 传参
       getUserId(params).then((res) => {
          this.customer = res.data
          this.customer.forEach(item =>{ this.customer = item }) // forEach遍历customer对象
         })
    },
    deleteCustomer: function (id) {
      let params = {id:id} // 传参
      getUserDelete(params)
      console.log(params)
      console.log(getUserDelete())
      this.$router.push({path: '/', query: {alert: '用户删除成功!'}})
  	  // this.$axios.delete('/users/' + id)
        // .then((response) => {
         //  this.$router.push({path: '/', query: {alert: '用户删除成功!'}})
    })
    }
  },
  created () {
    this.fetchCustomers(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
