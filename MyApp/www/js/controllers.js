
   var Myapp = angular.module('starter.controllers',[])

   //Variaveis Globais // Detalhes sobre a empresa.
   Myapp.factory('Empresa', function() {
    return {
  //Configuração rápida
  //Tela Style: Coisas importantes que voce irá mudar.
  //Pesquisar por:
  //FUNDOAPP
  //.tab-nav.tabs
  //ion-nav-bar.roxo ion-header-bar
  //icon4.png
  //Adicinar Icon, SplashScreen, e imagem de fundo no APP.
  //e o icone das notificações
  //Empresas já Cadastradas:
   // numero 1 - Top Entregas
   // numero 2 - Turbo dog
   // numero 3 - Ale Lanches
   numero : '20',
   nome : 'APP Driver',
   localizacao : 'Av. Bady Bassitt, 3939 - Centro, São José do Rio Preto',
   //Descrição Novidade
   nomeUP : 'APP', // Caso nao tenha 2 nomes colocar apenas no nomeUP
   nomeDown : 'Driver',
   //Endereço picado //tela retirada.
   RuaEndereco : 'Av. Bady Bassitt, 3939 ',
   BairroEndereco: '- Centro -',
   CidadeEndereco: 'São José do Rio Preto - SP',
   PaisEndereco: 'Brasil',
   Tipo: 'JHONATAN_ENTREGAS/',
   //Ativar Retirada no balcão ?
   AtivarRetirada : 1 //1 ativa e 0 desativa.
    };
  })

.controller('voltarButtons', function($scope, $state, Empresa){
 sessionStorage.getItem('menuPerfil');
 var last = sessionStorage.getItem('menuPerfil');

 $scope.MeuProprioVoltar = function(){
 if (last == 1) {
 $state.go('admin-edit',[],{location:"replace",reload:true});
}
   if (last == 2) {
     $state.go('tab.carrinho',[],{location:"replace",reload:true});
   //  $scope.openModalCarrinho();
   }

   if (last == 3) {
     $state.go('tab.lista',[],{location:"replace",reload:true});
   }
 }

 $scope.MeuProprioVoltarRetirada = function(){
   sessionStorage.getItem('irParaRetirada');
   var retirada = sessionStorage.getItem('irParaRetirada');

   if (retirada == 1) {
     $state.go('tab.carrinho',[],{location:"replace",reload:true});
   }
   if (retirada == 2) {
     $state.go('tab.lista',[],{location:"replace",reload:true});
 }
}

$scope.MeuProprioVoltarCarrinho = function() {
 sessionStorage.getItem("aoCarrinho");
 var carrinhoback = sessionStorage.getItem('aoCarrinho');
 if (carrinhoback == 1) {
   $state.go('descricao-produto',[],{location:"replace",reload:true});
 }
 if (carrinhoback == 2) {

   $state.go('produtos',[],{location:"replace",reload:true});
 }
 if (carrinhoback == 3) {

   $state.go('tab.lista',[],{location:"replace",reload:true});
 }
}
$("#preloader").fadeOut();
})


.controller('minhasRedesSociais', function($scope, $http, $state, $ionicPopup, $ionicModal, Empresa){
  ''
  var urlApi1 = 'https://topentregas.com.br/ionic/showNovidades.php?chave=' + $chave; //online
  var urlApi2 = 'https://topentregas.com.br/ionic/'; //online
  var idEmpresa = Empresa.numero;
  str66= urlApi2 + "minhasRedes.php?idEmpresa=" + idEmpresa;
  $http.get(str66).success(function(response){
    $scope.showRedes=response.records;
  })
})

.controller('ModalAdicional', function($scope, $ionicModal, $ionicPopup, $state, Empresa){
     //comeco modal adicionais
   $ionicModal.fromTemplateUrl('my-modalAdicional.html', {
     scope: $scope,
     backdropClickToClose: false,
     animation: 'slide-in-up'
  }).then(function(modal) {
     $scope.modalAdicional = modal;
  });

 // $scope.openModalAdicional = function() {
   //$state.go('adicional',[],{location:"replace",reload:false});
  //}

   $scope.openModalAdicional = function() {

    var verificar =  sessionStorage.getItem('lst');
    if ( verificar != ''){
     var confirmPopup = $ionicPopup.confirm({
       cssClass: 'custom-class',
       title: 'Pergunta:',
       template: 'Caso altere ou adicione algum adicional, os atuais serão substituidos, continuar ?'
     });
     confirmPopup.then(function(res) {
       if(res) {

         $scope.modalAdicional.show();
         return;
       }
       else {
  return;
       } })
    }else {
     $scope.modalAdicional.show();
    }

  };
  $scope.closeModalAdicional = function() {
   $scope.modalAdicional.hide();
 };
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
     $scope.modalAdicional.remove();
  });

  // Execute action on hide modal
  $scope.$on('modalAdicional.hidden', function() {
     // Execute action
  });

  // Execute action on remove modal
  $scope.$on('modalAdicional.removed', function() {
     // Execute action
  });
 //fim modal adicional

})

.controller('ModalDesc', function($scope, $ionicModal, $ionicPopup, $state, Empresa){
 //comeco modal adicionais
$ionicModal.fromTemplateUrl('my-ModalDesc.html', {
 scope: $scope,
 backdropClickToClose: false,
 animation: 'slide-in-up'
}).then(function(modal) {
 $scope.ModalDesc = modal;
});

// $scope.openModalAdicional = function() {
//$state.go('adicional',[],{location:"replace",reload:false});
//}

$scope.openModalDesc = function() {

var verificar =  sessionStorage.getItem('lst');
if ( verificar != ''){
 var confirmPopup = $ionicPopup.confirm({
   cssClass: 'custom-class',
   title: 'Pergunta:',
   template: 'Caso altere ou adicione algum adicional, os atuais serão substituidos, continuar ?'
 });
 confirmPopup.then(function(res) {
   if(res) {
     $scope.ModalDesc.show();
     return;
   }
   else {
return;
   } })
}else {  $scope.ModalDesc.show(); }
};
$scope.closeModalDesc = function() {
$scope.ModalDesc.hide();
};
//Cleanup the modal when we're done with it!
$scope.$on('$destroy', function() {
 $scope.ModalDesc.remove();
});

// Execute action on hide modal
$scope.$on('ModalDesc.hidden', function() {
 // Execute action
});

// Execute action on remove modal
$scope.$on('ModalDesc.removed', function() {
 // Execute action
});
//fim modal adicional
$("#preloader").fadeOut();
})

.controller('MyController', function($scope, $ionicModal, Empresa) {

   //começo modal pedido
   $ionicModal.fromTemplateUrl('my-modalPedido.html', {
     scope: $scope,
     backdropClickToClose: false,
     animation: 'slide-in-up'
  }).then(function(modal) {
     $scope.modalPedido = modal;
  });

   $scope.openModalPedido = function() {
     $scope.modalPedido.show();
  };
  $scope.closeModalPedido = function() {
   $scope.modalPedido.hide();
 };
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
     $scope.modalPedido.remove();
  });

  // Execute action on hide modal
  $scope.$on('modalPedido.hidden', function() {
     // Execute action
  });

  // Execute action on remove modal
  $scope.$on('modalPedido.removed', function() {
     // Execute action
  });
 //fim modal pedido

 //começo modal endereço
 $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
 }).then(function(modal) {
    $scope.modal = modal;
 });

 $scope.openModal = function() {
    $scope.modal.show();
 };


 $scope.closeModal = function() {
    $scope.modal.hide();
 };

 //Cleanup the modal when we're done with it!
 $scope.$on('$destroy', function() {
    $scope.modal.remove();
 });

 // Execute action on hide modal
 $scope.$on('modal.hidden', function() {
    // Execute action
 });

 // Execute action on remove modal
 $scope.$on('modal.removed', function() {
    // Execute action
 });
//fim modal endereço
$("#preloader").fadeOut();
})

.controller('AppController',function($ionicSideMenuDelegate, $scope, Empresa) {
 $scope.toggleLeft = function() {
   $ionicSideMenuDelegate.toggleLeft();
   $ionicSideMenuDelegate.canDragContent([canDrag]);
   $ionicsidemenudelegate.isOpen();
 };
})

