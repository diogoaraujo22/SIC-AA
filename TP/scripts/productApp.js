class Product {
    //private fields
    #id; #name; #category; 

    constructor(id, name, category) {
        this.#id = id;
        this.#name = name;
        this.#category = category;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get category() { return this.#category; }
}



Vue.component('top-onlylogin-bar', {
    template: `
        <div>
        <div class="row">
        <nav class="col-12 navbar navbar-expand-lg navbar-dark bg-primary">
          <img class="text-end" src="olx.png" style="width:50px;height:60px;">
            <!-- The collapsibe button -->
            <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#mycollapseNB">
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- The navbar options -->
            <div class="collapse navbar-collapse justify-content-end" id="mycollapseNB">
              <ul class="navbar-nav">
                <li class="nav-item px-1">
                  <a href="login.html" class="btn btn-outline-light" role="button" data-bs-toggle="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                    Log In
                  </a>
                </li>
                </li>
              </ul>
           </div>
        </nav>
        </div>

        </div>
     `
})



Vue.component('purchase', {
    props: ['selProd'],
    data: function () {
        return {
            p: this.selProd
        }},
    template: `
        <div>
        <div class="card mt-4 mb-3 " style="max-width: 2000px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://macmagazine.com.br/wp-content/uploads/2021/08/13-iPhone-carregador-cabo-scaled.jpg" style="width:100%; height:100%; background:url(logo.png) center center no-repeat;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3>{{p.name}}</h3>
                            <p style="color:black">
                            Id: {{p.id}}<br />
                            Name: {{p.name}}<br />
                            Year: {{p.year}}<br />
                            Price: {{p.price}}<br />
                            Description: {{p.description}}<br />
                            Category: {{p.category}}<br />
                            </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4 col-md-12">
            <a class="btn btn-primary active" id="botao" style="width: 100px; margin:0 auto;" href="pagamento.html" role="button">Buy</a>
        </div>

        </div>
     `
})





Vue.component('registo', {
    props: ['listOfUsers', 'userReg', 'emailReg', 'passReg', 'zoneReg'],
    computed: {
        boolUser: function () {
            var bool = true;
            this.listOfUsers.forEach(g => {
            if (g.username === this.userReg) {
                bool = false;}
            });            
            return bool;
        }, 
        boolEmail: function () {
            var bool = true;
            this.listOfUsers.forEach(g => {
            if (g.email === this.emailReg) {
                bool = false;}
            });            
            return bool;
        },
        boolPass: function () {
            if(this.passReg === "") return false;
            var bool = true;
            if (hasNumber(this.passReg) && hasUpperLetter(this.passReg) && hasLowLetter(this.passReg)) {
                bool = false;
            }   
            return bool;
        }
    },
    data: function () {
        return {
            uReg: this.userReg,
            eReg: this.emialReg,
            pReg: this.passReg,
            zReg: this.zoneReg
        }
    },
    template: `
    <div>
        <div class="row mt-5 col-md-12">
            <div class="input-group flex-nowrap" style="width: 500px; margin:0 auto;">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input v-model="uReg" v-on:change="$emit('newureg', uReg)" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
        </div>

        
        <div class="row text-center mt-3 col-md-12" v-if="!boolUser">
            <p>Username already in use. Digit another!</p>
        </div>

        <div class="row mt-3 col-md-12">
            <div class="input-group flex-nowrap" style="width: 500px; margin:0 auto;">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input v-model="eReg" v-on:change="$emit('newereg', eReg)" type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
        </div>
        
        <div class="row text-center mt-3 col-md-12" v-if="!boolEmail">
            <p>Email already in use. Digit another!</p>
        </div>

        <div class="row mt-3 col-md-12">
            <div class="input-group flex-nowrap" style="width: 500px; margin:0 auto;">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input v-model="pReg" v-on:change="$emit('newpreg', pReg)" type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
        </div>

    
        <div class="row text-center mt-3 col-md-12" v-if="boolPass">
            <p>Invalid password. Password must have 1 digit, 1 upper letter and 1 low letter!</p>
        </div>

        <div class="row mt-3 col-md-12">
            <div class="input-group flex-nowrap" style="width: 500px; margin:0 auto;">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input v-model="zReg" v-on:change="$emit('newzreg', zReg)" type="text" class="form-control" placeholder="Country Zone" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
        </div>

        <div class="row mt-4 col-md-12 text-center" v-if="!boolUser || !boolEmail || boolPass || uReg.length==0 || eReg.length==0 || pReg.length==0 || zReg.length==0">
            <a class="btn btn-primary disabled" id="botao" style="width: 200px; margin:0 auto;" href="homepage.html" role="button">Create Account</a>
        </div>

        <div class="row mt-4 col-md-12 text-center" v-else>
            <a class="btn btn-primary active" id="botao" style="width: 200px; margin:0 auto;" href="homepage.html" role="button">Create Account</a>
        </div>


    </div>
     `
})




Vue.component('log-out-message', {
    template: `
        <div>
            <div class="row">
                <p class="col-12 mt-4 text-center">Obrigado! Volte Sempre!</p>
            </div>
        </div>
     `
})





Vue.component('top-bar', {
    props: ['user'],
    data: function () {
        return {
            u: this.user
        }
    },
    template: `
        <div>
            <div class="row">
            <nav class="col-12 navbar navbar-expand-lg navbar-dark bg-primary">
              <img class="text-end" src="olx.png" style="width:50px;height:60px;">
                <!-- The collapsibe button -->
                <button class="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#mycollapseNB">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <!-- The navbar options -->
                <div class="collapse navbar-collapse justify-content-end" id="mycollapseNB">
                  <ul class="navbar-nav">
                    <li class="nav-item px-1">
                      <a href="notificacoes.html" class="btn btn-outline-light" role="button" data-bs-toggle="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-bell" viewBox="0 0 16 16">
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg>
                        Notificações
                      </a>
                    </li>
                    <li class="nav-item px-1">
                      <a href="perfil.html" class="btn btn-outline-light" role="button" data-bs-toggle="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                        {{u}}
                      </a>
                    </li>
                    <li class="nav-item px-1">
                      <a href="anuncio.html" class="btn btn-outline-light" role="button" data-bs-toggle="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-plus-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        Criar um anúnico
                      </a>
                    </li>
                    <li class="nav-item px-1">
                      <a href="logout.html" class="btn btn-outline-light" role="button" data-bs-toggle="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                        Logout
                      </a></li>
                    </li>
                  </ul>
               </div>
            </nav>
            </div><!-- /.row -->
        </div>
     `
})




Vue.component('sign-in', {
    props: ['userName', 'passWord', 'listOfUsers'],
    computed: {
        vazia: function () {
            var bool = false;
            if(this.userName === "" || this.passWord === "") bool = true;  
            return bool;
        },
        //variavel que verifica se as credenciais pertencem a algum utilizador do sistema
        found: function () {
            if(this.userName === "" || this.passWord === "") return false;
            var bool = false;
            this.listOfUsers.forEach(g => {
            if (g.username === this.userName && g.password === this.passWord) {
                bool = true;}
            });            
            return bool;
        }
    },
    data: function () {
        return {
            user: this.userName,
            pass: this.passWord,
            users: this.listOfUsers
        }
    },
    template: `
    <div>
        <div class="row">
            <nav class="col-12 navbar navbar-expand-lg navbar-dark bg-primary">
                <img class="text-end" src="olx.png" style="width:50px;height:60px;">
                    <!-- The collapsibe button -->
                    <button class="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#mycollapseNB">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <!-- The navbar options -->
            <div class="collapse navbar-collapse justify-content-end" id="mycollapseNB">
                <ul class="navbar-nav">
                    <li class="nav-item px-1">
                    <a href="registo.html" class="btn btn-outline-light" role="button" data-bs-toggle="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                    </svg>
                    Sign Up
                    </a></li>
                    </li>
                </ul>
            </div>
            </nav>
        </div><!-- /.row -->

        <div class="row mt-5 col-md-12">
            <div class="input-group flex-nowrap" style="width: 500px; margin:0 auto;">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input v-model="user" v-on:change="$emit('newusername', user)" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
        </div>
        
        <div class="row mt-4 col-md-12">
          <div class="input-group flex-nowrap" style="width: 500px; margin:0 auto;">
            <span class="input-group-text" id="addon-wrapping">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-key" viewBox="0 0 16 16">
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            </span>
            <input v-model="pass" v-on:change="$emit('newpassword', pass)" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping">
          </div>
        </div>

        <div class="row mt-4 col-md-12" v-if="vazia">
            <a class="btn btn-primary disabled" id="botao" style="width: 500px; margin:0 auto;" href="homepage.html" role="button">Log In</a>
        </div>

        <div class="row mt-4 col-md-12" v-if="found">
            <a class="btn btn-primary active" id="botao" style="width: 500px; margin:0 auto;" href="homepage.html" role="button">Log In</a>
        </div>


        <div class="row mt-4 col-md-12 text-center" v-if="!vazia && !found">
            <p>Invalid Credencials. Try again!</p>
            <a class="btn btn-primary disabled" id="botao" style="width: 500px; margin:0 auto;" href="homepage.html" role="button">Log In</a>
        </div>

    </div>    
        
        `
})


Vue.component('products-filter', {
    props: ['listOfProducts', 'selCategory', 'selProductSB'],
    computed: {
        categories: function () {
            var list = [];
            this.listOfProducts.forEach(function (g) {
            if (!(list.includes(g.category))) {
                list.push(g.category);}
            });            
            return ["Category..."].concat(list.sort());
        }},
    data: function () {
        return {
            category: this.selCategory,
            prod: this.selProductSB,
            products: this.listOfProducts
        }
    },
    template: `
    <div>
        <div class="row">
            <div class="row mt-4 col-md-6">
                <form> 
                    <fieldset class="form-group">
                    <select class="form-select" aria-label="Default select example" v-model="category" v-on:change="$emit('newcategory', category)" >    
                        <option v-for="c in categories">{{c}}</option>
                    </select>
                    </fieldset>
                </form>     
            </div>

            <div class="row mt-4 col-md-6">
                <div class="col text-center" id="divBusca">
                    <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </span>
                    <input v-model="prod" v-on:change="$emit('newproductsb', prod)" type="text" class="form-control" placeholder="Product..." aria-label="Procurar produto..." aria-describedby="addon-wrapping">
                    </div>
                </div>
  
            </div>
        </div>
    </div>
        `
})




Vue.component('product-show', {
    props: ['product'],
    data: function () {
        return {
            product: this.product
        }},
    template: `
        <div>
            <h3>{{product.name}}</h3>
            <p style="color:blue">
                Id: {{product.id}}<br />
                Year: {{product.year}}<br />
                Price: {{product.price}}<br />
                Description: {{product.description}}<br />
                Category: {{product.category}}
            </p>
            <button v-on:click="$emit('back')">&laquo;</button>
        </div>
     `
})





Vue.component('products-list', {
    props: ['listOfProducts','page','productNum','selCategory', 'selProductSB','selProduct'],
    computed: {
        productsFiltered: function () {
            var list = [];
            if (this.selCategory === "Category..." && this.selProductSB === "") {
                list = this.listOfProducts;
            }  else {
                //caso em que só é filtrado pela categoria
                if(this.selProductSB === ""){
                    this.listOfProducts.forEach(g => {
                        if (g.category === this.selCategory) {
                            list.push(g);
                        }
                    }); 

                //caso em que só é filtrado pelo produto
                } else if (this.selCategory === "Category..."){
                    this.listOfProducts.forEach(g => {
                        a = this.selProductSB.toUpperCase();
                        b = g.name.toUpperCase();
                        if(a.includes(b) || b.includes(a)){
                            list.push(g);
                        }
                    });

                //caso em que é filtrado por categoria e produto
                } else {
                    this.listOfProducts.forEach(g => {
                        a = this.selProductSB.toUpperCase();
                        b = g.name.toUpperCase();
                        if (g.category === this.selCategory && (a.includes(b) || b.includes(a))) {
                            list.push(g);
                        }
                    });
                }
            }
            return list; 
        },

        productsPaginated: function(){ 
            var list = [];
            var list2 = [];
            var x = 0;
            for(var i = 0; i < this.productsFiltered.length/this.productNum; i++) {
                list2 = [];
                for(var j=0; j<this.productNum && x<this.productsFiltered.length; j++) {
                    list2.push(this.productsFiltered[this.productNum*i + j]);
                    x++;
                }
                    list.push(list2);
                }
            return list;
            },

        pages: function(){ 
            var tam = this.productsPaginated.length;
            return tam;
            }},

    data: function () {
        return {
            pg: this.page,
            num: this.productNum,
            products: this.listOfProducts,
            category: this.selCategory,
            productSB: this.selProductSB,
            sp: this.selProduct

        }
    },
    template: `
    <div>  

    <!--SE O SELPRODUCT QUE NAO TIVER NADA DEPOIS DESTE COMPONENTE: TIRAR O  <a></a> DESTA DIV ABAIXO -->
    
    <div class="row mt-4" style="width:1100px; margin:0 auto;" v-for="p in productsPaginated[pg]" v-bind:key="p.id" v-on:click="sp.id ? sp = '': sp = p; $emit('newproduct', sp);">
        <a href="compra.html">
            <div class="card mb-3 text-center" style="max-width: 1000px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://media.slbenfica.pt/-/media/benficadp/shop/produtos/acessorios/cachecois-1/cachecol-gigante-com-logo-slbenfica.jpg" style="width:100%; height:100%; background:url(logo.png) center center no-repeat;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3>{{p.name}}</h3>
                            <p style="color:black">
                            Id: {{p.id}}<br />
                            Name: {{p.name}}<br />
                            Year: {{p.year}}<br />
                            Price: {{p.price}}<br />
                            Description: {{p.description}}<br />
                            Category: {{p.category}}<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>    
    </div>


    <div class="pagination justify-content-end">
        <nav aria-label="Page navigation" v-if="listOfProducts.length>num">
        <ul class="pagination justify-content-end">
            <li class="page-item">
            <button class="page-link"  v-on:click="pg -= 1" v-bind:disabled="pg==0" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </button>
            </li>                
            <li class="page-item" v-for="p in pages"> <a class="page-link" v-on:click="pg = p-1">{{p}}</a> </li>
                  
            <li class="page-item">
            <button class="page-link"  v-on:click="pg += 1" v-bind:disabled="pg==productsPaginated.length - 1" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </button>
            </li>
        </ul>
      </nav>
        <div class="d-flex justify-content-end" v-else>
        These are all products!
        </div>  
    </div>
    </div>
        `
})


var vm = new Vue({
    el: "#gamesApp",
    data: {
        appName: "Products App",
        users: [],
        products: [],
        selCategory: "Category...",
        selProductSB: "",
        usersURL: "https://raw.githubusercontent.com/diogoaraujo22/SIC-AA/main/users.json", 
        productsURL: "https://raw.githubusercontent.com/diogoaraujo22/SIC-AA/main/products.json",
        productNumberPerArray: 3,
        page: 0,
        selProduct: '',
        selUser: '',
        username: "",
        password: "",
        userRegisto: "",
        emailRegisto: "",
        passRegisto: "",
        zoneRegisto: "",

    },
    computed: {
        categories: function () {
            var list = [];
            this.products.forEach(function (g) {
            if (!(list.includes(g.category))) {
                list.push(g.category);}
            });            
            return ["Category..."].concat(list.sort());
            },
        productsFiltered: function () {
            var list = [];
            if (this.selCategory === "Category..." && this.selProductSB === "") {
                list = this.products;
            }  else {
                //caso em que só é filtrado pela categoria
                if(this.selProductSB === ""){
                    this.products.forEach(g => {
                        if (g.category === this.selCategory) {
                            list.push(g);
                        }
                    }); 
                    
                //caso em que só é filtrado pelo produto
            } else if (this.selCategory === "Category..."){
                this.listOfProducts.forEach(g => {
                    a = this.selProductSB.toUpperCase();
                    b = g.name.toUpperCase();
                    if(a.includes(b) || b.includes(a)){
                        list.push(g);
                    }
                });

            //caso em que é filtrado por categoria e produto
            } else {
                this.listOfProducts.forEach(g => {
                    a = this.selProductSB.toUpperCase();
                    b = g.name.toUpperCase();
                    if (g.category === this.selCategory && (a.includes(b) || b.includes(a))) {
                        list.push(g);
                    }
                });
            }
            }
            return list; 
        },
        productsPaginated: function(){ 
            var list = [];
            var list2 = [];
            var x = 0;
            for(var i = 0; i < this.productsFiltered.length/this.productNumberPerArray; i++) {
                list2 = [];
                for(var j=0; j<this.productNumberPerArray && x<this.productsFiltered.length; j++) {
                    list2.push(this.productsFiltered[this.productNumberPerArray*i + j]);
                    x++;
                }
                    list.push(list2);
                }
            return list;
        },
        pages: function(){ 
            var tam = this.productsPaginated.length;
            return tam;
            }    
        },
        created: async function f () {
            try {
                const response1 = await fetch(this.productsURL);
                const response2 = await fetch(this.usersURL);
                this.products = await response1.json();
                this.users = await response2.json();
            } catch (error) {
        }}
})
    

function hasNumber(myString) {
    return /\d/.test(myString);
  }

function hasUpperLetter(myString) {
    return /[A-Z]/.test(myString);
}

function hasLowLetter(myString) {
    return /[a-z]/.test(myString);
}