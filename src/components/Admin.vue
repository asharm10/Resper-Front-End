<template>
    <h1>Admin Page</h1>
    <div>
        <button @click="logout">LOGOUT
        </button>
    </div>
    <div id="registerServer">
        <form @submit.prevent="register">
            <div>
                <label for="username">email</label>
                <input name="username" v-model="username" placeholder="email">
            </div>
            <div>
                <label for="password">password</label>
                <input name="password" v-model="password" placeholder="password" type="password">
            </div>
            <input type="submit" value="register">
        </form>
    </div>
    <hr>
    <div>
        <li v-for="server in servers.success" v-bind:key="server" >{{ server.username }}</li>
    </div>
</template>
 
<script>
export default {
    name: "AdminPage",
    data() {
        return {
            servers:[]
        }
    },
    created() {
            this.getServers();
    },
    methods: {
        logout() {
            this.$router.push("/signin");
            this.$store.dispatch('setToken', 403)
        },

        async register() {
            const { username, password } = this;
            const res = await fetch(
                "http://localhost:5000/admin/servers",
                {
                    method: "POST",
                    credentials: 'include',

                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            ,);
            const data = await res.json();
            console.log(data);
            // if (data.status == 200){
            //     this.$store.dispatch('setToken', res.status)
            //     this.$router.push("/admin");
            // }
        },

        async getServers() {
            const res = await fetch(
                "http://localhost:5000/admin/servers",
                {
                    method: "GET",
                    credentials: 'include',
                }
            ,);
            let data = await res.json();
           // data=data.success;
            console.log(data);
            this.servers= data;
            //this.data=data.success;
        }
    }
}
</script>