.controller('ExampleController', ['$scope', function($scope, Empresa) {
 $scope.amount = "";
}])

.controller('PerfilCtrl',function($scope,$state, Empresa){

''

 $scope.goAltEnd = function (){
   sessionStorage.setItem("menuPerfil", 1);
   $state.go('alterar-endereco',[], {location:"replace",reload:true});
 }

 $scope.goPerfil = function () {
   $state.go('admin-edit',[],{location:"replace",reload:true});
 }

 $scope.goSobreNos = function () {

   $state.go('sobre-nos',[],{location:"replace",reload:true});

 }

 $scope.goRetirada = function () {

   $state.go('retirada-balcao',[],{location:"replace",reload:true});

 }
 $scope.goAlterarNome = function () {

   $state.go('alterar-nome',[],{location:"replace",reload:true});

 }
 $scope.goAlterarTelefone = function () {

   $state.go('alterar-telefone',[],{location:"replace",reload:true});

 }

 $scope.goAlterarSenha = function () {

   $state.go('alterar-senha',[],{location:"replace",reload:true});

 }

 $scope.goBack = function () {
   $state.go('admin-edit',[],{location:"replace", reload:true});
 }
 // essas linhas aqui recuperam os dados que estão guardados na sessionStorage...
       $scope.loggedin_status = localStorage.getItem('loggedin_status');
       $scope.loggedin_status_local = localStorage.getItem('loggedin_status');
       $scope.loggedin_id = localStorage.getItem('loggedin_id');
       $scope.loggedin_senha = sessionStorage.getItem('loggedin_senha');

})

.controller('DashCtrl', function($scope, $http, $ionicPopup, $state, $ionicHistory, Empresa, $timeout) {
 var urlApi1 = 'https://topentregas.com.br/ionic/showNovidades.php'; //online
 var urlApi2 = 'https://topentregas.com.br/ionic/'; //online
   ''
// impede o double click

 $scope.consultarEndereco = function (cep){
  // $ionicHistory.removeBackView();
   //$ionicHistory.removeBackView();

   $ionicHistory.nextViewOptions({
     historyRoot: true
 });

   $scope.goBackHandler = function () {
     $ionicHistory.goBack(-1);
   }

     $("#preloader").fadeIn();


      var urlApi = 'https://viacep.com.br/ws/' + cep + '/json/';


      $http.get(urlApi)
      .success(function (data){

          $scope.endereco = data;

          $("#preloader").fadeOut();
      })
      .error(function (data, status, headers, config) {
       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Informação',
         template:'Cep digitado incorretamente ou serviço indisponível. Corrija ou tente novamente mais tarde.'
       });

       $("#preloader").fadeOut();

      });
 }

 //edita o endereço apos cadastro
 $scope.editEndereco=function(){

   $scope.buttonDisabled = true;

   $scope.loggedin_id = localStorage.getItem('loggedin_id');

   var uf = $scope.endereco.uf;
   var cidade = $scope.endereco.localidade;
   var bairro = $scope.endereco.bairro;
   var rua = $scope.endereco.logradouro;
  // var numero = $scope.adminData.numero;
   var cep = $scope.cepDigitado;
   var complemento = $scope.complemento;
   var numero = $scope.numero;
   var idUser = $scope.loggedin_id;

   //var url="http://localhost/MyApp/ionic/";

   if( cep && numero && cidade && bairro && uf && rua ){
     str= urlApi2 + "endereco-edit.php?uf=" + uf + "&chave=" + $chave + "&cidade=" + cidade + "&bairro=" + bairro + "&rua=" + rua + "&cep=" + cep + "&complemento=" + complemento + "&numero=" + numero + "&idUser=" + idUser;

     $http.get(str)
     .success(function(response){

       if(response==true){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Sucesso!',
           template:'Endereço editado com sucesso'
         });
       //  $state.go('tab.carrinho',[],{location:"replace",reload:true});

       }else{

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Erro!',
           template:'Algo deu errado, tente mais tarde!'
         });
         $state.go('tab.main',[],{location:"replace",reload:true});

       }

     }).error(function(){

       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Algo deu errado!',
         template:'Não é possível fazer o contato do servidor.'
       });

     })

   //------------------------------------

   $scope.loggedin_id = localStorage.getItem('loggedin_id');
//idUser = $scope.loggedin_in;
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
 var idUser = $scope.loggedin_id;
str= urlApi2 + "endereco-verifica.php?idUser=" + idUser + "&chave=" + $chave;

//pegando aqui o endereço do individuo

//fim endereco individuo

sessionStorage.setItem('cityc',$scope.endereco.localidade);
sessionStorage.setItem('ruac',$scope.endereco.logradouro);
sessionStorage.setItem('bairroc',$scope.endereco.bairro);
sessionStorage.setItem('numeroc',$scope.numero);
sessionStorage.setItem('ufc',$scope.endereco.uf);

var ruaC = sessionStorage.getItem('ruac');
var numeroC = sessionStorage.getItem('numeroc');
var bairroC = sessionStorage.getItem('bairroc');
var cidadeC = sessionStorage.getItem('cityc');
var ufC =  sessionStorage.getItem('ufc');
var paisC = 'Brasil';


var origin = Empresa.localizacao; // jhonatan
//var origin = ruaA + ', ' + numeroA +' - '+cidadeA+' - '+ufA+', '+paisA+''; //endereço da empresa
var destination = ruaC + ', ' + numeroC +' - '+bairroC+ '-' +cidadeC+' - '+ufC+', '+paisC+''; //endereço do usuario
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//var destination = 'R. Prudente de Moraes, 1467 - São José do Rio Preto - SP, Brasil'; //endereço do cliente
//VenuesAppServices.factory('VenueDistance', ['$resource',function($resource){
//return $resource('http://google.com/maps/api/distancematrix/json?origins='+ origin +'&destinations='+ destination, {}, { Distance: {method:'GET'}});}]);
//Key = AIzaSyBJEzfpDsJTA2hG3gyo7eUx6lQCGoW8c4w;
var googleMapsApiKey='AIzaSyCGU0PK5ks0K4jqqAZ6l2A6FKWUknklPkM';

//var urlAPIG = ('http://google.com/maps/api/distancematrix/json?origins='+ origin +'&destinations='+ destination +'&key=' + googleMapsApiKey);
//     strEnd= urlAPIG;
//       $http.get(strEnd)
//       .success(function(response){
//        $scope.showEndG=response.records;
//     })

      // var urlApiGP = 'https://topentregas.com.br/ionic/info.php?origins='+ origin +'&destinations='+ destination +'&key=' + googleMapsApiKey;
      $scope.loggedin_id = localStorage.getItem('loggedin_id');

      var urlApiGP = 'https://topentregas.com.br/ionic/' + Empresa.Tipo;

      str= urlApiGP + "infoEndereco.php?idUser=" + $scope.loggedin_id + "&origin=" + origin + "&destination=" + destination + "&chave=" + $chave;

      $http.get(str)
      .success(function(response){

        if(response==251){

          $ionicPopup.alert({cssClass: 'custom-class',
            title:'Informação',
            template:'Endereço fora do raio de cobertura!'
          });
          localStorage.setItem("Permissao", 0);
          $state.go('tab.lista',[],{location:"replace",reload:true});
          stop;
          exit;
        }

       if ( $scope.idtel == 1 ){
        localStorage.setItem("Permissao", 1);
         return;
     }
        if(response==true){
          localStorage.setItem("Permissao", 1);
         sessionStorage.getItem('menuPerfil');
 var last = sessionStorage.getItem('menuPerfil');

 if (last == 1) {
  localStorage.setItem("Permissao", 1);
 $state.go('admin-edit',[],{location:"replace",reload:true});
}
   if (last == 2) {
    localStorage.setItem("Permissao", 1);
     $state.go('tab.carrinho',[],{location:"replace",reload:true});
   }

   if (last == 3) {
    localStorage.setItem("Permissao", 1);
     $state.go('tab.lista',[],{location:"replace",reload:true});
   }
       //  $state.go('tab.lista',[],{location:"replace",reload:true});

        }else{

          $ionicPopup.alert({cssClass: 'custom-class',
            title:'Informação',
            template: 'Endereço errado ou fora da area!'
           // template:'Não é possível gravar dados.'
          });
          $state.go('tab.main',[],{location:"replace",reload:true});

        }

      }).error(function(){

        $ionicPopup.alert({cssClass: 'custom-class',
          title:'Informação',
          template:'Endereço errado ou fora da area, Frete não calculado!'
        });
        $scope.buttonDisabled = false;

      })
     }else{

       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Incompleto!',
         template:'Por favor, preencha todas as informações corretamente.'
       });
       $scope.buttonDisabled = false;


     }


         //  var urlApiGP = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=bicycling&language=fr-FR&key=AIzaSyCGU0PK5ks0K4jqqAZ6l2A6FKWUknklPkM'
       //    JSON.stringify(urlApiGP);
 };

// realiza cadastro do endereço
$scope.agoraNao=function(){
 $scope.buttonDisabled = true;
 $state.go('tab.lista',[],{location:"replace",reload:true});
}
 $scope.doCadastroEndereco=function(){
   $scope.buttonDisabled = true;
   //sessionStorage.setItem('loggedin_rua',rua);
   $scope.loggedin_id = localStorage.getItem('loggedin_id');

   var uf = $scope.endereco.uf;
   var cidade = $scope.endereco.localidade;
   //var cidade = $scope.localidade;
   var bairro = $scope.endereco.bairro;
   //var bairro = $scope.bairro;
 var rua = $scope.endereco.logradouro;
  // var rua = $scope.logradouro;
  // var numero = $scope.adminData.numero;
   var cep = $scope.cepDigitado;
   var complemento = $scope.complemento;
   var numero = $scope.numero;
   var id_usuarios = $scope.loggedin_id;
   var telefone = $scope.phoneNumber;


//INSERT DE DADOS
   if( cep && numero && telefone && cidade && bairro && uf && rua){
     //var url="http://localhost/MyApp/ionic/";
     str= urlApi2 + "CadastrarEndereco.php?cidade=" + cidade + "&uf=" + uf + "&telefone=" + telefone + "&complemento=" + complemento + "&numero=" + numero + "&bairro=" + bairro + "&rua=" + rua + "&cep=" + cep + "&id_usuarios=" + id_usuarios;

     $http.get(str)
     .success(function(response){

       if(response==5){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Informação',
           template:'Necessário adicionar o DDD ao seu celular! (11 numeros).'
         });
          $scope.idtel = 1;
         $scope.buttonDisabled = false;
         return;


       }
       else{ $scope.idtel = 0;    }

       if(response==true){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Informação',
           template:'Endereco Cadastrado Com Sucesso!'
         });
         $state.go('tab.lista',[],{location:"replace",reload:true});

       }else{

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Informação',
           template:'Não foi possivel cadastrar o endereço!'
         });
         $scope.buttonDisabled = false;

       }

     }).error(function(){

       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Informação',
         template:'Não é possível fazer o contato do servidor.'
       });
       $scope.buttonDisabled = false;
     })


   $scope.loggedin_id = localStorage.getItem('loggedin_id');
   //idUser = $scope.loggedin_in;
   // ------------------------------------------------------------------------------------------------------------------------------------------------------------------

   // ------------------------------------------------------------------------------------------------------------------------------------------------------------------
     var idUser = $scope.loggedin_id;
   str= urlApi2 + "endereco-verifica.php?idUser=" + idUser;

   sessionStorage.setItem('cityc',$scope.endereco.localidade);
   sessionStorage.setItem('ruac',$scope.endereco.logradouro);
   sessionStorage.setItem('bairroc',$scope.endereco.bairro);
   sessionStorage.setItem('numeroc',$scope.numero);
   sessionStorage.setItem('ufc',$scope.endereco.uf);

   var ruaC = sessionStorage.getItem('ruac');
   var numeroC = sessionStorage.getItem('numeroc');
   var bairroC = sessionStorage.getItem('bairroc');
   var cidadeC = sessionStorage.getItem('cityc');
   var ufC =  sessionStorage.getItem('ufc');
   var paisC = 'Brasil';

   var origin = Empresa.localizacao;

   var destination = ruaC + ', ' + numeroC +' - '+bairroC+ ' - '+cidadeC+' - '+ufC+', '+paisC+''; //endereço do cliente

   var googleMapsApiKey='AIzaSyCGU0PK5ks0K4jqqAZ6l2A6FKWUknklPkM';

          $scope.loggedin_id = localStorage.getItem('loggedin_id');

          var urlApiGP = 'https://topentregas.com.br/ionic/' + Empresa.Tipo;

          str= urlApiGP + "infoEndereco.php?idUser=" + $scope.loggedin_id + "&origin=" + origin + "&destination=" + destination + "&chave=" + $chave;

          $http.get(str)
          .success(function(response){

            if(response==251){

              $ionicPopup.alert({cssClass: 'custom-class',
                title:'Informação',
                template:'Endereço fora do raio de cobertura!'
              });
              localStorage.setItem("Permissao", 0);
              $state.go('tab.lista',[],{location:"replace",reload:true});
              stop;
              exit;
            }

           if ( $scope.idtel == 1 ){
            localStorage.setItem("Permissao", 1);
               return;
           }

            if(response==true){
              localStorage.setItem("Permissao", 1);
             $state.go('tab.lista',[],{location:"replace",reload:true});

            }
         else{

              $ionicPopup.alert({cssClass: 'custom-class',
                title:'Informação',
                template: 'Endereço errado ou fora da area, Frete não calculado!'

              });
              $state.go('tab.main',[],{location:"replace",reload:true});

            }

          }).error(function(){

            $ionicPopup.alert({cssClass: 'custom-class',
              title:'Informação',
              template:'Endereço errado ou fora da area, Frete não calculado!'
            });
            $scope.buttonDisabled = false;

          })
         }else{

           $ionicPopup.alert({cssClass: 'custom-class',
             title:'Informação',
             template:'Preencha todas as informações corretamente.'
           });
           $scope.buttonDisabled = false;

         }

 };

 $scope.doCadastroEnderecoNovoCliente=function(){
  $scope.buttonDisabled = true;
  //sessionStorage.setItem('loggedin_rua',rua);
  $scope.loggedin_id = localStorage.getItem('loggedin_id');

  var uf = $scope.endereco.uf;
  var nomeCliente = "";
  var nomeCliente = $scope.nomeDigitado;
  var cidade = $scope.endereco.localidade;
  //var cidade = $scope.localidade;
  var bairro = $scope.endereco.bairro;
  //var bairro = $scope.bairro;
var rua = $scope.endereco.logradouro;
 // var rua = $scope.logradouro;
 // var numero = $scope.adminData.numero;
  var cep = $scope.cepDigitado;
  var complemento = $scope.complemento;
  var numero = $scope.numero;
  var id_usuarios = $scope.loggedin_id;
  var telefone = $scope.phoneNumber;
  var idEmpresa = Empresa.numero;


//INSERT DE DADOS
  if( nomeCliente && cep && numero && telefone && cidade && bairro && uf && rua){
    //var url="http://localhost/MyApp/ionic/";
    str= urlApi2 + "JHONATAN_ENTREGAS/CadastrarEndereco.php?cidade=" + cidade + "&idEmpresa=" + idEmpresa + "&nomeCliente=" + nomeCliente + "&uf=" + uf + "&telefone=" + telefone + "&complemento=" + complemento + "&numero=" + numero + "&bairro=" + bairro + "&rua=" + rua + "&cep=" + cep + "&id_usuarios=" + id_usuarios;

    $http.get(str)
    .success(function(response){

      if(response==5){

        $ionicPopup.alert({cssClass: 'custom-class',
          title:'Informação',
          template:'Necessário adicionar o DDD ao seu celular! (11 numeros).'
        });
         $scope.idtel = 1;
        $scope.buttonDisabled = false;
        return;
      }
      else{ $scope.idtel = 0;    }

      if(response==true){

        $ionicPopup.alert({cssClass: 'custom-class',
          title:'Informação',
          template:'Endereco Cadastrado!'
        });
      //  $state.go('descricao-produto',[],{location:"replace",reload:true});

      }else{

        $ionicPopup.alert({cssClass: 'custom-class',
          title:'Informação',
          template:'Não foi possivel cadastrar o endereço!'
        });
        $scope.buttonDisabled = false;

      }

    }).error(function(){

      $ionicPopup.alert({cssClass: 'custom-class',
        title:'Informação',
        template:'Não é possível fazer o contato do servidor.'
      });
      $scope.buttonDisabled = false;
    })


  $scope.loggedin_id = localStorage.getItem('loggedin_id');
  //idUser = $scope.loggedin_in;
  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var idUser = $scope.loggedin_id;
  str= urlApi2 + "endereco-verifica.php?idUser=" + idUser;

  sessionStorage.setItem('cityc',$scope.endereco.localidade);
  sessionStorage.setItem('ruac',$scope.endereco.logradouro);
  sessionStorage.setItem('bairroc',$scope.endereco.bairro);
  sessionStorage.setItem('numeroc',$scope.numero);
  sessionStorage.setItem('ufc',$scope.endereco.uf);


  var ruaC = sessionStorage.getItem('ruac');
  var numeroC = sessionStorage.getItem('numeroc');
  var bairroC = sessionStorage.getItem('bairroc');
  var cidadeC = sessionStorage.getItem('cityc');
  var ufC =  sessionStorage.getItem('ufc');
  var paisC = 'Brasil';


  var origin = Empresa.localizacao;

  var destination = ruaC + ', ' + numeroC +' - '+bairroC+ ' - '+cidadeC+' - '+ufC+', '+paisC+''; //endereço do cliente

  var googleMapsApiKey='AIzaSyCGU0PK5ks0K4jqqAZ6l2A6FKWUknklPkM';

         $scope.loggedin_id = localStorage.getItem('loggedin_id');

         var urlApiGP = 'https://topentregas.com.br/ionic/' + Empresa.Tipo;
         $timeout(function() {
         str= urlApiGP + "info.php?idUser=" + $scope.loggedin_id + "&origin=" + origin + "&destination=" + destination + "&chave=" + $chave;

         $http.get(str)
         .success(function(response){

          if(response==251){

            $ionicPopup.alert({cssClass: 'custom-class',
              title:'Informação',
              template:'Endereço fora do raio de cobertura!'
            });
            $state.go('produtos',[],{location:"replace",reload:true});
            stop;
            exit;
          }

          if ( $scope.idtel == 1 ){
              return;
          }

           if(response==true){

        $state.go('descricao-produto',[],{location:"replace",reload:true});

           }
        else{

             $ionicPopup.alert({cssClass: 'custom-class',
               title:'Informação',
               template: 'Endereço errado ou fora da area, Frete não calculado!'

             });
             $state.go('tab.main',[],{location:"replace",reload:true});

           }

         }).error(function(){

           $ionicPopup.alert({cssClass: 'custom-class',
             title:'Informação',
             template:'Endereço errado ou fora da area, Frete não calculado!'
           });
           $scope.buttonDisabled = false;

         })  }, 1000);
        }else{

          $ionicPopup.alert({cssClass: 'custom-class',
            title:'Informação',
            template:'Preencha todas as informações corretamente.'
          });
          $scope.buttonDisabled = false;

        }

};

 $("#preloader").fadeOut();
})

.controller('AppCtrl',function($scope,$ionicPopup,$http,$state,$ionicHistory, $timeout, $ionicPlatform, Empresa){
 //var url="http://localhost/MyApp/ionic/";

 $scope.Construcao = function(){
   $ionicPopup.alert({cssClass: 'custom-class',
     title:'Informação',
     template: 'Olá! Este recurso está em construção.'
    // template:'Não é possível gravar dados.'
   });
 }

 $scope.email = localStorage.getItem('nomeLogin');
 $scope.senha = localStorage.getItem('senhaLogin');

''
 var urlApi2 = 'https://topentregas.com.br/ionic/'; //online
   //Form do Login


   $scope.doLogin=function(){
     $scope.buttonDisabled = true;

     $("#preloader").fadeIn();

       $timeout(function() {

       var empresa =  Empresa.numero;
       var senha=$scope.senha;
       //var nome=$scope.loginData.nome;
       var email=$scope.email;

   // if( $scope.empresa  != '2' ){
   //  $ionicPopup.alert({cssClass: 'custom-class',
   //  title:'Informação',
   //  template:'Usuario ou Senha não existe!'
   //});
   //   return;
   // }

     if(email && senha){

         str=urlApi2+"APPDRIVER/login.php?email="+email+"&senha="+senha  ;

         $http.get(str)
           .success(function(response){

             if(response==5){
               $ionicPopup.alert({cssClass: 'custom-class',
                 title:'Informação',
                 template:'Motorista não cadastrado!'
               });
               $scope.buttonDisabled = false;
               return;
             }

             if(response==52){
               $ionicPopup.alert({cssClass: 'custom-class',
                 title:'Informação',
                 template:'Senha não existe!'
               });
               $scope.buttonDisabled = false;
               return;
             }

             if(response==2){
               $ionicPopup.alert({cssClass: 'custom-class',
                 title:'Informação',
                 template:'Email ou senha incorretos!'
               });
               $scope.buttonDisabled = false;
               return;
             }

             else{
             //essa pequena linha aqui embaixo é responsavel por me trazer os dados da api php
             //lembrar de atribuir um nome para ela, poor exemplo esta sendo usado "usuarios", mas poderia ser "admin"
             localStorage.setItem('nomeLogin', email);
             localStorage.setItem('senhaLogin', senha);

               $scope.users=response.records;
               sessionStorage.setItem('loggedin_status',true);
               sessionStorage.setItem('loggedin_id',$scope.users.id);
               sessionStorage.setItem('loggedin_email',$scope.users.email);
               sessionStorage.setItem('loggedin_senha',$scope.users.senha);
               sessionStorage.setItem('loggedin_status',$scope.users.nome);
               sessionStorage.setItem('loggedin_id_cat','');
               $scope.session = 3;
               sessionStorage.setItem('usuarioNiveisAcessoId',$scope.session);

               //local
               localStorage.setItem('loggedin_id',$scope.users.id);
               localStorage.setItem('loggedin_email',$scope.users.email);
               localStorage.setItem('loggedin_senha',$scope.users.senha);// posso pegar tanto pelo admin.senha(por que eu trago os dados por meio do $scope.admin=response.records)
               localStorage.setItem('loggedin_status',$scope.users.nome);// quanto pelo loginData.x por exemplo, que é como trago os dados da tela html respectiva do ionic
               localStorage.setItem('usuarioNiveisAcessoId',$scope.session);


               $ionicHistory.nextViewOptions({
                 disableAnimate:true,
                 disableBack:true
               })

               $ionicPopup.alert({cssClass: 'custom-class',

                 template:'Seja bem vindo!'
               })

               $state.go('tab.lista',{},{location:"replace",reload:true});}
           })
           .error(function(){

             $ionicPopup.alert({cssClass: 'custom-class',

               template:'Não foi possível fazer login. Por favor, verifique.'
             })
             $scope.buttonDisabled = false;
           });

     }else{
       $ionicPopup.alert({cssClass: 'custom-class',

         template:'Por favor, preencha todas as informações.'
       })
       $scope.buttonDisabled = false;

     }

   }, 1000);

// nova tentativa de realizar cadastro endereço ao logar
//TESTAR

$("#preloader").fadeOut();
   }

   $scope.VaiParaCadastro=function(){

     $state.go('tab.cadastrar',{},{location:"replace",reload:true});

   }
   //Fim form do login


   // Função de dar LogOut
   $scope.showSair = function() {
     var confirmPopup = $ionicPopup.confirm({
       cssClass: 'custom-class',
       title: 'Pergunta:',
       template: 'Tem certeza que deseja sair?'
     });

     confirmPopup.then(function(res) {
       if(res) {
         $scope.doLogout();
       } else {

       }
     });
   };

   $scope.doLogout=function(){

     sessionStorage.removeItem('loggedin_status');
     localStorage.removeItem('loggedin_status');
     localStorage.removeItem('loggedin_senha');
     localStorage.removeItem('loggedin_id');
     localStorage.removeItem('loggedin_email');
     sessionStorage.removeItem('Frete');
     sessionStorage.removeItem('cityc');
     sessionStorage.removeItem('bairroc');
     sessionStorage.removeItem('Verifica');
     sessionStorage.removeItem('usuarioNiveisAcessoId');
     sessionStorage.removeItem('numeroc');
     sessionStorage.removeItem('ruac');
     sessionStorage.removeItem('ufc');
     sessionStorage.removeItem('loggedin_id');
     sessionStorage.removeItem('loggedin_status');
     sessionStorage.removeItem('loggedin_email');
     sessionStorage.removeItem('loggedin_senha');
     sessionStorage.removeItem('loggedin_id_cat');
     sessionStorage.removeItem('loggedin_id_novidade');
     sessionStorage.removeItem('loggedin_nome_novidade');
     sessionStorage.removeItem('loggedin_desc_novidade');
     sessionStorage.removeItem('loggedin_imagens_novidade');
     sessionStorage.removeItem('loggedin_id_produto');
     sessionStorage.removeItem('loggedin_nome_produto');
     sessionStorage.removeItem('loggedin_desc_produto');
     sessionStorage.removeItem('loggedin_valor_produto');
     sessionStorage.removeItem('loggedin_promo_valor_produto');
     sessionStorage.removeItem('loggedin_imagens_produto');

     $ionicHistory.nextViewOptions({
       disableAnimate:true,
       disableBack:true
     })

     $ionicPopup.alert({cssClass: 'custom-class',

       template:'Até mais!'
     })

     $state.go('tab.login',{},{location:"replace",reload:true});

   };
   $("#preloader").fadeOut();
})

.controller('AdminCtrl',function($scope, $http, $state,$ionicPopup, $ionicHistory, Empresa){
 //var url="http://localhost/MyApp/ionic/";
''
 var urlApi1 = 'https://topentregas.com.br/ionic/showNovidades.php'; //online
 var urlApi2 = 'https://topentregas.com.br/ionic/'; //online

   $("#preloader").fadeIn();

   $ionicHistory.nextViewOptions({
     historyRoot: true
 });

   $scope.goBackHandler = function () {
     $ionicHistory.goBack(-1);
   }

 $scope.loggedin_id = localStorage.getItem('loggedin_id');

 var id_usuarios = $scope.loggedin_id;
 str= urlApi2 + "endereco-show.php?id_usuarios=" + id_usuarios + "&chave=" + $chave;

 $http.get(str).success(function(response){

   $scope.showEndereco=response.records;
   $("#preloader").fadeOut();
 })

  $scope.adminData={};
  $scope.loggedin_id = localStorage.getItem('loggedin_id');
   $scope.adminData.id = $scope.loggedin_id;

   $scope.hideon =function() {
     return function(scope, element, attrs) {
         scope.$watch(attrs.hideon, function(value, oldValue) {
             if(value) {
                 element.hide();
             } else {
                 element.hide();
             }
         }, true);
     }
 };

 $scope.createAdmin=function(){

   $scope.buttonDisabled = true;

     email = '';
     senha = 0;

   var nome = $scope.adminData.nome;
  // var usuario = $scope.adminData.usuario;
   var email = $scope.adminData.email;
   var senha = $scope.adminData.senha;
   var empresa = Empresa.numero;
   var senhaConfirm = $scope.adminData.confirmSenha;

//INSERT DE DADOS // preciso fazer o verificaUser para nao ter email duplicados mais tarde
//str= url + "verificaUser.php?email=" + email;
sessionStorage.setItem('loggedin_email',email);
sessionStorage.setItem('loggedin_senha',senha);

   if( nome && senha && email){
     if( senha == senhaConfirm){           //+ "&usuario=" + usuario
     str= urlApi2 + "admin-insert.php?nome=" + nome + "&senha=" + senha + "&email=" + email + "&empresa=" + empresa;

     $http.get(str)
     .success(function(response){

       if(response==true){

         $ionicPopup.alert({cssClass: 'custom-class',

           template:'Cadastrado com sucesso, por favor realize seu login.'
         });
         localStorage.setItem('nomeLogin', email);
         localStorage.setItem('senhaLogin', senha);
         $state.go('tab.login',[],{location:"replace",reload:true});

       }
       if(response==3){

         $ionicPopup.alert({cssClass: 'custom-class',

           template:'Email ja existente.'
         });
         $scope.buttonDisabled = false;
         $scope.adminData.usuario = '';

       }
       if(response==2){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Informação',
           template:'Email já existente.'
         });
         $scope.buttonDisabled = false;
         $scope.adminData.email = '';

       }
       if(response==32){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Informação',
           template:'Email ja existente..'
         });
         $scope.buttonDisabled = false;
         $scope.adminData.usuario = '';
         $scope.adminData.email = '';

       }
       if(response==false){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Informação',
           template:'Servidor Offline, por favor tente mais tarde.'
         });
         $scope.buttonDisabled = false;
         $state.go('tab.cadastrar',[],{location:"replace",reload:true});

       }


     }).error(function(){

       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Informação',
         template:'Servidor Offline, por favor tente mais tarde.'
       });
       $scope.buttonDisabled = false;

     })
   }else {
     $ionicPopup.alert({cssClass: 'custom-class',
       title:'Informação',
       template:'Senhas incorretas.'
     });
     $scope.buttonDisabled = false;
   }
   }else{

     $ionicPopup.alert({cssClass: 'custom-class',
       title:'Informação',
       template:'Por favor, preencha todas as informações corretamente.'
     });
     $scope.buttonDisabled = false;

   }
 };

 //$http.get(urlApi2+"admin-show.php").success(function(response){
 //  $scope.showAdmins=response.records;
// });
//editei aqui

 //$http.get(url+"admin-showedit.php?id="+$stateParams.users) // talvez esse stateParams.adminID me traga o id
 //.success(function(response){
 //  $scope.users=response.records;
 //})
//EDIT DE TELEFONE
$scope.editAdminCelular=function(){
 var id = $scope.adminData.id;
 var telefone = $scope.adminData.telefone;
 $scope.buttonDisabled = true;

 if( id && telefone){
   str= urlApi2 + "admin-edit-celular.php?telefone=" + telefone + "&id=" + id;

   $http.get(str)
   .success(function(response){
     if(response==5){

       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Informação',
         template:'Necessário adicionar o DDD ao seu celular! (11 numeros).'
       });
        $scope.idtel = 1;
       $scope.buttonDisabled = false;
       return;

     }else{ $scope.idtel = 0;  }

     if(response==true){
       $scope.buttonDisabled = false;
       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Sucesso!',
         template:'Nº de celular editado com sucesso'
       });
       $state.go('admin-edit',[],{location:"replace",reload:true});

     }else{
       $scope.buttonDisabled = false;
       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Erro!',
         template:'Algo deu errado, tente mais tarde!'
       });
       $state.go('admin-edit',[],{location:"replace",reload:true});

     }

   }).error(function(){
     $scope.buttonDisabled = false;
     $ionicPopup.alert({cssClass: 'custom-class',
       title:'Algo deu errado!',
       template:'Não é possível fazer o contato do servidor.'
     });

   })

 }else{
   $scope.buttonDisabled = false;
   $ionicPopup.alert({cssClass: 'custom-class',
     title:'Incompleto!',
     template:'Por favor, preencha todas as informações.'
   });

 }

};
// EDIT DE DADOS
 $scope.editAdmin=function(){
   var id = $scope.adminData.id;
   var nome = $scope.adminData.nome;
   $scope.buttonDisabled = true;

   if( id && nome){
     str= urlApi2 + "admin-edit.php?nome=" + nome + "&id=" + id;

     $http.get(str)
     .success(function(response){

       if(response==true){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Sucesso!',
           template:'Editado com sucesso'
         });
         localStorage.setItem('loggedin_status',nome);
         $state.go('admin-edit',[],{location:"replace",reload:true});

       }else{

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Erro!',
           template:'Algo deu errado, tente mais tarde!'
         });
         $state.go('admin-edit',[],{location:"replace",reload:true});

       }
     }).error(function(){
       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Algo deu errado!',
         template:'Não é possível fazer o contato do servidor.'
       });
     })
   }else{
     $ionicPopup.alert({cssClass: 'custom-class',
       title:'Incompleto!',
       template:'Por favor, preencha todas as informações.'
     });
   }
   $scope.buttonDisabled = false;
 };
 // EDIT DE desenha
 $scope.editAdminSenha=function(){
   $scope.buttonDisabled = true;
   var id = $scope.adminData.id;
   var senha = $scope.adminData.senha;
   var senhaconf = $scope.adminData.novasenha;

   if( id && senha){
     if( senhaconf == senha){
     str= urlApi2 + "alterar-senha.php?senha=" + "&senha=" + senha + "&id=" + id;
     $http.get(str)
     .success(function(response){

       if(response==true){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Sucesso!',
           template:'Editado com sucesso'
         });
         sessionStorage.setItem('loggedin_senha',senha);
         $state.go('tab.main',[],{location:"replace",reload:true});

       }else{
         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Erro!',
           template:'Algo deu errado, tente mais tarde!'
         });
         $state.go('alterar-senha',[],{location:"replace",reload:true});
       }

     }).error(function(){
       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Algo deu errado!',
         template:'Não é possível fazer o contato do servidor.'
       });
     })

   }else {      $ionicPopup.alert({cssClass: 'custom-class',
     title:'Incompleto!',
     template:'Senhas diferentes.'
   });}

   }else{
     $ionicPopup.alert({cssClass: 'custom-class',
       title:'Incompleto!',
       template:'Por favor, preencha todas as informações corretamente.'
     });
   }

 };
 $scope.buttonDisabled = false;
 $("#preloader").fadeOut();
})

.controller('menuCar', function($scope, $http, Empresa){
 var urlApi2 = 'https://topentregas.com.br/ionic/'; //online
 $scope.loggedin_id = localStorage.getItem('loggedin_id');
 var idUser = $scope.loggedin_id;

   str2= urlApi2 + "show-cart.php?idUser=" + idUser;
 $http.get(str2).success(function(response){
   $scope.showCart=response.records;
   if($scope.showCart==false){
     $scope.$evalAsync(function() {
   $scope.getClass = 'icon ion-ios-cart-outline';
 });
 }
 else{
   $scope.$evalAsync(function() {
     $scope.getClass = 'icon ion-ios-cart';
     $scope.getClass23 = 'animation';
   });

  // $scope.getClass = function(){
 //    $scope.t = 'icon ion-ios-cart';
  //   return $scope.t;
 //}
// $scope.getClass23 = function(){
 //  $scope.t = 'animation';
  // return $scope.t;
//}
}});
})
.controller('CategoriaCtrl',function($scope, $http, $state,$ionicPopup, Empresa, $ionicModal){
''
  // var url="http://localhost/MyApp/ionic/";

$scope.permissao = localStorage.getItem("Permissao");
if ($scope.permissao == 0) {

  $ionicPopup.alert({cssClass: 'custom-class',
  title:'Informação',
  template:'Necessário alterar para um endereço mais próximo do raio, ou solicitar ao Delivery Express para aumentar o raio de admissão.'
});

  $state.go('alterar-endereco',[],{location:"replace",reload:true});

}

  $ionicModal.fromTemplateUrl('my-modalHorario.html', {
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
 }).then(function(modal) {
    $scope.modalHorario = modal;
 });

 $scope.openmodalHorario = function() {
   $scope.modalHorario.show();
};

 $scope.closemodalHorario = function() {
  $scope.modalHorario.hide();
};
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modalHorario.remove();
 });

 // Execute action on hide modal
 $scope.$on('modalHorario.hidden', function() {
    // Execute action
 });

 // Execute action on remove modal
 $scope.$on('modalHorario.removed', function() {
    // Execute action
 });
//fim modal adicional

  var urlApi1 = 'https://topentregas.com.br/ionic/showNovidades.php'; //online
  var urlApi2 = 'https://topentregas.com.br/ionic/'; //online
//inicia aqui
$scope.adquirir = function(){

       $ionicPopup.alert({cssClass: 'custom-class',
          title:'Informação',
          template: '<b> Olá! Horários ainda serão configurados.  </b>'
         // template:'Não é possível gravar dados.'
        });

};

  if ( localStorage.getItem('loggedin_id') == '' || localStorage.getItem('loggedin_id') == null || localStorage.getItem('loggedin_id') == undefined ) { }
  else {
   var token = sessionStorage.getItem('token');
   var meuID = localStorage.getItem('loggedin_id');
  if (token == 'null' || token == null) { }
  else {
   str2= urlApi2 + "APPDRIVER/token.php?meuID=" + meuID + "&token=" + token;

   $http.get(str2).success(function(response){
    // $ionicPopup.alert({cssClass: 'custom-class',
   //  title:'Informação',
   //  template:'Token Registrado.' + token + meuID
  // });
 }).error(function(){
 //  $ionicPopup.alert({cssClass: 'custom-class',
 //    title:'Informação',
 //    template:'Token não registrado.'
  // });
 });
}
  }
  //termina aqui

   $("#preloader").fadeIn();

   sessionStorage.setItem("aoCarrinho", 3);
   sessionStorage.removeItem('Custom');
   sessionStorage.removeItem('moneyCustom');

  $scope.loggedin_id = localStorage.getItem('loggedin_id');

var idUser = localStorage.getItem('loggedin_id');

str2= urlApi2 + "show-cart.php?idUser=" + idUser + "&chave=" + $chave;

$http.get(str2).success(function(response){

 $scope.showCart=response.records;

   if ($scope.showCart.length == 0) {
     var ti = '1';
    sessionStorage.setItem('re',1);

 }else{
  sessionStorage.setItem('re',0);

 }

 });
 $scope.ter = sessionStorage.getItem('ter');

 var idEmpresa = Empresa.numero;
 //aqui eu faço o icone mudar (carrinho)
         str= urlApi2 + "verificaHora.php?idEmpresa=" + idEmpresa;

       $http.get(str)
       .success(function(response){
          $("#preloader").fadeOut();
         if(response==true){
        sessionStorage.setItem('Verifica',1);
         }
         else{
          sessionStorage.setItem('Verifica',0); // alterar aqui para 0, para voltar ao normal em questão de horário.
         }
       });
       sessionStorage.getItem('Verifica');

       $scope.mostraHor = function() {
           Atual = sessionStorage.getItem('Verifica');
           if(Atual == '0'){
            // return "<b class='red'>Fechado!</b> <b class='redXado'></b>";
            return "Fechado!"
           }
            if(Atual == '1'){
            // return "<b class='green'>Aberto!</b>"; // alterar aqui com o horário novamente(igual no fexados)  <b class='greenBerto'>12:00 - 18:00</b>
            return "Aberto!"
           }
       }

 $scope.Ircarrinho = function(){

   $state.go('tab.carrinho',{},{location:"replace",reload:false});
 };
 $scope.loggedin_id = localStorage.getItem('loggedin_id');
 var idUser = $scope.loggedin_id;

   str2= urlApi2 + "show-cart.php?idUser=" + idUser;
 $http.get(str2).success(function(response){
   $scope.showCart=response.records;
   if($scope.showCart==false){
 $scope.getClass = function(){
     $scope.t = 'icon ion-ios-cart-outline';
     return $scope.t;
 }}
 else{
   $scope.getClass = function(){
     $scope.t = 'icon ion-ios-cart';
     return $scope.t;
 }
 $scope.getClass23 = function(){
   $scope.t = 'animation';
   return $scope.t;
}
}});
// fim mudar icone
//tenho que puxar o id_veiculo do motorista
//

 $scope.CategoriaData={};
 var idEmpresa= Empresa.numero;

 $http.get(urlApi2+"JHONATAN_ENTREGAS/veiculo_vocacao.php?id_empresa=" + idEmpresa + "&chave=" + $chave).success(function(response){
   $scope.showCategorias=response.records;
 });

 $scope.pegarID=function(id, nome){
  sessionStorage.setItem('vocation', '');
   sessionStorage.setItem('loggedin_id_cat',id);
   sessionStorage.setItem('vocation',nome);

  var verificador = sessionStorage.getItem('Verifica');
   //sessionStorage.setItem('semOBS', semOBS);
   if( verificador == 0) {

    $ionicPopup.alert({cssClass: 'custom-class',
    title:'Informação',
    template: '<b> Olá! Estamos fechados neste momento! </b>'
   // template:'Não é possível gravar dados.'
  });

     exit;
     stop;
   }
   $state.go('produtos',{},{location:"replace",reload:true});
   }

//FUNÇÃO DE ACHAR PRODUTO / CATEGORIA

   //essa pequena linha aqui embaixo é responsavel por me trazer os dados da api php
   //lembrar de atribuir um nome para ela, poor exemplo esta sendo usado "usuarios", mas poderia ser "admin"

//FUNÇÃO DELETAR CATEGORIA
 $scope.delCategoria=function(id){

   if(id){
     str= urlApi2 + "categoria-del.php?id=" + id;
     $http.get(str)
     .success(function(response){

       if(response==true){

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Informação',
           template:'Categoria excluida.'
         });
         $state.go('tab.lista',[],{location:"replace",reload:true});

       }else{

         $ionicPopup.alert({cssClass: 'custom-class',
           title:'Informação',
           template:'Não é possível excluir dados.'
         });
         // era admin-admin
         $state.go('tab.lista-lista',[],{location:"replace",reload:true});

       }

     }).error(function(){

       $ionicPopup.alert({cssClass: 'custom-class',
         title:'Informação',
         template:'Não é possível fazer o contato do servidor.'
       });

     })

   }else{

     $ionicPopup.alert({cssClass: 'custom-class',
       title:'Informação',
       template:'Não pode excluir.'
     });
   }
 };
 $("#preloader").fadeOut();
})

.controller('NovidadeCtrl',function($scope, $http, $state, Empresa){

   $("#preloader").fadeIn();
$scope.nomeEmpresaFacilUp = Empresa.nomeUP;
$scope.nomeEmpresaFacildown = Empresa.nomeDown;

 //var url="http://localhost/MyApp/ionic/"; //local
 var urlApi2 = 'https://topentregas.com.br/ionic/'; //online
    ''

 //var url="https://topentregas.com.br/ionic/"
 $scope.CategoriaData={};
//CHAMADA HTTP MOSTRAR NOVIDADES
var idEmpresa= Empresa.numero;                                                        //
 $http.get(urlApi2 + "showNovidades.php?chave=" + $chave +"&idEmpresa="+ idEmpresa).success(function(response){
   $scope.showNovidades=response.records;
   $("#preloader").fadeOut();
 })

 //CHMADA HTTP

 //MOSTRAR DESCRICAO BY ID
 $scope.showDesc=function(id){

    // str= urlApi2 + "showNovidades.php?idEmpresa=" + idEmpresa + "&chave=" + $chave;
    // $http.get(str)
    // .success(function(response){

    //   if(response==true){

         $state.go('descricao-novidade',[],{location:"replace",reload:true});

     //  }else{

       //  $ionicPopup.alert({cssClass: 'custom-class',
       //    title:'Informação',
       //    template:'Algo deu errado.'
       //  });
         // era admin-admin
        // $state.go('descricao-novidade',[],{location:"replace",reload:true});
}
// estava mexendo aqui pra colocar as informações (id,descricao,nome etc) salvas em storage e tentar chamalas na proxima pagina ^~
$scope.pegarID=function(nome, id, descricao, imagens){
 sessionStorage.setItem('loggedin_nome_novidade',nome);
 sessionStorage.setItem('loggedin_id_novidade',id);
 sessionStorage.setItem('loggedin_desc_novidade',descricao);
 sessionStorage.setItem('loggedin_imagens_novidade',imagens);
 $state.go('descricao-novidade',{},{location:"replace",reload:true});  }

 $scope.loggedin_nome_novidade = sessionStorage.getItem('loggedin_nome_novidade');
 $scope.loggedin_id_novidade = sessionStorage.getItem('loggedin_id_novidade');
 $scope.loggedin_desc_novidade = sessionStorage.getItem('loggedin_desc_novidade');
 $scope.loggedin_imagens_novidade = sessionStorage.getItem('loggedin_imagens_novidade');
 $("#preloader").fadeOut();
})

.controller('StatusCtrl',function($ionicPlatform, $scope, $http, $state, $ionicPopup, Empresa, $sce){

    var urlApi2 = 'https://topentregas.com.br/ionic/'; //online

    ''

    chave = '''';

    var idEmpresa = Empresa.numero;
    var idUser = $scope.loggedin_id;

    if ( localStorage.getItem('loggedin_id') == '' || localStorage.getItem('loggedin_id') == null || localStorage.getItem('loggedin_id') == undefined ) { }
    else {
     var token = sessionStorage.getItem('token');
     var meuID = localStorage.getItem('loggedin_id');
    if (token == 'null' || token == null) { }
    else {
     str2= urlApi2 + "APPDRIVER/token.php?meuID=" + meuID + "&token=" + token;

     $http.get(str2).success(function(response){

   }).error(function(){

   });
  }
    }

     str= urlApi2 + "verificarRetirada.php?idEmpresa=" + idEmpresa + "&chave=" + $chave;

   $http.get(str)
   .success(function(response){
     $scope.retirada=response.records;

     for (var i = 0; i < $scope.retirada.length; i++) {
   $scope.endereco = $scope.retirada[i].endereco;
     }

     for (var i = 0; i < $scope.retirada.length; i++) {
      $scope.bairro = $scope.retirada[i].bairro;
        }

        for (var i = 0; i < $scope.retirada.length; i++) {
          $scope.cidade = $scope.retirada[i].cidade;
            }


    $scope.RuaEnderecoM = $scope.endereco ;
    $scope.BairroEnderecoM = $scope.bairro;
    $scope.CidadeEnderecoM = $scope.cidade;
   })


    // $scope.RuaEnderecoM = $scope.endereco ;
    // $scope.BairroEnderecoM = $scope.bairro;
    // $scope.CidadeEnderecoM = $scope.cidade;

$scope.PaisEnderecoM = Empresa.PaisEndereco;
$ionicPlatform.ready(function () {
 $("#preloader").fadeIn();
 $("#preloader").fadeOut();
});

 //  var idUser = localStorage.getItem('loggedin_id');
 // str10= urlApi2 + "endereco-verifica.php?idUser=" + idUser + "&chave=" + $chave;
 // $http.get(str10).success(function(response){
  //  $scope.showEnd=response.records;
 // })

 idEmpresa = Empresa.numero;


 $scope.aceitarCorrida = function(id){
   // $scope.buttonDisabled = true;
    var confirmPopup = $ionicPopup.confirm({
      cssClass: 'custom-class',
      title: 'Pergunta:',
      template: 'Tem certeza que deseja aceitar a corrida?'
    });
    confirmPopup.then(function(res) {
      if(res) {
        var idMotorista = localStorage.getItem('loggedin_id');
        str1= urlApi2 + "APPDRIVER/aceitarCorrida.php?id=" + id  + "&chave=" + chave + "&idMotorista=" + idMotorista;
        $http.get(str1).success(function(response){
          if(response==true){
            $ionicPopup.alert({cssClass: 'custom-class',
            title:'Informação',
            template: 'Corrida Aceita!'
          });
                str4= urlApi2 + "APPDRIVER/statusMotorista.php?idMotorista=" + idMotorista  + "&chave=" + chave;
                $http.get(str4).success(function(response){
                  if(response==true){ $state.go('tab.status',[],{location:"replace",reload:true});  } })}
          else{
            $ionicPopup.alert({cssClass: 'custom-class',
            title:'Informação',
            template: 'Redirecionado a outro motorista!'
          });
          $state.go('tab.status',[],{location:"replace",reload:true});
          }
        })
      } else {
      }
    });

 }
 $scope.finalizarCorrida = function(id){
  var confirmPopup = $ionicPopup.confirm({
    cssClass: 'custom-class',
    title: 'Pergunta:',
    template: 'Tem certeza que deseja finalizar a corrida?'
  });
  confirmPopup.then(function(res) {
    if(res) {
  var idMotorista = localStorage.getItem('loggedin_id');
  str2= urlApi2 + "APPDRIVER/finalizarCorrida.php?id=" + id  + "&chave=" + chave;
  $http.get(str2).success(function(response){
    if(response==true){
        $ionicPopup.alert({cssClass: 'custom-class',
        title:'Informação',
        template: 'Corrida Finalizada!'
      });
      str4= urlApi2 + "APPDRIVER/statusMotorista2.php?idMotorista=" + idMotorista  + "&chave=" + chave;
      $http.get(str4).success(function(response){
    if(response==true){ $state.go('tab.status',[],{location:"replace",reload:true}); }
      }) }else{
        $ionicPopup.alert({cssClass: 'custom-class',
        title:'Informação',
        template: 'Algo deu errado!'
      });   }})
    } else {
    }
  });
}
 str66= urlApi2 + "enterprise.php?idEmpresa=" + idEmpresa  + "&chave=" + chave;

 $http.get(str66).success(function(response){

   $scope.showEnterprise=response.records;

 })

   $scope.Construcao = function(){
     $ionicPopup.alert({cssClass: 'custom-class',
       title:'Informação',
       template: 'Olá! Este recurso está em construçao.'
      // template:'Não é possível gravar dados.'
     });
   }

 $scope.formatDate = function(date){
  // var dateOut = new Date(date);

//var dateOut = new Date(date).toISOString();

//var d = new Date(date.replace(' ', 'T'));
 //  return d;
   var d = new Date(date.replace(' ', 'T'));
   return d;

 //  var arr = date.split(/[-:]/);
//   d = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
//   var actiondate = new Date(d);
//   return actiondate;
 // var dateOut = new Date(date).toISOString();

  //return dateOut;
};

 $scope.loggedin_id = localStorage.getItem('loggedin_id');
 $scope.loggedin_status = localStorage.getItem('loggedin_status');
var idUser = $scope.loggedin_id;





 str= urlApi2 + "APPDRIVER/show_status.php?idUser=" + idUser + "&chave=" + $chave;

$http.get(str).success(function(response){
 $scope.showStatus=response.records;

 $scope.getidUsuarios = function(){
  var total = "";
  for (var i = $scope.showStatus.length - 1; i >= 0; i--) {
    total = ($scope.showStatus[i].id_usuarios); }
return total;
 }

 $scope.gettroco = function(){
  var total = "";
  for (var i = $scope.showStatus.length - 1; i >= 0; i--) {
    total = ($scope.showStatus[i].troco); }
return total;
 }


 $scope.getcidadeStatus = function(){
  var total = "";
  for (var i = $scope.showStatus.length - 1; i >= 0; i--) {
    total = ($scope.showStatus[i].cidade); }
return total;
 }

 $scope.getruaStatus = function(){
  var total = "";
  for (var i = $scope.showStatus.length - 1; i >= 0; i--) {
    total = ($scope.showStatus[i].rua); }
return total;
 }

 $scope.getnumeroStatus = function(){
  var total = "";
  for (var i = $scope.showStatus.length - 1; i >= 0; i--) {
    total = ($scope.showStatus[i].numero); }
return total;
 }

 $scope.getcidadeStatus = function(){
  var total = "";
  for (var i = $scope.showStatus.length - 1; i >= 0; i--) {
    total = ($scope.showStatus[i].cidade); }
return total;
 }

 var cidadeStatus = $scope.getcidadeStatus();
 var ruaStatus = $scope.getnumeroStatus();
 var numeroStatus = $scope.getruaStatus();

 $scope.end2 = 'https://www.google.com/maps/search/?api=1&query=' + ruaStatus + ', '+ numeroStatus +', '+ cidadeStatus;

    $id_usuarios = $scope.getidUsuarios();

    str= urlApi2 + "APPDRIVER/show_endereco_usuario.php?id_usuarios=" + $id_usuarios + "&chave=" + $chave;

    $http.get(str).success(function(response){
    $scope.showEndUsuario=response.records;
    // $("#preloader").fadeOut();

    $scope.getcidade = function(){
      var total = "";
      for (var i = $scope.showEndUsuario.length - 1; i >= 0; i--) {
        total = ($scope.showEndUsuario[i].cidade); }
    return total;
     }

     $scope.getrua = function(){
      var total = "";
      for (var i = $scope.showEndUsuario.length - 1; i >= 0; i--) {
        total = ($scope.showEndUsuario[i].rua); }
    return total;
     }

     $scope.getnumero = function(){
      var total = "";
      for (var i = $scope.showEndUsuario.length - 1; i >= 0; i--) {
        total = ($scope.showEndUsuario[i].numero); }
    return total;
     }

     $scope.getcidade = function(){
      var total = "";
      for (var i = $scope.showEndUsuario.length - 1; i >= 0; i--) {
        total = ($scope.showEndUsuario[i].cidade); }
    return total;
     }

     var cidade = $scope.getcidade();
     var rua = $scope.getrua();
     var numero = $scope.getnumero();
     var cidade = $scope.getcidade();


     $scope.end1 = 'https://www.google.com/maps/search/?api=1&query=' + rua + ', '+ numero +', '+ cidade;

   //$scope.end = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyDAl26O-yvj6mVKPfC-jDUD791Kmnjm-h8&origin=' + rua + ', '+ numero +', '+ cidade +', Brasil&destination='+ rua + ', '+ numero +', '+ cidade +', Brasil&mode=driving';

   //end = 'https://www.google.com/maps/directions?key=AIzaSyDAl26O-yvj6mVKPfC-jDUD791Kmnjm-h8&origin=' + rua + ', '+ numero +', '+ cidade +', Brasil&destination='+ rua + ', '+ numero +', '+ cidade +', Brasil&mode=driving';

   //$http.get(end).success(function(response){
   //  $scope.showURL=response.records;
    // $("#preloader").fadeOut();
    //console.log("" + $scope.showURL.url);
     //            })

    })



str= urlApi2 + "APPDRIVER/show_usuarios.php?idUser=" + $id_usuarios + "&chave=" + $chave;

$http.get(str).success(function(response){
 $scope.showUsuario=response.records;
// $("#preloader").fadeOut();
})



 $("#preloader").fadeOut();

})




 $scope.att = function(){
   if($scope.showStatus != ""){
   $state.go('tab.status',[],{location:"replace",reload:true});
   }
   else {
         $ionicPopup.alert({cssClass: 'custom-class',
            title:'Informação',
            template: 'Olá! ainda não tem nenhum pedido para atualizar.'
           // template:'Não é possível gravar dados.'
          });
   }
 };
 $("#preloader").fadeOut();
})


.controller('SobreNosCtrl', function($scope, $ionicHistory, Empresa){
 $scope.goBackHandler = function () {
   $ionicHistory.goBack(-1);
 }
})

.controller('salvaCustom', function($scope, Empresa){
 $scope.money = '';
 $scope.Custom = '';

 $scope.salvaCustom = function () {
   sessionStorage.setItem('moneyCustom', '');
 sessionStorage.setItem('Custom', $scope.Custom);
 sessionStorage.getItem('Custom');
 $scope.money = '';
 $scope.SalvaCustom =  sessionStorage.getItem('Custom');
 }

 $scope.salvaCustomValor = function () {
 sessionStorage.setItem('moneyCustom', $scope.money);
 sessionStorage.getItem('moneyCustom');

 $scope.moneyCustom = 0;
 $scope.moneyCustom =  sessionStorage.getItem('moneyCustom');
 }
})

.controller('validador', function($scope, Empresa){ $scope.Custom = ''; $scope.money =  '';  })


